import { Geist, Geist_Mono, Poppins, Roboto } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Nav from "@/Components/NavFoot/Nav";
import Foot from "@/Components/NavFoot/Foot";
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
  title: "Hero Kidzz",
  description: "Hero Kidzz is a single vendor web application",
};

export default function RootLayout({ children }) {
  return (
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
  );
}
