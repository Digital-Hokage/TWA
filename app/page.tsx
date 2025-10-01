import Header from './components/Header'
import Hero from './components/Hero'
import DaycareCenter from './components/DaycareCenter'
import MoneyFlow from './components/MoneyFlow'
import TaxBenefits from './components/TaxBenefits'
import BloodDonationBenefits from './components/BloodDonationBenefits'
import Donate from './components/Donate'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <DaycareCenter />
      <MoneyFlow />
      <TaxBenefits />
      <BloodDonationBenefits />
      <Donate />
      <Footer />
    </main>
  )
}