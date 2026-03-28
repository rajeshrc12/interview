const NonVirtualList = ({ data }: { data: number[] }) => {
  return (
    <div style={{ height: "400px", width: "200px", overflowY: "scroll" }}>
      {data.map((_, i) => (
        <div
          key={i}
          style={{ border: "1px solid black", padding: 5, marginBottom: 5 }}
        >
          User {i}
          <div>Last logged at {i}s</div>
        </div>
      ))}
    </div>
  );
};

export default NonVirtualList;
