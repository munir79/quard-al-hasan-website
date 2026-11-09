"use client";

import { motion } from "framer-motion";

const variants = {
  left: { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
  bottom: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  top: { initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
};

export function Reveal({
  children,
  from = "bottom",
  delay = 0,
  duration = 0.5,
  className = "",
  ...props
}) {
  const v = variants[from] || variants.bottom;
  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className = "",
  delayChildren = 0.1,
  staggerChildren = 0.12,
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  from = "bottom",
  duration = 0.5,
  className = "",
  ...props
}) {
  const v = variants[from] || variants.bottom;
  return (
    <motion.div
      variants={{
        hidden: v.initial,
        visible: {
          ...v.animate,
          transition: { duration, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
