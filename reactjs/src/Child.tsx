import React from "react";

const Child = () => {
  console.log("Child render");
  return <div>Hello</div>;
};

export default React.memo(Child);
// export default Child;
