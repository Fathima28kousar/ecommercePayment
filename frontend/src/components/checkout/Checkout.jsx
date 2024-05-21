import styles from "./Checkout.module.css";
import Button from "../home/button/Button";
import { useState } from 'react'
import { useHistory } from "react-router-dom";

const Checkout = (props) => {
  const { cartItems = {} } = props.location.state || {};
  const { totalPrice = {} } = props.location.state || {};

  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    state: '',
    pincode: '',
    address: '',
    phone: '',
    paymentMethod: 'Online Payment',
})

const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "payment") {
      setFormData({ ...formData, paymentMethod: value });
  } else {
      setFormData({ ...formData, [name]: value });
  }
}

const selectedPaymentMethod = formData.paymentMethod;

// Function to handle form submission
const handleSubmit = async (event) => {
  event.preventDefault();
  // console.log("Form submitted with data:", formData);
  if (selectedPaymentMethod === 'Cash On Delivery' || selectedPaymentMethod === 'Online Payment') { 
      history.push({
        pathname:"/billingDetails",
        state: {cartItems: cartItems, totalPrice: totalPrice, paymentMethod: selectedPaymentMethod}
        }); // Redirect to a page for COD success
  }
};


 
  return (
    <div className={styles.container}>
      <div className={styles.checkout}>
        <h1>Checkout</h1>
        <div className={styles.billingDetails}>
          <div className={styles.order}>
            <h3 className={styles.h3}>Your order</h3>
            {Object.keys(cartItems).length > 0 ?(
              <>
            <table>
              <thead>
                <tr>
                  <th className={styles.product}>Product</th>
                  <th className={styles.subtotal}>SubTotal</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(cartItems).map((thing) => (
                  <tr key={thing.id}>
                    <td>{`${thing.name} \u00D7  ${thing.quantity}`} </td>
                    <td className={styles.subTr}>
                      {`$ ${thing.price * thing.quantity}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.total}>
              <h3> Total Price: </h3>
              <h2>{`$ ${totalPrice}`}</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="radio"
                name="payment"
                id="online"
                value="Online Payment"
                checked={formData.paymentMethod === 'Online Payment'}
                onChange={handleChange}

              />
              <label htmlFor="online">Online Payment</label>
              <br />
              <br />
              <input
                type="radio"
                name="payment"
                id="cash"
                value="Cash On Delivery"
                checked={formData.paymentMethod === 'Cash On Delivery'}
                onChange={handleChange}
              />
              <label htmlFor="cash">Cash On Delivery</label>
              <Button type='submit' text='PLACE ORDER'  />
            </form>
            </>):(<p>Your cart is empty.</p>)}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Checkout;
