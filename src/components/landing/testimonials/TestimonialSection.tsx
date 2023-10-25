const TestimonialSection = () => {
  return (
    <div className="space-y-12">
      <header className="w-full text-center space-y-6 ">
        <h2 className="text-3xl font-semibold">
          Loved by businesses worldwide.
        </h2>
        <div className="flex justify-center">
          <p className="max-w-2xl">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6">
        <div className="space-y-6">
          <div className="w-full h-[250px] rounded-md bg-primary dark:bg-primary"></div>
          <div className="w-full h-[280px] rounded-md bg-primary dark:bg-primary"></div>
          <div className="w-full h-[300px] rounded-md bg-primary dark:bg-primary"></div>
        </div>
        <div className="space-y-6">
          <div className="w-full h-[350px] rounded-md bg-primary dark:bg-primary"></div>

          <div className="w-full h-[250px] rounded-md bg-primary dark:bg-primary"></div>
          <div className="w-full h-[290px] rounded-md bg-primary dark:bg-primary"></div>
        </div>
        <div className="space-y-6">
          <div className="w-full h-[280px] rounded-md bg-primary dark:bg-primary"></div>
          <div className="w-full h-[260px] rounded-md bg-primary dark:bg-primary"></div>
          <div className="w-full h-[280px] rounded-md bg-primary dark:bg-primary"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
