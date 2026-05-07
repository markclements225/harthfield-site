'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function AuthPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        // Redirect to home page on success
        router.push('/');
        router.refresh();
      } else {
        setError('Incorrect password. Please try again.');
        setPassword('');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-soft-white flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-medium text-charcoal mb-4">
            Harthfield Holdings
          </h1>
          <p className="text-charcoal">
            This site is currently private. Please enter the password to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg">
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            autoFocus
          />

          {error && (
            <div className="mt-4 text-sm text-sage">
              {error}
            </div>
          )}

          <div className="mt-6">
            <Button type="submit" fullWidth disabled={loading}>
              {loading ? 'Checking...' : 'Continue'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
