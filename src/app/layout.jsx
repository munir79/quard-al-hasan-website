import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Qardh Al Hasan Fintech Sdn Bhd | ICT & Fintech Solutions Malaysia",
  description:
    "Leading provider of innovative, scalable, and affordable digital fintech and ICT solutions in Malaysia. Offering web and software development, digital marketing, SEO, and UI/UX design.",
  keywords: [
    "Qardh Al Hasan Fintech",
    "Fintech Malaysia",
    "Web Development Kuala Lumpur",
    "Custom Software Development",
    "UI/UX Design",
    "SEO Services Malaysia",
    "Ethical Technology Solutions",
  ],
  authors: [{ name: "Qardh Al Hasan Fintech Sdn Bhd" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-darker text-brand-text antialiased selection:bg-secondary/30 selection:text-white">
        <div className="relative flex min-h-screen flex-col">
          {/* Top navigation with left-to-right drawer */}
          <Navbar />

          {/* Main content page area */}
          <main className="flex-1">{children}</main>

          {/* Interactive footer */}
          <Footer />

          {/* Floating WhatsApp Quick-Chat Desk */}
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
