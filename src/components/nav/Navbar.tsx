"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "../ui/theme-toggle";

const Navbar = () => {
  const user = "";

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-border bg-background/75 backdrop-blur-lg transition-all">
      <div className="container mx-auto">
        <div className="flex h-14 items-center justify-between border-b border-border">
          <div className="items-center space-x-2 sm:flex">
            <Link href="/" className="flex z-40 font-semibold px-2">
              <span>Archaic</span>
            </Link>

            <Button variant={"ghost"}>
              <Link href="/" className="flex font-medium text-sm">
                <span>Products</span>
              </Link>
            </Button>
            <Button variant={"ghost"}>
              <Link href="/" className="flex font-medium text-sm ">
                <span>About</span>
              </Link>
            </Button>
            <Button variant={"ghost"}>
              <Link href="/" className="flex font-medium text-sm ">
                <span>Resources</span>
              </Link>
            </Button>
            <Button variant={"ghost"}>
              <Link href="/" className="flex font-medium text-sm ">
                <span>Features</span>
              </Link>
            </Button>
            <Button variant={"ghost"}>
              <Link href="/" className="flex font-medium text-sm ">
                <span>Plans</span>
              </Link>
            </Button>
          </div>
          <div className="hidden items-center space-x-4 sm:flex">
            <ThemeToggle />
            <Button className="rounded-full">Contact Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
