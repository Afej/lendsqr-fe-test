import { useMutation } from '@tanstack/react-query';
import { loginService } from '../services/auth';
import { LoginFormData } from '../types/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return useMutation({
    mutationFn: (data: LoginFormData) => loginService(data),
    onSuccess: (data) => {
      login(data.token);
      toast.success('Login successful!');
      navigate('/dashboard');
    },
    onError: (error) => {
      toast.error(error instanceof Error ? error.message : 'Login failed');
    }
  });
};