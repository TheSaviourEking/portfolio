import { cva } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const buttonClasses = cva(
    ['w-[200px]', 'border', 'h-[52px]', 'rounded-[96px]'],
    {
        variants: {
            variant: {
                primary: 'bg-primary',
                secondary: ''
            },
            size: {
                sm: 'bg-black',
                md: '',
                lg: ''
            },
            defaultVariants: {
                variant: 'primary',
                size: 'md'
            }
        }
    }
)

const Button = ({ className, children, variant = 'primary', size = 'md', ...otherProps }: { className?: string, children: string, variant?: 'primary' | 'secondary', size?: 'sm' | 'md' | 'lg' } & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={buttonClasses({ variant, className, size })} {...otherProps}>{children}</button>
    )
}

export default Button