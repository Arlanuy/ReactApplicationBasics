import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (

    <div>
      <h1>Hello world</h1>
      <ul>
        <li>
          <a href="#">hello world</a>
        </li>
      </ul>
    </div>
  );
}

const Greeting2 = () => {
  return React.createElement('div', {}, React.createElement(
    'h1', {}, 'hello world'));
;}

ReactDom.render(<Greeting/>, document.getElementById('root'))