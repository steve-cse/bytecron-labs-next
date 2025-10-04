"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useRef } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%/&*";

export function ScrambleText({ text, className }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setHasAnimated(true);
      }

      iteration += 0.7;
    }, 25);

    return () => clearInterval(interval);
  }, [text, isInView, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
