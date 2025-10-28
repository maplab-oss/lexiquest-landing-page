import { useSpring } from "@react-spring/web";
import { useInView } from "./useInView";

interface SpringInViewOptions {
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

export function useSpringInView<T extends HTMLElement = HTMLDivElement>(
  options: SpringInViewOptions = {},
) {
  const {
    threshold = 0.2,
    rootMargin = "-50px",
    fromScale = 0.85,
    toScale = 1,
    fromOpacity = 0,
    toOpacity = 1,
    fromY = 40,
    toY = 0,
    delay = 0,
    tension = 138, // Reduced from 180 to make animations ~30% longer
    friction = 12,
    mass = 0.9,
    disableOnMobile = false,
  } = options;

  const { ref, hasBeenInView } = useInView<T>({ threshold, rootMargin });

  // Check if we're on a mobile device (screen width < 768px)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const shouldDisableAnimation = disableOnMobile && isMobile;

  // Add random delay up to 50ms and vary timing by ±20%
  const randomDelay = Math.random() * 50;
  const timingVariation = 0.8 + Math.random() * 0.4; // 0.8 to 1.2 (±20%)

  const springProps = useSpring({
    from: {
      scale: shouldDisableAnimation ? toScale : fromScale,
      opacity: shouldDisableAnimation ? toOpacity : fromOpacity,
      y: shouldDisableAnimation ? toY : fromY,
    },
    to: {
      scale: hasBeenInView || shouldDisableAnimation ? toScale : fromScale,
      opacity:
        hasBeenInView || shouldDisableAnimation ? toOpacity : fromOpacity,
      y: hasBeenInView || shouldDisableAnimation ? toY : fromY,
    },
    config: {
      tension: tension * timingVariation,
      friction: friction * timingVariation,
      mass,
    },
    delay: hasBeenInView && !shouldDisableAnimation ? delay + randomDelay : 0,
  });

  return { ref, springProps, hasBeenInView };
}
