import React from 'react'
import Hero from '../components/Hero'
import FaqsSection from '../components/FaqsSection'
import Partner from '../components/Partner'
import GuideSteps from '../components/GuideSteps'
import StartedSection from '../components/StartedSection'
import Testimonial from '../components/Testimonial'
import Goals from '../components/Goals'
import ProjectPartner from '../components/ProjectPartner'
import Impact from '../components/Impact'

export default function Home() {
  return (
    <>
    <Hero/>
    {/* <Partner/> */}
    <GuideSteps/>
    <StartedSection/>
    <Impact/>
    <Testimonial/>
    <Goals/>
    <ProjectPartner/>
    <FaqsSection/>
    </>
  )
}
