import React from 'react'
import {useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import styles from './Success.module.css'

const Success = ({setCart}) => {
    const location = useLocation();
    // console.log(location.state);
    const [formData, setFormData] = useState(null);
    const formdata = location.state
    // console.log(formdata)
    const { firstName, lastName, emails, pincode, address, apartment, phone } = location.state || {};
    const { cartItems, totalPrice } = location.state || {};
    // console.log(cartItems,totalPrice)
    // console.log(firstName, lastName, emails, pincode, address, apartment, phone)
    const [currentDate,setCurrentDate] = useState(new Date())


    
  useEffect(() => {
    // Call handleSuccess when the component mounts
    handleSuccess();
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
        // Fetch data from backend API based on form ID (replace 'formId' with actual ID)
        const response = await axios.get(`https://organicstoreback.vercel.app/api/`);

        // Set form data in component state
        setFormData(response.data);
        
    } catch (error) {
        // console.error('Error fetching data:', error);
    }
};



  const handleSuccess = () => {
    // Clear the cart when the order is successful
    setCart([]);
    localStorage.removeItem('cart');
  };


  if (!cartItems || !totalPrice) {
    return <div className={styles.noItems}>
      <h1>No items in cart.</h1>
    </div>;
  }
  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <div>
        {location.state ? (
          <div className={styles.COD}>
            <h4 className={styles.placed}>
              Thank you.Your order has been successfully placed
            </h4>
            <div className={styles.userInfo}>
            <div>
                <p>Payment Method:</p>
                <h4>Online</h4>
              </div>

              <div>
                <p>Total Price:</p>
                <h4>${totalPrice}</h4>
              </div>

              <div>
                <p>Date:</p>
                <h4>{currentDate.toLocaleDateString()}</h4>
              </div>

              
              
            </div>
            <div>
              
              <h4>Address:</h4>
              <p>{apartment},{address},{pincode}</p>
              
              <h5>Your Order will be delivered within 2 days</h5>
            </div>
          </div>
        ) : (
          <p>No order details available.</p>
        )}
      </div>
      <div>
        <div className={styles.order}>
        <h3 className={styles.h3}>Order details</h3>
          {Object.keys(cartItems).length > 0 ? (
            <>
              <table border="1">
                <thead>
                  <tr>
                    <th className={styles.product}>Product</th>
                    <th className={styles.subtotal}>Total</th>
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
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Success

