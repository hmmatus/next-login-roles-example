import LoginForm from '@/components/layouts/loginForm/LoginForm';
import Axios from 'axios';

export default function AdminLoginPage() {
  const handleSubmit = (data: { email: string; password: string }) => {
    Axios.post('/api/admin/auth/login', data);
  };
  return (
    <main>
      <LoginForm onSubmit={handleSubmit} />
    </main>
  );
}
