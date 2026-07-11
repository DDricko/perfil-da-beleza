import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition-colors';
  const variants = {
    primary: 'bg-[#5E2D53] text-white hover:bg-[#4A2043]',
    outline:
      'border border-[#5E2D53] text-[#5E2D53] hover:bg-[#5E2D53] hover:text-white',
  };

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
