import React from "react";

const StatCard = ({ sentences }) => {
  var numSentences;
  var numQuestions;
  var readabilityGrade;
  var timePrediction;
  if (sentences && sentences.length > 0) {
    numSentences = sentences.length;
    numQuestions = sentences.filter((sentence) => sentence.includes("?"))
      .length;
    readabilityGrade = calculateReadabilityGrade(sentences);
    timePrediction = numSentences * 15;
  } else {
    numSentences = 0;
    numQuestions = 0;
    readabilityGrade = 0;
    timePrediction = 0;
  }
  return (
    <div className="flex space-x-4 p-2">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="bg-black p-4 m-2 rounded-lg">
          <h3 className="text-2xl font-bold font-mono text-green-500">
            Number of Sentences
          </h3>
          <p className="text-4xl font-extrabold  font-mono text-green-500">
            {numSentences}
          </p>
        </div>
        <div className="bg-black p-4 m-2 rounded-lg">
          <h3 className="text-2xl font-bold font-mono text-green-500">
            Number of Questions
          </h3>
          <p className="text-4xl font-extrabold  font-mono text-green-500">
            {numQuestions}
          </p>
        </div>
        <div className="bg-black p-4 m-2 rounded-lg">
          <h3 className="text-2xl font-bold  font-mono text-green-500">
            Readability Grade
          </h3>
          <p className="text-4xl font-extrabold  font-mono text-green-500">
            {readabilityGrade}
          </p>
        </div>
        <div className="bg-black p-4 m-2 rounded-lg">
          <h3 className="text-2xl font-bold  font-mono text-green-500">
            Time this will take
          </h3>
          <p className="text-4xl font-extrabold  font-mono text-green-500">
            {timePrediction} min
          </p>
        </div>
      </div>
    </div>
  );
};

const calculateReadabilityGrade = (sentences) => {
  const totalWords = sentences.reduce(
    (count, sentence) => count + sentence.split(" ").length,
    0
  );
  const avgWordsPerSentence = totalWords / sentences.length;

  if (avgWordsPerSentence < 10) {
    return "Grade 3";
  } else if (avgWordsPerSentence < 15) {
    return "Grade 6";
  } else {
    return "Grade 9+";
  }
};

export default StatCard;
