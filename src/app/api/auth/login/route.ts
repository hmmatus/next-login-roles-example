// * Routes must be named using route.ts and add dirs according of the name of the route
export async function POST(req: Request) {
  return Response.json({ message: 'Login successful'});
}