import React, { useState } from "react";

const BmiCalculator = () => {
  const [height, setHeight] = useState("1");
  const [weight, setWeight] = useState("0");

  return (
    <>
      <label>
        Height:{" "}
        <input
          className="text-black"
          name="height"
          value={height}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
      </label>
      <hr />
      <label>
        Weight:{" "}
        <input
          className="text-black"
          name="weight"
          value={weight}
          onChange={(event) => {
            setWeight(event.target.value);
          }}
        />
      </label>
      <hr />
      BMI= {weight / (height * height)}
    </>
  );
};

export default BmiCalculator;
