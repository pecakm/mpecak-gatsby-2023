import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  title?: string;
  isHomePage?: boolean;
}

export interface PageWrapperProps {
  isHomePage: boolean;
}
