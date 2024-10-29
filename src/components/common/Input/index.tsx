import React, { useState } from 'react'
import './input.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  type = 'text',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'

  return (
    <div className='input-container'>
      {label && <label>{label}</label>}
      {isPassword ? (
        <div className='password-input-wrapper'>
          <input
            {...props}
            type={showPassword ? 'text' : 'password'}
            className={`input ${error ? 'error' : ''}`}
          />
          <button
            type='button'
            className='show-password'
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      ) : (
        <input
          {...props}
          type={type}
          className={`input ${error ? 'error' : ''}`}
        />
      )}
      {error && <span className='error-message'>{error}</span>}
    </div>
  )
}
