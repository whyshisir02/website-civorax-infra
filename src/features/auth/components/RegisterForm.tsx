"use client";

import { useState } from "react";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import Button from "@/shared/ui/Button";
import LocaleLink from "@/shared/ui/LocaleLink";
import { validateRegisterForm } from "@/features/auth/validators/auth.validators";
import { registerAction } from "@/features/auth/server-actions/auth.actions";
import type { RegisterFormData } from "@/features/auth/types/auth.types";

type FieldErrors = Partial<Record<keyof RegisterFormData, string>>;

export default function RegisterForm() {
  const [form, setForm] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof RegisterFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);

    const fieldErrors = validateRegisterForm(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await registerAction(form);
      if (!result.success) {
        setServerError(result.error ?? "Registration failed. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,63,44,0.08)] border border-[#e8f5f0] p-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#20b486]/10 mb-4">
            <UserPlus className="w-5 h-5 text-[#006c4e]" />
          </div>
          <h1 className="text-2xl font-bold text-[#1a1a1a]">Create account</h1>
          <p className="text-sm text-[#6b7280] mt-1">Join the CivoraX client portal</p>
        </div>

        {serverError && (
          <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-1.5">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Aarav Sharma"
              className={`w-full h-11 px-4 rounded-xl border text-sm transition-colors outline-none
                ${errors.name
                  ? "border-red-400 bg-red-50 focus:border-red-500"
                  : "border-[#d1d5db] bg-[#f9fafb] focus:border-[#20b486] focus:bg-white"
                }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-1.5">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full h-11 px-4 rounded-xl border text-sm transition-colors outline-none
                ${errors.email
                  ? "border-red-400 bg-red-50 focus:border-red-500"
                  : "border-[#d1d5db] bg-[#f9fafb] focus:border-[#20b486] focus:bg-white"
                }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#374151] mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={form.password}
                onChange={handleChange}
                placeholder="Min. 8 characters"
                className={`w-full h-11 px-4 pr-11 rounded-xl border text-sm transition-colors outline-none
                  ${errors.password
                    ? "border-red-400 bg-red-50 focus:border-red-500"
                    : "border-[#d1d5db] bg-[#f9fafb] focus:border-[#20b486] focus:bg-white"
                  }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#374151] transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1.5 text-xs text-red-600">{errors.password}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#374151] mb-1.5">
              Confirm password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                autoComplete="new-password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat your password"
                className={`w-full h-11 px-4 pr-11 rounded-xl border text-sm transition-colors outline-none
                  ${errors.confirmPassword
                    ? "border-red-400 bg-red-50 focus:border-red-500"
                    : "border-[#d1d5db] bg-[#f9fafb] focus:border-[#20b486] focus:bg-white"
                  }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#374151] transition-colors"
                aria-label={showConfirm ? "Hide password" : "Show password"}
              >
                {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1.5 text-xs text-red-600">{errors.confirmPassword}</p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating account…" : "Create account"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-[#6b7280]">
          Already have an account?{" "}
          <LocaleLink href="/auth/login" className="text-[#006c4e] font-medium hover:underline">
            Sign in
          </LocaleLink>
        </p>
      </div>
    </div>
  );
}
