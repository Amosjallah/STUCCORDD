"use client";

import { HTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "onAnimationStart" | "onAnimationEnd" | "onDrag" | "onDragEnd" | "onDragStart"> {
  hover?: boolean;
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-sm transition-all duration-300",
          hover && "hover:shadow-xl hover:border-accent-DEFAULT/20",
          className
        )}
        whileHover={hover ? { y: -4 } : {}}
        transition={{ duration: 0.2 }}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;
