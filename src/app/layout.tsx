'use client';
import { Kumbh_Sans } from 'next/font/google';

import { GlobalStyle } from 'app/GlobalStyle';
import Header from 'components/Header';
import StyledComponentsRegistry from 'registry';
import { ThemeProvider } from 'styled-components';

const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  weight: '400'
});

// export const metadata = {
//   title: 'Ecommerce',
//   description: 'project from front end mentor'
// }

interface ThemeProps {
  primary: {
    base: string;
    secondary: string;
  };
  neutral: {
    veryDarkBlue: string;
    darkGrayshBlue: string;
    grayshBlue: any;
    lightGrayshBlue: string;
    white: string;
    black: string;
  };
  fontSize: string;
  fontFamily: string;
  weights: {
    normal: number;
    bold: number;
  };
}

const theme: ThemeProps = {
  primary: {
    // Orange
    base: 'hsl(26, 100%, 55%)',
    // Pale Orange
    secondary: 'hsl(25, 100%, 94%)'
  },
  neutral: {
    veryDarkBlue: 'hsl(220, 13%, 13%)',
    darkGrayshBlue: 'hsl(219, 9%, 45%)',
    grayshBlue: 'hsl(220, 14%, 75%)',
    lightGrayshBlue: 'hsl(223, 64%, 98%)',
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(0, 0%, 0%)'
  },
  fontSize: '16px',
  fontFamily: 'Kumbh Sans',
  weights: {
    normal: 400,
    bold: 700
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="pt-br">
      <body className={kumbhSans.className}>
        <ThemeProvider theme={theme}>
          <Header />
          <GlobalStyle />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
