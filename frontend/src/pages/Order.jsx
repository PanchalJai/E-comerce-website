import React from 'react'

function Order() {
    const orders = [
    {
      id: 1,
      title: "Asus VivoBook 15",
      price: 44999,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/71sbtM3Yi5L._SL1500_.jpg"
    },
    {
      id: 2,
      title: "Acer Aspire 7",
      price: 55999,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/71p4O7dKp1L._SL1500_.jpg"
    },
    {
      id: 3,
      title: "MSI GF63 Gaming Laptop",
      price: 69999,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/71vFKBpKakL._SL1500_.jpg"
    }
  ];

  const totalPrice = orders.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className='container' style={{ padding: "20px" }}>
      <h1>Your Orders</h1>

      {orders.map((item) => (
        <div
          className='row'
          key={item.id}
          style={{
            display: "flex",
            gap: "20px",
            border: "1px solid #ccc",
            marginBottom: "15px",
            padding: "10px",
            alignItems: "center"
          }}
        >
          <img className='col-4'
            src={item.image}
            alt={item.title}
            style={{ width: "120px", height: "100px", objectFit: "contain" }}
          />

          <div className='col-8'>
            <h3>{item.title}</h3>
            <p>Price: ₹ {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p><strong>Subtotal: ₹ {item.price * item.quantity}</strong></p>
          </div>
        </div>
      ))}

      <hr />

      <h2>Total: ₹ {totalPrice}</h2>

      <button
       className='btn btn-outline-success'
        style={{
          
          cursor: "pointer"
        }}
        onClick={() => alert("Order Placed Successfully!")}
      >
        Place Order
      </button>
    </div>
  );
}

export default Order;