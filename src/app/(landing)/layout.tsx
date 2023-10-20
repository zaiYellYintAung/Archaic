import Navbar from "@/components/nav/Navbar";
import { ReactNode } from "react";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
}
