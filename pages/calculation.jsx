import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import CalculationMap from "../components/pages/calculation/calculation-map";
import CalculationRecommended from "../components/pages/calculation/calculation-recommended";

const calcVar = {
  hourPerDay: 4, // h/d
  installedAreaPerkW: 6.6, // sq.m/kW
  pricePerUnit: 3.5, // bath/kWh
  avRadiation: 4.9081, // kWh/sq.m*d
  radiation: 4.9081, // kWh/sq.m*d
  installationCostPerkW: 38861, // bath/kW
};

const Calculation = () => {
  const [center, setCenter] = useState(null);
  const [polygon, setPolygon] = useState(null);
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ rooftopArea: "", averageCharge: "", phase: "", dayNightConsumptionRatio: 50 });
  const [result, setResult] = useState(null);

  const onCenterChangeHandler = (e) => {
    setCenter(e);
  };
  const onDrawEndHandler = (e) => {
    setPolygon(e);
  };
  const onFormSubmitHandler = (e) => {
    setData(e);

    let dayEnergyConsumptionPerDay = (e.averageCharge / calcVar.pricePerUnit / 30) * (e.dayNightConsumptionRatio / 100); // kWh/d
    let installedForDay = dayEnergyConsumptionPerDay / calcVar.hourPerDay / (calcVar.radiation / calcVar.avRadiation); // kW
    let area = e.rooftopArea; // sq.m
    let maxInstalled = area / calcVar.installedAreaPerkW; // kW
    let installedCapacity = Math.round(Math.min(...[installedForDay, maxInstalled]) * 10) / 10; // kW
    let energyProducedPerMonth =
      installedCapacity * (calcVar.radiation / calcVar.avRadiation) * calcVar.hourPerDay * 30 * calcVar.pricePerUnit;
    let energyProducedPerYear = (energyProducedPerMonth / 30) * 365;
    let installationCost = installedCapacity * calcVar.installationCostPerkW;
    let returnPeriod = installationCost / energyProducedPerYear;

    setResult({
      rooftopArea: area,
      installedCapacity: installedCapacity,
      save: Math.round(energyProducedPerMonth),
      installationCost: Math.round(installationCost),
      returnPeriod: Math.round(returnPeriod * 10) / 10,
      pricePerUnit: calcVar.pricePerUnit,
      energyProducedPerYear: Math.round(energyProducedPerYear),
      energyProducedPer20Year: Math.round(energyProducedPerYear * 20),
      phase: e.phase,
    });
    setStep(1);
  };
  const onRecalculationHandler = () => {
    setStep(0);
  };

  return (
    <Layout>
      <Box w="100%">
        {step == 0 && (
          <Layout>
            <CalculationMap
              initCenter={center}
              polygon={polygon}
              data={data}
              onDrawEnd={(e) => onDrawEndHandler(e)}
              onFromSubmit={(e) => onFormSubmitHandler(e)}
              onCenterChange={(e) => onCenterChangeHandler(e)}
            />
          </Layout>
        )}
        {step == 1 && result && (
          <Layout>
            <CalculationRecommended result={result} onRecalculation={() => onRecalculationHandler()} />
          </Layout>
        )}
      </Box>
    </Layout>
  );
};

export default Calculation;
