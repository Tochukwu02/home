import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import image from "./assets/images/p.jpg";
import Navbar from './components/Navbar/Navbar';

const App =() => {
  return (
    <>
      <Card text="Transportation and Ease" image={image} />
      <Navbar />
    </>
  );
}

export default App;
