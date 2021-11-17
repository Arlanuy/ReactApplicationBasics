import React, { useState } from 'react';

const UseStateObject = () => {

  const changeMessage = (() => setPerson({
  name: 'arlan', 
  age:24, 
  message:'random message',
}))

const changeMessage2 = (() => setPerson({
  ...person, message: 'i love u'
}));

const changeMessage3 = (() => {
  setMessage('Changed brother');
});

const [name, setName] = useState('peter')
const [age, setAge] = useState(24)
const [message, setMessage] = useState('random message')

  const [person, setPerson] = useState(
    {name: 'peter', 
    age:24, 
    message:'random message',
  });
  console.log(person)
  return (
    <>
  <h2>{person.name}</h2>
  <h2>{person.age}</h2>
  <h2>{person.message}</h2>
  <h3>{name}</h3>
  <h3>{age}</h3>
  <h3>{message}</h3>
  <button className="btn" onClick={changeMessage}>Change Message</button>
  <button className="btn" onClick={changeMessage2}>Change Message2</button>
  <button className="btn" onClick={changeMessage3}>Change Message</button>
  </>
  );
};

export default UseStateObject;
