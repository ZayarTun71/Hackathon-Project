import { useEffect } from "react";
import Login from "./pages/auth/login";
import "./assets/scss/style.scss";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import Dashboard from "./pages";
import Register from "./pages/auth/register";

function App() {
  const navigate = useNavigate();

  const [token, role] = [Cookies.get("token"), Cookies.get("role")];

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
    if (token !== null) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {token !== null && (
          <Route
            path="/dashboard/*"
            element={token ? <Dashboard /> : <Navigate to="/" />}
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
