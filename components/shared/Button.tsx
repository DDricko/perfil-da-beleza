import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline';

type LinkButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type NativeButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkButtonProps | NativeButtonProps;

function isExternalHref(href: string) {
  return /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(href);
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
    const { rel, target, ...anchorProps } =
      props as AnchorHTMLAttributes<HTMLAnchorElement>;
    const resolvedTarget = target ?? (isExternalHref(href) ? '_blank' : undefined);
    const resolvedRel =
      rel ?? (resolvedTarget === '_blank' ? 'noopener noreferrer' : undefined);

    return (
      <a
        href={href}
        target={resolvedTarget}
        rel={resolvedRel}
        className={`${base} ${variants[variant]} ${className}`}
        {...anchorProps}
      >
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
