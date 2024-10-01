import { Inter } from 'next/font/google';
import './globals.css';
import { SidebarDemo } from '@/components/SidebarDemo'; // Assuming SidebarDemo is in /components

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Smart Building App',
  description: 'A Next.js smart building management app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <SidebarDemo>
          {children} {/* Pages will be rendered inside the layout with the sidebar */}
        </SidebarDemo>
      </body>
    </html>
  );
}
