import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Member from './Member';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = (evt) => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <h1>Form Below</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        teamMembers.map(mem => {
          return (
            <Member details = {mem} />
          )
        })
      }
    </div>
  );
}

export default App;
