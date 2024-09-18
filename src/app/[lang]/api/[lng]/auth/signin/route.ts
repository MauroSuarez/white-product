import { NextResponse } from 'next/server'

export async function GET (request: Request, { params }: { params: any }) {
  console.log(params, 'DESDE SIGNIN')
  return NextResponse.json({ status: 'ok' });
}