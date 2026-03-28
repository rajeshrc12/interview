import React, { useState, useTransition } from "react";
const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

const UseTransition = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // urgent update (typing)
    setQuery(value);

    // non-urgent update (heavy work)
    startTransition(() => {
      const result = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      );
      setFiltered(result);
    });
  };

  return (
    <div>
      <div>useTransition Demo</div>
      <input value={query} onChange={handleChange} />
      <div style={{ height: "500px", width: "200px", overflowY: "scroll" }}>
        {isPending ? (
          <p>Loading...</p>
        ) : (
          filtered.map((item) => <div key={item}>{item}</div>)
        )}
      </div>
    </div>
  );
};
export default UseTransition;
