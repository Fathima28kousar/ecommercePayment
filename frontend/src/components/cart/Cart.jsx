  import styles from "./Cart.module.css";
  import Button from "../home/button/Button";
  import { Link } from "react-router-dom";
  import { FaTrash } from "react-icons/fa";
  import { useEffect } from "react";

  const Cart = ({ cart, setCart }) => {


    useEffect(() => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }, []);

    // Update local storage whenever cart changes
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const removeFromCart = (thingId) => {
      const updatedCart = cart.filter(
        (thing) => thing.id !== thingId && thing.quantity > 0
      );
      setCart(updatedCart);
    };

    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity
    });

    return (
      <div className={styles.container}>
        {cart.length === 0 ? (
          <>
            <div className={styles.empty}>
              <h1>Your Cart is Empty</h1>
              <Link to="/everything">
                <Button text="CONTINUE SHOPPING..." />
              </Link>
            </div>
          </>
        ) : (
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map((item,index) => {
                  return(
                    <tr key={index} className={styles.cart}>
                      <td data-lable="Image">
                        <Link to={`/productDetail/${item.id}`}>
                          <div>
                            <img src={item.image1} alt={item.name} />
                          </div>
                        </Link>
                      </td>
                      <td data-lable="Product">
                        <Link to={`/productDetail/${item.id}`}>
                          <p className={styles.thingName}>{item.name}</p>
                        </Link>
                      </td>
                      <td data-lable="Price">{item.price}</td>
                      <td data-lable="Quantity">
                      <div className={styles.quantity}>
                            <button className={styles.minus} 
                              onClick={() => {
                                let newcart = [...cart]
                                if(newcart[index].quantity >1 ){
                                  newcart[index].quantity -= 1
                                  setCart(newcart)
                                }
                              }}
                            >-</button>
                            <span>{item.quantity}</span>
                            <button className={styles.plus}
                            onClick={()=>{
                              let newcart = [...cart]
                              newcart[index].quantity += 1
                              setCart(newcart)
                            }}
                            >+</button>
                          </div>
                      </td>
                      <td data-lable="Subtotal">{item.price * item.quantity}</td>
                      <td data-lable="Delete">
                        <FaTrash
                          onClick={() => removeFromCart(item.id)}
                          className={styles.trash}
                        />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className={styles.total}>
              <div className={styles.subtotal}>
                <div className={styles.subtotals}>
                  <p>Sub Total:</p>
                  <p>{` $${totalPrice}`}</p>
                </div>
                <div className={styles.subtotals}>
                  <p>Grand Total:</p>
                  <p>{` $${totalPrice}`}</p>
                </div>
                <hr />
              </div>
              <Link
                to={{
                  pathname: "/checkout",
                  state: { cartItems: cart, totalPrice: totalPrice },
                }}
              >
                <Button text="CHECKOUT"/>
              </Link>
            </div>
          </div>
        )}

        {cart.length !== 0 && (
          <div>
            <Button onClick={() => setCart([])} text="CLEAR CART" />
          </div>
        )}
      </div>
    );
  };

  export default Cart;
