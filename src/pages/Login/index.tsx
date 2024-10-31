import { useState } from 'react'
import { z } from 'zod'
import { loginSchema, type LoginFormData } from '@/types/auth'
import { Input } from '@/components/common/Input'
import { useLogin } from '@/hooks/useLogin'
import { MOCK_USER } from '@/constants'

import styles from './login.module.scss'

import logo from '@/assets/images/logo.svg'
import loginHero from '@/assets/images/login-hero.png'
import { Button } from '@/components/common/Button/Index'

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<Partial<LoginFormData>>({})
  const loginMutation = useLogin()

  const validateForm = () => {
    try {
      loginSchema.parse(formData)
      setErrors({})
      return true
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.reduce(
          (acc, curr) => ({
            ...acc,
            [curr.path[0]]: curr.message,
          }),
          {}
        )
        setErrors(formattedErrors)
      }
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      loginMutation.mutate(formData)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className={styles['login-container']}>
      <div className={styles['login-hero']}>
        <div className={styles['login-logo']}>
          <img src={logo} alt='Lendsqr logo' />
        </div>

        <div className={styles['login-illustration']}>
          <img src={loginHero} alt='Welcome illustration' />
        </div>
      </div>

      <div className={styles['login-form-container']}>
        <div className={styles['login-logo']}>
          <img src={logo} alt='Lendsqr logo' />
        </div>

        <form className={styles['login-form']} onSubmit={handleSubmit}>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <div className={styles['login-mock-details']}>
            <p>{`Email : ${MOCK_USER.email}`}</p>
            <p>{`Password : ${MOCK_USER.password}`}</p>
          </div>

          <div className={styles['login-input-group']}>
            <Input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>

          <div className={styles['login-input-group']}>
            <Input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
          </div>

          <a href='#' className={styles['login-forgot-password']}>
            FORGOT PASSWORD?
          </a>

          <Button type='submit' isLoading={loginMutation.isLoading}>
            LOG IN
          </Button>
        </form>
      </div>
    </main>
  )
}

export default Login
