import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = () => {

  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      className="toast-container"
    />
  );
};

export default Toaster;
