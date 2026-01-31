import { ReactNode } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

type AnimationType = "up" | "left" | "right" | "scale";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const AnimatedSection = ({
  children,
  animation = "up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClass = {
    up: "scroll-animate-up",
    left: "scroll-animate-left",
    right: "scroll-animate-right",
    scale: "scroll-animate-scale",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
