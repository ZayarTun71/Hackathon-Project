import { useEffect } from "react";
import Login from "./pages/auth/login";
import "./assets/scss/style.scss";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import Dashboard from "./pages";
import Register from "./pages/auth/register";
import DashboardLayout from "./components/admin_dashboard/AdminDashboardLayout";
import { AppRoutes } from "./routes/appRoutes";

function App() {

  const token = Cookies.get("token");

  return (
    <div>
     <AppRoutes/>
    </div>
  );
}

export default App;
