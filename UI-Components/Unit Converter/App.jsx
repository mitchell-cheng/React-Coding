import React, { useState } from "react";

function UnitConverter() {
  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("temperature");
  const [inputUnit, setInputUnit] = useState("celsius");
  const [outputUnit, setOutputUnit] = useState("fahrenheit");
  const [convertedValue, setConvertedValue] = useState("");

  const conversionFactors = {
    temperature: {
      celsius: {
        fahrenheit: (value) => (value * 9) / 5 + 32,
        kelvin: (value) => value + 273.15,
      },
      fahrenheit: {
        celsius: (value) => ((value - 32) * 5) / 9,
        kelvin: (value) => ((value - 32) * 5) / 9 + 273.15,
      },
      kelvin: {
        celsius: (value) => value - 273.15,
        fahrenheit: (value) => ((value - 273.15) * 9) / 5 + 32,
      },
    },
    length: {
      meter: {
        foot: (value) => value * 3.2808,
        inch: (value) => value * 39.3701,
      },
      foot: {
        meter: (value) => value / 3.2808,
        inch: (value) => value * 12,
      },
      inch: {
        meter: (value) => value / 39.3701,
        foot: (value) => value / 12,
      },
    },
    weight: {
      kilogram: {
        pound: (value) => value * 2.2046,
        ounce: (value) => value * 35.2739,
      },
      pound: {
        kilogram: (value) => value / 2.2046,
        ounce: (value) => value * 16,
      },
      ounce: {
        kilogram: (value) => value / 35.2739,
        pound: (value) => value / 16,
      },
    },
  };

  const handleConvert = (e) => {
    e.preventDefault();
    const numericValue = parseFloat(inputValue);
    if (isNaN(numericValue)) {
      setConvertedValue("Invalid input");
      return;
    }
    const conversionFunction =
      conversionFactors[category][inputUnit][outputUnit];
    if (conversionFunction) {
      const result = conversionFunction(numericValue);
      setConvertedValue(result.toFixed(4));
    } else {
      setConvertedValue("Invalid conversion");
    }
  };

  const renderUnitOptions = () => {
    return Object.keys(conversionFactors[category]).map((unit) => (
      <option key={unit} value={unit}>
        {unit.charAt(0).toUpperCase() + unit.slice(1)}
      </option>
    ));
  };

  return (
    <div>
      <form onSubmit={handleConvert}>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setInputUnit(Object.keys(conversionFactors[e.target.value])[0]);
            setOutputUnit(Object.keys(conversionFactors[e.target.value])[1]);
          }}
        >
          <option value="temperature">Temperature</option>
          <option value="length">Length</option>
          <option value="weight">Weight</option>
        </select>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
        />
        <select
          value={inputUnit}
          onChange={(e) => setInputUnit(e.target.value)}
        >
          {renderUnitOptions()}
        </select>
        <select
          value={outputUnit}
          onChange={(e) => setOutputUnit(e.target.value)}
        >
          {renderUnitOptions()}
        </select>
        <button type="submit">Convert</button>
      </form>
      <p>Converted Value: {convertedValue}</p>
    </div>
  );
}

export default UnitConverter;