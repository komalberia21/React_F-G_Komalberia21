import { createContext, useReducer, useEffect } from "react";
import { formReducer } from "../reducers/formReducer";

export const formContext = createContext();

const FormContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, [], () => {
    const localData = localStorage.getItem("userform");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("userform", JSON.stringify(state));
  }, [state]);
  
const submitForm = (formDetails) => {
    //console.log("formdata in submit", formDetails);
    dispatch({ type: "SUBMIT_FORM", payload: formDetails });
  };

  return (
    <formContext.Provider value={{ state, submitForm }}>
      {children}
    </formContext.Provider>
  );
};

export default FormContextProvider;
