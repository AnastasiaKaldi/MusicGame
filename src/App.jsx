import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const phrase = "May the odds be ever in your favour";

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

  return (
    <section className="homepage">
      <div className="App relative bg-cover bg-center h-screen">
        <header className="App-header text-8xl flex justify-center items-center">
          Welcome to the Games
        </header>
        <div className="hg text-5xl flex justify-center items-center mt-28">
          <span className="max-w-[650px]" style={{ position: "relative  " }}>
            {text}
            {cursorPosition === text.length && (
              <span className="cursor-animation">|</span>
            )}
          </span>
        </div>
      </div>
    </section>
  );
}

export default App;

// import "./App.css";
// import { useEffect, useState } from "react";

// function App() {
//   const [text, setText] = useState("");
//   const phrase = "The Games";

//   useEffect(() => {
//     let index = 0;

//     const interval = setInterval(() => {
//       setText((prevText) => prevText + phrase[index]);
//       index++;

//       if (index === phrase.length) {
//         clearInterval(interval);
//       }
//     }, 100); // Adjust the interval speed (milliseconds per character)

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="homepage">
//       <div className="App relative bg-cover bg-center h-screen">
//         <header className="App-header text-8xl flex justify-center items-center">
//           The Games
//         </header>
//       </div>
//     </section>
//   );
// }

// export default App;
