import { Outlet, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Layout() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  useEffect(() => {
    setMobileMenuOpen(false)
    setSolutionsOpen(false)
    setCompanyOpen(false)
    setProductsOpen(false)
  }, [location])

  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/50 backdrop-blur-sm">
        <nav className="container-custom">
          <div className="flex h-14 sm:h-16 md:h-18 lg:h-20 items-center justify-between">
            <Link to="/" className="relative z-50 flex items-center group flex-shrink-0">
              <img src="/zorvynfulllogolight.png" alt="Zorvyn" className="h-7 sm:h-8 md:h-9 lg:h-10 transition-transform duration-200 group-hover:scale-105" />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <Link to="/" className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive('/') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                Home
                {isActive('/') && <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />}
              </Link>

              <div className="relative">
                <div className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer text-muted-foreground hover:text-foreground">
                  <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                </div>
                <div className="absolute top-full left-0 mt-2 w-48 py-2 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible">
                  <Link to="/solutions/startups" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-border/50">Startups</Link>
                  <Link to="/solutions/smes" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-border/50">SMEs</Link>
                  <Link to="/solutions/enterprises" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-border/50">Enterprises</Link>
                </div>
              </div>

              <Link to="/features" className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive('/features') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                Features
                {isActive('/features') && <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />}
              </Link>

              <Link to="/pricing" className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive('/pricing') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                Pricing
                {isActive('/pricing') && <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />}
              </Link>

              <div className="relative group">
                <div className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer text-muted-foreground hover:text-foreground">
                  <Link to="/about" className="hover:text-primary transition-colors">Company</Link>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                </div>
                <div className="absolute top-full left-0 mt-2 w-48 py-2 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible">
                  <Link to="/about" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-border/50">About Us</Link>
                  <Link to="/contact" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-border/50">Contact</Link>
                  <Link to="/faq" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-border/50">FAQ</Link>
                </div>
              </div>

              <div className="relative group">
                <div className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer text-muted-foreground hover:text-foreground">
                  <Link to="/products/ledger" className="hover:text-primary transition-colors">Products</Link>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                </div>
                <div className="absolute top-full left-0 mt-2 w-56 py-2 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible">
                  <Link to="/products/ledger" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-border/50">Ledger</Link>
                  <Link to="/products/insight" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-border/50">Insight</Link>
                  <Link to="/products/comply" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-border/50">Comply</Link>
                  <div className="my-1 border-t border-border" />
                  <Link to="/bite" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-border/50">
                    Bite <span className="text-xs text-primary ml-1">(Beta)</span>
                  </Link>
                </div>
              </div>

              <Link to="/security" className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive('/security') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                Security
                {isActive('/security') && <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />}
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link to="/contact" className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</Link>
              <Link to="/contact" className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">Get Started</Link>
            </div>

            <button className="lg:hidden relative z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container-custom py-4 space-y-2">
              <Link to="/" className="block px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-border/50">Home</Link>
              <div className="space-y-1">
                <div className="flex items-center justify-between px-4 py-2" onClick={() => setSolutionsOpen(!solutionsOpen)}>
                  <span className="text-sm font-medium text-muted-foreground">Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </div>
                {solutionsOpen && (
                  <div className="pl-4 space-y-1">
                    <Link to="/solutions/startups" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">Startups</Link>
                    <Link to="/solutions/smes" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">SMEs</Link>
                    <Link to="/solutions/enterprises" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">Enterprises</Link>
                  </div>
                )}
              </div>
              <Link to="/features" className="block px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-border/50">Features</Link>
              <Link to="/pricing" className="block px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-border/50">Pricing</Link>
              <div className="space-y-1">
                <div className="flex items-center justify-between px-4 py-2" onClick={() => setCompanyOpen(!companyOpen)}>
                  <span className="text-sm font-medium text-muted-foreground">Company</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
                </div>
                {companyOpen && (
                  <div className="pl-4 space-y-1">
                    <Link to="/about" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">About Us</Link>
                    <Link to="/contact" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">Contact</Link>
                    <Link to="/faq" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">FAQ</Link>
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between px-4 py-2" onClick={() => setProductsOpen(!productsOpen)}>
                  <span className="text-sm font-medium text-muted-foreground">Products</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                </div>
                {productsOpen && (
                  <div className="pl-4 space-y-1">
                    <Link to="/products/ledger" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">Ledger</Link>
                    <Link to="/products/insight" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">Insight</Link>
                    <Link to="/products/comply" className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground">Comply</Link>
                    <div className="border-t border-border my-1" />
                    <Link to="/bite" className="block px-4 py-2 text-sm text-primary font-medium">Bite (Beta)</Link>
                  </div>
                )}
              </div>
              <Link to="/security" className="block px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-border/50">Security</Link>
              <div className="pt-2 flex gap-3">
                <Link to="/contact" className="flex-1 px-4 py-2 text-sm font-medium text-center border border-border rounded-lg hover:bg-border/50 transition-colors">Contact</Link>
                <Link to="/contact" className="flex-1 px-4 py-2 text-sm font-medium text-center bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">Get Started</Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 pt-14 sm:pt-16 md:pt-18 lg:pt-20">
        <Outlet />
      </main>

      <footer className="bg-card border-t border-border">
        <div className="container-custom py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/zorvynfulllogolight.png" alt="Zorvyn" className="h-8" />
              </Link>
              <p className="text-sm text-muted-foreground mb-4">Secure financial systems for the modern enterprise.</p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link to="/solutions/startups" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Startups</Link></li>
                <li><Link to="/solutions/smes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">SMEs</Link></li>
                <li><Link to="/solutions/enterprises" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Enterprises</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Products</h3>
              <ul className="space-y-2">
                <li><Link to="/products/ledger" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ledger</Link></li>
                <li><Link to="/products/insight" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Insight</Link></li>
                <li><Link to="/products/comply" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Comply</Link></li>
                <li><Link to="/bite" className="text-sm text-primary hover:text-foreground transition-colors">Bite (Beta)</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</Link></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 Zorvyn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}