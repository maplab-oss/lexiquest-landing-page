"use client";
import type { ReactNode } from "react";
import { animated } from "@react-spring/web";
import { useSpringInView } from "./hooks/useSpringInView";

/**
 * SpringInView - A reusable wrapper component that applies spring animations
 * when its children scroll into the viewport.
 *
 * @example
 * // Basic usage with default animation
 * <SpringInView>
 *   <div>Your content here</div>
 * </SpringInView>
 *
 * @example
 * // Custom bounce effect
 * <SpringInView
 *   tension={200}
 *   friction={10}
 *   fromScale={0.7}
 * >
 *   <div>More bouncy content</div>
 * </SpringInView>
 *
 * @example
 * // Slide up from bottom
 * <SpringInView
 *   fromY={100}
 *   fromOpacity={0}
 *   delay={200}
 * >
 *   <div>Delayed slide-up content</div>
 * </SpringInView>
 *
 * @example
 * // Disable animations on mobile devices
 * <SpringInView disableOnMobile>
 *   <div>No animation on mobile</div>
 * </SpringInView>
 */

interface Props {
  children: ReactNode;
  /** Custom className to apply to the animated wrapper */
  className?: string;
  /** Intersection Observer threshold (0-1) */
  threshold?: number;
  /** Intersection Observer root margin */
  rootMargin?: string;
  /** Initial scale value */
  fromScale?: number;
  /** Target scale value */
  toScale?: number;
  /** Initial opacity */
  fromOpacity?: number;
  /** Target opacity */
  toOpacity?: number;
  /** Initial Y offset */
  fromY?: number;
  /** Target Y offset */
  toY?: number;
  /** Spring animation delay in ms */
  delay?: number;
  /** Spring tension (higher = more bouncy) */
  tension?: number;
  /** Spring friction (lower = more bouncy) */
  friction?: number;
  /** Spring mass */
  mass?: number;
  /** Disable animations on mobile devices */
  disableOnMobile?: boolean;
}

export function SpringInView({
  children,
  className = "",
  threshold,
  rootMargin,
  fromScale,
  toScale,
  fromOpacity,
  toOpacity,
  fromY,
  toY,
  delay,
  tension,
  friction,
  mass,
  disableOnMobile,
}: Props) {
  const { ref, springProps } = useSpringInView({
    threshold,
    rootMargin,
    fromScale,
    toScale,
    fromOpacity,
    toOpacity,
    fromY,
    toY,
    delay,
    tension,
    friction,
    mass,
    disableOnMobile,
  });

  return (
    <animated.div ref={ref} style={springProps} className={className}>
      {children}
    </animated.div>
  );
}
