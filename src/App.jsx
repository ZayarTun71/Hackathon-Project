import "./assets/scss/style.scss";
import Cookies from "js-cookie";
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
