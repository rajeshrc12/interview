import React, { useState, useTransition } from "react";
import { users } from "./data";

interface Item {
  name: string;
}

const UseTransition = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState(users);

  // A Standard Hook to mark things non-urgent
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    startTransition(() => {
      setFiltered(users.filter((item: Item) => item.name.includes(value)));
    });
  };

  return (
    <div className="container">
      <div>
        <button onClick={() => console.log("click")}>click</button>
      </div>
      <div>
        {isPending ? (
          <div>Loading...</div>
        ) : (
          <p>
            {users.length !== filtered.length
              ? `${filtered.length} matches`
              : null}
          </p>
        )}
      </div>

      <input onChange={handleChange} value={searchTerm} type="text" />

      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div style={{ height: "400px", width: "200px", overflowY: "scroll" }}>
          {filtered.map((user) => (
            <div key={user.id} className="card">
              <div className="body">
                <strong>{user.name}</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default UseTransition;
