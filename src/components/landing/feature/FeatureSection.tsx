"use client";

import { Button } from "@/components/ui/button";
import { FeatureGraphic } from "./graphic";
const FeatureSection = () => {
  return (
    <div className="flex items-center py-0 md:py-20 max-w-6xl mx-auto">
      <div className="flex gap-8 md:gap-12  py-8 flex-col lg:flex-row items-center">
        <section className="w-full md:w-auto space-y-5 ">
          <h1 className="text-3xl md:text-5xl font-bold md:leading-[3.5rem] xl:max-w-[350px] text-center lg:text-left">
            Power of Generative Ai
          </h1>
          <h3 className="text-lg  leading-8 text-center lg:text-left">
            Molestiae, tenetur nesciunt quaerat vitae aliquid voluptatum
            praesentium!
          </h3>
          <p className="hidden lg:block text-gray-500 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            dicta doloremque sequi, et a deleniti dolor, hic repellendus
            similique
          </p>
          <div className="hidden lg:flex gap-4">
            <Button size={"lg"}>See Demo</Button>
            <Button variant={"secondary"} size={"lg"}>
              Schedule a Call
            </Button>
          </div>
        </section>
        <section className="w-full md:w-auto">
          <FeatureGraphic />
        </section>
        <p className="block lg:hidden text-gray-500 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          dicta doloremque sequi, et a deleniti dolor, hic repellendus similique
        </p>
        <div className="flex lg:hidden gap-4">
          <Button size={"lg"}>See Demo</Button>
          <Button variant={"secondary"} size={"lg"}>
            Schedule a Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
