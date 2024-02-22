import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus, FaPlus } from "react-icons/fa";
import { decreaseQuantity, deleteFromCart, increaseQuantity } from '../Storage/Action';

const Cart = () => {
  const cartData = useSelector(state => state.cartList);
  const dispatch = useDispatch();

  const handleDecrement = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const handleIncrement = (item) => {
    dispatch(increaseQuantity(item));
  };

  const handleDelete = (item) => {
    dispatch(deleteFromCart(item));
  };

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const getTotalPrice = () => {
    return cartData.reduce((total, item) => total + calculateTotalPrice(item), 0);
  };

  return (
    <div className='cart_name'>
      <div>
        {cartData.length > 0 ? cartData.map(item => (
          <div key={item.id} className='Cart_dec m-3' >
            <div>
              <img src={item.imgUrl} alt="..." />
            </div>
            <div className='d-flex'>
              <section>
                <h3>{item.productName}</h3>
                <h4> ${item.price}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>Total Price: ${calculateTotalPrice(item)}</p>
              </section>
              <section className='cart_btn'>
                <button onClick={() => handleIncrement(item)}><FaPlus /></button>
                <button onClick={() => handleDecrement(item)}><FaMinus/></button>
                <button onClick={() => handleDelete(item)}>✖️</button>
              </section>
            </div>
          </div>
        )) : <div>
          <h3 >Your Cart is Empty</h3>
        </div>}
      </div>
      <section>
        <h5 className='cart_price'>Grand Total: ${getTotalPrice()}</h5>
      </section>
    </div>
  );
};

export default Cart;



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { FaMinus,FaPlus } from "react-icons/fa";
// import { addToCart, decreaseQuantity, deleteFromCart, increaseQuantity } from '../Storage/Action';

// const Cart = () => {
//   const cartData = useSelector(state => state.cartList);
//   const dispatch = useDispatch();
//   const cartprice=useState(cartData.map(i=>i.price))
//   console.log(cartprice);
//   const handelDcrement=(item)=>{
//     dispatch(decreaseQuantity(item))
//   }
//   const handelIncrement=(item)=>{
//     dispatch(increaseQuantity(item))
//   }
//   const deleteHandele=(item)=>{
//     dispatch(deleteFromCart(item))
//   }
//   return (
//     <div className='cart_name'>
//       <div>
//         {cartData.length > 0 ? cartData.map(item => (
//           <div key={item.id} className='Cart_dec m-3' >
//             <div>
//               <img src={item.imgUrl} alt="..." />
//             </div>
//             <div className='d-flex'>
//               <section >
//                 <h3>{item.productName}</h3>
//                 <h4> ${item.price}</h4>
//                 <p>{item.quantity}</p>
//               </section>
//               <section className='cart_btn'>
//                 <button onClick={()=>handelIncrement(item)}><FaPlus /></button>
//                 <button onClick={()=>handelDcrement(item)}><FaMinus/></button>
//                 <button onClick={()=>deleteHandele(item)}>✖️</button>
//               </section>
//             </div>
//           </div>
//         )) : <div>
//           <h3 >Your Cart is Emty</h3>
//         </div>}
//       </div>
//       <section >
//         <h5 className='cart_price'>Grand Totel:</h5>
//       </section>
//     </div>
//   );
// };

// export default Cart;
