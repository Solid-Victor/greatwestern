"use client";

import { ReactNode, useState } from 'react';
import { usePathname } from 'next/navigation';
import FloatingNav from '@/components/ui/FloatingNavbar';
import { navItems } from '@/data';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() ?? '/';

  return (
    <>
      <FloatingNav navItems={navItems} />
      {children}
    </>
  );
} 