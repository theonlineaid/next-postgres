// app/api/check/route.ts

import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const token = {
    "Hello": "test api"
  };

  console.log(token); // Log the token to the server console

  // Return the token as a JSON response
  return NextResponse.json(token);
}
