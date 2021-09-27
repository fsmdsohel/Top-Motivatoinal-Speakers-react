import "./App.css";
import DisplayData from "./components/DisplayData/DisplayData";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <DisplayData></DisplayData>
      </div>
    </>
  );
}

export default App;
