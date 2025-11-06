"use client";
import Logo from "@/app/assets/svg/Logo.svg";
import Polygon from "@/app/assets/svg/login/Polygon.svg";
import { motion } from "framer-motion";
import Link from "next/link";

interface PolygonInicioProps {
  className?: string;
  size?: string;
  sizeText?: string;
}

export function PolygonInicio(props: PolygonInicioProps) {
  return (
    <motion.div
      layoutId="shared-container"
      className={`flex ${props.size || "w-5/12"} h-screen relative`}
      transition={{
        layout: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
      }}
    >
      <motion.div layoutId="shared-polygon" className={`absolute inset-0 z-1 h-full`}>
        <Polygon className="text-b shadow-sa-Inicio h-full w-full scale-x-[-1]" preserveAspectRatio="none" />
      </motion.div>
      <motion.div layoutId="shared-content" className="flex flex-col justify-center items-center z-2 w-full">
        <motion.div layoutId="shared-logo" className="w-6/12">
          <Link href={"./"}>
            <Logo className="text-e w-full" />
          </Link>
        </motion.div>
        <motion.div layoutId="shared-title" className="pt-9 w-9/12">
          <h1 className={`text-e text-center font-black ${props.sizeText || "text-2xl sm:text-4xl md:text-5xl lg:text-6xl"} font-Login tracking-wider`}>LA LUDOPATIA DE LA TORTUGA</h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
