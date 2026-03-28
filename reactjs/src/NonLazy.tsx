import { useState } from "react";
import Loose from "./Loose";
import Heavy from "./Heavy";

const NonLazy = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>Non Lazy Demo</div>
      <Loose />
      <button onClick={() => setShow(!show)}>show</button>
      {show && <Heavy />}
    </div>
  );
};

export default NonLazy;
