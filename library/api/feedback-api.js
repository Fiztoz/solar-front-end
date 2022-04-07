import React, { createContext, useContext, useState } from "react";
import axios from "../../axios.config";

const FeedbackApiContext = createContext({});

export const useFeedbackApi = () => useContext(FeedbackApiContext);

export const FeedbackApi = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const createFeedback = (data) => {
    let payload = {
      feedback: {
        hardToUse: data.hardToUse,
        analyticResultHardToUnderstand: data.analyticResultHardToUnderstand,
        tooLongProcessingTime: data.tooLongProcessingTime,
        installationPriceInaccurate: data.installationPriceInaccurate,
        paybackPeriodInaccurate: data.paybackPeriodInaccurate,
        wantMoreCostEffectivenessPerspectives: data.wantMoreCostEffectivenessPerspectives,
        wantResultsOfEnvironmentalAnalysis: data.wantResultsOfEnvironmentalAnalysis,
        notEnoughInformationToMakeDecision: data.notEnoughInformationToMakeDecision,
        other: data.other,
        otherText: data.otherText,
      },
      other_feedback: data.otherFeedback,
    };
    setLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("start");
        axios
          .post("/api/feedback/", payload)
          .then((response) => {
            let returnData = {
              hardToUse: response.data.feedback.hardToUse,
              analyticResultHardToUnderstand: response.data.feedback.analyticResultHardToUnderstand,
              tooLongProcessingTime: response.data.feedback.tooLongProcessingTime,
              installationPriceInaccurate: response.data.feedback.installationPriceInaccurate,
              paybackPeriodInaccurate: response.data.feedback.paybackPeriodInaccurate,
              wantMoreCostEffectivenessPerspectives: response.data.feedback.wantMoreCostEffectivenessPerspectives,
              wantResultsOfEnvironmentalAnalysis: response.data.feedback.wantResultsOfEnvironmentalAnalysis,
              notEnoughInformationToMakeDecision: response.data.feedback.notEnoughInformationToMakeDecision,
              other: response.data.feedback.other,
              otherText: response.data.feedback.otherText,
              otherFeedback: response.data.other_feedback,
            };
            setLoading(false);
            resolve(returnData);
          })
          .catch((error) => {
            setLoading(false);
            reject(error);
          });
      }, 0);
    });
  };

  const provideValue = {
    isLoading: loading,
    actions: {
      createFeedback,
    },
  };

  return <FeedbackApiContext.Provider value={provideValue}>{children}</FeedbackApiContext.Provider>;
};
