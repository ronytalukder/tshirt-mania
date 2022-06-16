import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import {Routes, Route} from'react-router-dom'
import OrderReview from "./components/OrderReview/OrderReview";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/orderreview" element={<OrderReview/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
