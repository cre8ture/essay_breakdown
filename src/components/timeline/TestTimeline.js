import React from "react";
import Timeline from "./Timeline";
import SmallestSteps from "./SmallerSteps";

function TimelineTest() {
  // Sample data for testing
  const tasks = [
    {
      title: "Lorem Ipsum",
      date: "June 20, 2023",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Dolor Sit Amet",
      date: "June 19, 2023",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
    }
    // Add more sample tasks as needed
  ];

  return (
    <div>
      <h1>Timeline Test</h1>
      <SmallestSteps />
    </div>
  );
}

export default TimelineTest;
