export const loginVal = (email, password, setErrors) => {
  let isValid = true;
  let newError = { email: "", password: "" };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
