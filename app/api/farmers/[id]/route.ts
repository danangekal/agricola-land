import { NextRequest, NextResponse } from 'next/server';

import { getFarmer } from '@/app/farmers/action';

export async function GET(
  _request: NextRequest,
  { params: { id } }: { params: { id: string } },
) {
  const farmer = await getFarmer(Number(id));

  if (farmer?.id) {
    return NextResponse.json(farmer);
  } else {
    return null;
  }
}
