import '../styles/cvoutput.css'
import { userData } from './Data';


function SkillsDetails() {
  return (
    <>
    
    </>
  );
}

function DisplayCv({ 
  personalData, 
  educationData, 
  experienceData, 
  projectData,
  skillData,
  otherData
}) {
  // const personalInfo = personalData.map
  return (
    <div id="cv-field">
      <div className="cv-personal">
        <div className='personal-name'>{personalData.name ? personalData.name : userData.personal.name}</div>
        <p>{personalData.phone ? personalData.phone : userData.personal.phone}</p>
        <p>{personalData.email ? personalData.email : userData.personal.email}</p>
        <p>{personalData.url ? personalData.url : userData.personal.url}</p>
      </div>
      <div className='cv-education'>
        <div className='cv-title'>Education</div>
        <p>{educationData.name ? educationData.name : userData.education.name}</p>
        <p>{educationData.degree ? educationData.degree : userData.education.degree}</p>
        <p>{educationData.year ? educationData.year : userData.education.year}</p>
        <p>{educationData.address ? educationData.address : userData.education.address}</p>
      </div>
      <div className='cv-experience'>
        <div className="cv-title">Experience</div>
        <p>{experienceData.company ? experienceData.company : userData.experience.company}</p>
        <p>{experienceData.title ? experienceData.title : userData.experience.title}</p>
        <p>{experienceData.duration ? experienceData.duration : userData.experience.duration}</p>
        <p>{experienceData.address ? experienceData.address : userData.experience.address}</p>
        <p>{experienceData.description ? experienceData.description : userData.experience.description}</p>
      </div>
      <div className='cv-project'>
        <div className="cv-title">Projects</div>
        <p>{projectData.name ? projectData.name : userData.project.name}</p>
        <p>{projectData.tech ? projectData.tech : userData.project.tech}</p>
        <p>{projectData.date ? projectData.date : userData.project.date}</p>
        <p>{projectData.description ? projectData.description : userData.project.description}</p>
      </div>
      <div className='cv-skill'>
        <div className="cv-title">Technical Skills</div>
        <p><span className="skill-title">Languages:</span> {skillData.languages ? skillData.languages : userData.skill.languages}</p>
        <p><span className="skill-title">Technologies:</span> {skillData.technologies ? skillData.technologies : userData.skill.technologies}</p>
      </div>
      <div className='cv-skill'>
        <div className="cv-title">Other Skills</div>
        <p><span className="skill-title">Languages:</span> {otherData.languages ? otherData.languages : userData.other.languages}</p>
        <p><span className="skill-title">Tools:</span> {otherData.tools ? otherData.tools : userData.other.tools}</p>
      </div>
    </div>
  );
}

export default DisplayCv;