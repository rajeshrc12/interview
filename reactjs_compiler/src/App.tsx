import { useState } from "react";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(0);
  const handleSave = () => {
    console.log("handleSave");
  };
  console.log("App render");
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <Child handleSave={handleSave} />
    </div>
  );
};

export default App;
