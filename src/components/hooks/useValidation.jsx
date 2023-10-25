import React from "react";
import { useCallback } from "react";

function useValidation () {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isFormValid, setIsFormValid] = React.useState({});
   
  const handleChange= (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;
    setValues({...values, [name]: value});
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsFormValid(input.closest("form").checkValidity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsValid);
    },
    [setValues, setErrors, setIsFormValid]
  );
    return {values, handleChange, resetForm, errors, isFormValid}
};

export default useValidation;

