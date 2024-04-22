"use client"
import { AnimationControls, Target, TargetAndTransition, VariantLabels, motion } from "framer-motion"

interface Props {
  children: React.ReactNode;
  className?: string;
  classChildName?: string;
  initial?: boolean | Target | VariantLabels;
  animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
  transition?: any;
}

export function LayoutBoderComponent({
    children,
    className,
    classChildName,
    initial = { opacity: 0, y: 0, x: -10 },
    animate = { opacity: 1, y: 0, x: 0 },
    transition = { duration: 0.3 }
  }: Props) {
  return (
    <motion.section
      initial={initial} // Animación de entrada
      animate={animate} // Animación de presencia
      transition={transition} // Duración de la animación
      className={className}
    >
      <div className={`${classChildName} w-full h-[850px] border-l border-gray-300 p-5`}>
        <div className="w-full h-full rounded-md overflow-y-scroll border border-gray-300">
          {children}
        </div>
      </div>
    </motion.section>
  );
}