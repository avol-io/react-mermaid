
import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { DemoSection } from './sections/DemoSection'
import { FeaturesSection } from './sections/FeaturesSection'
import { InstallSection } from './sections/InstallSection'
import { StylingSection } from './sections/StylingSection'
import { FooterSection } from './sections/FooterSection'

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DemoSection />
        <FeaturesSection />
        <InstallSection />
        <StylingSection />
      </main>
      <FooterSection />
    </>
  )
}
