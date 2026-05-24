export type ValidationError<T> = Partial<Record<keyof T, string>>;

export function validateEmail(email: string): string | undefined {
  if (!email.trim()) return "Email is required.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email address.";
}

export function validatePassword(password: string): string | undefined {
  if (!password) return "Password is required.";
  if (password.length < 8) return "Password must be at least 8 characters.";
}

export function validateLoginForm(data: { email: string; password: string }) {
  const errors: ValidationError<typeof data> = {};
  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;
  const passwordError = validatePassword(data.password);
  if (passwordError) errors.password = passwordError;
  return errors;
}

export function validateRegisterForm(data: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  const errors: ValidationError<typeof data> = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  else if (data.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";
  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;
  const passwordError = validatePassword(data.password);
  if (passwordError) errors.password = passwordError;
  if (!data.confirmPassword) errors.confirmPassword = "Please confirm your password.";
  else if (data.password !== data.confirmPassword) errors.confirmPassword = "Passwords do not match.";
  return errors;
}
