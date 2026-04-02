import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for early-stage startups",
    features: [
      "Up to 100 transactions/month",
      "Basic financial reporting",
      "Bank integration (2 accounts)",
      "Email support",
      "Mobile app access"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Growth",
    price: "$49",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Unlimited transactions",
      "Advanced analytics",
      "Unlimited bank connections",
      "Multi-user access (10 users)",
      "API access",
      "Priority support"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Growth",
      "Unlimited users",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "SLA guarantees",
      "Custom branding"
    ],
    cta: "Contact Sales",
    popular: false
  }
]

export default function Pricing() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Simple, Transparent
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Choose the plan that fits your business. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`p-8 rounded-xl bg-card border ${plan.popular ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`block w-full py-3 text-center font-medium rounded-lg transition-colors ${plan.popular ? 'bg-primary text-white hover:bg-primary/90' : 'border border-border hover:bg-border/50'}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="text-left space-y-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-medium mb-2">Can I switch plans later?</h3>
                <p className="text-sm text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
                <p className="text-sm text-muted-foreground">We accept all major credit cards, debit cards, and bank transfers for enterprise customers.</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <h3 className="font-medium mb-2">Is there a free trial?</h3>
                <p className="text-sm text-muted-foreground">Our Starter plan is free forever. Growth and Enterprise plans come with a 14-day free trial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}