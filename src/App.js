import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import bookData from "./assets/book-data.json";


bookData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});


function Book(props) {
  const item = props.item
  const add = () => {
    props.setCart([...props.cart, item])
    props.setTotal(props.total + item.price)
  }
  return (
    <div>
      <img src={item.image} width="200" height="300" />
      <button onClick={add}>Add to Cart</button>
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

function BookList(props) {
  const books = []
  return (
    <div>
      {books}
    </div>

  );
}


function App() {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [display, setDisplay] = useState(([bookData.map((item, index) => (
    <Book item={item} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
  ))]))
  const setBooks = () => bookData.map((item, index) => (
    <Book item={item} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
  ))

  //const filtered = fruitsArray.filter(objects => { return objects.nutritions.sugar > 15});
  const filter_fantasy = () => {  
    setDisplay(bookData.map((item, index) => (
      <Book item={item} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
    )).filter(object => object.props.item.genre == "Fantasy"))
  }
  const filter_scifi = () => {
    setDisplay(bookData.map((item, index) => (
      <Book item={item} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
    )).filter(object => object.props.item.genre == "Sci-fi"))
  }
  const filter_nonfiction = () => {
    setDisplay(bookData.map((item, index) => (
      <Book item={item} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
    )).filter(object => object.props.item.genre == "non-fiction"))
  }
  const filter_classic = () => {
    setDisplay(bookData.map((item, index) => (
      <Book item={item} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
    )).filter(object => object.props.item.genre == "Classic"))
  }
  const filter_reset = () => {
    setDisplay(bookData.map((item, index) => (
      <Book item={item} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
    )))
  }
  const sort_price = () => {
    setDisplay(bookData.map((item, index) => (
      <Book item={item} cart={cart} setCart={setCart} total={total} setTotal={setTotal} />
    )).sort((a, b) => (a.props.item.price >= b.props.item.price) ? 1 : -1))
  }
  return (
    <div className="App">
      <header className="App-header">
        {display}
        <p>
          Edit <code>src/App.js</code> and save to r
        </p>
        <a
          className="App-lin"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={filter_fantasy}>Fantasy</button>
      <button onClick={filter_scifi}>Sci-fi</button>
      <button onClick={filter_nonfiction}>non-fiction</button>
      <button onClick={filter_classic}>Classic</button>
      <button onClick={filter_reset}>Reset</button>
      <button onClick={sort_price}>Sort</button>
      <div>{total}</div>
    </div>
  );
}

export default App;
