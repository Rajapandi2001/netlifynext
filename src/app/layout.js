// src/app/layout.js
import "./globals.css";
import Header from "./Header/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>
          {children} {/* This will render the content of each page */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
