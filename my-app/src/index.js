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
      <Book img = {firstBook.img} title = {firstBook.title} author = {firstBook.author}/>
      <Book2 img = {secondBook.img} title = {secondBook.title} author = {secondBook.author}/>
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

const Book = (props) => {
  console.log(props);
  return <article className="book">
    <Image/>
    <Title/>
    <Author/>
    <img src={props.img} alt='' />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
}

const Book2 = (props) => {
  console.log(props);
  return <article className="book">
    <Image2/>
    <Title2/>
    <Author2/>
    <img src={props.img} alt='' />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
}

const Image = ()  => <img src={img} alt="bear book" height="242" width="242" />

const Title = () => <h1>{title}</h1>


const Author = () => <h4 style={{color:'#617d98'}}>{author}</h4>

const Image2 = ()  => <img src={img2} alt="bear book" height="242" width="242" />

const Title2 = () => <h1>{title2}</h1>


const Author2 = () => <h4 style={{color:'#617d98'}}>{author2}</h4>

ReactDom.render(<BookList/>, document.getElementById('root'))