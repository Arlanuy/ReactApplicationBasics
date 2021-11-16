import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
const img = 'https://treesforlife.org.uk/wp-content/uploads/2019/07/Brown-bear-pixabay.jpg'
const title = "Bear Book"
const author = "Amelia Hepworth"

const img2 = "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6228/6228662_so.jpg"
const title2= "Ready Player One"
const author2 = "Ernest Cline"
const books = [
{
  id: 1,
  img: 'https://treesforlife.org.uk/wp-content/uploads/2019/07/Brown-bear-pixabay.jpg',
  title: "Bear Book",
  author: "Amelia Hepworth",
},

{
  id: 2,
  img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6228/6228662_so.jpg",
  title:"Ready Player One",
  author:"Ernest Cline"
},]
const names = ['john', 'peter', 'susan'];
const newNames = names.map((name)=> {
  return<h1>{name}</h1>;
})
function BookList() {
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

const Book = (props) => {
  const {img, title, author} = props
  return <article className="book">
    <img src={img} alt='' height="130" width="120" />
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
}



ReactDom.render(<BookList/>, document.getElementById('root'))