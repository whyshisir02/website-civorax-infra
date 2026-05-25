"use server";

import { cookies } from "next/headers";
import type { AuthActionResult, LoginFormData, RegisterFormData } from "../types/auth.types";

const AUTH_TOKEN_COOKIE = "auth-token";

export async function loginAction(data: LoginFormData): Promise<AuthActionResult> {
  if (!data.email || !data.password) {
    return { success: false, error: "Email and password are required." };
  }

  const cookieStore = await cookies();
  cookieStore.set(AUTH_TOKEN_COOKIE, "session", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return { success: true, redirectTo: "/dashboard" };
}

export async function registerAction(data: RegisterFormData): Promise<AuthActionResult> {
  if (!data.email || !data.password || !data.name) {
    return { success: false, error: "All fields are required." };
  }
  return { success: true, redirectTo: "/login" };
}

export async function logoutAction(): Promise<AuthActionResult> {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_TOKEN_COOKIE);
  return { success: true, redirectTo: "/login" };
}
