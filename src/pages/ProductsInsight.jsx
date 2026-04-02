import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ProductsInsight() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="text-sm font-medium text-secondary">Product</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insight
              <span className="block mt-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                AI-Powered Analytics
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              AI-powered financial analytics and predictive forecasting. Turn your data into actionable insights.
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
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
              <p className="text-muted-foreground">AI models that predict cash flow, revenue trends, and financial risks.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Custom Dashboards</h3>
              <p className="text-muted-foreground">Build personalized dashboards with the metrics that matter to your business.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Budget vs Actual</h3>
              <p className="text-muted-foreground">Compare actual spending against budgets with automatic variance analysis.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Trend Analysis</h3>
              <p className="text-muted-foreground">Identify patterns in your financial data. Spot opportunities and risks early.</p>
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
                "AI-powered forecasting",
                "Interactive dashboards",
                "Budget tracking and alerts",
                "Growth metrics",
                "Competitor benchmarking",
                "Automated reports",
                "Integration with Ledger & Comply"
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
          <h2 className="text-3xl font-bold mb-4">Ready to get insights?</h2>
          <p className="text-muted-foreground mb-8">Make data-driven decisions with AI-powered analytics.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}