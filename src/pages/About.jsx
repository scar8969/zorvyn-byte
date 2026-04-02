import { Link } from 'react-router-dom'
import { ArrowRight, Users, Target, Globe, Award } from 'lucide-react'

const team = [
  { name: "Sandhya Sidram Gavani", role: "CEO & Co-Founder", image: "/SandhyaSidramGavani.jpg" },
  { name: "Raj Kishor Pattnaik", role: "CTO & Co-Founder", image: "/RajKishorPattnaik.jpg" },
  { name: "Nandhini Mohan", role: "VP of Engineering", image: "/NandhiniMohan.jpg" },
  { name: "Prosenjit Halder", role: "VP of Product", image: "/ProsenjitHalder.jpg" },
  { name: "Karlo Martinez", role: "Head of Sales", image: "/KarloMartinez.jpg" },
  { name: "Kajal Jat", role: "Head of Customer Success", image: "/KajalJat.jpg" },
  { name: "Jhumpa Ghosh", role: "Head of Marketing", image: "/JhumpaGhosh.jpg" },
  { name: "Burada Rajarao", role: "Head of Operations", image: "/BuradaRajarao.jpg" }
]

export default function About() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building the Future of
              <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Financial Infrastructure
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We're on a mission to make financial systems secure, compliant, and intelligent for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="text-center p-6">
              <Globe className="h-12 w-12 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="text-center p-6">
              <Target className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-muted-foreground">Customers</div>
            </div>
            <div className="text-center p-6">
              <Award className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">$50M+</div>
              <div className="text-muted-foreground">Processed Monthly</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Zorvyn was founded in 2024 by a team of finance and technology experts who saw a critical gap in how businesses manage their financial infrastructure.</p>
              <p>We believed that financial systems should be secure by default, compliant by design, and intelligent by nature. That's why we built Zorvyn from the ground up with these principles.</p>
              <p>Today, we're proud to serve hundreds of companies across the globe, from early-stage startups to large enterprises, helping them build the financial foundation they need to grow and succeed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-border overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Join Our Team</h2>
          <p className="text-white/80 mb-8">We're always looking for talented people to join our mission.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors">
            View Openings <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}