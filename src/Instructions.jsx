import "./App.css";

function Instructions() {
  const instructions =
    "\n\n1. Turn left\n\n2. Jump using the space button\n\n3. The only thing you need to achieve is to collect all of the flowers\n\n4. If you get hit, you need to start from the beggining\n\n5. Have fun!";

  return (
    <section className="homepage">
      <div className="instructions relative bg-cover bg-center h-screen">
        <div className="glass-container rounded-2xl p-10 border-white border">
          <p className=" text-5xl flex items-center">Instructions:</p>
          <p className=" text-3xl whitespace-pre-line flex items-center">
            {instructions}
          </p>
          <div className="text-2xl my-28 flex items-center"></div>
        </div>
      </div>
    </section>
  );
}

export default Instructions;
