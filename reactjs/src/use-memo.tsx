import { useMemo, useState } from "react";
import UseMemoChild from "./use-memo-child";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  const arr = useMemo(() => {
    const data = [1, 2, 3];
    return data.map((n) => n * newCount);
  }, [newCount]);

  console.log("UseMemo render");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setNewCount(newCount + 1)}>New Click</button>
      <UseMemoChild arr={arr} />
    </>
  );
};

export default UseMemo;
