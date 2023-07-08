import React from "react";

const Heading = () => {
  const gradientColors = "from-purple-500 via-pink-500 to-red-500";
  const textGradient = `p-5 bg-clip-text text-transparent  bg-gradient-to-r ${gradientColors}`;

  return (
    <>
      <h1
        // className={`text-3xl font-extrabold ${textGradient} dark:text-white md:text-5xl lg:text-6xl`}
        className={`text-3xl font-extrabold text-black dark:text-white md:text-5xl lg:text-6xl mb-5 mx-auto`}
      >
        <code>Essay Breakdown</code>
      </h1>
      <div className="ml-3 text-lg text-gray-700 mb-5">
        <ol type="1">
          <li>
            {" "}
            <code> [1] Identify each part of an essay question </code>{" "}
          </li>
          <li>
            {" "}
            <code> [2] Input essay questions </code>{" "}
          </li>
          <li>
            {" "}
            <code> [3] Automatically generate a plan </code>{" "}
          </li>
        </ol>
      </div>
    </>
  );
};

export default Heading;
