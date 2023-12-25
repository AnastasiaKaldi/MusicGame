import "./App.css";

function Instructions() {
  const instructions =
    "\n\n1. Turn left\n\n2. Jump over obstacles\n\n3. Collect coins\n\n4. Don't die\n\n5. Have fun!";

  return (
    <section className="homepage">
      <div className="instructions relative bg-cover bg-center h-screen">
        <p className=" text-5xl flex items-center">Instructions:</p>
        <p className=" text-3xl whitespace-pre-line flex items-center">
          {instructions}
        </p>
        <div className="text-2xl my-28 flex items-center"></div>
      </div>
    </section>
  );
}

export default Instructions;
