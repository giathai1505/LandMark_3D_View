import { Route, Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";

function App() {
  document.title = "Landmark 3D View";
  return (
    <div className="App">
      <HomePage />
      <div className="z-10">
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
