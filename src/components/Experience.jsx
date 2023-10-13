function ExperienceForm({ handleChange }) {
  return (
    <div>
      <fieldset>
        <form action="#">
          <legend>Experience details</legend>
          <div>
            <label for="company-name">Company name: </label>
            <input 
            onChange={handleChange}
            type="text" name="company" id="company-name" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="Cat café"/>
          </div>
          <div>
            <label for="job-title">Job title: </label>
            <input 
            onChange={handleChange}
            type="text" name="title" id="job-title" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="Cat commander"/>
          </div>
          <div>
            <label for="job-duration">Job duration: </label>
            <input 
            onChange={handleChange}
            type="text" name="jduration" id="job-duration" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="Jan. 1999 - Jan 2019"/>
          </div>
          <div>
            <label for="job-address">Job address: </label>
            <input 
            onChange={handleChange}
            type="text" name="address" id="job-address" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="City, State"/>
          </div>
          <div>
            <label for="job-description">Job description: </label>
            <textarea 
            onChange={handleChange}
            name="description" id="job-description" cols="30" rows="10"></textarea>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default ExperienceForm;