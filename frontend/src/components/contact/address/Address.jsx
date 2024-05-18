import styles from "./Address.module.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Address = () => {
  return (
    <div className={styles.container}>
      <div className={styles.address}>
        <div className={styles.header}>
          <h1>Get In Touch</h1>
        </div>
        <div className={styles.info}>
        <section>
            <FaPhone className={styles.icon}/>
            <p>+123 456 7890</p>
            <p>+123 456 7890</p>
          </section>
          <section>
            <FaEnvelope className={styles.icon}/>
            <p className={styles.email}>info@OS.com</p>
            <p className={styles.email}>support@OS.com</p>
          </section>
          <section>
            <FaMapMarkerAlt className={styles.icon}/>
            <p>1569 Ave, New York,</p>
            <p>NY 10028, USA</p>
          </section>
        </div>
      </div>
      <div className={styles.faq}>
        <h1>Frequently Asked Question!</h1>
        <img src='/images/leaf.png' alt='leaf'/>
      </div>
    </div>
  );
};

export default Address;
