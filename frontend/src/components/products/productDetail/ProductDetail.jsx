import React, { useState, useEffect } from "react";
import styles from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import items from "../data";
import Button from "../../home/button/Button";
import ReactImageMagnify from "react-image-magnify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom'


const ProductDetail = ({ cart = [], setCart, count, setCount }) => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    const newQuantity = parseInt(value);

    if (value === '' || (newQuantity >= 1 && newQuantity <= 1000)) {
      setQuantity(value === '' ? '' : newQuantity);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const selectedItem = items.find((item) => item.id === parseInt(id));
  if (!selectedItem) {
    return <div className={styles.container}>Product not found</div>;
  }

  const addToCart = () => {
    if (!quantity || quantity <= 0) {
      toast.error("Invalid quantity. Please enter a valid quantity.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const { id, price, name, description, image1 } = selectedItem;
    const obj = { id, price, name, description, image1, quantity };

    const existingIndex = cart.findIndex(item => item.id === id);
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += quantity;
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      setCart(prevCart => [...prevCart, obj]);
      localStorage.setItem('cart', JSON.stringify([...cart, obj]));
    }
    setCount((prevCount) => prevCount + quantity);
    setQuantity(1); // Reset quantity input field to 1 after adding to cart

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
              max="1000"
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
