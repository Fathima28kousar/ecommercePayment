import { useEffect, useState } from "react";
import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import items from "../data";
import Button from "../../home/button/Button";
import ReactImageMagnify from "react-image-magnify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from 'react-router-dom'

const ProductDetail = ({ cart, setCart, count, setCount }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [productTotalInCart, setProductTotalInCart] = useState(0);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity >= 1 ? newQuantity : 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedItem = items.find((item) => item.id === parseInt(id)); //finding item based on id
  if (!selectedItem) {
    return <div className={styles.container}>Product not found</div>; //if item not found
  }

  const addToCart = () => {
    const { id, price, name, description, image1 } = selectedItem;
    const obj = { id, price, name, description, image1, quantity };

    const existingIndex = cart.findIndex(item => item.id === id);  // Check if the item already exists in the cart
    if (existingIndex !== -1){   // If the item exists, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }else{
      setCart(prevCart => [...prevCart, obj]);
      localStorage.setItem('cart', JSON.stringify([...cart, obj]));
    }
    setCount((prevCount) => prevCount + quantity);
    setProductTotalInCart((prevTotal) => prevTotal + quantity);
    

    // console.log("cart element", cart);
    toast.success(` ${quantity} item Added !`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    
  };

  return (
    <div className={styles.mainContainer}>
        
      <div className={styles.container}>
        <div className={styles.productImg}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: selectedItem.name,
                isFluidWidth: true,
                src: selectedItem.image2,
              },
              largeImage: {
                src: selectedItem.image2,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </div>
        <div className={styles.productCont}>
          <h1>{selectedItem.name}</h1>
          <div className={styles.shipping}>
            <h4>Price: ${selectedItem.price}.00</h4>
            <p>+ Free Shipping</p>
          </div>

          <p>{selectedItem.description}</p>
          <div className={styles.addToCart}>
            <input
              type="number"
              min="1"
              max="100"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <Button text="ADD TO CART" onClick={addToCart} />
          </div>
          {cart.length > 0 && <Link to="/cart">View Cart</Link>}
        </div>
        
      </div>
      <div className={styles.description}>
        <h4>Description</h4>
        <p>{selectedItem.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
