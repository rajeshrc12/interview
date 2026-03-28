const Child = ({ handleSave }: { handleSave: () => void }) => {
  console.log("Child render");
  return (
    <div>
      <button onClick={handleSave}>save</button>
    </div>
  );
};

export default Child;
