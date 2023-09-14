import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import CardHome from "./Pages/CardHome"
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { initializeApp } from 'firebase/app';
import { config } from './config/config';
import Dashboard from "./Pages/Dashboard";
import AuthRoute from "./components/AuthRoute";
import ActivityHome from "./Pages/ActivityHome";
import CardActivity from "./Pages/CardActivity";
import ActivitySelect from "./Pages/ActivitySelect";
import Home from "./Home";

initializeApp(config.firebaseConfig);

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className=" min-h-screen bg-[#a7d6cb] ">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={<AuthRoute ><Dashboard /> </AuthRoute> }/>
          <Route path="/Login" element={ <Login />} />
          <Route path="/" element={<Home />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route path="/CardHome" element={<CardHome />}/>
          <Route path="/ActivityHome" element={<ActivityHome />}/>
          <Route path="/CardActivity" element={<CardActivity />}/>
          <Route path="/ActivitySelect" element={<ActivitySelect />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
