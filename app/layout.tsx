import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Draw with AI ${String.fromCodePoint(0x1f4bb)}`,
  description: 'Draw with AI is a web app that lets you draw and then uses AI to generate a new image based on your drawing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

// TODO
// Acomodar Hero
// Boton de ChangeTheme con FramerMotion -> Agregar Funcionaldiad (MVP)
// Crear pagina de 404 con layout