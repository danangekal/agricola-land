/* eslint-disable react-hooks/rules-of-hooks */
'use server';
import { revalidatePath } from 'next/cache';

import { Farmer, FarmerDto } from './types';

const baseUrl = process.env.API_URL;
const username = process.env.NEXT_PUBLIC_USERNAME;
const password = process.env.NEXT_PUBLIC_PASSWORD;
const urlFarmer = `${baseUrl}/farmers`;
const headers = {
  Authorization: `Basic ${btoa(`${username}:${password}`)}`,
  'Content-type': 'application/json',
};

export async function createFarmer(values: FarmerDto) {
  try {
    const res = await fetch(urlFarmer, {
      method: 'POST',
      body: JSON.stringify(values),
      headers,
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  } catch (e) {
    throw new Error('Failed to create farmer');
  }

  revalidatePath('/farmers');
}

export async function updateFarmer(id: string, values: FarmerDto) {
  try {
    const res = await fetch(`${urlFarmer}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers,
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  } catch (e) {
    throw new Error('Failed to update farmer');
  }

  revalidatePath('/farmers');
}

export async function deleteFarmer(id: number) {
  try {
    const res = await fetch(`${urlFarmer}/${id}`, {
      method: 'DELETE',
      headers,
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  } catch (e) {
    throw new Error('Failed to delete farmer');
  }

  revalidatePath('/farmers');
}

export async function getFarmer(id: number) {
  const fetchData = async () => {
    try {
      const res = await fetch(`${urlFarmer}/${id}`, {
        next: { revalidate: 0 },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      return res.json();
    } catch (e) {
      throw new Error('Failed to get farmer');
    }
  };

  const data: Farmer = await fetchData();

  if (data?.id) {
    return data;
  } else {
    return null;
  }
}

export async function getFarmerList(page: number) {
  const fetchData = async (page: number) => {
    try {
      const limit = 10;
      const offset = page * limit - limit;
      const params = `offset=${offset}&limit=${limit}`;
      const res = await fetch(`${urlFarmer}?${params}`, {
        next: { revalidate: 0 },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      return res.json();
    } catch (e) {
      throw new Error('Failed to get farmer list');
    }
  };

  const { farmers } = await fetchData(page);

  if (farmers?.length > 0) {
    return farmers;
  } else {
    return null;
  }
}
