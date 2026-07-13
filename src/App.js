import "./App.css";
import Body from "./components/Body";
import { netflixGPTStore } from "./components/utils/reduxStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={netflixGPTStore}>
      <Body />
    </Provider>
  );
}

export default App;
