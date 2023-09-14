import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import CardHome from "./Pages/CardHome"
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className=" min-h-screen bg-[#a7d6cb] ">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login />} />

          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/CardHome" element={<CardHome />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
