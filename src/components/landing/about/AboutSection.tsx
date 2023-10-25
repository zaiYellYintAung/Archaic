"use client";

import { useState } from "react";

const views = [
  {
    id: 0,
    title:
      " Our software is so simple that people can’t help but fall in love with it.",
    body: "software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.",
    icon: "",
    subtitle: "Reporting",
  },
  {
    id: 1,
    title:
      " Our software is so simple that people can’t help but fall in love with it.",
    body: "software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.",
    icon: "",
    subtitle: "Reporting",
  },
  {
    id: 2,
    title:
      " Our software is so simple that people can’t help but fall in love with it.",
    body: "software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.",
    icon: "",
    subtitle: "Reporting",
  },
];

const AboutSection = () => {
  const [currentView, setCurrentView] = useState(views[0].id);

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
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

      <div className="hidden lg:grid grid-cols-3 gap-8">
        {views.map((view, index) => (
          <div
            key={index}
            className="space-y-4 cursor-pointer"
            onClick={() => {
              setCurrentView(index);
            }}>
            <div
              className={`h-10 w-10 ${
                currentView === index ? "bg-primary" : "bg-primary/80"
              }  rounded-md`}></div>
            <p
              className={`  ${
                currentView === index ? "text-priamry" : "text-primary/80"
              } font-semibold text-sm`}>
              {view.subtitle}
            </p>
            <h1
              className={`font-medium  ${
                currentView === index ? "text-priamry" : "text-primary/80"
              }`}>
              {view.title}
            </h1>
            <p className="text-sm text-gray-500">{view.body}</p>
          </div>
        ))}
      </div>
      <div className="hidden lg:block w-full h-[600px] rounded-lg bg-secondary"></div>

      <div className="block lg:hidden space-y-12">
        {views.map((view, index) => (
          <div key={index} className="space-y-4 cursor-pointer">
            <div className="h-10 w-10 bg-primary rounded-md"></div>
            <p className="text-priamry font-semibold text-sm">
              {view.subtitle}
            </p>
            <h1 className="font-medium">{view.title}</h1>
            <p className="text-sm text-gray-500">{view.body}</p>

            <div className="w-full h-[200px] md:h-[350px] bg-secondary"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
