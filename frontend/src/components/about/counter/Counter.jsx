import styles from './Countup.module.css'
import Countup from 'react-countup'
import {useState} from 'react'
import ScrollTrigger from 'react-scroll-trigger'

const Counter = () => {
  const [counterOn,setCounterOn] = useState(false)
  return (
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      <div className={styles.counter}>

          <h3>Numbers Speak for Themselves!</h3>

        <div className={styles.numberContainer}>
        <div className={styles.numbers}>
          <h2> {counterOn && <Countup start={4800} end={5000} duration={1.5} delay={1}/>} + </h2>
          <p>Curated Products</p>
        </div>
        
        <div className={styles.numbers}>
          <h2> {counterOn && <Countup start={0} end={800} duration={1.5} delay={1}/>} + </h2>
          <p>Curated Products</p>
        </div>
        
        <div className={styles.numbers}>
          <h2> {counterOn && <Countup start={0} end={60} duration={2} delay={1}/>} + </h2>
          <p>Product Categories</p>
        </div>
        </div>
        </div>
        
    </ScrollTrigger>
    
  )
}

export default Counter
