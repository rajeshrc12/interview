import React from "react";

const OnlyMemoChild = () => {
  console.log("OnlyMemoChild render");
  return <div>Hello</div>;
};

export default React.memo(OnlyMemoChild);
