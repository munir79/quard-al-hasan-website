import "./globals.css";
import FloatingNavbar from "@/components/flairs/FloatingNavbar";
import FooterFlairs from "@/components/flairs/FooterFlairs";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Qardh Al Hasan Fintech Sdn. Bhd. | Scale Smart Your Systems",
  description:
    "Scale Smart Your Systems. Leading provider of AI-powered technology, Shariah-compliant fintech ledgers, and enterprise software solutions in Kuala Lumpur, Malaysia.",
  keywords: [
    "Qardh Al Hasan Fintech",
    "Fintech Malaysia",
    "Web Development Kuala Lumpur",
    "Custom Software Development",
    "UI/UX Design",
    "SEO Services Malaysia",
    "Ethical Technology Solutions",
    "Islamic FinTech",
  ],
  authors: [{ name: "Qardh Al Hasan Fintech Sdn. Bhd." }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#08080C] text-slate-900 antialiased selection:bg-[#2563EB] selection:text-white min-h-screen">
        <div className="relative flex min-h-screen flex-col">
          {/* Floating Pill Navbar (Screenshots 1 & 2) */}
          <FloatingNavbar />

          {/* Main content page area */}
          <main className="flex-1">{children}</main>

          {/* Multi-column Directory Footer */}
          <FooterFlairs />

          {/* Floating WhatsApp Quick-Chat Desk */}
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
