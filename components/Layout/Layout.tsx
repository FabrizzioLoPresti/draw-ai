"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { StoreProvider } from "@/store/provider";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <NextUIProvider>
      <StoreProvider>
        <Header />
        <div className="max-w-screen-2xl mx-auto py-5 px-5 xl:px-0">
          {children}
        </div>
        <Footer />
      </StoreProvider>
    </NextUIProvider>
  );
};

export default Layout;
