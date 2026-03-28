import { useState } from "react";
import NonVirtualList from "./NonVirtualList";
const data = new Array(100).fill(0);
const Virtualization = () => {
  const [type, setType] = useState("nv");
  return (
    <div>
      <div>Virtualization Demo</div>
      <div style={{ display: "flex" }}>
        <button
          style={{ background: type === "nv" ? "green" : "none" }}
          onClick={() => setType("nv")}
        >
          Non Virtual List
        </button>
        <button
          style={{ background: type === "v" ? "green" : "none" }}
          onClick={() => setType("v")}
        >
          Virtual List
        </button>
      </div>
      <NonVirtualList data={data} />
    </div>
  );
};

export default Virtualization;
