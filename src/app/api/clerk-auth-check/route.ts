import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const auth = getAuth(req);

  console.log("DEBUG Clerk Auth:", {
    userId: auth.userId,
    sessionId: auth.sessionId,
    orgId: auth.orgId,
    cookie: req.headers.get("cookie")?.slice(0, 100) || "(none)",
  });

  if (auth.userId) {
    return new Response(null, { status: 200 });
  }

  return new Response("Unauthorized", { status: 401 });
}
