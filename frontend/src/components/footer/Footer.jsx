import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaTwitter,FaFacebook,FaInstagram,FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section1}>
          <img src="/images/whitelogo.png" alt="logo" />
          <p>
            Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
            Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse
            quis faucibus urna. Suspendisse pellentesque.
          </p>
        </div>
        <div className={styles.section2}>
          <div className={styles.part1}>
            <h2>Quick Links</h2>

            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/cart">Checkout</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/index">Home</Link>
              </li>
              <li>My Account</li>
              <li>Shop</li>
            </ul>
          </div>

          <div className={styles.part2}>
            <h2>Site Links</h2>
            <ul>
              <li>Privacy Policy</li>
              <li>Shipping Details</li>
              <li>Offers Coupons</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className={styles.section3}>
          <div className={styles.footer1}>
            <h2>Download Our Mobile App</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              aliquam gravida sollicitudin. Praesent porta enim mi, non
              tincidunt libero interdum sit amet.
            </p>
          </div>
          <div className={styles.footer2}>
            <h2>Quick Links</h2>
            <ul>
              <li>Know More About Us</li>
              <li>Visit Store</li>
              <li>Let’s Connect</li>
              <li>Locate Stores</li>
            </ul>
            <div className={styles.app}>
              <img src="/images/play-store.png" alt="apps" />
              <img src="/images/app-store.png" alt="apps" />
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className={styles.end}>
        <p>Copyright © 2024 | Organic Store</p>
        <div className={styles.social}>
            <li><FaTwitter/></li>
            <li><FaFacebook/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedin/></li>
           
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
