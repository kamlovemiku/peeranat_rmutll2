import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Network Course",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
