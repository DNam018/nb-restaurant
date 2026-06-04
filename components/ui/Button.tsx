'use client';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed rounded-full';
    const variants = {
      primary: 'bg-[#C9A86A] text-white hover:bg-[#b8965a] active:scale-95',
      secondary: 'bg-white text-[#171717] hover:bg-[#FAF7F2] active:scale-95',
      outline: 'border border-white text-white hover:bg-white hover:text-[#171717] active:scale-95',
      ghost: 'text-[#C9A86A] hover:text-[#b8965a]',
    };
    const sizes = {
      sm: 'px-5 py-2 text-sm',
      md: 'px-7 py-3 text-sm',
      lg: 'px-9 py-4 text-base',
    };
    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
