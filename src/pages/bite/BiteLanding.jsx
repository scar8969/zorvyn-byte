import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ArrowRight, BarChart2, Tag, Bell, PieChart, Check, X } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

export default function BiteLanding() {
  const { user, login } = useAuth()
  const navigate = useNavigate()
  const [showLogin, setShowLogin] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (name && email) {
      login(email, name)
      navigate('/bite/dashboard')
    }
  }

  const features = [
    { icon: BarChart2, title: 'Daily/Weekly/Monthly Reports', desc: 'Track spending patterns over time with detailed analytics' },
    { icon: Tag, title: 'Category-Based Tracking', desc: 'Organize expenses by categories like groceries, restaurants, coffee' },
    { icon: Bell, title: 'Budget Alerts', desc: 'Get notified when you\'re nearing your spending limits' },
    { icon: PieChart, title: 'Visual Charts', desc: 'See your spending at a glance with beautiful pie and bar charts' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container-custom py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/zorvynfulllogolight.png" alt="Zorvyn" className="h-6" />
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-semibold text-foreground">Bite</span>
          </div>
          <div className="flex items-center gap-3">
            {user ? (
              <Link to="/bite/dashboard" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Open App
              </Link>
            ) : (
              <>
                <button onClick={() => setShowLogin(true)} className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Login
                </button>
                <Link to="/bite/dashboard" className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="text-sm font-medium text-green-500">Beta</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Track Every
              <span className="block mt-2 bg-gradient-to-r from-green-500 to-primary bg-clip-text text-transparent">
                Bite
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Simple food expense tracking for mindful spending. Understand your eating habits and save money.
            </p>
            {user ? (
              <Link to="/bite/dashboard" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Open Dashboard <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <button onClick={() => setShowLogin(true)} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Start Tracking Free <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border">
                <feature.icon className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Simple Pricing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-xl font-semibold mb-2">Free</h3>
                <div className="text-3xl font-bold mb-4">$0<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Basic expense tracking</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> 8 categories</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Monthly reports</li>
                  <li className="flex items-center gap-2"><X className="h-4 w-4 text-muted-foreground" /> Advanced charts</li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-card border-2 border-primary relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                  Recommended
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium</h3>
                <div className="text-3xl font-bold mb-4">$4.99<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Everything in Free</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Unlimited categories</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Advanced charts</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Export data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-border">
        <div className="container-custom text-center text-sm text-muted-foreground">
          <p>© 2026 Bite. Built by Zorvyn.</p>
        </div>
      </footer>

      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Sign In to Bite</h2>
              <button onClick={() => setShowLogin(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <button type="submit" className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Continue
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}