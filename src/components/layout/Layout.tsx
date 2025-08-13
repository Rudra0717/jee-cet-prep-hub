import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
      {children}
    </main>
  );
};

export default Layout; 