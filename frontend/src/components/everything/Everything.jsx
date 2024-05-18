import Search from "../search/Search";
import items from '../products/data'

const Everything = () => {
  return (
    <div>
      <Search items={items} />
    </div>
  );
};

export default Everything;
