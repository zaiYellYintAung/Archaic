import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FinishSection = () => {
  return (
    <div className="py-12 px-12 space-y-8 bg-primary text-primary-foreground rounded-2xl">
      <h1 className="text-4xl font-bold">Tell us about your project</h1>
      <Button variant={"secondary"} size={"lg"} className="rounded-full">
        Say Hi
      </Button>
      <Separator />
      <h2 className="text-xl font-semibold">Feel free to reach out to us</h2>
      <div className="grid grid-cols-4">
        <div className="space-y-8"></div>
      </div>
    </div>
  );
};

export default FinishSection;
