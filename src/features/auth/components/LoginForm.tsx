"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, LogIn } from "lucide-react";
import Button from "@/shared/ui/Button";
import LocaleLink from "@/shared/ui/LocaleLink";
import { validateLoginForm } from "@/features/auth/validators/auth.validators";
import { loginAction } from "@/features/auth/server-actions/auth.actions";
import type { LoginFormData } from "@/features/auth/types/auth.types";
import { useLocale } from "next-intl";

type FieldErrors = Partial<Record<keyof LoginFormData, string>>;

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locale = useLocale();

  const [form, setForm] = useState<LoginFormData>({ email: "", password: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LoginFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError(null);

    const fieldErrors = validateLoginForm(form);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await loginAction(form);
      if (!result.success) {
        setServerError(result.error ?? "Login failed. Please try again.");
        return;
      }
      const callbackUrl = searchParams.get("callbackUrl");
      router.push(callbackUrl ?? `/${locale}/dashboard`);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,63,44,0.08)] border border-[#e8f5f0] p-8">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#20b486]/10 mb-4">
            <LogIn className="w-5 h-5 text-[#006c4e]" />
          </div>
          <h1 className="text-2xl font-bold text-[#1a1a1a]">Welcome back</h1>
          <p className="text-sm text-[#6b7280] mt-1">Sign in to your CivoraX portal</p>
        </div>

        {serverError && (
          <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-[#374151]">
                Password
              </label>
              <LocaleLink href="/auth/forgot-password" className="text-xs text-[#006c4e] hover:underline">
                Forgot password?
              </LocaleLink>
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
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

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in…" : "Sign in"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-[#6b7280]">
          Don&apos;t have an account?{" "}
          <LocaleLink href="/auth/register" className="text-[#006c4e] font-medium hover:underline">
            Create account
          </LocaleLink>
        </p>
      </div>
    </div>
  );
}
