import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (

    <div>
      <Person/>
      <Message/>
    </div>
  );
}

const Person = () => {
  return <h2>arlan uy</h2>
}

const Message = () => {
  return <p>this is the message</p>;
}

const Greeting2 = () => {
  return React.createElement('div', {}, React.createElement(
    'h1', {}, 'hello world'));
;}

ReactDom.render(<Greeting/>, document.getElementById('root'))