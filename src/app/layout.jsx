import { Geist, Geist_Mono, Poppins, Roboto } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Nav from "@/Components/NavFoot/Nav";
import Foot from "@/Components/NavFoot/Foot";
import NextAuthProvider from "@/Components/NextAuthProvider";

//? font here
const poppinsFont = Roboto({
  weight: ["100", "300", "500"],
  subsets: ["italic"],
});
//? bangla font


export const fontBangla = localFont({
  src: '../fonts/mayaboti-normal.ttf',
})
//? Metadata here
export const metadata = {
  metadataBase: new URL("https://hero-kidzz-eight.vercel.app"),

  title: {
    default: "Hero Kidzz",
    template: "%s | Hero Kidzz",
  },

  description:
    "Hero Kidzz is a trusted kids store offering educational toys, learning boards, puzzles, and creative products that make learning fun for children.",

  keywords: [
    "Hero Kidzz",
    "Kids Toys",
    "Educational Toys",
    "Learning Board",
    "Kids Learning Products",
    "Children Toys",
    "Bangladesh Kids Store",
  ],

  authors: [{ name: "Md Asik" }],
  creator: "Md Asik",
  publisher: "Hero Kidzz",

  openGraph: {
    title: "Hero Kidzz - Learning Through Play",
    description:
      "Explore educational toys, learning boards, puzzles, and fun products designed to inspire children's creativity and learning.",

    url: "https://hero-kidzz-eight.vercel.app",
    siteName: "Hero Kidzz",

    images: [
      {
        url: "https://i.ibb.co.com/1Gw7rq0D/Screenshot-135.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidzz Educational Toys Store",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidzz - Learning Through Play",
    description:
      "Educational toys, learning boards, puzzles, and creative products for kids.",

    images: [
      "https://i.ibb.co.com/1Gw7rq0D/Screenshot-135.png",
    ],
  },

  icons: {
    icon: "https://i.ibb.co.com/WNP2ZWcY/logo.webp",
    shortcut: "https://i.ibb.co.com/WNP2ZWcY/logo.webp",
    apple: "https://i.ibb.co.com/WNP2ZWcY/logo.webp",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html
        lang="en"
        className={`${poppinsFont.className} h-full antialiased`}
      >
        <body className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <Nav />
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 w-full">
            <div className="max-w-7xl mx-auto px-4 py-6">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer>
            <div>
              <Foot />
            </div>
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
