function EducationForm() {
  return (
    <div>
      <fieldset>
        <form action="#">
          <legend>Education details</legend>
          <div>
            <label for="state-university">University name: </label>
            <input type="text" name="state-university" id="state-university" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="Meowster University"/>
          </div>
          <div>
            <label for="degree">Degree: </label>
            <input type="text" name="degree" id="degree" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="Bachelor of Science in Computer Science"/>
          </div>
          <div>
            <label for="graduation-date">Graduation year: </label>
            <input type="text" name="graduation-date" id="graduation-date" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="1999"/>
          </div>
          <div>
            <label for="graduation-address">Graduation address: </label>
            <input type="text" name="graduation-address" id="graduation-address" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="City, State"/>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default EducationForm;