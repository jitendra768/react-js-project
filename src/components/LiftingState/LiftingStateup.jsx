import React, { useState } from "react";

const InputComponent = ({ value, onChange }) => {
  return (
    <div>
      <label>Enter a number</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const DisplayComponents = ({ value }) => {
  return (
    <div>
      <h2>The square is: {value * value}</h2>
    </div>
  );
};

const LiftingStateup = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>Lifting stateup example</h1>
      <InputComponent value={number} onChange={setNumber} />
      <DisplayComponents value={number} />
    </div>
  );
};

export default LiftingStateup;
