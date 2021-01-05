import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adj2: '',
    noun2: ''
  }); 

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

    setFormFields({
      adj1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adj2: '',
      noun2: ''
    });
  }
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form onSubmit={onFormSubmit} className="PlayerSubmissionForm__form" >

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          <p>The</p>
          <input
            placeholder="adjective"
            name="adj1"
            type="text" 
            value={formFields.adj1}
            onChange={onFormFieldChange} />

          <input 
            placeholder="noun"
            name="noun1"
            type="text"
            value={formFields.noun1}
            onChange={onFormFieldChange} />

          <input 
            placeholder="adverb"
            name="adverb"
            type="text"
            value={formFields.adverb}
            onChange={onFormFieldChange} />

          <input 
            placeholder="verb"
            name="verb"
            type="text"
            value={formFields.verb}
            onChange={onFormFieldChange} />

          <input 
            placeholder="adjective"
            name="adj2"
            type="text"
            value={formFields.adj2}
            onChange={onFormFieldChange} />

          <input 
            placeholder="noun"
            name="noun2"
            type="text"
            value={formFields.noun2}
            onChange={onFormFieldChange} />
          <p>.</p>
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
