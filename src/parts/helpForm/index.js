import { Box, FormGroup, TextField } from "@mui/material";
import { HelpModel } from "_models/data/data.help.model";
import { ErrorHelpModel } from "_models/error/error.help.model";
import StandardButton from "component/buttons/standardButton";
import { ValidateHelp } from "functions/validators";
import React, { useState } from "react";

const inputList = [
  { tpe: "text", name: "name", label: "Enter your name" },
  { tpe: "email", name: "email", label: "Enter your email" },
];
const HelpForm = () => {
  const [state, setState] = useState(new HelpModel());
  const [error, setError] = useState(new ErrorHelpModel());

  const handleChange = (event, name) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleFocus = (name) => {
    setError({ ...error, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = ValidateHelp(state);

    if (isValid.valid) {
    } else {
      for (let i = 0, item; !!(item = isValid.errors[i++]); ) {
        setError((prevState) => ({ ...prevState, [item.name]: item.error }));
      }
    }
  };
  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        {inputList?.map(({ type, label, name }, i) => (
          <FormGroup key={i} sx={{ my: 2 }}>
            <TextField
              variant="filled"
              type={type}
              id={name}
              name={name}
              label={label}
              autoComplete="off"
              value={state?.[name]}
              error={error?.[name] !== ""}
              helperText={error?.[name]}
              onChange={(ev) => handleChange(ev, name)}
              onFocus={() => handleFocus(name)}
              sx={{
                fontWeight: 400,
                ".MuiFormLabel-root": {
                  color: "#878787",
                },
                ".MuiFilledInput-root": {
                  background: ({ palette }) => palette?.white?.main,
                  borderRadius: "5px",
                  "&:before, &:after": {
                    display: "none",
                  },
                },
              }}
            />
          </FormGroup>
        ))}

        <Box pt={3}>
          <StandardButton
            type="submit"
            buttonText="Have a call !"
            color="primary"
          />
        </Box>
      </Box>
    </>
  );
};

export default HelpForm;
