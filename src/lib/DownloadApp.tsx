"use client";
import React, { useEffect, useRef, useCallback } from "react";
import { UserRating } from "./UserRating";
import AppStoreButton from "./AppStoreButton";
import { contentConfig } from "./content-config";

const DownloadApp: React.FC = () => {
  const mockupRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const tickingRef = useRef(false);
  const lastUpdateScrollY = useRef(0);
  const SCROLL_THRESHOLD = 15; // Only update every 15 pixels of scroll for smooth but responsive animation

  const mockupImages = [
    contentConfig.assets.mockups.footerOne,
    contentConfig.assets.mockups.footerTwo,
    contentConfig.assets.mockups.footerThree,
  ];

  // Gentle easing function from main.js - smoothstep function
  const gentleEase = (t: number): number => {
    return t * t * (3 - 2 * t);
  };

  // Card animation positions matching main.js
  const maxCardAnimations = [
    { translateX: -60, rotate: -13 }, // Left card
    { translateX: 0, rotate: 0 }, // Center card
    { translateX: 60, rotate: 13 }, // Right card
  ];

  const updateFanOutBasedOnProgress = useCallback(
    (progress: number) => {
      const easedProgress = gentleEase(progress);

      // Desktop animations
      mockupRefs.forEach((ref, index) => {
        if (ref.current) {
          const maxAnim = maxCardAnimations[index]!;

          // Calculate current values based on progress
          const currentTranslateX = maxAnim.translateX * easedProgress;

          // Middle card starts 15px higher, all cards move up 30px as you scroll
          const initialY = index === 1 ? -75 : -60; // Middle card starts 15px higher
          const currentTranslateY = initialY + 30 * easedProgress; // Move up 30px during scroll
          const currentRotate = maxAnim.rotate * easedProgress;
          const currentScale = 0.95 + 0.08 * easedProgress; // Scale from 0.95 to 1.03

          ref.current.style.transform = `translateX(${currentTranslateX}px) translateY(${currentTranslateY}px) rotate(${currentRotate}deg) scale(${currentScale})`;
        }
      });
    },
    [mockupRefs],
  );

  const updateFanOutOnScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Hybrid approach: Only update every 15px of scroll, CSS transitions smooth between states
    if (
      Math.abs(currentScrollY - lastUpdateScrollY.current) < SCROLL_THRESHOLD &&
      lastUpdateScrollY.current !== 0
    ) {
      return;
    }

    if (!tickingRef.current) {
      requestAnimationFrame(() => {
        // Use first card to determine section position
        const firstCard = mockupRefs[0]!.current;

        if (!firstCard) {
          tickingRef.current = false;
          return;
        }

        const rect = firstCard.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate intrusion percentage (matching main.js logic)
        const extendedRange = viewportHeight * 1.5; // 1.5x viewport height for slower animation
        const earlyStart = 50; // Start animation 50px before cards enter viewport
        const intrusion =
          (viewportHeight + earlyStart - rect.top) / extendedRange;

        // Clamp between 0 and 1
        const progress = Math.max(0, Math.min(1, intrusion));

        updateFanOutBasedOnProgress(progress);
        lastUpdateScrollY.current = currentScrollY;
        tickingRef.current = false;
      });

      tickingRef.current = true;
    }
  }, [updateFanOutBasedOnProgress]);

  useEffect(() => {
    // Set initial state with smooth CSS transitions for hybrid approach
    mockupRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.style.transform =
          "translateX(0px) translateY(-60px) rotate(0deg) scale(0.95)";

        ref.current.style.transition =
          "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)"; // Smooth transitions between scroll checkpoints

        ref.current.style.opacity = "1"; // Keep fully opaque
        ref.current.style.transformOrigin = "center calc(100% + 540px)"; // Move origin lower for gentler rotation
      }
    });

    // Add scroll listener for smooth animation
    window.addEventListener("scroll", updateFanOutOnScroll, { passive: true });

    // Initial calculation in case cards are already in view (force first update)
    lastUpdateScrollY.current = -1; // Force initial update regardless of threshold
    updateFanOutOnScroll();

    return () => {
      window.removeEventListener("scroll", updateFanOutOnScroll);
    };
  }, [updateFanOutOnScroll]);

  return (
    <section id="download-links" className="relative bg-white">
      <div className="z-10 overflow-hidden rounded-t-3xl bg-gray-950 pt-24 text-gray-100">
        <div className="relative mx-auto max-w-6xl px-8">
          {/* Main Content */}
          <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center text-center">
            <h1 className="heading-l2 lod">
              {contentConfig.downloadApp.title}
            </h1>

            <p className="text-normal lod mb-8">
              {contentConfig.downloadApp.subtitle}
            </p>

            {/* App Reviews */}
            <div className="mb-8">
              <UserRating
                rating={contentConfig.brand.rating}
                totalReviews={contentConfig.brand.totalReviews}
              />
            </div>

            {/* Download Buttons */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row md:mb-0">
              <AppStoreButton
                store="apple"
                onClick={() => {
                  window.open(contentConfig.downloadApp.appStore.apple.url);
                }}
              />
              <AppStoreButton
                store="google"
                onClick={() => {
                  window.open(contentConfig.downloadApp.appStore.google.url);
                }}
              />
            </div>
          </div>

          {/* Animated Phone Mockups */}
          <div className="relative flex min-h-96 items-start justify-center pt-24">
            {mockupImages.map((image, index) => (
              <div
                key={index}
                ref={mockupRefs[index]}
                className="absolute h-auto w-80"
                style={{
                  zIndex: index === 1 ? 20 : 10,
                  left: "50%",
                  top: "6rem",
                  marginLeft: "-10rem",
                  // All phones start at center position, fan-out controlled by scroll
                  pointerEvents: "none",
                }}
              >
                <img
                  src={image}
                  alt={`App mockup ${index + 1}`}
                  className="h-auto w-full rounded-3xl shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
