import styles from "./Product.module.css";
import { Link } from "react-router-dom";



const Product = ({ id, name, image1, price, category }) => {
  return (
      <div className={styles.product}>
        <Link to={`/productDetail/${id}`}>
          <img src={image1} alt={name} />
          <p>{category}</p>
          <h4>{name}</h4>
          <span>{`$${price}.00`}</span>
        </Link>
      </div>
  );
};

export default Product;
