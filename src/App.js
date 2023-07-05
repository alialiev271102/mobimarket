import LoginPage from "./pages/LoginPage"
import {Link, Route, Routes, useNavigate} from "react-router-dom"
import { useEffect } from "react";
import './App.css';

function App() {

  const navigate = useNavigate();
  useEffect(()=> {
    navigate("/login");
  },[]);

  return (
    <>
      <Routes>
                <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </>
  );
}

export default App;
