import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { AuthContextProvider } from "./components/context/AuthContext";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/SignUp";
import ProtectRoute from "./components/ProtectRoute";
import Account from "./pages/Account/Account";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element ={<SignUp />}></Route>
          <Route path="/account" element={<ProtectRoute><Account /></ProtectRoute>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
