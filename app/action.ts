'use server';
import { cookies } from 'next/headers';

import { FarmerDto } from './farmers/types';
import Strings from './strings';
import { Credential } from './types';
import { revalidatePath } from 'next/cache';

const baseUrl = process.env.API_URL;
const username = process.env.NEXT_PUBLIC_USERNAME;
const password = process.env.NEXT_PUBLIC_PASSWORD;
const urlFarmer = `${baseUrl}/farmers`;
const headers = {
  Authorization: `Basic ${btoa(`${username}:${password}`)}`,
  'Content-type': 'application/json',
};

export async function setCookiesCredential(value: Credential) {
  const valueStr = JSON.stringify(value);
  const valueEncode = btoa(valueStr);

  cookies().set({
    name: Strings.key_credential_persist,
    value: valueEncode,
    path: '/',
  });
}

export async function hasCookiesCredential() {
  return cookies().has(Strings.key_credential_persist);
}

export async function getCookiesCredential() {
  const value =
    (await cookies().get(Strings.key_credential_persist)?.value) || '';
  const valueDecode = atob(value);
  const valueParse = valueDecode ? JSON.parse(valueDecode) : '';

  return valueParse;
}

export async function deleteCookiesCredential() {
  cookies().delete(Strings.key_credential_persist);
}

export async function createFarmer(values: FarmerDto) {
  try {
    // fetch to API
    const res = await fetch(urlFarmer, {
      method: 'POST',
      body: JSON.stringify(values),
      headers,
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  } catch (e) {
    throw new Error('Failed to create farmer');
  }

  revalidatePath('/farmers');
}

export async function updateFarmer(id: string, values: FarmerDto) {
  try {
    // fetch to API
    const res = await fetch(`${urlFarmer}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers,
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  } catch (e) {
    throw new Error('Failed to update farmer');
  }

  revalidatePath('/farmers');
}

export async function deleteFarmer(id: number) {
  try {
    // get to API
    const res = await fetch(`${urlFarmer}/${id}`, {
      method: 'DELETE',
      headers,
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  } catch (e) {
    throw new Error('Failed to delete farmer');
  }

  revalidatePath('/farmers');
}

export async function getFarmer(id: number) {
  try {
    // fetch to API
    const res = await fetch(`${urlFarmer}/${id}`);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (e) {
    throw new Error('Failed to get farmer');
  }
}

export async function getFarmerList(page: number) {
  try {
    // fetch to API
    const limit = 10;
    const offset = page * limit - limit;
    const params = `offset=${offset}&limit=${limit}`;
    const res = await fetch(`${urlFarmer}?${params}`);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (e) {
    throw new Error('Failed to get farmer list');
  }
}
