import { NextRequest, NextResponse } from 'next/server';

import { getFarmerList } from '@/app/farmers/action';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  const farmers = await getFarmerList(Number(page));

  if (farmers) {
    return NextResponse.json(farmers);
  } else {
    return null;
  }
}
