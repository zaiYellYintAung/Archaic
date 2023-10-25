import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import company1 from "@/assets/companies/company1.svg";
import company2 from "@/assets/companies/company2.svg";
import company3 from "@/assets/companies/company3.svg";
import company4 from "@/assets/companies/company4.svg";
import company5 from "@/assets/companies/company5.svg";
import company6 from "@/assets/companies/company6.svg";
import company7 from "@/assets/companies/company7.svg";
import company8 from "@/assets/companies/company8.svg";
import Image from "next/image";

const companies = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
  company8,
];

const IntroSection = () => {
  return (
    <div className="p-8 md:p-12  space-y-8 bg-primary text-primary-foreground rounded-2xl">
      <div className="flex items-center gap-4">
        <h1 className="text-lg md:text-2xl font-medium md:flex-shrink-0 ">
          We’ve worked with hundreds of amazing people
        </h1>
        <div className="border-t w-full hidden md:block"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center md:justify-start">
            <Image src={company} width={200} alt={String(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroSection;
