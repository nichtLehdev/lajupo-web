import { auth } from "@clerk/nextjs/server";

export async function GET() {
  const { userId } = await auth();

  return userId
    ? new Response(null, { status: 200 }) // OK
    : new Response("Unauthorized", { status: 401 }); // Block
}
