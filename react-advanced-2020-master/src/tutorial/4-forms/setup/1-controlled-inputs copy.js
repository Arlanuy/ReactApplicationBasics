import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello ', firstName, "with email ", email)
  }

  return <> 
  <article>

    <form className="form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="firstName">Name: </label>
        <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <button type="submit">Add person</button>
    </form>
  </article>
  </>;
};

export default ControlledInputs;