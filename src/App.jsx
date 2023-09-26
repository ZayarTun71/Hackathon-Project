import "./assets/scss/style.scss";
import Cookies from "js-cookie";
import { AppRoutes } from "./routes/appRoutes";

function App() {

  if (process.env.NODE_ENV === "development") {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
  }
  
  return (
    <div>
     <AppRoutes/>
    </div>
  );
}

export default App;
