import { Link } from 'react-router-dom'
import { Shield, Lock, Server, FileCheck, Eye, Phone, CheckCircle2 } from 'lucide-react'

export default function Security() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">Security</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise-Grade
              <span className="block mt-2 bg-gradient-to-r from-green-500 to-primary bg-clip-text text-transparent">
                Security First
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Your financial data is protected by bank-grade security measures. We're committed to keeping your information safe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-muted-foreground">All data encrypted in transit and at rest using AES-256 encryption.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SOC 2 Type II</h3>
              <p className="text-muted-foreground">Independently audited and certified for security, availability, and confidentiality.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compliance</h3>
              <p className="text-muted-foreground">GDPR, PCI DSS, and SOC 2 compliant. Regular security audits and penetration testing.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-muted-foreground">24/7 security monitoring with automated threat detection and response.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fraud Protection</h3>
              <p className="text-muted-foreground">AI-powered fraud detection with real-time alerts and automatic blocking.</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Dedicated security team available round the clock for any concerns.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Security Certifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['SOC 2 Type II', 'ISO 27001', 'GDPR', 'PCI DSS'].map((cert, index) => (
                <div key={index} className="p-4 rounded-lg bg-card border border-border text-center">
                  <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <span className="text-sm font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Have questions about security?</h2>
          <p className="text-muted-foreground mb-8">Our security team is here to help.</p>
          <Link to="/contact" className="inline-flex px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Contact Security Team
          </Link>
        </div>
      </section>
    </>
  )
}