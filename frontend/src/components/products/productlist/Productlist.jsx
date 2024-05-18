import styles from  './ProductList.module.css'
import Product from '../product/Product'

const Productlist = ({items}) => {
  
  return (
    <div className={styles.productList}>
      {items.map(item => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Productlist
