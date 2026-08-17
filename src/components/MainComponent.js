import { useSelector } from "react-redux";
import VideoComponent from "./VideoComponent";
import TextComponent from "./TextComponent";

const MainComponent = () => {
  const mainMovie = useSelector((store) => store.movieList.movieList)?.[0];
  if (!mainMovie) return;
  return (
    <div>
      <VideoComponent movieId={mainMovie.id} />
      <TextComponent mainMovie={mainMovie} />
    </div>
  );
};
export default MainComponent;
