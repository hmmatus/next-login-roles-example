import { cookies } from "next/headers";
export function DELETE() {
  const token = cookies().get('jwt');
  if (token) {
    cookies().delete('jwt')
    return new Response(JSON.stringify({ message: 'Logged out' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  }
}