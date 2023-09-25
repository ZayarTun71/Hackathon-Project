import "./assets/scss/style.scss";
import Cookies from "js-cookie";
import { AppRoutes } from "./routes/appRoutes";

function App() {

  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
  }
  
  const token = Cookies.get("token");

  return (
    <div>
     <AppRoutes/>
    </div>
  );
}

export default App;
