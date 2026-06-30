"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Info } from "lucide-react";

export default function SignInDialog() {
  const [mode, setMode] = useState<"signin" | "join">("signin");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Dialog>
      <DialogContent className="sm:max-w-[480px] p-0 gap-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-lg text-amtrak-blue font-semibold">
            Amtrak Guest Rewards
          </DialogTitle>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex border-b border-amtrak-border mx-6 mt-4">
          <button
            onClick={() => setMode("signin")}
            className={`px-4 py-3 text-sm font-semibold border-b-2 -mb-px transition-colors ${
              mode === "signin"
                ? "border-amtrak-primary text-amtrak-primary"
                : "border-transparent text-amtrak-gray hover:text-amtrak-dark"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode("join")}
            className={`px-4 py-3 text-sm font-semibold border-b-2 -mb-px transition-colors ${
              mode === "join"
                ? "border-amtrak-primary text-amtrak-primary"
                : "border-transparent text-amtrak-gray hover:text-amtrak-dark"
            }`}
          >
            Join
          </button>
        </div>

        {mode === "signin" ? (
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-semibold text-amtrak-dark">
                Email or Guest Rewards #
              </Label>
              <Input
                id="email"
                placeholder=" "
                className="border-amtrak-border focus:border-amtrak-primary"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-xs font-semibold text-amtrak-dark">
                  Password
                </Label>
                <div className="relative group">
                  <Info className="w-3.5 h-3.5 text-amtrak-gray cursor-help" />
                  <div className="absolute right-0 top-full mt-2 w-64 p-3 bg-amtrak-dark text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    Passwords should be at least 10 characters long and include 1 uppercase and 1 lowercase alpha character, 1 number and 1 special character. Passwords are case sensitive.
                  </div>
                </div>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="border-amtrak-border focus:border-amtrak-primary pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-amtrak-gray hover:text-amtrak-primary"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              <button className="text-xs text-amtrak-primary font-semibold hover:underline">
                Forgot Password?
              </button>
            </div>
            <Button className="w-full bg-amtrak-primary hover:bg-amtrak-blue text-white font-bold">
              SIGN IN
            </Button>
          </div>
        ) : (
          <div className="p-6 space-y-4">
            <p className="text-sm text-amtrak-dark font-semibold">
              Start Earning Today.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-xs font-semibold">
                  First Name
                </Label>
                <Input id="firstName" className="border-amtrak-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-xs font-semibold">
                  Last Name
                </Label>
                <Input id="lastName" className="border-amtrak-border" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="regEmail" className="text-xs font-semibold">
                Email Address
              </Label>
              <Input id="regEmail" type="email" className="border-amtrak-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="regPassword" className="text-xs font-semibold">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="regPassword"
                  type={showPassword ? "text" : "password"}
                  className="border-amtrak-border pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-amtrak-gray"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-xs font-semibold">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                className="border-amtrak-border"
              />
            </div>
            <Button className="w-full bg-amtrak-primary hover:bg-amtrak-blue text-white font-bold">
              JOIN
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
