import TileComponent from "./TileComponent";
import { categoryCount } from "./utils/constants";

const ChildComponent = () => {
  const categoryArr = new Array(5).fill("dummy");
  return (
    <div>
      {categoryArr.map((category) => (
        <TileComponent />
      ))}
    </div>
  );
};

export default ChildComponent;
