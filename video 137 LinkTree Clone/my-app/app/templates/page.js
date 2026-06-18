"use client";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Templates() {

  const notify = () => toast("Simple Toast");

  const success = () =>
    toast.success("Link created successfully!");

  const error = () =>
    toast.error("Something went wrong!");

  const warning = () =>
    toast.warning("Please fill all fields!");

  const info = () =>
    toast.info("New update available!");

  const promiseToast = () => {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Done!");
      }, 3000);
    });

    toast.promise(myPromise, {
      pending: "Uploading...",
      success: "Upload complete!",
      error: "Upload failed!",
    });
  };

  const customToast = () => {
    toast.success("Custom Toast!", {
      position: "bottom-left",
      autoClose: 2000,
      theme: "dark",
    });
  };

  return (
    <div className="min-h-screen p-10 flex flex-col gap-4 items-center justify-center bg-gray-100">

      <button
        onClick={notify}
        className="bg-gray-700 text-white px-4 py-2 rounded"
      >
        Simple Toast
      </button>

      <button
        onClick={success}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Success Toast
      </button>

      <button
        onClick={error}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Error Toast
      </button>

      <button
        onClick={warning}
        className="bg-yellow-500 text-black px-4 py-2 rounded"
      >
        Warning Toast
      </button>

      <button
        onClick={info}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Info Toast
      </button>

      <button
        onClick={promiseToast}
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        Promise Toast
      </button>

      <button
        onClick={customToast}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Custom Toast
      </button>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </div>
  );
}