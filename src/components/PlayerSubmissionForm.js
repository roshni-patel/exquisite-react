import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const generateFields = () => ({
  adj1: '',
  noun1: '',
  adverb1: '',
  verb1: '',
  adj2: '',
  noun2: ''
});

const buildInputs = (fields, onFormFieldChange, formFields) => { 
  return fields.map((field) => {
    if (field.key) {
      return (
      <input 
      key={field.key}
      placeholder={field.placeholder}
      name={field.key}
      type="text"
      value={formFields[field.key]}
      onChange={onFormFieldChange} />
      )
    } else {
      return <p key={field}>{field}</p>
      
    }
  });
}

const PlayerSubmissionForm = (props) => {
  const [formFields, setFormFields] = useState(generateFields()); 

  const onFormFieldChange = (event) => {
    const fieldName = event.target.name;
    const newValue = event.target.value;

    const newFormData = {
      ...formFields 
    };

    newFormData[fieldName] = newValue;
    setFormFields(newFormData); 
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    // console.log(formFields);
    props.sendSubmission(formFields);

    setFormFields(generateFields());
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form onSubmit={onFormSubmit} className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            buildInputs(props.fields, onFormFieldChange, formFields)// Put your form inputs here... We've put in one below as an example
          }
        </div> 

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
