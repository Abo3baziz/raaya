"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import raayaLogo from "@/public/logo.svg";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const year = new Date().getFullYear();

  const t = useTranslations("logo");
  // State management for form inputs
  const [identifier, setIdentifier] = useState(""); // Email or Phone
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    identifier?: string;
    password?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);

  // Validate email or phone number
  const validateIdentifier = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: { identifier?: string; password?: string } = {};

    if (!identifier.trim()) {
      newErrors.identifier = "Email or phone number is required";
    } else if (!validateIdentifier(identifier)) {
      newErrors.identifier = "Please enter a valid email or phone number";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    try {
      const loginData = {
        identifier,
        password,
        timestamp: new Date().toISOString(),
      };

      console.log("Login Data:", loginData);

      // TODO: Add your authentication API call here
      // await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify(loginData) });

      setTimeout(() => {
        setIsLoading(false);
        // Redirect to dashboard or home
      }, 1000);
    } catch (error) {
      console.error("Login error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(135deg, #FFF9E6 0%, #FFE8CC 100%)",
      }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8 animate-fadeIn">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4">
            <p className="font-bold text-primary text-3xl mr-3">
              {t("company")}
            </p>
            <Image
              src={raayaLogo}
              alt="raaya Logo"
              width={50}
              className="mr-3"
              fetchPriority="high"
            />
          </div>
          <p className="text-2xl mt-2" style={{ color: "#A0826D" }}>
            Welcome back to your health journey
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-slideUp">
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: "#8B7355" }}
          >
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email or Phone Input */}
            <div>
              <label
                htmlFor="identifier"
                className="block text-xl font-medium mb-2"
                style={{ color: "#8B7355" }}
              >
                Email or Phone Number
              </label>
              <input
                id="identifier"
                type="text"
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                  if (errors.identifier)
                    setErrors({ ...errors, identifier: undefined });
                }}
                placeholder="Enter your email or phone"
                className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2"
                style={{
                  borderColor: errors.identifier ? "#EF4444" : "#FFE8CC",
                  backgroundColor: "#FFFBF5",
                  color: "#5D4E37",
                }}
                aria-label="Email or Phone Number"
                aria-invalid={!!errors.identifier}
                aria-describedby={
                  errors.identifier ? "identifier-error" : undefined
                }
              />
              {errors.identifier && (
                <p
                  id="identifier-error"
                  className="text-red-500 text-m mt-1 flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.identifier}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-xl font-medium mb-2"
                style={{ color: "#8B7355" }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password)
                    setErrors({ ...errors, password: undefined });
                }}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2"
                style={{
                  borderColor: errors.password ? "#EF4444" : "#FFE8CC",
                  backgroundColor: "#FFFBF5",
                  color: "#5D4E37",
                }}
                aria-label="Password"
                aria-invalid={!!errors.password}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
              />
              {errors.password && (
                <p
                  id="password-error"
                  className="text-red-500 text-m mt-1 flex items-center gap-1"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link
                href="/forgot-password"
                className="text-sm transition-colors duration-200"
                style={{ color: "#D4AF37" }}
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)",
              }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm" style={{ color: "#A0826D" }}>
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold transition-colors duration-200"
                style={{ color: "#D4AF37" }}
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm" style={{ color: "#A0826D" }}>
          <p>© {year} Raaya. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }

        input:focus {
          border-color: #d4af37 !important;
          ring-color: #d4af37;
        }
      `}</style>
    </div>
  );
}
