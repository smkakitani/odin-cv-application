import '../styles/cvoutput.css'
import { userData } from './Data';

function PersonalDetails() {
  return (
    <div className="cv-personal">
        <div>
          <p className='personal-name'>{userData.name}</p>
        </div>
        <p>{userData.phone}</p>
        <p>{userData.email}</p>
        <p>{userData.url}</p>
      </div>
  );
}

function EducationDetails() {
  return (
    <div className='cv-education'>
      <div className='cv-title'>Education</div>
      <p>{userData.education.name}</p>
      <p>{userData.education.degree}</p>
      <p>{userData.education.year}</p>
      <p>{userData.education.address}</p>
    </div>
  );
}

function ExperienceDetails() {
  return (
    <div className='cv-experience'>
      <div className="cv-title">Experience</div>
      <p>{userData.experience.company}</p>
      <p>{userData.experience.title}</p>
      <p>{userData.experience.duration}</p>
      <p>{userData.experience.address}</p>
      <p>{userData.experience.description}</p>
    </div>
  );
}

function ProjectDetails() {
  return (
    <div className='cv-project'>
      <div className="cv-title">Projects</div>
      <p>{userData.project.name}</p>
      <p>{userData.project.tech}</p>
      <p>{userData.project.date}</p>
      <p>{userData.project.description}</p>
    </div>
  );
}

function SkillsDetails() {
  return (
    <>
    <div className='cv-skill'>
      <div className="cv-title">Technical Skills</div>
      <p><span className="skill-title">Languages:</span> {userData.skill.languages}</p>
      <p><span className="skill-title">Technologies:</span> {userData.skill.technologies}</p>
    </div>
    <div className='cv-skill'>
      <div className="cv-title">Other Skills</div>
      <p><span className="skill-title">Languages:</span> {userData.other.languages}</p>
      <p><span className="skill-title">Tools:</span> {userData.other.tools}</p>
    </div>
    </>
  );
}

function CvDiv() {
  return (
    <div id="cv">
      <PersonalDetails />
      <EducationDetails />
      <ExperienceDetails />
      <ProjectDetails />
      <SkillsDetails />
    </div>
  );
}

export default CvDiv;