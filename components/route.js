const route = () => {
  const path = {
    landing: "/",
    calculation: "/calculation",
    suitability: "/suitability",
    contact: "/contact",
    feedback: "/feedback",
    feedbackFinish: "/feedback/finish",
    knowledge: {
      agency: "/knowledge/agency",
      solarRooftop: "/knowledge/solar-rooftop",
      deviceSelection: "/knowledge/device-selection",
      permissionProcess: "/knowledge/permission-process",
    },
  };
  return path;
};
export default route;
