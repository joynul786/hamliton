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
import { GetUpdateModel } from "_models/data/data.get_update.model";
import { ErrorGetUpdateModel } from "_models/error/error.get_update.model";
import { ValidateGetUpdate } from "functions/validators";
import StandardButton from "component/buttons/standardButton";

const inputList = [
  { type: "text", name: "name", label: "Enter your name" },
  { type: "email", name: "email", label: "Enter your email" },
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
      // Handle submission
    } else {
      isValid.errors.forEach((item) => {
        setError((prevState) => ({ ...prevState, [item.name]: item.error }));
      });
    }
  };

  return (
    <section>
      <Box
        // className='fromCtrl'
        mx={{ xs: 2, md: 3 }}
        sx={{
          background: `url(${GetUpdateShape})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          height: { xs: '700px', md: '450px' },
          backgroundSize: 'cover'

        }}

      >
        <Container maxWidth="xl">
          <Grid container spacing={4} justifyContent="center"
            className="footerForm"
          >
            <Grid item xs={12} md={6}>
              <Box py={{ xs: 3, md: 5 }}>
                <Typography
                  variant="subtitle2"
                  letterSpacing={1}
                  textTransform="uppercase"
                  color="black.main"
                  fontWeight={500}
                >
                  Get Updates about
                </Typography>
                <Typography variant="h3" fontWeight={1000} pt={2} color="#000">
                  Hamilton Telecom
                </Typography>
                <Typography variant="body2" mt={2}>
                  Subscribe to our newsletter and get weekly and monthly updates about discounts, offers, new services, upcoming events, and more.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} >
              <Box bgcolor="white.main" p={{ xs: 3, md: 5 }} className="shadow">
                <form onSubmit={handleSubmit}>
                  {inputList.map(({ type, label, name }, i) => (
                    <FormGroup key={i} sx={{ my: 2 }}>
                      <TextField
                        variant="standard"
                        type={type}
                        id={name}
                        name={name}
                        label={label}
                        autoComplete="off"
                        value={state[name]}
                        error={error[name] !== ""}
                        helperText={error[name]}
                        onChange={(ev) => handleChange(ev, name)}
                        onFocus={() => handleFocus(name)}
                        sx={{
                          fontWeight: 400,
                        }}
                        fullWidth
                      />
                    </FormGroup>
                  ))}

                  <Box pt={3}>
                    <StandardButton type="submit" buttonText="Subscribe" />
                  </Box>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default GetUpdate;
