import { createContext, useContext, useState } from "react";

const CalculationContext = createContext({});

export const useCalculationContext = () => useContext(CalculationContext);

const Calculation = ({ children }) => {
  const [center, setCenter] = useState(null);
  const [polygon, setPolygon] = useState(null);
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ rooftopArea: "", averageCharge: "", phase: "", dayNightConsumptionRatio: 50 });
  const [result, setResult] = useState(null);

  const value = {
    center,
    polygon,
    step,
    data,
    result,
    setCenter,
    setPolygon,
    setStep,
    setData,
    setResult,
  };
  return <CalculationContext.Provider value={value}>{children}</CalculationContext.Provider>;
};

export default Calculation;
