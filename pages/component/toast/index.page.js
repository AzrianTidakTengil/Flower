import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function toaster(type, value) {
  if (type === "warning") {
    toast.warn(value, {
      position: "bottom-center",
      autoClose: 3500,
      hideProgressBar: false,
      progress: undefined,
      pauseOnHover: false,
    });
  } else if (type === "success") {
    toast.success(value, {
      position: "bottom-center",
      autoClose: 3500,
      hideProgressBar: false,
      progress: undefined,
      pauseOnHover: false,
    });
  } else if (type === "error") {
    toast.error(value, {
      position: "bottom-center",
      autoClose: 3500,
      hideProgressBar: false,
      progress: undefined,
      pauseOnHover: false,
    });
  } else {
    toast.info(value, {
      position: "bottom-center",
      autoClose: 3500,
      hideProgressBar: false,
      progress: undefined,
      pauseOnHover: false,
    });
  }
}
