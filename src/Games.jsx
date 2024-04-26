import "./index.css";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Games() {
  useEffect(() => {
    const showToast = () => {
      const toastId = "welcome-toast";
      toast.dark("🏆 Time to Play!", {
        toastId: toastId,
        className: "toast-style",
        bodyClassName: "toast-body",
        progressClassName: "toast-progress",
        theme: "dark",
        closeOnClick: true,
        position: "top-right",
      });
    };

    showToast();
  }, []);
  return (
    <div className="homepage">
      <div className="Games relative bg-cover bg-center h-screen flex justify-center items-center">
        <div className="A-container absolute bottom-30 left-40 rounded-2xl p-64 border-black border text-black text-2xl transition-transform hover:scale-200">
          <a
            href="https://main--projectseleneb.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Game A
          </a>
        </div>
        <div className="B-container absolute bottom-30 right-40 rounded-2xl p-64 border-white border text-white text-2xl transition-transform hover:scale-200">
          <a
            href="https://66298f8a38206e00087383a4--projectselene.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Game B
          </a>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Games;
