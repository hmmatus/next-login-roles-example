"use client"
import { service } from "@/axios/config";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const onLogout = () => {
    service.delete('/api/admin/auth/logout');
    router.replace('/admin/login');
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
