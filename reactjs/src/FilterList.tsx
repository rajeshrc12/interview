import React, { useState } from "react";

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

export default function FilterList() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(items);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // heavy operation
    const result = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );
    setFiltered(result);
  };

  return (
    <div>
      <div>Filter List</div>
      <input value={query} onChange={handleChange} />
      <div style={{ height: "500px", width: "200px", overflowY: "scroll" }}>
        {filtered.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}
