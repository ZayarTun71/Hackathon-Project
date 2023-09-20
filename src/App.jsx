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

  return (
    <div>
      <Routes>
        {!token && (
          <>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}

        {token && (
          <>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
