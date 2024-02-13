'use server';
import { cookies } from 'next/headers';

import Strings from './strings';
import { Credential } from './types';

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
