// import OnlyMemo from "./only-memo";

import UseMemo from "./use-memo";

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
      <UseMemo />
    </div>
  );
};

export default App;
