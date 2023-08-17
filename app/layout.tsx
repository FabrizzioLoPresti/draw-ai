import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Mishi AI ${String.fromCodePoint(0x1f4bb)}`,
  description:
    "Draw with AI is a web app that lets you draw and then uses AI to generate a new image based on your drawing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

// TODO
// Arreglar detalle de Imagenes Hover
// Arreglar que al ir a /draw con navbar oculta esta aparece junto con la pagina scrolleada (solo pasa en web)

// Modificar titulo de la pagina en cada pagina (tomar estado anterior) en Layout.tsx -> Pestaña del navegador

// Boton de ChangeTheme con FramerMotion -> Agregar Funcionaldiad (MVP)
// Button newsletter componente funcionalidad -> Firebase