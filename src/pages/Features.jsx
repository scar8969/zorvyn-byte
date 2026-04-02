import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, BarChart3, Globe, CreditCard, Lock, FileText, Users, TrendingUp, Workflow } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "End-to-end encryption, SOC 2 Type II certified, and 24/7 security monitoring."
  },
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description: "Intelligent automation for reconciliation, categorization, and forecasting."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Comprehensive dashboards with customizable reports and insights."
  },
  {
    icon: Globe,
    title: "Global Payments",
    description: "Send and receive payments in 100+ currencies with competitive rates."
  },
  {
    icon: CreditCard,
    title: "Virtual Cards",
    description: "Create virtual cards for team expenses with customizable limits."
  },
  {
    icon: Lock,
    title: "Fraud Detection",
    description: "AI-driven fraud prevention with real-time alerts and blocking."
  },
  {
    icon: FileText,
    title: "Automated Compliance",
    description: "Stay compliant with automated tax calculations and regulatory reporting."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Multi-user access with role-based permissions and approval workflows."
  },
  {
    icon: TrendingUp,
    title: "Cash Flow Forecasting",
    description: "Predict future cash position with AI-powered forecasting models."
  },
  {
    icon: Workflow,
    title: "Custom Workflows",
    description: "Build automated workflows tailored to your business processes."
  }
]

export default function Features() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powerful Features for
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Modern Finance
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Everything you need to build secure, intelligent financial systems. Built for scale, designed for growth.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to experience these features?</h2>
            <p className="text-muted-foreground mb-8">Start your free trial today and see how Zorvyn can transform your financial operations.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}