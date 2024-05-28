interface LoginFormProps {
  onSubmit: (data: {email: string, password: string}) => void;

}
export default function LoginForm({onSubmit}: LoginFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string; 
    const password = data.get('password') as string; 
    onSubmit({email, password});
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />
      <button type="submit">Login</button>
    </form>
  )
}