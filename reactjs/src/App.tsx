// import OnlyMemo from "./only-memo";
// import UseMemo from "./use-memo";
// import UseCallback from "./use-callback";
// import Debounce from "./debounce";
// import Throttle from "./throttle";
// import NonLazy from "./NonLazy";
// import Lazy from "./Lazy";
// import Virtualization from "./Virtualization";
import FilterList from "./FilterList";
import UseTransition from "./UseTransition";

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
      {/* <UseCallback /> */}
      {/* <Debounce /> */}
      {/* <Throttle /> */}
      {/* <NonLazy /> */}
      {/* <Lazy /> */}
      {/* <Virtualization /> */}
      <UseTransition />
      <FilterList />
    </div>
  );
};

export default App;
