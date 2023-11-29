export const ValidateHelp = (DATA) => {
  let valid = true;
  let errors = [];

  if (!DATA.name) {
    valid = false;
    errors.push({
      name: "name",
      error: "Name is required.",
    });
  }

  if (!DATA.email) {
    valid = false;
    errors.push({
      name: "email",
      error: "Email is required.",
    });
  }

  return { valid, errors };
};

export const ValidateGetUpdate = (DATA) => {
  let valid = true;
  let errors = [];

  if (!DATA.name) {
    valid = false;
    errors.push({
      name: "name",
      error: "Name is required.",
    });
  }

  if (!DATA.email) {
    valid = false;
    errors.push({
      name: "email",
      error: "Email is required.",
    });
  }

  return { valid, errors };
};
