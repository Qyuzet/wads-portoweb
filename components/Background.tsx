"use client";

import React, { forwardRef, useRef } from "react";
import { useInView } from "framer-motion";

interface BackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Background = forwardRef<HTMLDivElement, BackgroundProps>(
  ({ children, ...props }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true });

    return (
      <div
        ref={(node) => {
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
          containerRef.current = node;
        }}
        className="relative w-full h-full overflow-hidden animate-fade-in"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "opacity 0.6s ease-in-out",
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Background.displayName = "Background";
