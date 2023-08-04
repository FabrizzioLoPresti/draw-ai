"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  text?: string;
};

const drawOptionVariants = {
  // agregar ease: "easeInOut" para que sea mas suave
  open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
  closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const DrawOption = ({ children, icon, text }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="px-2 py-4 border-b border-b-gray-400/40 cursor-pointer" onClick={handleOpen}>
      <div className="flex flex-row gap-2 items-center justify-between">
        <div className="flex flex-row gap-4">
          {icon}
          <span>{text}</span>
        </div>
        <motion.div
          variants={iconVariants}
          animate={open ? "open" : "closed"}
          className="iconDrawOptions"
        >
          <ChevronDownIcon className="w-6 h-6" />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={drawOptionVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="my-4"
          >
           {children}
           Prueba de contenido largo largo largo pa llevarla al cielo y asi rome el hielo mami que mierda
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DrawOption;
