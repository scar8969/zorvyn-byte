import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ProductsComply() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="text-sm font-medium text-green-500">Product</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comply
              <span className="block mt-2 bg-gradient-to-r from-green-500 to-primary bg-clip-text text-transparent">
                Automated Compliance
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Automated compliance management and regulatory reporting. Stay compliant without the headache.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Tax Automation</h3>
              <p className="text-muted-foreground">Calculate and file taxes automatically. Never miss a deadline.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Regulatory Reports</h3>
              <p className="text-muted-foreground">Generate required reports for regulators. Multiple jurisdiction support.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Audit Trail</h3>
              <p className="text-muted-foreground">Complete audit logs for every action. Ready for any audit.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Policy Management</h3>
              <p className="text-muted-foreground">Create and enforce financial policies. Automated enforcement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="space-y-4">
              {[
                "Automatic tax calculations",
                "Multi-jurisdiction compliance",
                "Real-time compliance alerts",
                "Audit-ready documentation",
                "Policy templates",
                "Employee training modules",
                "Integration with Ledger & Insight"
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
          <h2 className="text-3xl font-bold mb-4">Ready to automate compliance?</h2>
          <p className="text-muted-foreground mb-8">Stay compliant effortlessly with automated management.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}