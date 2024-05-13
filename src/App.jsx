import "./App.css";
import { useEffect, useState } from "react";
import sea from "../public/sea.mp4";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [text, setText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const phrase = "May the odds be ever in your favor";

  useEffect(() => {
    const textInterval = setInterval(() => {
      setText((prevText) => {
        if (prevText.length === phrase.length) {
          clearInterval(textInterval);
          return prevText;
        }
        return prevText + phrase.charAt(prevText.length);
      });

      setCursorPosition((prevPosition) => prevPosition + 1);
    }, 100); // Adjust the interval speed (milliseconds per character)
  }, []);

  useEffect(() => {
    const showToast = () => {
      const toastId = "welcome-toast";
      toast.dark("🏆 Welcome to my Experiment!", {
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
    <section className="homepage">
      <video autoPlay loop muted className="video-bg">
        <source src={sea} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="App relative bg-cover bg-center h-screen">
        <header className="App-header text-blue-800 text-6xl flex justify-center items-center mt-20">
          Welcome to Project Musa
        </header>
        <div className="hg text-3xl text-sky-600 flex justify-center items-center mt-48">
          <span className="max-w-[650px]" style={{ position: "relative  " }}>
            {text}
            {cursorPosition === text.length && (
              <span className="cursor-animation">|</span>
            )}
          </span>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default App;
