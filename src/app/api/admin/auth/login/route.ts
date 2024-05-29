// * Routes must be named using route.ts and add dirs according of the name of the route
import jwt from "jsonwebtoken"
import { cookies } from 'next/headers'

export async function POST(req: Request, res: Response) {
  const { email, password } = await req.json();
  // Hardcoded login admin
  if (email === 'admin@gmail.com' && password === 'admin') {
    const token = jwt.sign({email, password, expiration: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30}, 'secret')
    cookies().set('jwt', token, {secure: process.env.NODE_ENV === 'production', httpOnly: true, sameSite: 'strict'})
    return new Response(JSON.stringify({message: 'Logged in'}), {status: 200, headers: {'Content-Type': 'application/json'}})
  }
  return new Response(JSON.stringify({message: 'Invalid credentials'}), {status: 401, headers: {'Content-Type': 'application/json'}})
}