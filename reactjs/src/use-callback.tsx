import { useCallback, useState } from "react";
import UseCallbackChild from "./use-callback-child";

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleSave = useCallback(() => {
    console.log("UseCallback handleSave clicked");
  }, []);

  console.log("UseCallback render");
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <UseCallbackChild handleSave={handleSave} />
    </>
  );
};

export default UseCallback;
