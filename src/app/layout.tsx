"use client";

import { useEffect } from 'react';
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof globalThis.DOMMatrix === 'undefined') {
      (globalThis as any).DOMMatrix = class DOMMatrix {
        constructor(init?: string | number[]) {
          if (typeof init === 'string') {
            // Parse transform string, simplified
            this.m11 = 1;
            this.m12 = 0;
            this.m21 = 0;
            this.m22 = 1;
            this.m41 = 0;
            this.m42 = 0;
          } else if (Array.isArray(init)) {
            [this.m11, this.m12, this.m21, this.m22, this.m41, this.m42] = init;
          } else {
            this.m11 = 1;
            this.m12 = 0;
            this.m21 = 0;
            this.m22 = 1;
            this.m41 = 0;
            this.m42 = 0;
          }
        }
        m11: number;
        m12: number;
        m21: number;
        m22: number;
        m41: number;
        m42: number;
      };
    }
  }, []);

  return (
    <html lang="en">
      <body className="app-root">
        <Navbar />

        <main className="max-w-6xl mx-auto px-6 py-10 min-h-[70vh]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
