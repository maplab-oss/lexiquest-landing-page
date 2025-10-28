/* eslint-disable import/no-default-export */
"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function ResetPassword() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");

  const [newPasswordConfirmation, setNewPasswordConfirmation] =
    useState<string>("");

  const [message, setMessage] = useState<string | null>(null);

  const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newPassword) {
      setMessage("Please provide a new password.");
      return;
    }

    if (newPassword !== newPasswordConfirmation) {
      setMessage("Passwords does not match!");
      return;
    }

    try {
      if (!supabase) return;

      const getAccessTokenFromURL = () => {
        const hash = window.location.hash;
        const params = new URLSearchParams(hash.substring(1));

        return {
          access_token: params.get("access_token")!,
          refresh_token: params.get("refresh_token")!,
        };
      };

      await supabase.auth.setSession(getAccessTokenFromURL());

      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;
      const { error: signOutError } = await supabase.auth.signOut();
      if (signOutError) throw signOutError;
      setMessage("Password reset successful! You can now log in.");
      setIsSuccess(true);
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    }
  };

  return (
    <main className="relative flex justify-center">
      <div className="relative z-10 mt-32 w-full max-w-md p-20 md:p-0">
        <form
          onSubmit={handlePasswordReset}
          className="bg-opacity-90 mb-4 rounded-lg bg-slate-50 px-8 pt-14 pb-14 shadow-lg backdrop-blur-sm"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
            Reset Password
          </h2>
          {!isSuccess && message && (
            <p className="mb-4 text-xs text-red-500">{message}</p>
          )}
          {!isSuccess && (
            <div>
              <div className="mb-4">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="password"
                >
                  New Password
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded-full border px-3 py-2 leading-tight text-gray-700 shadow focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  id="password"
                  name="password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block text-sm font-bold text-gray-700"
                  htmlFor="confirmPassword"
                >
                  Confirm New Password
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded-full border px-3 py-2 leading-tight text-gray-700 shadow focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={newPasswordConfirmation}
                  onChange={(e) => setNewPasswordConfirmation(e.target.value)}
                  required
                />
              </div>
            </div>
          )}
          {!isSuccess && (
            <div className="flex items-center justify-between">
              <button
                className="focus:shadow-outline rounded-full bg-purple-600 px-6 py-2 font-bold text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
                type="submit"
              >
                Reset Password
              </button>
            </div>
          )}
          {isSuccess && (
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold text-black hover:underline">Success!</p>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
