import '../styles/form.css'

function GeneralInformation({ handleChange, handleSubmit }) {

  return (
    <div>
      <fieldset>
        <form action="#">
          <legend>Personal details</legend>
          <div>
            <label for="full-name">Your full name: </label>
            <input 
            onChange={handleChange}
            type="text" name="name" id="full-name" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="Meowster Puurfect"  required />
          </div>
          <div>
            <label for="email">Your e-mail: </label>
            <input 
            onChange={handleChange}
            type="email" id="email" name="email" placeholder="example@exemple.com" required />
          </div>
          <div>
            <label for="phone">Your phone number: </label>
            <input 
            onChange={handleChange}
            type="tel" name="phone" id="phone" pattern="([0-9]{2})[0-9]{4,5}-[0-9]{4}" placeholder="(11)1111-1111" required />
          </div>
          <div>
            <label for="url">Your URL:</label>
            <input 
            onChange={handleChange}
            type="url" name="url" id="url" placeholder="https://exemple.com" pattern="https://.*" required/>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default GeneralInformation;