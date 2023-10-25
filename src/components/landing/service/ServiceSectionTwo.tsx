import { Button } from "@/components/ui/button";

const ServiceSectionTwo = () => {
  return (
    <div className="flex items-center py-0 md:py-20 max-w-6xl mx-auto">
      <div className="flex gap-8 lg:gap-12  py-8 flex-col lg:flex-row-reverse items-center">
        <section className="w-full lg:w-auto space-y-5 mb-4 md:mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold md:leading-[3rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing
            elit .
          </h1>
          <p className="text-gray-500 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            dicta doloremque sequi, et a deleniti dolor, hic repellendus
            similique molestiae minima soluta. Molestiae, tenetur nesciunt
            quaerat vitae aliquid voluptatum praesentium!
          </p>
          <div className="flex gap-4">
            <Button size={"lg"}>See Demo</Button>
            <Button variant={"secondary"} size={"lg"}>
              Schedule a Call
            </Button>
          </div>
        </section>
        <section className="w-full lg:w-1/2">
          <div className="h-[400px] lg:h-[480px] w-full flex items-center justify-center ">
            <div className="w-full lg:w-[500px] h-[400px] md:h-[500px] rounded-md bg-primary"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceSectionTwo;
