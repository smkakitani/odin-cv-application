function ProjectForm({ handleChange }) {
  return (
    <div>
      <fieldset>
        <form action="#">
          <legend>Project details</legend>
          <div>
            <label for="project-name">Project name: </label>
            <input 
            onChange={handleChange}
            type="text" name="name" id="project-name" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="Weather App"/>
          </div>
          <div>
            <label for="project-techstack">Tech stack: </label>
            <input 
            onChange={handleChange}
            type="text" name="tech" id="project-techstack" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="HTML, CSS, JavaScript, Ruby"/>
          </div>
          <div>
            <label for="project-date">Project date: </label>
            <input 
            onChange={handleChange}
            type="text" name="date" id="project-date" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="October 2023"/>
          </div>
          <div>
            <label for="project-description">Project description: </label>
            <textarea 
            onChange={handleChange}
            name="description" id="project-description" cols="30" rows="10"></textarea>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default ProjectForm;