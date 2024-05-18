import styles from "./Fruits.module.css";
import Button from "../button/Button";
import ProductList from "../../products/productlist/Productlist";
import items from "../../products/data";

const Fruits = () => {

  const goToBtn = () => {
    window.scrollTo({top:0,left:0,behavior:'smooth'})
  }

  const oddItems = items.filter((item, index) => index % 2 !== 0 && index < 7);
  return (
    <div className={styles.container}>
      <div className={styles.fruits}>
        <section>
          <h3>Farm Fresh Fruits</h3>
          <p>
            Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.
          </p>
          <Button text="SHOP NOW" icon="arrow" onClick={goToBtn}/>
          <img src="/images/lemon.jpeg" alt="" height="250px" />
        </section>
        <section>
          <h3>Fresh Vegetables</h3>
          <p>
            Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.
          </p>
          <Button text="SHOP NOW" icon="arrow" onClick={goToBtn}/>
          <img src="/images/cabbage.jpg" alt="" />
        </section>
        <section>
          <h3>Organic Legume</h3>
          <p>Phasellus sed urna mattis, viverra libero sed, aliquam est.</p>
          <Button text="SHOP NOW" icon="arrow" onClick={goToBtn}/>
          <img src="/images/legume.jpg" alt="" />
        </section>
      </div>
      <div className={styles.offer}>
        <h1>Get 25% Off On Your First Purchase!</h1>
        <Button text="SHOP NOW" icon="cart" onClick={goToBtn}/>
      </div>
      <div className={styles.triangle}></div>
      <h2>Try It For Free. No Registration Needed.</h2>

      <div className={styles.trendingProducts}>
        <h1>Trending Products</h1>
        <img src="/images/leaf.png" alt="" />
        <ProductList items={oddItems} />
      </div>
    </div>
  );
};

export default Fruits;
