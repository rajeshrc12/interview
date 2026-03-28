import React, { Suspense, useState } from "react";
import Loose from "./Loose";

const Heavy = React.lazy(() => import("./Heavy"));

const Lazy = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>Non Lazy Demo</div>
      <Loose />
      <button onClick={() => setShow(!show)}>show</button>
      <Suspense fallback={<div>Loading...</div>}>{show && <Heavy />}</Suspense>
    </div>
  );
};

export default Lazy;
