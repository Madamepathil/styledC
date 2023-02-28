import { click } from "@testing-library/user-event/dist/click";
import "./App.css";
import Button from "./components/Button";
import HideCard from "./components/HideCard";
import Navbarr from "./components/Navbarr";

function App() {
  const clicked = () => {
    console.log("clicked");
  };
  return (
    <div>
      {/*  <Navbarr />

      <HideCard /> */}
      <Button bg={"red"} color="purple" onClick={clicked} />
    </div>
  );
}

export default App;
