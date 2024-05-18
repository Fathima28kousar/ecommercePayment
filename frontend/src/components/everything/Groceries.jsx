import items from '../products/data'
import Search from '../search/Search'

const Groceries = () => {
    const reversedItems = items.slice().reverse()
  return (
    <div>
      <Search items={reversedItems} />
    </div>
  )
}

export default Groceries
