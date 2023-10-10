function DivField({ children }) {
  return (
    <div className="input-filed">
      {children}
    </div>
  );
}

function GeneralInformation() {
  return (
    <div>
      <fieldset>
        <form action="#">
          <legend>Personal details</legend>
          <div>
            <label for="full-name">Your full name: </label>
            <input type="text" name="user-name" id="full-name" maxLength="32" pattern="[A-Za-z]{1,32}" placeholder="Meowster Puurfect" required />
          </div>
          <div>
            <label for="email">Your e-mail: </label>
            <input type="email" id="email" name="user-email" placeholder="example@exemple.com" required />
          </div>
          <div>
            <label for="phone">Your phone number: </label>
            <input type="tel" name="user-phone" id="phone" pattern="([0-9]{2})[0-9]{4,5}-[0-9]{4}" placeholder="(11)1111-1111" required />
          </div>
          <div>
            <label for="url">Your URL:</label>
            <input type="url" name="url" id="url" placeholder="https://exemple.com" pattern="https://.*"/>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default GeneralInformation;