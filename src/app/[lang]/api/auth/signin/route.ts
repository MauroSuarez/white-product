import { NextResponse } from 'next/server'

export async function GET (request: Request, { params }: { params: any }) {
  return NextResponse.json({ status: 'ok' });
}