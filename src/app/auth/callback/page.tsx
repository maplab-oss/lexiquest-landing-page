"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

/**
 * OAuth Callback Handler
 * 
 * This page handles the redirect from Supabase OAuth providers (Facebook, Google, etc.)
 * On web, it displays a success message. On mobile via deep linking, it redirects
 * to the app's deep link handler which processes the session tokens.
 */
export default function OAuthCallbackPage() {
  const searchParams = useSearchParams();
  const accessToken = searchParams.get("access_token");
  const refreshToken = searchParams.get("refresh_token");
  const type = searchParams.get("type");
  const expiresIn = searchParams.get("expires_in");

  useEffect(() => {
    if (accessToken) {
      console.log("✅ OAuth callback received with access token");

      // For mobile apps: If the referrer includes mobile deep link info, redirect to the app
      const userAgent =
        typeof window !== "undefined" ? navigator.userAgent : "";

      const isMobile =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent.toLowerCase(),
      );

      if (isMobile) {
        console.log("📱 Mobile user detected, attempting deep link redirect");

        // Try to redirect to the app using the deep link
        // This will be captured by Expo's linking system
        const deepLinkUrl = `lexiquest://auth/callback?access_token=${encodeURIComponent(
          accessToken,
        )}&refresh_token=${encodeURIComponent(
          refreshToken || "",
        )}&type=${encodeURIComponent(type || "")}&expires_in=${encodeURIComponent(
          expiresIn || "",
        )}`;

        console.log("Attempting deep link redirect to:", deepLinkUrl);

        // Use a small timeout to ensure the page is loaded
        setTimeout(() => {
          // Try custom scheme first
          window.location.href = deepLinkUrl;

          // Fallback: if deep link doesn't work, show message after 2 seconds
          setTimeout(() => {
            console.log("Deep link may have failed, showing message to user");
          }, 2000);
        }, 100);
      }
    }
  }, [accessToken, refreshToken, type, expiresIn]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        gap: "1rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {accessToken ? (
        <>
          <h1>✅ Authentication Successful!</h1>
          <p>
            {typeof window !== "undefined" &&
            /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
              navigator.userAgent.toLowerCase(),
            )
              ? "Redirecting you back to the app..."
              : "You have been successfully authenticated. You can close this window."}
          </p>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>
            If you are not redirected automatically, please open the app manually.
          </p>
        </>
      ) : (
        <>
          <h1>🔄 Processing Authentication...</h1>
          <p>Please wait while we process your authentication.</p>
        </>
      )}
    </div>
  );
}
