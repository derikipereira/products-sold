import { ReactNode } from 'react'
import Menu from './components/menu'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
        <Menu />
        {children}
    </div>
  )
}
