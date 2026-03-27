import React from "react";

const UseCallbackChild = ({ handleSave }: { handleSave: () => void }) => {
  console.log("UseCallbackChild render", handleSave);
  return (
    <div>
      Hello
      <button onClick={handleSave}>save</button>
    </div>
  );
};

export default React.memo(UseCallbackChild);
