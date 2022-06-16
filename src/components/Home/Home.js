import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import'./Home.css'

const Home = () => {
    const [tshirt, setTshirt]=useTshirt()
    const [cart , setCart]=useState([])

    const handleAddToCart=(selectedItem)=>{
     const newCart=[...cart, selectedItem]
     setCart(newCart)
     console.log(newCart);
    }

    return (
      <div className="home_container">
        <div className="tshirt_container">
          {tshirt.map((ts) => (
            <Tshirt
              key={ts._id}
              ts={ts}
              handleAddToCart={handleAddToCart}
            ></Tshirt>
          ))}
        </div>

        <div className="cart_container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    );
};

export default Home;

