"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { featureViews } from "./constant";

export const FeatureGraphic = () => {
  const [currentView, setCurrentView] = useState(featureViews[0].name);

  return (
    <div className="w-full xl:w-[600px] md:w-[550px] ">
      <div className="flex lg:hidden justify-between mb-4 px-0 md:px-8">
        {featureViews.map((feature, index) => (
          <div key={index}>
            {currentView === feature.name ? (
              <>
                <Button
                  size={"sm"}
                  onClick={() => {
                    setCurrentView(feature.name);
                  }}>
                  {feature.name}
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant={`secondary`}
                  size={"sm"}
                  onClick={() => {
                    setCurrentView(feature.name);
                  }}>
                  {feature.name}
                </Button>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="hidden lg:flex flex-row justify-between px-0 lg:px-8 mb-4">
        {featureViews.map((feature, index) => (
          <div key={index}>
            {currentView === feature.name ? (
              <>
                <Button
                  size={"lg"}
                  onClick={() => {
                    setCurrentView(feature.name);
                  }}>
                  {feature.name}
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant={`secondary`}
                  size={"lg"}
                  onClick={() => {
                    setCurrentView(feature.name);
                  }}>
                  {feature.name}
                </Button>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-[400px] md:h-[480px] rounded-md bg-primary">
        {featureViews.map((feature, index) => (
          <div key={index}>
            {currentView === feature.name && <>{feature.view}</>}
          </div>
        ))}
      </div>
    </div>
  );
};
