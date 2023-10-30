"use client";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/header/NavBar";
import { store } from "./redux/store";
import { Provider } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
