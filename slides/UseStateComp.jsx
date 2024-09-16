import { useState } from "react";
export default function UseStateComp() {
  const [getCount, setvalue] = useState(0);
  return (
    <>
      <h1>UseState Hook Example</h1>
      <h3>Counter Application</h3>
      <button disabled={getCount === 0} onClick={() => setvalue(getCount - 5)}>
        Decrease
      </button>
      <h2 className="TextSize colorclass">{getCount}</h2>
      <button
        disabled={getCount === 50}
        onClick={() => setvalue(getCount + 10)}
      >
        Increase
      </button>
    </>
  );
}
