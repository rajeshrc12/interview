import React from "react";

const UseMemoChild = ({ arr }: { arr: number[] }) => {
  console.log("UseMemoChild render", arr);
  return <div>Hello</div>;
};
export default React.memo(UseMemoChild);
