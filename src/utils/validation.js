export const validation = (email, password, name, setErrors) => {
  let isValid = true;
  let newError = { email: "", password: "", name: "" };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || name.length < 2) {
    newError.name = "Please put a valid name";
    isValid = false;
  }

  if (!password || password.length < 6) {
    newError.password = "Password must not be less than 6";
    isValid = false;
  }

  if (!email || !emailRegex.test) {
    newError.email = "Invalid email format";
    isValid = false;
  }

  setErrors(newError);
  return isValid;
};
