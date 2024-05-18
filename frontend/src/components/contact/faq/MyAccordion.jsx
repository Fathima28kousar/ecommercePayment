import {useState} from 'react'
import styles from './MyAccordion.module.css'
import { FaCaretRight,FaCaretUp  } from "react-icons/fa";

const MyAccordion = ({question,answer}) => {
  const [show,setShow] = useState(false);
  return (
    <div className={`${styles.item} ${show ? styles.active : ''}`}>
      <div className={styles.question} onClick={() => setShow(!show)}>
        <h4>{question}</h4>
        <p>{show ? <FaCaretUp/> : <FaCaretRight/>}</p>
      </div>
      {show && <p className={styles.answer}>{answer}</p>}
      <hr/>
    </div>
  )
}

export default MyAccordion
