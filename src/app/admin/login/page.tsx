"use client"
import { service } from '@/axios/config';
import LoginForm from '@/components/layouts/loginForm/LoginForm';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const navigation = useRouter();
  const handleSubmit = async (data: { email: string; password: string }) => {
    try {
      await service.post('/api/admin/auth/login', data);
      navigation.push('/admin/dashboard');
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
