import React, { useState } from 'react'
import styles from './input.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  type = 'text',
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'

  const inputClassName = [styles.input, error && styles.error, className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={styles.inputContainer}>
      {label && <label>{label}</label>}

      {isPassword ? (
        <div className={styles.passwordInputWrapper}>
          <input
            {...props}
            type={showPassword ? 'text' : 'password'}
            className={inputClassName}
          />
          <button
            type='button'
            className={styles.showPassword}
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      ) : (
        <input {...props} type={type} className={inputClassName} />
      )}

      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  )
}
