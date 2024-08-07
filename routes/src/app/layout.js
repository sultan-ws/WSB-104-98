'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/common-components/Header";
import Footer from "./components/common-components/Footer";
import { usePathname, useRouter } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });


const noFooterRoutes = ['/signin', '/register'];

export default function RootLayout({ children }) {
  const router = usePathname();
  const ifFooter = !noFooterRoutes.includes(router);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        {ifFooter && <Footer/>}
        
        </body>
    </html>
  );
}
