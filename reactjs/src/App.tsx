// import OnlyMemo from "./only-memo";
// import UseMemo from "./use-memo";

import UseCallback from "./use-callback";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* <OnlyMemo /> */}
      {/* <UseMemo /> */}
      <UseCallback />
    </div>
  );
};

export default App;
