export const validateForm = (email, password, name, confirmPassword) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const nameRegex = /^[A-Za-z ]{2,50}$/;

  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);
  const isValidName = nameRegex.test(name);
  const isConfirmPasswordValid = password === confirmPassword;
  if (name && !isValidName) return { name: "Name is invalid" };
  if (email && !isValidEmail) return { email: "Email id is invalid" };
  if (password && !isValidPassword) return { password: "Password is invalid" };
  if (confirmPassword && !isConfirmPasswordValid)
    return {
      confirmPassword: "Confirm password should match password",
    };
  return null;
};
