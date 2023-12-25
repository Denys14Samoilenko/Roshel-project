import "./App.scss";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { ToTopBtn } from "./components/ToTopBtn";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="outlet">
          <Outlet />
        </div>
        <Footer />
        <ToTopBtn />
      </div>
    </div>
  );
}
export default App;
