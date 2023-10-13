function EducationForm({ handleChange }) {
  return (
    <div>
      <fieldset>
        <form action="#">
          <legend>Education details</legend>
          <div>
            <label for="state-university">University name: </label>
            <input 
            onChange={handleChange}
            type="text" name="name" id="state-university" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="Meowster University"/>
          </div>
          <div>
            <label for="degree">Degree: </label>
            <input 
            onChange={handleChange}
            type="text" name="degree" id="degree" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="Bachelor of Science in Computer Science"/>
          </div>
          <div>
            <label for="graduation-date">Graduation year: </label>
            <input 
            onChange={handleChange}
            type="text" name="year" id="graduation-date" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="1999"/>
          </div>
          <div>
            <label for="graduation-address">Graduation address: </label>
            <input 
            onChange={handleChange}
            type="text" name="address" id="graduation-address" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="City, State"/>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default EducationForm;