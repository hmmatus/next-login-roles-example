'use client';
import LoginForm from '@/components/layouts/loginForm/LoginForm';
import Axios from 'axios';

export default function Login() {
  const handleSubmit = (data: { email: string; password: string }) => {
    Axios.post('/api/auth/login', data);
  };
  return (
    <main>
      <LoginForm onSubmit={handleSubmit} />
    </main>
  );
}
