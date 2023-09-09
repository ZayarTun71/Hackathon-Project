import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (message, status) => {
  const toastFunction = toast[status];

  if (toastFunction) {
    toastFunction(message, {
      position: "top-center",
      autoClose: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    });
  }
};

const Alert = () => {
  return (
    <ToastContainer
      position="top-center"
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};

export default Alert;
