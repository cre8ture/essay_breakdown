import React from "react";

function Timeline({ tasks }) {
  return (
    <div className="relative mt-3 ml-3 ">
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-red-500 border-dotted"
        style={{ borderColor: "red" }}
      ></div>

      <ol className="border-l-2 border-info-100">
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="flex-start md:flex">
              <div className="relative mb-10 ml-6">
                <div className="absolute top-1/2 left-0 transform -translate-x-full w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="ml-3 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 bg-green-100 dark:bg-neutral-700 dark:shadow-black/10">
                  <div className="mb-4 flex justify-between">
                    <a
                      href="#!"
                      className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                    >
                      {task}
                    </a>
                    <a
                      href="#!"
                      className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                    >
                      {index}
                    </a>
                  </div>

                  <button
                    type="button"
                    className="inline-block rounded bg-info px-4 pb-2 pt-3 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-lg focus:bg-info-700 active:bg-info-700"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Timeline;
