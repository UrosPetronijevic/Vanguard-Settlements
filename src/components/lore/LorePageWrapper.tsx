import { type ReactNode, useState, useEffect, useRef } from "react";
import PaperSidePattern from "../styling/PaperSidePattern";
// Adjust path as needed

// No longer directly importing PaperPattern.png if PaperSidePattern renders it.
// import PaperPattern from "../../assets/images/style/Paper-pattern.png";

interface LorePageWrapperProps {
  children: ReactNode;
}

export default function LorePageWrapper({ children }: LorePageWrapperProps) {
  const [numPatterns, setNumPatterns] = useState(0);
  const patternRef = useRef<HTMLDivElement>(null); // Ref to measure a single pattern

  // Effect to calculate number of patterns when component mounts or resizes
  useEffect(() => {
    const calculatePatterns = () => {
      // Get the height of a single pattern component
      // Make sure PaperSidePattern has a reliable height (e.g., min-height in CSS)
      const singlePatternHeight = patternRef.current
        ? patternRef.current.offsetHeight
        : 80; // Default or estimated height if ref isn't ready

      if (singlePatternHeight === 0) {
        // Fallback or log error if pattern height is 0,
        // which would cause division by zero or infinite patterns.
        console.warn(
          "PaperSidePattern height is 0, cannot calculate pattern count. Using default."
        );
        return;
      }

      // Get the current document/page height
      const currentPageHeight = document.documentElement.scrollHeight;

      // Calculate how many patterns fit
      const patternsToRender = Math.floor(
        currentPageHeight / singlePatternHeight
      );
      setNumPatterns(patternsToRender);
    };

    // Calculate initial patterns
    calculatePatterns();

    // Add event listener for window resize to recalculate
    window.addEventListener("resize", calculatePatterns);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", calculatePatterns);
    };
  }, []); // Empty dependency array: runs once on mount, cleans up on unmount

  // Create an array of PaperSidePattern components
  const patterns = Array.from({ length: numPatterns }).map((_, index) => (
    <PaperSidePattern key={index} />
  ));

  return (
    <div className="grid grid-cols-[3%_94%_3%] paper-bg">
      {/* Left Column for Patterns */}
      <div className="flex flex-col overflow-hidden border-r border-[#7f6844]">
        {/*
          We render ONE PaperSidePattern here with a ref
          to measure its actual rendered height.
          It will be hidden or styled to not show twice.
        */}
        <div
          ref={patternRef}
          style={{
            visibility: "hidden",
            position: "absolute",
            pointerEvents: "none",
          }}
        >
          <PaperSidePattern />
        </div>
        {patterns}
      </div>

      {/* Center Column for Children Content */}
      {children}

      {/* Right Column for Patterns */}
      <div className="flex flex-col overflow-hidden border-l border-[#7f6844]">
        {patterns}
      </div>
    </div>
  );
}
