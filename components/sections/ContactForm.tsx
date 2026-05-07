'use client';

import { useState, FormEvent } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    propertyAddress: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
      }

      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        propertyAddress: '',
      });
    } catch (error) {
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  if (formStatus === 'success') {
    return (
      <div className="bg-limestone border border-clay p-8 text-center">
        <h3 className="text-2xl font-serif font-medium mb-2 text-charcoal">Thank you for reaching out</h3>
        <p className="text-charcoal mb-6">We'll get back to you shortly.</p>
        <Button onClick={() => setFormStatus('idle')} variant="secondary">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
        />
        <Input
          label="Last Name"
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          required
        />
      </div>

      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <Input
        label="Phone"
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />

      <Input
        label="Property Address"
        type="text"
        value={formData.propertyAddress}
        onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
        placeholder="If you have a specific property in mind"
      />

      <Textarea
        label="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        rows={6}
        required
      />

      {formStatus === 'error' && (
        <div className="bg-limestone border border-sage text-charcoal p-4">
          {errorMessage}
        </div>
      )}

      <Button
        type="submit"
        fullWidth
        disabled={formStatus === 'submitting'}
      >
        {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
