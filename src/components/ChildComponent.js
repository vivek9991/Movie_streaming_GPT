import TilesComponent from "./TilesComponent";
import { categoryCount } from "./utils/constants";

const ChildComponent = () => {
  const categoryArr = ["now_playing", "popular", "top_rated", "upcoming"];
  return (
    <div
      style={{
        backgroundColor: "black",
        marginTop: "-160px",
        position: "relative",
        zIndex: 1,
        paddingTop: "20px",
      }}
    >
      {categoryArr.map((category) => (
        <div
          key={category}
          style={{
            marginTop: "-5px",
            marginBottom: "40px",
            marginLeft: "20px",
          }}
        >
          <div
            style={{ color: "white", fontSize: "30px", marginBottom: "10px" }}
          >
            {category === "now_playing"
              ? "Now playing"
              : category === "top_rated"
                ? "Top rated"
                : category[0].toUpperCase() + category.slice(1)}
          </div>
          <TilesComponent category={category} />
        </div>
      ))}
    </div>
  );
};

export default ChildComponent;
