import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, required, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-charcoal mb-2"
          >
            {label}
            {required && <span className="text-sage ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full px-4 py-3 border border-clay bg-white focus:border-sage focus:outline-none transition-colors text-charcoal ${
            error ? 'border-sage' : ''
          } ${className}`}
          required={required}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-sage">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
