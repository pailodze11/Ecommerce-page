import { useState } from "react";
import "./App.css";
import Header from "./organisms/Header";
import Main from "./organisms/Main";

function App() {
  const [count, SetCount] = useState(0);
  function increase() {
    SetSecondCount(secondCount + 1);
  }
  function decrease() {
    SetSecondCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  }
  const [secondCount, SetSecondCount] = useState(0);

  return (
    <>
      <div className="flex flex-col px-[165px] h-[100%]">
        <Header count={count} />
        <Main
          increase={increase}
          decrease={decrease}
          count={count}
          onCount={SetCount}
          secondCount={secondCount}
        />
      </div>
    </>
  );
}

export default App;
