"use server";

import type { AuthActionResult, LoginFormData, RegisterFormData } from "../types/auth.types";

export async function loginAction(data: LoginFormData): Promise<AuthActionResult> {
  // TODO: Implement real authentication (e.g. NextAuth, Supabase, or custom JWT)
  if (!data.email || !data.password) {
    return { success: false, error: "Email and password are required." };
  }
  return { success: true, redirectTo: "/dashboard" };
}

export async function registerAction(data: RegisterFormData): Promise<AuthActionResult> {
  // TODO: Implement real user registration
  if (!data.email || !data.password || !data.name) {
    return { success: false, error: "All fields are required." };
  }
  return { success: true, redirectTo: "/login" };
}

export async function logoutAction(): Promise<AuthActionResult> {
  // TODO: Clear session/cookie
  return { success: true, redirectTo: "/login" };
}
