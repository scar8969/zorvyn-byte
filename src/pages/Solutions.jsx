import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Solutions() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tailored Financial
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're just starting out or scaling globally, we have the right financial infrastructure for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/solutions/startups" className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">Startups</h3>
              <p className="text-muted-foreground mb-6">
                Build your financial foundation from day one. Scalable solutions that grow with your startup from seed to Series A and beyond.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm"><span className="text-primary">✓</span> Free tier for early-stage companies</li>
                <li className="flex items-center gap-2 text-sm"><span className="text-primary">✓</span> Automated bookkeeping</li>
                <li className="flex items-center gap-2 text-sm"><span className="text-primary">✓</span> Investor-ready financial reports</li>
              </ul>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                Explore Startups <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link to="/solutions/smes" className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="text-5xl mb-6">🏢</div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">SMEs</h3>
              <p className="text-muted-foreground mb-6">
                Streamline operations with automated financial workflows. Save time and reduce errors with intelligent automation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm"><span className="text-primary">✓</span> Multi-currency support</li>
                <li className="flex items-center gap-2 text-sm"><span className="text-primary">✓</span> Payroll integration</li>
                <li className="flex items-center gap-2 text-sm"><span className="text-primary">✓</span> Tax compliance automation</li>
              </ul>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                Explore SMEs <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link to="/solutions/enterprises" className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="text-5xl mb-6">🌐</div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">Enterprises</h3>
              <p className="text-muted-foreground mb-6">
                Custom architectures for complex financial requirements. Enterprise-grade security and compliance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm"><span className="text-primary">✓</span> Custom integrations</li>
                <li className="flex items-center gap-2 text-sm"><span className="text-primary">✓</span> Dedicated account manager</li>
                <li className="flex items-center gap-2 text-sm"><span className="text-primary">✓</span> SLA guarantees</li>
              </ul>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                Explore Enterprises <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Solution Fits?</h2>
            <p className="text-muted-foreground mb-8">
              Our team can help you find the perfect solution for your business. Schedule a free consultation today.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Talk to an Expert <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}