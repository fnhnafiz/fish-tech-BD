import "./globals.css";
import ReduxProvider from "@/provider/ReduxProvider";
import { DM_Sans } from "next/font/google";
import ToastProvider from "@/provider/ToastProvider";

// Fonts
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Metadata
export const metadata = {
  title: "Fish Tech BD",
  description: "Fish Tech BD - Modern Aquaculture & Fisheries Technology",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ReduxProvider>
          <ToastProvider />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
