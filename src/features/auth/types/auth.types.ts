export type AuthUser = {
  id: string;
  email: string;
  name: string;
  role: "client" | "admin";
  createdAt: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type AuthState = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

export type AuthActionResult = {
  success: boolean;
  error?: string;
  redirectTo?: string;
};
