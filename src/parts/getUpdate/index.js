import React, { useState } from "react";
import GetUpdateShape from "assets/img/static/shape/get-update.png";
import {
  Box,
  Container,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import SectionHeading from "component/sectionHeading";
import { GetUpdateModel } from "_models/data/data.get_update.model";
import { ErrorGetUpdateModel } from "_models/error/error.get_update.model";
import { ValidateGetUpdate } from "functions/validators";
import StandardButton from "component/buttons/standardButton";
const inputList = [
  { tpe: "text", name: "name", label: "Enter your name" },
  { tpe: "email", name: "email", label: "Enter your email" },
];

const GetUpdate = () => {
  const [state, setState] = useState(new GetUpdateModel());
  const [error, setError] = useState(new ErrorGetUpdateModel());

  const handleChange = (event, name) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleFocus = (name) => {
    setError({ ...error, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = ValidateGetUpdate(state);

    if (isValid.valid) {
    } else {
      for (let i = 0, item; !!(item = isValid.errors[i++]); ) {
        setError((prevState) => ({ ...prevState, [item.name]: item.error }));
      }
    }
  };

  return (
    <section>
      <Box
        sx={{
          background: `url(${GetUpdateShape})`,
          backgroundPosition: "bottom right",
          backgroundRepeat: "no-repeat",
          backgroundSize: { xs: "100%", sm: "60%" },
        }}
        py={8}
      >
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box pt={5}>
                <SectionHeading
                  subtitle="Get Updates about"
                  title="Hamilton Telecom"
                />
                <Typography variant="body2" mt={2}>
                  Subscribe to our new’s letter and get weekly and monthly
                  updates about discounts, offers, new services, upcoming events
                  and more{" "}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box bgcolor="white.main" p={5} className="shadow">
                <Box component="form" onSubmit={handleSubmit}>
                  {inputList?.map(({ type, label, name }, i) => (
                    <FormGroup key={i} sx={{ my: 2 }}>
                      <TextField
                        variant="standard"
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
                        }}
                      />
                    </FormGroup>
                  ))}

                  <Box pt={3}>
                    <StandardButton type="submit" buttonText="Subscribe" />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default GetUpdate;
