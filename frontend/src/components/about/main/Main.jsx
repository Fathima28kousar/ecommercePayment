import Counter from '../counter/Counter'
import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text}><h1>About Us</h1></div>
      <div className={styles.about}>
        <div className={styles.content}>
            <h1>We Are Your Favourite Store.</h1>
            <p>Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.</p>
            <p>Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.</p>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae id a voluptatem eos quod doloribus mollitia eaque illum repellat facere tempore reiciendis excepturi totam, beatae exercitationem nemo laborum quia ad?Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.</p>
        </div>
        <div className={styles.image}>
            <img src='/images/about.jpg' alt=''/>
        </div>
      </div>
      <Counter/>
      
    </div>
  )
}

export default Main
