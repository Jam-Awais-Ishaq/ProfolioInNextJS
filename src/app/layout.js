import "./globals.css";
import Footer from "./Reuseable/Footer";
import Navbar from "./Reuseable/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body cz-shortcut-listen="true" className={` antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
