import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    href?: string;
}

export function Button({ children, variant = 'primary', href, className = '', ...props }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const variants = {
        primary: "bg-primary text-black hover:opacity-90 focus:ring-primary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
        secondary: "bg-secondary text-white hover:opacity-90 focus:ring-secondary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-black focus:ring-primary",
        ghost: "text-primary hover:bg-primary/10 focus:ring-primary",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
