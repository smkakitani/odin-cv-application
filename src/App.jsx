import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import GeneralInformation from './components/General-information'
import EducationForm from './components/education'
import ExperienceForm from './components/experience'
import ProjectForm from './components/project'
import { OtherSkill, TechnicalSkillForm } from './components/skill'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <GeneralInformation />
    <EducationForm />
    <ExperienceForm />
    <ProjectForm />
    <TechnicalSkillForm />
    <OtherSkill />
    </>
  )
}

export default App;
