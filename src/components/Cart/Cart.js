import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      {
        cart.map(tShrit=> <p> {tShrit.name} </p>)
      }
    </div>
  );
};

export default Cart;