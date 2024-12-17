import React from 'react';

const CheckoutPage = ({ cart }) => {
  // Calculate the total price of all items in the cart
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="checkout-page">
      <h2>Your Cart</h2>
      <div>
        {/* If the cart is empty, show a message */}
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          // Otherwise, show a list of cart items
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Show total amount */}
      <h3>Total: ${totalAmount}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CheckoutPage;
