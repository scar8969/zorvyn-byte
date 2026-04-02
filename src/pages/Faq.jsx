import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'

const faqs = [
  {
    question: "What is Zorvyn?",
    answer: "Zorvyn is a financial technology company that helps startups and SMEs build secure, compliant, and intelligent financial systems. We offer AI-powered solutions for budgeting, payments, compliance, and forecasting."
  },
  {
    question: "How does Zorvyn ensure security?",
    answer: "We use bank-grade security measures including end-to-end AES-256 encryption, SOC 2 Type II certification, and 24/7 security monitoring. Our platform is regularly audited and penetration tested."
  },
  {
    question: "What industries does Zorvyn serve?",
    answer: "Zorvyn serves businesses across various industries including technology, e-commerce, healthcare, finance, and more. Our solutions are flexible and can be tailored to any business model."
  },
  {
    question: "How does pricing work?",
    answer: "We offer tiered pricing plans to fit businesses of all sizes. Our Starter plan is free for early-stage startups, while Growth and Enterprise plans offer more advanced features. Contact us for custom enterprise pricing."
  },
  {
    question: "Can I integrate Zorvyn with my existing systems?",
    answer: "Yes! Zorvyn offers API access and integrations with popular accounting software, banks, and payment processors. Our team can help with custom integrations for enterprise customers."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer email support for all plans, priority support for Growth plans, and 24/7 phone support with dedicated account managers for Enterprise customers."
  },
  {
    question: "Is there a free trial?",
    answer: "Our Starter plan is free forever. Growth and Enterprise plans come with a 14-day free trial. No credit card required to start."
  },
  {
    question: "How do I get started?",
    answer: "Simply sign up for an account on our website or contact our sales team for a personalized demo. We'll help you choose the right plan for your business."
  }
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions about Zorvyn and our services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border">
                <button
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-8">Can't find what you're looking for? Our team is here to help.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}