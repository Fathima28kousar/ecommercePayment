import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from './OnlineSuccess.module.css'
import Button from './home/button/Button'

const Online = ({ location }) => {
  const {firstName,lastName, emails,pincode, address, apartment, phone, totalPrice, cartItems,} = location.state || {};
  // console.log( firstName, lastName, emails, pincode, address, apartment, phone, totalPrice, cartItems);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const history = useHistory();


  const placeOrder =() => {
    if (!name.trim() ) {
      alert("Name cannot be empty.");
      return;
    }
    if (!totalPrice) {
      alert("Total price cannot be empty.");
      return;
    }
    var options = {
      key: "rzp_test_wucadtaz2NQLqm",
      key_secret: "Un2BvQcbNWU4MpjvhlF28G9W",
      amount: parseInt(totalPrice * 100),
      currency: "INR",
      // order_receipt: 'order_rcptid_' + formFields.name,
      name: "Organic Store",
      description: "for testing purpose",
      handler: function (response) {
          // console.log(response)
        const paymentId = response.razorpay_payment_id
        setName("");
        setAmount("");
        history.push({
          pathname: "/online",
          state: {
            firstName,
            lastName,
            emails,
            pincode,
            address,
            apartment,
            phone,
            cartItems: cartItems,
            totalPrice: totalPrice,
          },
        });
          },
          theme: {
            color: "#3399cc"
          }
      };
      var pay = new window.Razorpay(options);
      pay.open();
  }


  return (
    <div className={styles.register}>
      <div className={styles.display}>
        <h1>Online payment</h1>
      <div className={styles.form}>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <label htmlFor="amount">Enter amount</label>
        <input
          type="number"
          id="amount"
          // value={amount}
          value={totalPrice}
          disabled
          onChange={(e) => setAmount(e.target.value)}
        />
      </form>
      <Button text="Pay via Razorpay" type="submit" onClick={placeOrder}/>
    </div>
    </div>
    </div>
   
  );  
};
export default Online;
