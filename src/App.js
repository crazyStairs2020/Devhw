import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import bookData from "./assets/book-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function BakeryItem(props){
  const item = props.item
  const add = () =>
  {props.setCart([...props.cart, item]) 
  props.setTotal(props.total+item.price)}

   return(
    <div>
     <img src={item.image} width="200" height="200"/>
    <button onClick={add}>Select</button>
    <div>
      {item.name}
    </div>
    <div>
     {item.price}
    </div>
    <div>
     {item.description}
    </div>
    </div>

  );
}

function Book(props) {
  const item = props.item
  const add = () => {
    props.setCart([...props.cart, item])
    props.setTotal(props.total + item.price)
  }
  const remove = () => {
    const array = props.cart
    const index = array.indexOf(item);
    if (index > -1) { // only splice array when item is found
      array.splice(index, 1); // 2nd parameter means remove one item only
    }
    props.setCart(array)
    if (props.total - item.price < .01){
      props.setTotal(0)
    } else {
      props.setTotal(props.total - item.price)
    }
  }
  return (
    <div>
      <img src={item.image} width="200" height="300" />
      <button onClick={add}>Add to Cart</button>
      <button onClick={remove}>Remove from Cart</button>
      <div>
        {item.title}
      </div>
      <div>
        {item.genre}
      </div>
      <div>
        {item.price}
      </div>
    </div>

  );
}




function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [type, setType] = useState("All")
  const [books, setBooks] = useState(bookData)
  const [display, setDisplay] = useState(books)

  const selectFilterType = eventKey => {  
    setType(eventKey)
    console.log("type is ", type)
  }
  const matchesFilterType = item => {  
    if(type === "All") { 
      return true
    } else if (type === item.type) {
      return true
    } else {
      return false
    }
  
  }
 

  function addToCart(item) {
    const newCart = { ...cart };		
    newCart[item] = (newCart[item] || 0) + 1;	
    setCart(newCart);
    }

  function removeFromCart(item) {
    const newCart = { ...cart };		
    setCart(newCart.remove(item));
    }

  function addToDisplay(item) {
    const newList = [...display, item] 
    setDisplay(newList);  
    }
      
    

  const filter_fantasy = () => {  
    const array = []
    for(let i = 0; i < books.length; i++){
      if(books.at(i).genre.includes("Fantasy")){
        console.log("adding ", books.at(i))
        array.push(books.at(i))
      }
    }
    setBooks(array)
    console.log("books is now ", books)
   // console.log("fantasy ", books)
    setType("Fantasy")
  }
  const filter_scifi = () => {  
    const array = []
    for(let i = 0; i < books.length; i++){
      if(books.at(i).genre.includes("Sci-fi")){
        console.log("adding ", books.at(i))
        array.push(books.at(i))
      }
    }
    setBooks(array)
    console.log("books is now ", books)
   // console.log("fantasy ", books)
    setType("Sci-fi")
  }
  const filter_nonfiction = () => {  
    const array = []
    for(let i = 0; i < books.length; i++){
      if(books.at(i).genre.includes("nonfiction")){
        console.log("adding ", books.at(i))
        array.push(books.at(i))
      }
    }
    setBooks(array)
    console.log("books is now ", books)
   // console.log("fantasy ", books)
    setType("nonfiction")
  }
  const filter_classic = () => {  
    const array = []
    for(let i = 0; i < books.length; i++){
      if(books.at(i).genre.includes("Classic")){
        console.log("adding ", books.at(i))
        array.push(books.at(i))
      }
    }
    setBooks(array)
    console.log("books is now ", books)
   // console.log("fantasy ", books)
    setType("Classic")
  }
  const filter_cs = () => {  
    const array = []
    for(let i = 0; i < books.length; i++){
      if(books.at(i).genre.includes("CS")){
        console.log("adding ", books.at(i))
        array.push(books.at(i))
      }
    }
    setBooks(array)
    console.log("books is now ", books)
   // console.log("fantasy ", books)
    setType("Classic")
  }
  const filter_biography = () => {  
    const array = []
    for(let i = 0; i < books.length; i++){
      if(books.at(i).genre.includes("Biography")){
        console.log("adding ", books.at(i))
        array.push(books.at(i))
      }
    }
    setBooks(array)
    console.log("books is now ", books)
   // console.log("fantasy ", books)
    setType("Classic")
  }
  const filter_action = () => {  
    const array = []
    for(let i = 0; i < books.length; i++){
      if(books.at(i).genre.includes("Action")){
        console.log("adding ", books.at(i))
        array.push(books.at(i))
      }
    }
    setBooks(array)
    console.log("books is now ", books)
   // console.log("fantasy ", books)
    setType("Action")
  }
  const filter_reset = () => { 
    setBooks(bookData) 
  }
  const sort_price = () => {  
    //Sort array
    const array = []
    const temp = books
    const sorted = temp.sort((a, b) => {
      return a.price - b.price;
      })
    for(let i = 0; i < sorted.length; i++){
      array.push(sorted.at(i))
    }
    
    setBooks(array)
    
    console.log("array is  ", array)
  }





  return (
    <div className="App">

      <header className="App-header">
      <h2>Cart</h2>
        {cart.map((item) => (
        <div>{item.title}</div>
      ))
      }
      <h3>Total</h3>
      <div>{total}</div>
      <h4>Filters</h4>
      <div className="book-container">
      <button onClick={filter_fantasy}>Fantasy</button>
      <button onClick={filter_scifi}>Sci-fi</button>
      <button onClick={filter_nonfiction}>non-fiction</button>
      <button onClick={filter_biography}>Biography</button>
      <button onClick={filter_action}>Action</button>
      <button onClick={filter_cs}>Computer Science</button>
      <button onClick={filter_classic}>Classic</button>
      <button onClick={filter_reset}>Reset</button>
      <button onClick={sort_price}>Sort</button>
      </div>
      <p>

        
      </p>
      <div className="book-container">
      { 
      
        books.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <Book item={item} cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>// replace with BakeryItem component
      ))
      
        }
      </div>
      </header>      
    </div>
  );
}

export default App;