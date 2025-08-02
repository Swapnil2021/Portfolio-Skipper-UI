import "./globals.css";
import Footer from "./pages/footer";
import Hero from "./pages/Hero";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
       <Hero></Hero>
        <main className="flex-grow container mx-auto p-4">{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
