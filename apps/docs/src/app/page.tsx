import { Metadata } from 'next'
import {
  Accessible,
  CustomTheme,
  DarkMode,
  Hero,
  PillarSupport,
  RTLSupport,
  SimplifyDevelopment,
} from './_components/home'

function Home() {
  return (
    <div>
      <Hero />
      <Accessible />
      <SimplifyDevelopment />
      <DarkMode />
      <RTLSupport />
      <CustomTheme />
      <PillarSupport />
    </div>
  )
}

export default Home

export const metadata: Metadata = {
  title: 'Pillar UI: a lightweight React UI library with a focus on accessibility.',
}
