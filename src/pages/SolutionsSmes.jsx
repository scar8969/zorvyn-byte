import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function SolutionsSmes() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="text-sm font-medium text-secondary">For SMEs</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Streamline Your
              <span className="block mt-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Financial Operations
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Automated financial workflows that save time and reduce errors. Focus on growing your business while we handle the numbers.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Request Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">SME Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Multi-Currency Support</h3>
              <p className="text-muted-foreground">Handle global transactions with ease. Support for 100+ currencies.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Payroll Integration</h3>
              <p className="text-muted-foreground">Seamlessly integrate with popular payroll providers.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Tax Compliance</h3>
              <p className="text-muted-foreground">Automated tax calculations and filings. Stay compliant effortlessly.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Inventory Management</h3>
              <p className="text-muted-foreground">Track inventory and costs with real-time insights.</p>
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
                "Everything in Startup plan",
                "Unlimited bank connections",
                "Advanced reporting and analytics",
                "Multi-user access (up to 10)",
                "API access",
                "Priority support",
                "Custom integrations"
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
          <h2 className="text-3xl font-bold mb-4">Ready to Scale?</h2>
          <p className="text-muted-foreground mb-8">Join thousands of SMEs transforming their financial operations.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Request Demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}