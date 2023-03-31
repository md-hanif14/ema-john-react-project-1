import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;  // total calculation part
        totalShipping = totalShipping + product.shipping;
    }

    const tax = (total*10)/100;
    const grandTotal = total + totalShipping + tax;


    return (
        <div className='cart'>
            <h4>Order summery</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total price: ${total} </p>
                <p>Shipping: ${totalShipping} </p>
                <p>Tax: ${tax.toFixed(2)} </p>
                <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>

                
        </div>
    );
};

export default Cart;