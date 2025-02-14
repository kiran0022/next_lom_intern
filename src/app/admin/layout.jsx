import { Inter } from "next/font/google";
import Sidenav from "../components/Sidenav";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-[100%]">
          <div className="max-w-max">
            <Sidenav />
          </div>

          <div className="w-[90%] h-[100vh]">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
