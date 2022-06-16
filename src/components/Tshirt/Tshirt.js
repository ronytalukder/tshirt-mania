import React from 'react';
import './Tshirt.css'

const Tshirt = ({ handleAddToCart, ts }) => {
    const {name, price, picture}=ts
    return (
      <div className="t_shirt">
        <h2>{name}</h2>
        <img src={picture} alt="" />
        <p>Price: ${price}</p>
        <button onClick={()=>handleAddToCart(ts)}>Add To Cart</button>
      </div>
    );
};

export default Tshirt;