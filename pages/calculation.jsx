import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import CalculationMap from "../components/pages/calculation/calculation-map";
import CalculationRecommended from "../components/pages/calculation/calculation-recommended";
import { useCalculationContext } from "../library/calculation";

const calcVar = {
  hourPerDay: 4, // h/d
  installedAreaPerkW: 6.6, // sq.m/kW
  pricePerUnit: 3.5, // bath/kWh
  avRadiation: 4.9081, // kWh/sq.m*d
  radiation: 4.9081, // kWh/sq.m*d
  installationCostPerkW: 38861, // bath/kW
  co2PerkWh: 0.561, // kg/kWh
  co2PerTreePerYear: 9, // kg/tree*year
  co2PerDiesel: 2.6391, // kg/l
};

const Calculation = () => {
  // const [center, setCenter] = useState(null);
  // const [polygon, setPolygon] = useState(null);
  // const [step, setStep] = useState(0);
  // const [data, setData] = useState({ rooftopArea: "", averageCharge: "", phase: "", dayNightConsumptionRatio: 50 });
  // const [result, setResult] = useState(null);

  const { center, polygon, step, data, result, setCenter, setPolygon, setStep, setData, setResult } =
    useCalculationContext();

  const onCenterChangeHandler = (e) => {
    setCenter(e);
  };
  const onDrawEndHandler = (e) => {
    setPolygon(e);
  };
  const onFormSubmitHandler = (e) => {
    setData(e);
    let unitConsumptionPerDay = e.averageCharge / calcVar.pricePerUnit / 30;
    let dayUnitConsumptionPerDay = unitConsumptionPerDay * (e.dayNightConsumptionRatio / 100); // kWh/d
    let installedForDay = dayUnitConsumptionPerDay / calcVar.hourPerDay / (calcVar.radiation / calcVar.avRadiation); // kW
    let area = e.rooftopArea; // sq.m
    let maxInstalled = area / calcVar.installedAreaPerkW; // kW
    let installedCapacity = Math.round(Math.min(...[installedForDay, maxInstalled]) * 10) / 10; // kW
    let unitProducedPerDay = installedCapacity * (calcVar.radiation / calcVar.avRadiation) * calcVar.hourPerDay;
    let energyProducedPerMonth = unitProducedPerDay * 30 * calcVar.pricePerUnit;
    let energyProducedPerYear = unitProducedPerDay * 365 * calcVar.pricePerUnit;
    let originalEnergyConsumptionPerYear = unitConsumptionPerDay * 365 * calcVar.pricePerUnit;
    let newPricePerUnit = (originalEnergyConsumptionPerYear - energyProducedPerYear) / (unitConsumptionPerDay * 365);
    let installationCost = installedCapacity * calcVar.installationCostPerkW;
    let returnPeriod = installationCost / energyProducedPerYear;
    let unitProducedPerYear = unitProducedPerDay * 365;
    let co2ReducedPerYear = unitProducedPerYear * calcVar.co2PerkWh;
    let co2ReducedAsTree = co2ReducedPerYear / calcVar.co2PerTreePerYear;
    let co2ReducedAsDiesel = co2ReducedPerYear / calcVar.co2PerDiesel;
    setResult({
      rooftopArea: area,
      installedCapacity: installedCapacity,
      save: Math.round(energyProducedPerMonth),
      installationCost: Math.round(installationCost),
      returnPeriod: Math.round(returnPeriod * 10) / 10,
      pricePerUnit: Math.round(newPricePerUnit * 100) / 100,
      energyProducedPerYear: Math.round(energyProducedPerYear),
      energyProducedPer20Year: Math.round(energyProducedPerYear * 20),
      phase: e.phase,
      co2ReducedPerYear: Math.round(co2ReducedPerYear * 100) / 100,
      co2ReducedAsTree: Math.round(co2ReducedAsTree * 100) / 100,
      co2ReducedAsDiesel: Math.round(co2ReducedAsDiesel * 100) / 100,
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
