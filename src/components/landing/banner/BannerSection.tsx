import { Button } from "@/components/ui/button";

const BannerSection = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground py-12 text-center space-y-8">
      <h2 className="text-3xl font-semibold">Get Started Today</h2>
      <div className="flex justify-center ">
        <p className="max-w-xl leading-loose">
          It’s time to take control of your books. Buy our software so you can
          feel like you’re doing something productive.
        </p>
      </div>
      <div className="flex justify-center ">
        {" "}
        <Button size={"lg"} className="rounded-full" variant={"secondary"}>
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default BannerSection;
