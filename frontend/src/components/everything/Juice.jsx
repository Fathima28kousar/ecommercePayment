import Search from "../search/Search";
import items from '../products/data'


const Juice = () => {
  const reversedItems = items.slice(6, 12)
  return (
    <div>
      <Search items={reversedItems} />
    </div>
  )
}

export default Juice
