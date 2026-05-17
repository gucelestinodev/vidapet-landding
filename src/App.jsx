import Hero from './components/Hero.jsx'
import StatsBar from './components/StatsBar.jsx'
import Features from './components/Features.jsx'
import Details from './components/Details.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Pricing from './components/Pricing.jsx'
import VetPanel from './components/VetPanel.jsx'
import Testimonials from './components/Testimonials.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-navy">
      <Hero />
      <StatsBar />
      <Features />
      <Details />
      <HowItWorks />
      <Pricing />
      <VetPanel />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  )
}
