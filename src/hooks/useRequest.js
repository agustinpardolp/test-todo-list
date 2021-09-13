import { useState, useEffect, useCallback } from "react";

const executeAsyncRequest = async ({ values, request, onSuccess }) => {
  const response = await request(values);
  if (response) {
    onSuccess(response.data);
  } 
};
export const useRequest = ({
  request,
  payload,
  initialState,
}) => {
  const [state, setState] = useState(initialState);
  const sendRequest = useCallback(
    (values) => {
      executeAsyncRequest({
        values,
        request,
        onSuccess: (data) => {
          setState(data);
        },
      });
    },

    [request]
  );
  useEffect(() => {
    sendRequest(payload);
  }, [payload, sendRequest]);

  return { state, sendRequest };
};
