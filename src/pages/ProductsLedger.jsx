import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ProductsLedger() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">Product</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ledger
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Complete Financial Records
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Complete transaction monitoring and financial record-keeping. Every transaction, every detail, perfectly tracked.
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
              <h3 className="text-xl font-semibold mb-4">Transaction Tracking</h3>
              <p className="text-muted-foreground">Monitor every transaction in real-time. Full audit trail with detailed records.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Automated Reconciliation</h3>
              <p className="text-muted-foreground">Auto-match transactions with bank statements. Save hours of manual work.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Multi-Currency Support</h3>
              <p className="text-muted-foreground">Handle global transactions. Automatic currency conversion and exchange rate tracking.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Custom Categories</h3>
              <p className="text-muted-foreground">Organize transactions your way. Create custom categories and tags.</p>
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
                "Real-time transaction monitoring",
                "Automatic categorization",
                "Bank statement import",
                "Receipt attachment",
                "Search and filter transactions",
                "Export to CSV/Excel",
                "API integration"
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
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">Start tracking every transaction with precision.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}