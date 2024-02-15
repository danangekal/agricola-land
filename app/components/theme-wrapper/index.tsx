import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@/app/lib/theme';

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
