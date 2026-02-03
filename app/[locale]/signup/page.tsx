"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import raayaLogo from "@/public/logo.svg";
import { useTranslations } from "next-intl";

// Type definitions for form data
interface BasicInfo {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
}

interface MedicalInfo {
  weight: number | "";
  height: number | "";
  pastMedicalIssues: string[];
  currentMedicalIssues: string[];
}

interface FormErrors {
  [key: string]: string;
}

export default function SignupPage() {
  const year = new Date().getFullYear();

  const t = useTranslations("logo");

  // Step management
  const [currentStep, setCurrentStep] = useState(1);

  // Form data state
  const [basicInfo, setBasicInfo] = useState<BasicInfo>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
  });

  const [medicalInfo, setMedicalInfo] = useState<MedicalInfo>({
    weight: "",
    height: "",
    pastMedicalIssues: [""],
    currentMedicalIssues: [""],
  });

  // Validation state
  const [errors, setErrors] = useState<FormErrors>({});
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasNumber: false,
    hasSpecial: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  // Password validation function
  const validatePassword = (password: string) => {
    setPasswordValidation({
      minLength: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  };

  // Date of birth Validation Function

  function validateDOB(dateOfBirth: string, newErrors: FormErrors) {
    if (!dateOfBirth) {
      return (newErrors.dateOfBirth = "Date of birth is required");
    }

    const birthDate = new Date(dateOfBirth);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
      return (newErrors.dateOfBirth = "Invalid date");
    }

    if (birthDate > today) {
      return (newErrors.dateOfBirth = "Date of birth cannot be in the future");
    }

    const age =
      today.getFullYear() -
      birthDate.getFullYear() -
      (today <
      new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
        ? 1
        : 0);

    console.log(age);

    if (age < 0) {
      return (newErrors.dateOfBirth = "Invalid age");
    }

    if (age < 18) {
      return (newErrors.dateOfBirth = "You must be at least 18 years old");
    }

    if (age > 120) {
      return (newErrors.dateOfBirth = "Please enter a valid date of birth");
    }

    return null; // valid
  }

  // Validate Step 1
  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {};

    if (!basicInfo.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!basicInfo.lastName.trim())
      newErrors.lastName = "Last name is required";

    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!basicInfo.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!phoneRegex.test(basicInfo.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!basicInfo.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(basicInfo.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!basicInfo.gender) newErrors.gender = "Please select your gender";

    // if (!basicInfo.dateOfBirth)
    //   newErrors.dateOfBirth = "Date of birth is required";

    validateDOB(basicInfo.dateOfBirth, newErrors);

    if (!basicInfo.password) {
      newErrors.password = "Password is required";
    } else if (
      !passwordValidation.minLength ||
      !passwordValidation.hasNumber ||
      !passwordValidation.hasSpecial
    ) {
      newErrors.password = "Password must meet all requirements";
    }

    if (!basicInfo.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    }

    if (basicInfo.confirmPassword !== basicInfo.password) {
      newErrors.confirmPassword =
        "Confirm Password must be the same as Password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate Step 2
  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {};

    if (!medicalInfo.weight) {
      newErrors.weight = "Weight is required";
    } else if (Number(medicalInfo.weight) <= 30) {
      newErrors.weight = "Weight must be greater than 30";
    }

    if (!medicalInfo.height) {
      newErrors.height = "Height is required";
    } else if (Number(medicalInfo.height) < 80) {
      newErrors.height = "Height must be greater than 80";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Step 1 submission
  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setCurrentStep(2);
      setErrors({});
    }
  };

  // Handle final form submission
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep2()) return;

    setIsLoading(true);

    // Clean up medical issues arrays (remove empty strings)
    const cleanPastIssues = medicalInfo.pastMedicalIssues.filter(
      (issue) => issue.trim() !== "",
    );
    const cleanCurrentIssues = medicalInfo.currentMedicalIssues.filter(
      (issue) => issue.trim() !== "",
    );

    // Create DB-ready JSON object
    const signupData = {
      // Basic Information
      firstName: basicInfo.firstName.trim(),
      lastName: basicInfo.lastName.trim(),
      phoneNumber: basicInfo.phoneNumber.trim(),
      email: basicInfo.email.trim(),
      gender: basicInfo.gender,
      dateOfBirth: basicInfo.dateOfBirth,
      password: basicInfo.password, // In production, this should be hashed on the backend

      // Medical Information (DB-ready structure)
      weight: Number(medicalInfo.weight),
      height: Number(medicalInfo.height),
      pastMedicalIssues: cleanPastIssues,
      currentMedicalIssues: cleanCurrentIssues,

      // Metadata
      createdAt: new Date().toISOString(),
    };

    console.log(
      "Complete Signup Data (DB-ready):",
      JSON.stringify(signupData, null, 2),
    );

    try {
      // TODO: Add your API call here
      // await fetch('/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(signupData)
      // });

      setTimeout(() => {
        setIsLoading(false);
        // Redirect to success page or login
        console.log("Signup successful!");
      }, 1500);
    } catch (error) {
      console.error("Signup error:", error);
      setIsLoading(false);
    }
  };

  // Add medical issue field
  const addMedicalIssue = (type: "past" | "current") => {
    if (type === "past") {
      setMedicalInfo({
        ...medicalInfo,
        pastMedicalIssues: [...medicalInfo.pastMedicalIssues, ""],
      });
    } else {
      setMedicalInfo({
        ...medicalInfo,
        currentMedicalIssues: [...medicalInfo.currentMedicalIssues, ""],
      });
    }
  };

  // Remove medical issue field
  const removeMedicalIssue = (type: "past" | "current", index: number) => {
    if (type === "past") {
      const updated = medicalInfo.pastMedicalIssues.filter(
        (_, i) => i !== index,
      );
      setMedicalInfo({
        ...medicalInfo,
        pastMedicalIssues: updated.length > 0 ? updated : [""],
      });
    } else {
      const updated = medicalInfo.currentMedicalIssues.filter(
        (_, i) => i !== index,
      );
      setMedicalInfo({
        ...medicalInfo,
        currentMedicalIssues: updated.length > 0 ? updated : [""],
      });
    }
  };

  // Update medical issue value
  const updateMedicalIssue = (
    type: "past" | "current",
    index: number,
    value: string,
  ) => {
    if (type === "past") {
      const updated = [...medicalInfo.pastMedicalIssues];
      updated[index] = value;
      setMedicalInfo({ ...medicalInfo, pastMedicalIssues: updated });
    } else {
      const updated = [...medicalInfo.currentMedicalIssues];
      updated[index] = value;
      setMedicalInfo({ ...medicalInfo, currentMedicalIssues: updated });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 py-12"
      style={{
        background: "linear-gradient(135deg, #FFF9E6 0%, #FFE8CC 100%)",
      }}
    >
      <div className="w-full max-w-2xl">
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
          <h1 className="text-3xl font-bold" style={{ color: "#8B7355" }}>
            Raaya Portal
          </h1>
          <p className="text-sm mt-2" style={{ color: "#A0826D" }}>
            Join us on your health journey
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                currentStep >= 1 ? "text-white" : "text-gray-400"
              }`}
              style={{
                background:
                  currentStep >= 1
                    ? "linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)"
                    : "#E5E7EB",
              }}
            >
              {currentStep > 1 ? "✓" : "1"}
            </div>
            <span
              className="text-sm font-medium"
              style={{ color: currentStep >= 1 ? "#8B7355" : "#9CA3AF" }}
            >
              Basic Info
            </span>
          </div>

          <div
            className="h-1 w-16 rounded-full"
            style={{ background: currentStep >= 2 ? "#D4AF37" : "#E5E7EB" }}
          />

          <div className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                currentStep >= 2 ? "text-white" : "text-gray-400"
              }`}
              style={{
                background:
                  currentStep >= 2
                    ? "linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)"
                    : "#E5E7EB",
              }}
            >
              2
            </div>
            <span
              className="text-sm font-medium"
              style={{ color: currentStep >= 2 ? "#8B7355" : "#9CA3AF" }}
            >
              Medical Info
            </span>
          </div>
        </div>

        {/* Signup Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-slideUp">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <form onSubmit={handleStep1Submit}>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "#8B7355" }}
              >
                Create Your Account
              </h2>

              <div className="space-y-4">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xl font-medium mb-2"
                      style={{ color: "#8B7355" }}
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={basicInfo.firstName}
                      onChange={(e) => {
                        setBasicInfo({
                          ...basicInfo,
                          firstName: e.target.value,
                        });
                        if (errors.firstName)
                          setErrors({ ...errors, firstName: "" });
                      }}
                      placeholder="Mohamed"
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                      style={{
                        borderColor: errors.firstName ? "#EF4444" : "#FFE8CC",
                        backgroundColor: "#FFFBF5",
                        color: "#5D4E37",
                      }}
                      aria-invalid={!!errors.firstName}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-m mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xl font-medium mb-2"
                      style={{ color: "#8B7355" }}
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={basicInfo.lastName}
                      onChange={(e) => {
                        setBasicInfo({
                          ...basicInfo,
                          lastName: e.target.value,
                        });
                        if (errors.lastName)
                          setErrors({ ...errors, lastName: "" });
                      }}
                      placeholder="Ahmed"
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                      style={{
                        borderColor: errors.lastName ? "#EF4444" : "#FFE8CC",
                        backgroundColor: "#FFFBF5",
                        color: "#5D4E37",
                      }}
                      aria-invalid={!!errors.lastName}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-m mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xl font-medium mb-2"
                    style={{ color: "#8B7355" }}
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={basicInfo.phoneNumber}
                    onChange={(e) => {
                      setBasicInfo({
                        ...basicInfo,
                        phoneNumber: e.target.value,
                      });
                      if (errors.phoneNumber)
                        setErrors({ ...errors, phoneNumber: "" });
                    }}
                    placeholder="+20 10 12345678"
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                    style={{
                      borderColor: errors.phoneNumber ? "#EF4444" : "#FFE8CC",
                      backgroundColor: "#FFFBF5",
                      color: "#5D4E37",
                    }}
                    aria-invalid={!!errors.phoneNumber}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-m mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xl font-medium mb-2"
                    style={{ color: "#8B7355" }}
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={basicInfo.email}
                    onChange={(e) => {
                      setBasicInfo({ ...basicInfo, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                    style={{
                      borderColor: errors.email ? "#EF4444" : "#FFE8CC",
                      backgroundColor: "#FFFBF5",
                      color: "#5D4E37",
                    }}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-m mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Gender & Date of Birth */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-xl font-medium mb-2"
                      style={{ color: "#8B7355" }}
                    >
                      Gender *
                    </label>
                    <select
                      id="gender"
                      value={basicInfo.gender}
                      onChange={(e) => {
                        setBasicInfo({ ...basicInfo, gender: e.target.value });
                        if (errors.gender) setErrors({ ...errors, gender: "" });
                      }}
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                      style={{
                        borderColor: errors.gender ? "#EF4444" : "#FFE8CC",
                        backgroundColor: "#FFFBF5",
                        color: basicInfo.gender ? "#5D4E37" : "#9CA3AF",
                      }}
                      aria-invalid={!!errors.gender}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-500 text-m mt-1">
                        {errors.gender}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-xl font-medium mb-2"
                      style={{ color: "#8B7355" }}
                    >
                      Date of Birth *
                    </label>
                    <input
                      id="dateOfBirth"
                      type="date"
                      min={2}
                      max={new Date().toISOString().split("T")[0]}
                      value={basicInfo.dateOfBirth}
                      onChange={(e) => {
                        setBasicInfo({
                          ...basicInfo,
                          dateOfBirth: e.target.value,
                        });
                        console.log(e.target.value);
                        if (errors.dateOfBirth)
                          setErrors({ ...errors, dateOfBirth: "" });
                      }}
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                      style={{
                        borderColor: errors.dateOfBirth ? "#EF4444" : "#FFE8CC",
                        backgroundColor: "#FFFBF5",
                        color: "#5D4E37",
                      }}
                      aria-invalid={!!errors.dateOfBirth}
                    />
                    {errors.dateOfBirth && (
                      <p className="text-red-500 text-m mt-1">
                        {errors.dateOfBirth}
                      </p>
                    )}
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-xl font-medium mb-2"
                    style={{ color: "#8B7355" }}
                  >
                    Password *
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={basicInfo.password}
                    onChange={(e) => {
                      setBasicInfo({ ...basicInfo, password: e.target.value });
                      validatePassword(e.target.value);
                      if (errors.password)
                        setErrors({ ...errors, password: "" });
                    }}
                    placeholder="Create a strong password"
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                    style={{
                      borderColor: errors.password ? "#EF4444" : "#FFE8CC",
                      backgroundColor: "#FFFBF5",
                      color: "#5D4E37",
                    }}
                    aria-invalid={!!errors.password}
                  />

                  {/* Password Requirements */}
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2 text-x">
                      <span
                        className={
                          passwordValidation.minLength
                            ? "text-green-600"
                            : "text-gray-400"
                        }
                      >
                        {passwordValidation.minLength ? "✅" : "❌"}
                      </span>
                      <span
                        className={
                          passwordValidation.minLength
                            ? "text-green-600"
                            : "text-gray-600"
                        }
                      >
                        At least 8 characters
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-x">
                      <span
                        className={
                          passwordValidation.hasNumber
                            ? "text-green-600"
                            : "text-gray-400"
                        }
                      >
                        {passwordValidation.hasNumber ? "✅" : "❌"}
                      </span>
                      <span
                        className={
                          passwordValidation.hasNumber
                            ? "text-green-600"
                            : "text-gray-600"
                        }
                      >
                        Contains a number
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-x">
                      <span
                        className={
                          passwordValidation.hasSpecial
                            ? "text-green-600"
                            : "text-gray-400"
                        }
                      >
                        {passwordValidation.hasSpecial ? "✅" : "❌"}
                      </span>
                      <span
                        className={
                          passwordValidation.hasSpecial
                            ? "text-green-600"
                            : "text-gray-600"
                        }
                      >
                        Contains a special character
                      </span>
                    </div>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-m mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-xl font-medium mb-2"
                    style={{ color: "#8B7355" }}
                  >
                    Confirm Password *
                  </label>
                  <input
                    id="confirm-password"
                    type="password"
                    value={basicInfo.confirmPassword}
                    onChange={(e) => {
                      setBasicInfo({
                        ...basicInfo,
                        confirmPassword: e.target.value,
                      });
                      if (errors.confirmPassword)
                        setErrors({ ...errors, confirmPassword: "" });
                    }}
                    placeholder="Confirm your Password"
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                    style={{
                      borderColor: errors.confirmPassword
                        ? "#EF4444"
                        : "#FFE8CC",
                      backgroundColor: "#FFFBF5",
                      color: "#5D4E37",
                    }}
                    aria-invalid={!!errors.confirmPassword}
                  />

                  {/* <div className="mt-2 space-y-1"></div> */}
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-m mt-1">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Next Button */}
              <button
                type="submit"
                className="w-full mt-6 py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)",
                }}
              >
                Continue to Medical Information
              </button>

              {/* Login Link */}
              <div className="mt-4 text-center">
                <p className="text-x" style={{ color: "#A0826D" }}>
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold transition-colors duration-200"
                    style={{ color: "#D4AF37" }}
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          )}

          {/* Step 2: Medical Information */}
          {currentStep === 2 && (
            <form onSubmit={handleFinalSubmit}>
              <h2
                className="text-2xl font-bold mb-6"
                style={{ color: "#8B7355" }}
              >
                Medical Information
              </h2>

              <div className="space-y-5">
                {/* Weight & Height */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="weight"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#8B7355" }}
                    >
                      Weight (kg) *
                    </label>
                    <input
                      id="weight"
                      type="number"
                      step="0.1"
                      min={30}
                      max={350}
                      value={medicalInfo.weight}
                      onChange={(e) => {
                        setMedicalInfo({
                          ...medicalInfo,
                          weight: e.target.value ? Number(e.target.value) : "",
                        });
                        if (errors.weight) setErrors({ ...errors, weight: "" });
                      }}
                      placeholder="70"
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                      style={{
                        borderColor: errors.weight ? "#EF4444" : "#FFE8CC",
                        backgroundColor: "#FFFBF5",
                        color: "#5D4E37",
                      }}
                      aria-invalid={!!errors.weight}
                    />
                    {errors.weight && (
                      <p className="text-red-500 text-m mt-1">
                        {errors.weight}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="height"
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#8B7355" }}
                    >
                      Height (cm) *
                    </label>
                    <input
                      id="height"
                      type="number"
                      min={80}
                      max={300}
                      step="0.1"
                      value={medicalInfo.height}
                      onChange={(e) => {
                        setMedicalInfo({
                          ...medicalInfo,
                          height: e.target.value ? Number(e.target.value) : "",
                        });
                        if (errors.height) setErrors({ ...errors, height: "" });
                      }}
                      placeholder="175"
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                      style={{
                        borderColor: errors.height ? "#EF4444" : "#FFE8CC",
                        backgroundColor: "#FFFBF5",
                        color: "#5D4E37",
                      }}
                      aria-invalid={!!errors.height}
                    />
                    {errors.height && (
                      <p className="text-red-500 text-m mt-1">
                        {errors.height}
                      </p>
                    )}
                  </div>
                </div>

                {/* Past Medical Issues */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#8B7355" }}
                  >
                    Past Medical Issues (Optional)
                  </label>
                  <div className="space-y-2">
                    {medicalInfo.pastMedicalIssues.map((issue, index) => (
                      <div key={`past-${index}`} className="flex gap-2">
                        <input
                          type="text"
                          value={issue}
                          onChange={(e) =>
                            updateMedicalIssue("past", index, e.target.value)
                          }
                          placeholder="e.g., Diabetes, Hypertension"
                          className="flex-1 px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                          style={{
                            borderColor: "#FFE8CC",
                            backgroundColor: "#FFFBF5",
                            color: "#5D4E37",
                          }}
                        />
                        {medicalInfo.pastMedicalIssues.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeMedicalIssue("past", index)}
                            className="px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors duration-200"
                            aria-label="Remove past medical issue"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addMedicalIssue("past")}
                      className="w-full py-2 px-4 rounded-xl border-2 border-dashed font-medium transition-all duration-200 hover:border-solid"
                      style={{
                        borderColor: "#D4AF37",
                        color: "#D4AF37",
                      }}
                    >
                      + Add Past Medical Issue
                    </button>
                  </div>
                </div>

                {/* Current Medical Issues */}
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#8B7355" }}
                  >
                    Current Medical Issues (Optional)
                  </label>
                  <div className="space-y-2">
                    {medicalInfo.currentMedicalIssues.map((issue, index) => (
                      <div key={`current-${index}`} className="flex gap-2">
                        <input
                          type="text"
                          value={issue}
                          onChange={(e) =>
                            updateMedicalIssue("current", index, e.target.value)
                          }
                          placeholder="e.g., Asthma, Allergies"
                          className="flex-1 px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
                          style={{
                            borderColor: "#FFE8CC",
                            backgroundColor: "#FFFBF5",
                            color: "#5D4E37",
                          }}
                        />
                        {medicalInfo.currentMedicalIssues.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeMedicalIssue("current", index)}
                            className="px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors duration-200"
                            aria-label="Remove current medical issue"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => addMedicalIssue("current")}
                      className="w-full py-2 px-4 rounded-xl border-2 border-dashed font-medium transition-all duration-200 hover:border-solid"
                      style={{
                        borderColor: "#D4AF37",
                        color: "#D4AF37",
                      }}
                    >
                      + Add Current Medical Issue
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 py-3 px-4 rounded-xl font-semibold border-2 transition-all duration-200 hover:shadow-md"
                  style={{
                    borderColor: "#D4AF37",
                    color: "#D4AF37",
                  }}
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-3 px-4 rounded-xl font-semibold text-white transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  style={{
                    background:
                      "linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)",
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
                      Creating Account...
                    </span>
                  ) : (
                    "Complete Signup"
                  )}
                </button>
              </div>
            </form>
          )}
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

        input:focus,
        select:focus {
          border-color: #d4af37 !important;
          ring-color: #d4af37;
        }
      `}</style>
    </div>
  );
}
