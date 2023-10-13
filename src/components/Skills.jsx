function TechnicalSkillForm({ handleChange }) {
  return (
    <div>
      <fieldset>
        <form action="#">
          <legend>Technical skills</legend>
          <div>
            <label for="skill-languages">Languages: </label>
            <input 
            onChange={handleChange}
            type="text" name="languages" id="skill-languages" placeholder="Python, Java, HTML/CSS, JavaScript, SQL"/>
          </div>
          <div>
            <label for="skill-technologies">Technologies: </label>
            <input 
            onChange={handleChange}
            type="text" name="technologies" id="skill-technologies" placeholder="VS Code, Linux, Git/GitHub"/>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

function OtherSkill({ handleChange }) {
  return (
    <div>
      <fieldset>
        <form action="#">
          <legend>Other skills</legend>
          <div>
            <label for="skill-idiom">Languages: </label>
            <input 
            onChange={handleChange}
            type="text" name="languages" id="skill-idiom" pattern="[A-Za-z]{1,32}" placeholder="English, Brazilian Portuguese, Japanese"/>
          </div>
          <div>
            <label for="skill-other">Other Tools: </label>
            <input 
            onChange={handleChange}
            type="text" name="tools" id="skill-other" pattern="[A-Za-z]{1,32}" placeholder="Photoshop, Figma, AutoCad"/>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export { TechnicalSkillForm, OtherSkill };