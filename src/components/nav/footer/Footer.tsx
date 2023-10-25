import { contactInfos, footerLinks, socialLinks } from "./constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center my-12">
      <div className="mx-auto container  flex w-full flex-col gap-14">
        <div className="flex items-center flex-col justify-start gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            {/* <Image src="hilink-logo.svg" alt="logo" width={74} height={29} /> */}
            Logo
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {footerLinks.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className="text-gray-500 flex flex-col gap-4 regular-14">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={contactInfos.title}>
                {contactInfos.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap text-gray-500">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={socialLinks.title}>
                <ul className="text-gray-30 flex gap-5 regular-14">
                  {socialLinks.links.map((Icon, index) => (
                    <Link href="/" className="text-xl " key={index}>
                      <Icon />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border-t" />
        <p className="w-full text-center text-gray-30 regular-14 text-sm">
          2023 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5 text-sm">
      <h4 className="whitespace-nowrap font-semibold">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
