function InputText ({ labelFor, labelText, typeName }) {
  // const labelFor = '';
  // const labelText = '';
  // const typeName = '';

  return (
    <>
    <label for={labelFor}>{labelText}</label>
    <input 
    type="text"
    id={labelFor}
    name={typeName}
    />
    </>
  );
}

function GeneralInformation () {
  return (
    <div className="general-info">

    </div>
  );
}