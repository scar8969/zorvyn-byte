import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, BarChart3, CheckCircle2 } from 'lucide-react'

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_transparent_40%,_background_100%)]" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Now Available</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Secure Financial
              <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Systems for Tomorrow
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Zorvyn helps startups and SMEs build secure, compliant, and intelligent financial systems. 
              Custom financial architectures with AI-enabled solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/features" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-border/50 transition-colors">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
              <p className="text-muted-foreground">Enterprise-grade security with end-to-end encryption and compliance built-in.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-muted-foreground">Intelligent automation for budgeting, payments, compliance, and forecasting.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Insights</h3>
              <p className="text-muted-foreground">Make data-driven decisions with comprehensive financial analytics and reporting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions for Every Stage</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Whether you're a startup, SME, or enterprise, we have the right financial infrastructure for you.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/solutions/startups" className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Startups</h3>
              <p className="text-muted-foreground mb-4">Build your financial foundation from day one with scalable solutions.</p>
              <div className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
            
            <Link to="/solutions/smes" className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">SMEs</h3>
              <p className="text-muted-foreground mb-4">Streamline operations with automated financial workflows.</p>
              <div className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
            
            <Link to="/solutions/enterprises" className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Enterprises</h3>
              <p className="text-muted-foreground mb-4">Custom architectures for complex financial requirements.</p>
              <div className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive financial tools designed to work together seamlessly.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/products/ledger" className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Ledger</h3>
              <p className="text-muted-foreground mb-4">Complete transaction monitoring and financial record-keeping.</p>
              <span className="text-sm font-medium text-primary">Learn more →</span>
            </Link>
            
            <Link to="/products/insight" className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Insight</h3>
              <p className="text-muted-foreground mb-4">AI-powered financial analytics and predictive forecasting.</p>
              <span className="text-sm font-medium text-primary">Learn more →</span>
            </Link>
            
            <Link to="/products/comply" className="group p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Comply</h3>
              <p className="text-muted-foreground mb-4">Automated compliance management and regulatory reporting.</p>
              <span className="text-sm font-medium text-primary">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Zorvyn?</h2>
            
            <div className="space-y-4">
              {[
                "SOC 2 Type II Certified",
                "End-to-end encryption for all transactions",
                "Real-time fraud detection and prevention",
                "Seamless integration with existing systems",
                "24/7 dedicated support team",
                "Customizable workflows and automation"
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

      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Financial Systems?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Join hundreds of companies already using Zorvyn to build secure, intelligent financial infrastructure.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors">
              Contact Sales
            </Link>
            <Link to="/pricing" className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}