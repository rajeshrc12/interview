import { useMemo } from "react";

function generateBigData(n = 200000) {
  const arr = new Array(n);
  for (let index = 0; index < n; index++) {
    arr.push(`User-${index}`);
  }
  return arr;
}

const Heavy = () => {
  const data = useMemo(() => {
    return generateBigData(200000);
  }, []);
  return (
    <div>
      <div>Heavy component</div>
      {data.length}
    </div>
  );
};

export default Heavy;
