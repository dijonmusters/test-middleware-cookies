import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("running middleware");
  const res = NextResponse.next();
  res.headers.append(
    "Set-Cookie",
    "set-cookie-from-middleware-res=only-available-on-refresh"
  );
  res.headers.append(
    "Cookie",
    "cookie-from-middleware-res=only-available-on-refresh"
  );
  return res;
}
