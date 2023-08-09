"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  text?: string;
  enabled: boolean;
};

const drawOptionVariants = {
  // agregar ease: "easeInOut" para que sea mas suave
  initial: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeOut" } },
  open: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } },
  closed: { opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const DrawOption = ({ children, icon, text, enabled }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (enabled) setOpen(!open);
  };

  return (
    <div className="border-b border-b-gray-400/40">
      <div className={`px-2 py-4 flex flex-row gap-2 items-center justify-between ${enabled ? 'cursor-pointer' : 'cursor-not-allowed bg-gray-200/40'}`} onClick={handleOpen}>
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
            className="overflow-clip"
          >
           <div className=" pt-2 pb-4 px-2 text-sm">
            {children}
           </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DrawOption;
