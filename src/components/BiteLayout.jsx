import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Home, BarChart2, PlusCircle, Folder, Settings } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function BiteLayout() {
  const { user, loading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !user) {
      navigate('/bite')
    }
  }, [user, loading, navigate])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    )
  }

  if (!user) {
    return <Outlet />
  }

  const navItems = [
    { path: '/bite/dashboard', icon: Home, label: 'Home' },
    { path: '/bite/reports', icon: BarChart2, label: 'Reports' },
    { path: '/bite/add', icon: PlusCircle, label: 'Add', center: true },
    { path: '/bite/categories', icon: Folder, label: 'Categories' },
    { path: '/bite/settings', icon: Settings, label: 'Settings' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="pb-20">
        <Outlet />
      </div>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-40">
        <div className="flex justify-around items-center h-16 max-w-md mx-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`
              }
            >
              <item.icon className={`h-5 w-5 ${item.center ? 'text-primary' : ''}`} />
              <span className="text-xs mt-1">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}