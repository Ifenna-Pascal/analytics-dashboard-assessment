'use client';

import * as React from 'react';

import { Sidebar, SidebarHeader } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type AppSidebarProps = {} & React.ComponentProps<typeof Sidebar>;

export function AppSidebar({ className, ...props }: AppSidebarProps) {
  return (
    <Sidebar variant="inset" className={cn('border-none w-[250px] bg-white', className)} {...props}>
      <SidebarHeader>
        <div className="relative flex items-center justify-center gap-2 px-3 py-2">
          <Link href={'/'}>LOGO</Link>
        </div>
      </SidebarHeader>
    </Sidebar>
  );
}
