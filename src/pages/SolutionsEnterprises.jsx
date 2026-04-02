import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function SolutionsEnterprises() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="text-sm font-medium text-green-500">For Enterprises</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise-Grade
              <span className="block mt-2 bg-gradient-to-r from-green-500 to-primary bg-clip-text text-transparent">
                Financial Infrastructure
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Custom architectures for complex financial requirements. Scale without limits while maintaining compliance and security.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Contact Sales <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Enterprise Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Custom Integrations</h3>
              <p className="text-muted-foreground">Connect with any system. Custom API development for your unique needs.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Dedicated Account Manager</h3>
              <p className="text-muted-foreground">Personal support from our enterprise team. Priority access to experts.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">SLA Guarantees</h3>
              <p className="text-muted-foreground">99.99% uptime guarantee. Financial penalties for service interruptions.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-4">Advanced Security</h3>
              <p className="text-muted-foreground">Custom security configurations. On-premise deployment options available.</p>
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
                "Everything in SME plan",
                "Unlimited users and departments",
                "Custom branding and white-labeling",
                "Advanced audit logs and compliance",
                "Dedicated infrastructure",
                "24/7 phone support with SLA",
                "Quarterly business reviews"
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
          <h2 className="text-3xl font-bold mb-4">Talk to Our Enterprise Team</h2>
          <p className="text-muted-foreground mb-8">Get a custom solution designed for your organization's unique needs.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Contact Sales <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}