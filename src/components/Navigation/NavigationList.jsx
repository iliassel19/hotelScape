import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationList = () => {
  return (
    <ul className="flex items-center gap-12">
      <NavigationItem text="our story" i={1} />
      <NavigationItem text="packages" i={2} />
      <NavigationItem text="contact" i={3} />
    </ul>
  );
};

export default NavigationList;
