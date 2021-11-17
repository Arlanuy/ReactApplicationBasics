import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

import {books} from './books'
import Book from './Book'
import {greeting} from './testing/testing'

const img = 'https://treesforlife.org.uk/wp-content/uploads/2019/07/Brown-bear-pixabay.jpg'
const title = "Bear Book"
const author = "Amelia Hepworth"

const img2 = "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6228/6228662_so.jpg"
const title2= "Ready Player One"
const author2 = "Ernest Cline"

const names = ['john', 'peter', 'susan'];
const newNames = names.map((name)=> {
  return<h1>{name}</h1>;
})
function BookList() {
  console.log(greeting);
  return (

    <section className='booklist'>
      this is a booklist
      {books.map((book)=> {
        return (
          <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
  );
}




ReactDom.render(<BookList/>, document.getElementById('root'))