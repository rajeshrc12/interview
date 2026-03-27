import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";

const Debounce = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    console.log("Search triggered with term:", debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Debounce;
