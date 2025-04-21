import { useState } from 'react'
import './App.css'
import IntroSection from './components/IntroSection'
import AboutMeSection from './components/AboutMeSection'
import ProfExperienceSection from './components/ProfExperienceSection'
import ProfProjectList from './components/ProfProjectList'
import PersonalSection from './components/PersonalSection'
import ContactSection from './components/ContactSection'

function App() {

  return (
    <>
      <div className='dark:text-white bg-black w-full mx-auto'>
        <ContactSection />
        <IntroSection />
        <AboutMeSection />
        <ProfExperienceSection />
        <PersonalSection />
      </div>
    </>
  )
}

export default App
