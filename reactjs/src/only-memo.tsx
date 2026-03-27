import { useState } from "react";
import Child from "./Child";

const OnlyMemo = () => {
  const [count, setCount] = useState(0);
  console.log("OnlyMemo render");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <Child />
    </>
  );
};

export default OnlyMemo;
