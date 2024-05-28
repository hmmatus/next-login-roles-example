"use client"
import LoginForm from "@/components/layouts/loginForm/LoginForm";

export default function Login() {
  return (
    <main>
      <LoginForm onSubmit={(data) => console.log(data)} />
    </main>
  )
}