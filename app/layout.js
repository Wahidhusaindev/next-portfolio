import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* -------------------------------------------------- */
/* GLOBAL METADATA BASELINE                            */
/* -------------------------------------------------- */
export const metadata = {
  title: {
    default: "Wahid Husain | Frontend Software Developer",
    template: "%s | Wahid Husain",
  },
  description:
    "Frontend-focused software developer specializing in React, Next.js, and modern UI engineering.",

  metadataBase: new URL("https://wahidhusain.vecel.app"),

  openGraph: {
    siteName: "Wahid Husain Portfolio",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
  },
  other: {
    "google-site-verification": "DQyj_cSD_k8dT_XGDgA0QtArjbM20QbLz0_b_s7MlS0",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* <head>
          <meta
      name="google-site-verification"
      content="DQyj_cSD_k8dT_XGDgA0QtArjbM20QbLz0_b_s7MlS0"
    />
        </head> */}
         <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
