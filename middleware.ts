import { NextResponse } from 'next/server';
import * as Sentry from "@sentry/nextjs";

export function middleware(request) {
  try {
    // Your middleware logic here
    return NextResponse.next();
  } catch (error) {
    // Use captureException instead of captureRequestError
    Sentry.captureException(error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 