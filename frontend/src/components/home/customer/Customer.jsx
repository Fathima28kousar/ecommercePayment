import styles from "./Customer.module.css";
import { FaStar } from "react-icons/fa";
import Button from "../button/Button";

const Customer = () => {
  const goToBtn = () => {
    window.scrollTo({top:0,left:0,behavior:'smooth'})
  }
  
  return (
    <div className={styles.container}>
      
      <div className={styles.customer}>
        <h1>Customers Reviews</h1>
        <img src="/images/leaf.png" alt="" />
        <div className={styles.sections}>
          <section className={styles.review}>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className={styles.testimonial}>
              <p>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className={styles.testimage}>
              <img src="/images/customer1.png" alt="" />
              <p>Mila kunis</p>
            </div>
          </section>

          <section className={styles.deal}>
            <h1>Deal Of The Day 15% Off On All Vegetables!</h1>
            <p>I am text block. Click edit button to change this tex em ips.</p>
            <Button text="SHOP NOW" icon="arrow" onClick={goToBtn}/>
          </section>

          <section className={styles.review}>
            <div className={styles.stars}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className={styles.testimonial}>
              <p>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className={styles.testimage}>
              <img src="/images/customer2.png" alt="" />
              <p>Mila kunis</p>
            </div>
          </section>
        </div>
      </div>
      <div className={styles.brands}>
        <h3>Featured Brands:</h3>
        <img src="./images/logo-1.svg" alt="logo" />
        <img src="./images/logo-2.svg" alt="logo" />
        <img src="./images/logo-3.svg" alt="logo" />
        <img src="./images/logo-4.svg" alt="logo" />
        <img src="./images/logo-5.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Customer;
