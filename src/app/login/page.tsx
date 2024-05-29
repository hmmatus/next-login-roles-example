'use client';
import { service } from '@/axios/config';
import LoginForm from '@/components/layouts/loginForm/LoginForm';

export default function Login() {
  const handleSubmit = async (data: { email: string; password: string }) => {
    try {
      const result = await service.post('/api/auth/login', data);
      return result;
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error)
    }
  };
  return (
    <main>
      <LoginForm onSubmit={handleSubmit} />
    </main>
  );
}
