import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/store/provider";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Draw with AI ${String.fromCodePoint(0x1f4bb)}`,
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
        <StoreProvider>
          <Header />
          <div className="max-w-screen-2xl mx-auto py-5 px-5 xl:px-0">
            {children}
          </div>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}

// TODO
// Boton de ChangeTheme con FramerMotion -> Agregar Funcionaldiad (MVP)
// Modificar titulo de la pagina en cada pagina (tomar estado anterior) -> Pestaña del navegador
// Responsively
// Agregar en Options Card top: 20px por ejemplo para que al aplicar sticky no solape con Navbar
