import RecoilProvider from '@/components/RecoilProvider';
import './globals.css';

import { Inter } from 'next/font/google';
import { SidebarDemo } from '@/components/SidebarDemo';
 // Import the RecoilProvider

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Smart Building App',
  description: 'A Next.js smart building management app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilProvider>
          <SidebarDemo>
            {children}
          </SidebarDemo>
        </RecoilProvider>
      </body>
    </html>
  );
}
