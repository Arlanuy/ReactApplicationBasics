import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello ', firstName, "with email ", email)
  
    if (firstName && email) {
      console.log('submit the form with email');
      const person = {id: new Date().getTime().toString(), firstName: firstName, email:email};
      //shourtcut with es6  const person = {firstName, email};
      console.log(person);
      setPeople((people) => {
        return [...people, person]
        console.log(people, "is the people")
      });
      setFirstName('');
      setEmail('');
    }

    else {
      console.log('empty values');
    }
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
    {
      people.map((person, index) => {
        const {id, firstName, email} = person
        return (<div key={id}>
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
        );
      })
    }
  </article>
  </>;
};

export default ControlledInputs;
