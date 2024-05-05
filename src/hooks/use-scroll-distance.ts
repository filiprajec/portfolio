"use client";

import { useState } from "react";
import { useInViewport, useShallowEffect } from "@mantine/hooks";

import { usePreferences } from "@/context/preferences-context";

const bound = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/**
 * Represents the scroll distance measurements.
 */
export type ScrollDistance = {
  /**
   * The distance from the top of the scrollable element.
   */
  top: number;
  /**
   * The distance from the bottom of the scrollable element.
   */
  bottom: number;

  /**
   * The distance from the center of the scrollable element.
   */
  center: number;
  /**
   * The progress of the scrollable element (between 0 and 1) from the top of the viewport.
   */
  progress: number;
  /**
   * The progress of the scrollable element (between 0 and 1) from the center of the viewport. Use to animate when scrolling up.
   */
  progressFromCenter: number;
  /**
   * The progress of the scrollable element (between 0 and 1) to the center of the viewport. Use to animate when scrolling down.
   */
  progressToCenter: number;
};

/**
 * Represents the input options for the `useScrollDistance` hook.
 */
interface UseScrollDistanceInput {
  /**
   * The initial state for the scroll distance. Also used to reset the scroll distance when `reducedMotion` is enabled.
   */
  initialDistanceState?: ScrollDistance;
}

/**
 * Custom React hook that calculates the scroll distance of a specified element.
 *
 * @param input - Optional input object with initial distance state.
 * @returns An object with a React ref to the element and the scroll distance.
 */
export function useScrollDistance(input?: UseScrollDistanceInput): {
  ref: React.RefObject<HTMLDivElement>;
  scrollDistance: ScrollDistance;
} {
  const {
    initialDistanceState = {
      top: 0,
      bottom: 0,
      center: 0,
      progress: 1,
      progressFromCenter: 1,
      progressToCenter: 1,
    },
  } = input || {};
  const { ref, inViewport } = useInViewport<HTMLDivElement>();
  const { reducedMotion } = usePreferences();
  const [scrollDistance, setScrollDistance] =
    useState<ScrollDistance>(initialDistanceState);

  useShallowEffect(() => {
    const calculateDistance = () => {
      if (reducedMotion) {
        setScrollDistance(initialDistanceState);
        return;
      }

      if (!inViewport) {
        return;
      }

      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const bottomOfViewport = window.innerHeight;
        const centerOfViewport = window.innerHeight / 2;
        const progress = bound(rect.top / window.innerHeight, 0, 1);
        const progressFromCenter = bound(rect.top / centerOfViewport, 0, 1);
        const progressToCenter = bound(2 - rect.top / centerOfViewport, 0, 1);

        setScrollDistance({
          top: -rect.top,
          bottom: bottomOfViewport - rect.top,
          center: centerOfViewport - rect.top,
          progress,
          progressFromCenter,
          progressToCenter,
        });
      }
    };

    calculateDistance();
    window.addEventListener("scroll", calculateDistance);
    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("scroll", calculateDistance);
      window.removeEventListener("resize", calculateDistance);
    };
  }, [initialDistanceState, reducedMotion, ref, inViewport]);

  return {
    ref,
    scrollDistance,
  };
}
