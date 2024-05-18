import styles from './Certify.module.css'
import Button from "../../home/button/Button";
import {FaRegCheckCircle } from "react-icons/fa";



const Certify = () => {
  const goToBtn = () => {
    window.scrollTo({top:0,left:0,behavior:'smooth'})
  }
  return (
    <div>
      <div className={styles.certificate}>
        <div className={styles.heading}>
          <img src="/images/organic-badge.png" alt="organic badge" />
          <div className={styles.text}>
            <h2>Certified Products</h2>
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
        <h1>We Deal With Various Quality Organic Products!</h1>
        <img src="/images/leaf.png" alt="" />
        <div className={styles.list}>
          <ul>
            <li>
              <FaRegCheckCircle className={styles.icon}/> Fresh fruits
            </li>
            <li>
              <FaRegCheckCircle className={styles.icon}/> Dry fruits
            </li>
            <li>
              <FaRegCheckCircle className={styles.icon}/> Fresh vegetables
            </li>
            <li>
              <FaRegCheckCircle className={styles.icon}/> Dried vegetables
            </li>
            <li>
              <FaRegCheckCircle className={styles.icon}/> Dried Coffee
            </li>
          </ul>
          <ul>
            <li>
              <FaRegCheckCircle className={styles.icon}/> Beauty products
            </li>
            <li>
              <FaRegCheckCircle className={styles.icon}/> Milk products
            </li>
            <li>
              <FaRegCheckCircle className={styles.icon}/> Organic honey
            </li>
            <li>
              <FaRegCheckCircle className={styles.icon}/> Organic tea
            </li>
            <li>
              <FaRegCheckCircle className={styles.icon}/> Dried vegetables
            </li>
          </ul>
        </div>
        <Button text="START SHOPPING" icon="cart" onClick={goToBtn}/>
      </div>
    </div>
  )
}

export default Certify
