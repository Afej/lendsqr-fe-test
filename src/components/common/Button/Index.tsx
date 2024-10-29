import React from 'react'
import './button.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  color?: string
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  color,
  isLoading = false,
  className = '',
  style = {},
  disabled = false,
  ...props
}) => {
  const buttonClasses = [
    'button',
    variant,
    isLoading ? 'loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const buttonStyle =
    variant === 'outline' && color
      ? { ...style, color, borderColor: color }
      : style

  return (
    <button
      className={buttonClasses}
      style={buttonStyle}
      disabled={isLoading || disabled}
      {...props}>
      <span className='button-text'>{children}</span>
      {isLoading && <span className='spinner' />}
    </button>
  )
}
