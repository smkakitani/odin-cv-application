import { useState } from 'react'
import './App.css'
import { userData } from './components/Data'
import GeneralInformation from './components/General-information'
import EducationForm from './components/Education'
import ExperienceForm from './components/Experience'
import ProjectForm from './components/Project'
import { OtherSkill, TechnicalSkillForm } from './components/Skills'
import DisplayCv from './components/CvOutput'


function App() {
  // Data
  const [personal, setPersonal] = useState(userData.personal);
  const [education, setEducation] = useState(userData.education);
  const [experience, setExperience] = useState(userData.experience);
  const [project, setProject] = useState(userData.project);
  const [skill, setSkill] = useState(userData.skill);
  const [other, setOther] = useState(userData.other);

  // Handle functions
  function handlePersonalInputChange(event) {
    setPersonal({
      ...personal,
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  }

  function handleEducationInputChange(event) {
    setEducation({
      ...education,
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  }

  function handleExperienceInputChange(event) {
    setExperience({
      ...experience,
      [event.target.name]: event.target.value
    });
  }

  function handleProjectInputChange(event) {
    setProject({
      ...project,
      [event.target.name]: event.target.value
    });
  }

  function handleSkillInputChange(event) {
    setSkill({
      ...skill,
      [event.target.name]: event.target.value
    });
  }

  function handleOtherInputChange(event) {
    setOther({
      ...other,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmitEvent(event) {

    console.log(personal);
  }

  return (
    <>
    <div id='input-field'>
      <GeneralInformation
        handleChange={handlePersonalInputChange}
        handleSubmit={handleSubmitEvent}
      />
      <EducationForm 
        handleChange={handleEducationInputChange}
      />
      <ExperienceForm 
        handleChange={handleExperienceInputChange}
      />
      <ProjectForm 
        handleChange={handleProjectInputChange}
      />
      <TechnicalSkillForm
        handleChange={handleSkillInputChange}
      />
      <OtherSkill 
        handleChange={handleOtherInputChange}
      />
    </div>
    <DisplayCv 
      personalData={personal}
      educationData={education}
      experienceData={experience}
      projectData={project}
      skillData={skill}
      otherData={other}
    />
    </>
  )
}

export default App;