import { ReactNode } from 'react';
import { Metadata } from 'next';

import Strings from '@/app/farmers/strings';

export const metadata: Metadata = {
  title: `${Strings.title_add} - ${Strings.title_app}`,
  description: Strings.desc_add,
};

export default function AddFarmerLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
