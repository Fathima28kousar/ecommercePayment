import Button from '../home/button/Button'
import styles from './Form.module.css'
import { useState } from 'react'
import axios from 'axios'
import { useHistory,useLocation } from 'react-router-dom'




const Form = ({ setCart }) => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [emails,setEmail] = useState("")
    const [pincode,setPincode] = useState("")
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState("")
    const [apartment,setApartment] = useState("")
    const [city,setCity] = useState("")
    const [formErrors, setFormErrors] = useState({});
    const history = useHistory();
    const location = useLocation();
    const { cartItems, totalPrice, paymentMethod  } = location.state || {};

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!firstName || !lastName || !emails || !pincode || !address || !phone || !apartment || !city) {
            setFormErrors({
                firstName: !firstName ? '*This field is required' : '',
                lastName: !lastName ? '*This field is required' : '',
                emails: !emails ? '*This field is required' : '',
                pincode: !pincode ? '*This field is required' : '',
                address: !address ? '*This field is required' : '',
                phone: !phone ? '*This field is required' : '',
                apartment: !apartment ? '*This field is required' : '',
                city: !city ? '*This field is required' : ''
            });
            return;
        }

        try{
            let formField = new FormData()
        
            formField.append('firstName',firstName)
            formField.append('lastName',lastName)
            formField.append('emails',emails)
            formField.append('pincode',pincode)
            formField.append('address',address)
            formField.append('phone',phone)
            formField.append('apartment',apartment)
            formField.append('city',city)
    
            await axios({
                method: 'post',
                url: 'https://organicstoreback.vercel.app/api/',
                data: formField

            }).then((response) => {
                if (paymentMethod === 'Online Payment'){
                    history.push( {
                        pathname:'/success',
                        state: {
                            firstName,
                            lastName,
                            emails,
                            pincode,
                            address,
                            phone,
                            apartment,
                            city,
                            cartItems: cartItems,
                            totalPrice: totalPrice
                        }
                    });
                }else if (paymentMethod === 'Cash On Delivery'){
                    history.push({
                        pathname: '/codsuccess',
                        state: {
                            firstName,
                            lastName,
                            emails,
                            pincode,
                            address,
                            phone,
                            apartment,
                            city,
                            cartItems: cartItems,
                            totalPrice: totalPrice
                        }
                    });
                    
                }
               
            })
            // Clear the cart after successful order
            // setCart([]); // Set cart to an empty array
        }
       
        catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error("Response data:", error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received from server.");
            } else {
                // Something else happened while setting up the request
                console.error("Error:", error.message);
            }
        }
    }


  return (
    <div className={styles.container}>
        <div className={styles.billingDetails}>
            <h2>Billing details</h2>
        </div>
      <form action="https://organicstoreback.vercel.app/api/" method="post" onSubmit={handleSubmit}>
            <div className={styles.name}>
                <div className={styles.firstName}>
                    <label>First Name</label> <br/>
                    <input type='text' name='firstName' required id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    {formErrors.firstName && <em className={styles.error}>{formErrors.firstName}</em>}
                    
                </div>

                <div className={styles.lastName}>
                    <label>Last Name</label> <br/>
                    <input type='text' name='lastName' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    {formErrors.lastName && <em className={styles.error}>{formErrors.lastName}</em>}
                </div>
            </div>
            <div >
                <label>Street address</label> <br/>
                <input type='text' name='apartment' value={apartment} onChange={(e) => setApartment(e.target.value)} placeholder='House number and apartment name' />
                {formErrors.apartment && <em className={styles.error}>{formErrors.apartment}</em>} <br/> <br/>
                

                <input type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Street Address'/>
                {formErrors.address && <em className={styles.error}>{formErrors.address}</em>}
            </div>
            <div>
                <label>Town/City</label> <br/>
                <input type='text' name='city' value={city} onChange={(e) => setCity(e.target.value)}/>
                {formErrors.city && <em className={styles.error}>{formErrors.city}</em>}
            </div>
            <div>
                <label>PIN Code</label> <br/>
                <input type='number' name='pincode' value={pincode} onChange={(e) => setPincode(e.target.value)}/>
                {formErrors.pincode && <em className={styles.error}>{formErrors.pincode}</em>}
            </div>
            <div>
                <label>Phone</label> <br/>
                <input type='tel' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                {formErrors.phone && <em className={styles.error}>{formErrors.phone}</em>}
            </div>
            <div>
                <label>Email address</label> <br/>
                <input type='email' name='emails' value={emails} onChange={(e) => setEmail(e.target.value)} />
                {formErrors.emails && <em className={styles.error}>{formErrors.emails}</em>}
            </div>
            <Button type='submit' text='Proceed to Checkout' onClick={handleSubmit}/>
            
        </form>
    </div>
  )
}

export default Form
