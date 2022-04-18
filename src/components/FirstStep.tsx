import React, { useCallback, useContext, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AppContext } from "../Context";
import { firstStepSchema } from "./firstStepSchema";
import { set } from "lodash";

export default function FirstStep() {
  const [formData, setFormData] = useState();
  const { formValues, handleChange, handleNext, variant, margin } =
    useContext(AppContext);
  const { firstName, lastName, email, agreement, city, phone } = formValues;

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ firstName, lastName, email, phone, city, agreement }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [formValues, firstName, lastName, email, agreement, city, phone]
  );

  const handleChangeField = (
    name: string,
    value: string,
    requestField: string
  ) => {
    let formDataTemp: any = Object.assign({}, formData);
    set(formDataTemp, requestField, value);
    setFormData(formDataTemp);
  };

  const renderFormField = () => {
    return Object.keys(firstStepSchema).map((field, index) => {
      return (
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label={firstStepSchema[field]["placeholder"]}
            name={field}
            placeholder={firstStepSchema[field]["placeholder"]}
            value={formValues[field]["value"]}
            onChange={handleChange}
            onBlur={(e) => {
              handleChangeField(
                e.target.name,
                e.target.value,
                firstStepSchema[field]["requestField"]
              );
            }}
            error={!!formValues[field]["error"]}
            helperText={formValues[field]["error"]}
            required={formValues[field]["required"]}
          />
        </Grid>
      );
    });
  };

  return (
    <>
      <Grid container spacing={2}>
        {renderFormField()}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color="primary"
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {JSON.stringify(formData, null, 2)}
      </Box>
    </>
  );
}
