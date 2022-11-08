import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({items: {}, price: 0});
  // items: {tart: 1, bun:2}
  const updateCart = (idx) => {
    const item = bakeryData[idx];
    const name = item.name;
    const newCart = cart.items;
    if (newCart[name]) {
      newCart[name] += 1
    } else {
      newCart[name] = 1
    }
    const newPrice = cart.price + item.price
    setCart({items: newCart, price: newPrice})
    console.log(cart.items)
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="content">
        <div className="bakeryItems">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem item={item} updateCart={updateCart} index={index}></BakeryItem> // replace with BakeryItem component
          ))}
        </div>

        <div className="cart">
          <h2>My Cart</h2>
          {Object.keys(cart.items).map((key) => (
            <p>{cart.items[key]}x {key}</p>
          ))}
          <p>Total: ${Math.round(cart.price * 100) / 100}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
