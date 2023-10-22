import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/footer/Footer";
import { ReactNode } from "react";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
