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
      <body>
        {/* headers + nav */}
        <header className="max-w-7xl mx-auto p-2 md:p-4">
          <Nav></Nav>
        </header>
        <main className="max-w-7xl mx-auto p-2 md:p-4 h-screen">
          {children}
        </main>

        {/* Footer + foot */}
        <footer>
          <Foot></Foot>
        </footer>
      </body>
    </html>
  );
}
