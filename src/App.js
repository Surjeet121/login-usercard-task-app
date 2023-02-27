import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./components/userTable";
import CardUser from "./components/userCard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/user-table" element={<Users />} />
          <Route path="/user-card-view" element={<CardUser />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}
