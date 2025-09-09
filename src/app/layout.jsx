import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { cookies, headers } from "next/headers";
import { Montserrat , Cairo} from "next/font/google";
import { I18nProvider } from "../context/translate-api";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});
const cairo = Cairo({
  weight: '500',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "edue system",
  description: "LENAAI, your ai property consultant",
};

export default async function RootLayout({ children }) {
  // Always use Arabic as the initial locale and RTL direction on first load
   const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang")?.value;

  // Get Accept-Language header from the request
  const headersStore = await headers();
  const acceptLanguage = headersStore.get("accept-language");
  const supportedLocales = ["en", "ar"];
  const defaultLocale = "ar";

  // Parse the preferred locale from Accept-Language
  let initialLocale = defaultLocale;
  if (!langCookie && acceptLanguage) {
    const preferredLocales = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().toLowerCase());
    initialLocale =
      preferredLocales.find((loc) =>
        supportedLocales.includes(loc.split("-")[0])
      ) || defaultLocale;
  } else if (langCookie) {
    initialLocale = supportedLocales.includes(langCookie)
      ? langCookie
      : defaultLocale;
  }
const dark = cookieStore.get("dark")?.value ?? "";  
  return (
    <html
      lang={initialLocale}
      className={`${montserrat.variable} ${cairo.className} ${dark}   `}
      dir={initialLocale === "ar" ? "rtl" : "ltr"}
    >        
        
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable}`}
      >
        <I18nProvider initialLocale={initialLocale}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
