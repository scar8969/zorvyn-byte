import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function SolutionsStartups() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">For Startups</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Financial Foundation
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                for Growing Startups
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Build your financial infrastructure from day one. Scalable solutions that grow with your startup from seed to Series A and beyond.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Startups Choose Zorvyn</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Free Tier for Early-Stage</h3>
              <p className="text-muted-foreground">Start free and scale as you grow. No credit card required.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Investor-Ready Reports</h3>
              <p className="text-muted-foreground">Generate professional financial statements for your investors.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Automated Bookkeeping</h3>
              <p className="text-muted-foreground">Save time with automatic transaction categorization and reconciliation.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Runway Tracking</h3>
              <p className="text-muted-foreground">Monitor your burn rate and extend your runway with intelligent forecasting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What's Included</h2>
            <div className="space-y-4">
              {[
                "Core accounting and bookkeeping",
                "Cash flow management",
                "Invoice generation and tracking",
                "Basic financial reporting",
                "Bank integration (up to 2 accounts)",
                "Email support",
                "Mobile app access"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8">Join hundreds of startups building their financial future with Zorvyn.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Start Free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}