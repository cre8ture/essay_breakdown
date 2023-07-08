import React, { useState } from "react";
import { motion } from "framer-motion";
import TransitionComponent from "./TextMover";
import Steps from "../timeline/SmallerSteps";

const ParentComponent = ({ sents, setNewPlan }) => {
  const [isClicked, setIsClicked] = useState(-1);
  const sentences = sents; // [
  //   { title: "Lorem ipsum dolor sit amet.", steps: ["poo1", "poo2", "poo3"] },
  //   { title: "Consectetur adipiscing elit.", steps: ["poo1", "poo2", "poo3"] },
  //   {
  //     title: "Sed do eiusmod tempor incididunt.",
  //     steps: ["poo1", "poo2", "poo3"]
  //   },
  //   {
  //     title: "Ut labore et dolore magna aliqua.",
  //     steps: ["poo1", "poo2", "poo3"]
  //   },
  //   { title: "Ut enim ad minim veniam.", steps: ["poo1", "poo2", "poo3"] }
  // ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <code className="ml-3 font-bold animation: ping 1s cubic-bezier(0, 0, 0.2, 1)">
        Click on a step to add sub-steps
      </code>
      {sentences.map((sentence, index) => (
        <div key={index}>
          <TransitionComponent
            isClicked={isClicked}
            index={index}
            setIsClicked={setIsClicked}
          >
            {sentence}
          </TransitionComponent>
          {isClicked === index && (
            <motion.div
              initial={{ opacity: 0, x: -10, y: -3 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ marginLeft: "4px", transform: "scale(1.5)" }}
            >
              <Steps tasks={sentence.steps} setNewPlan={setNewPlan} />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ParentComponent;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import TransitionComponent from "./TextMover";
// import Steps from "../timeline/Timeline";

// const ParentComponent = () => {
//   const [isClicked, setIsClicked] = useState(-1);
//   const sentences = [
//     { title: "Lorem ipsum dolor sit amet.", steps: ["poo1", "poo2", "poo3"] },
//     { title: "Consectetur adipiscing elit.", steps: ["poo1", "poo2", "poo3"] },
//     {
//       title: "Sed do eiusmod tempor incididunt.",
//       steps: ["poo1", "poo2", "poo3"]
//     },
//     {
//       title: "Ut labore et dolore magna aliqua.",
//       steps: ["poo1", "poo2", "poo3"]
//     },
//     { title: "Ut enim ad minim veniam.", steps: ["poo1", "poo2", "poo3"] }
//   ];

//   return (
//     <div style={{ display: "flex", flexDirection: "column" }}>
//       {sentences.map((sentence, index) => (
//         <div key={index}>
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{
//               opacity: isClicked === index ? 0 : 1,
//               y: isClicked === index ? -10 : 0
//             }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             style={{ marginBottom: "10px" }}
//           >
//             <TransitionComponent
//               isClicked={isClicked}
//               index={index}
//               setIsClicked={setIsClicked}
//             >
//               {sentence.title}
//             </TransitionComponent>
//           </motion.div>
//           {isClicked === index && (
//             <motion.div
//               initial={{ opacity: 0, x: -10, y: -3 }}
//               animate={{ opacity: 1, x: 0, y: 0 }}
//               transition={{ duration: 1, ease: "easeInOut" }}
//               style={{ marginLeft: "4px", transform: "scale(1.5)" }}
//             >
//               <Steps tasks={sentence.steps} />
//             </motion.div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ParentComponent;
