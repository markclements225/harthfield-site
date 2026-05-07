import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer uppercase tracking-wider text-sm';

  const variantStyles = {
    primary: 'bg-sage text-white hover:bg-charcoal hover:shadow-lg',
    secondary: 'bg-white text-charcoal border border-clay hover:border-charcoal hover:shadow-lg',
  };

  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
