import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

type Theme = "light" | "dark";

const ChangeTheme = (props: Props) => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleThemeChange = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const moonIconPath = "/icons8-moon.svg";
  const sunIconPath = "/icons8-sun.svg";

  // Define las propiedades de la animación
  const iconAnimation = {
    rotate: theme === "light" ? 0 : 180, // Rota el icono según el tema
    scale: 1.2, // Aumenta un poco el tamaño durante la animación
  };

  return (
    <motion.div
      className={`flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 shadow-lg cursor-pointer`}
      onClick={handleThemeChange}
      initial={false} // Evita que la animación se ejecute al montar el componente
      whileHover={{ scale: 1.1 }} // Efecto de escala al pasar el cursor sobre el botón
      whileTap={{ scale: 0.9 }} // Efecto de escala al hacer clic en el botón
      animate={iconAnimation} // Aplica la animación a la rotación y escala del icono
    >
      {/* Utiliza la imagen del icono según el tema actual */}
      <Image
        src={theme === "light" ? moonIconPath : sunIconPath}
        alt="Theme Icon"
        width={24}
        height={24}
      />
    </motion.div>
  );
};

export default ChangeTheme;