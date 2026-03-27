import { useState } from "react";
import OnlyMemoChild from "./only-memo-child";

const OnlyMemo = () => {
  const [count, setCount] = useState(0);
  console.log("OnlyMemo render");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <OnlyMemoChild />
    </>
  );
};

export default OnlyMemo;
