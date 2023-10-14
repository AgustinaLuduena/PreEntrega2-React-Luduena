import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  const itemCount = 4;

  return (
    <div className='CartWidget'>
        <ShoppingCartIcon />
        <span className="cart-notification">{itemCount}</span>
    </div>
  );
};

export default CartWidget;