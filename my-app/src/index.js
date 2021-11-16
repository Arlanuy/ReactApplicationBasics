import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
const img = 'https://treesforlife.org.uk/wp-content/uploads/2019/07/Brown-bear-pixabay.jpg'
const title = "Bear Book"
const author = "Amelia Hepworth"

const img2 = "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6228/6228662_so.jpg"
const title2= "Ready Player One"
const author2 = "Ernest Cline"

const firstBook = {
  img: 'https://treesforlife.org.uk/wp-content/uploads/2019/07/Brown-bear-pixabay.jpg',
  title: "Bear Book",
  author: "Amelia Hepworth",
}

const secondBook = {
  img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6228/6228662_so.jpg",
  title:"Ready Player One",
  author:"Ernest Cline"
}
function BookList() {
  return (

    <section className='booklist'>
      this is a booklist
      <Book img = {firstBook.img} title = {firstBook.title} author = {firstBook.author}>
        <p>Complete React Tutorial (inc. Hooks, Context API, React Router, Custom Hooks)
        Source Code - www.johnsmilga.com</p>
      </Book>
      <Book img = {secondBook.img} title = {secondBook.title} author = {secondBook.author}/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = ({img, title, author, children}) => {
  //const {img, title, author} = props
  return <article className="book">
    <img src={img} alt='' height="130" width="120" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
  </article>
}



ReactDom.render(<BookList/>, document.getElementById('root'))