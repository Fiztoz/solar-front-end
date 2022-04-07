import React, { createContext, useContext, useState } from "react";
import axios from "../../axios.config";

const CommentApiContext = createContext({});

export const useCommentApi = () => useContext(CommentApiContext);

export const CommentApi = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const createComment = (data) => {
    let payload = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone_number: data.phoneNumber,
      type: data.type,
      comment: data.comment,
    };
    setLoading(true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("start");
        axios
          .post("/api/comment/", payload)
          .then((response) => {
            let returnData = {
              firstName: response.data.first_name,
              lastName: response.data.last_name,
              email: response.data.email,
              phoneNumber: response.data.firphone_numberst_name,
              type: response.data.type,
              comment: response.data.comment,
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
      createComment,
    },
  };

  return <CommentApiContext.Provider value={provideValue}>{children}</CommentApiContext.Provider>;
};
