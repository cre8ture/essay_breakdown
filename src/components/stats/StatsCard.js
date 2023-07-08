import React from "react";

const StatCard = ({ sentences }) => {
  var numSentences;
  var numQuestions; // = sentences.filter((sentence) => sentence.includes("?")).length;
  var readabilityGrade; // = calculateReadabilityGrade(sentences);
  var timePrediction; // = numSentences * 15;
  if (sentences && sentences.length > 0) {
    numSentences = sentences.length;
    numQuestions = sentences.filter((sentence) => sentence.includes("?"))
      .length;
    readabilityGrade = calculateReadabilityGrade(sentences);
    timePrediction = numSentences * 15;
  } else {
    numSentences = 0; // sentences.length;
    numQuestions = 0; //sentences.filter((sentence) => sentence.includes("?")).length;
    readabilityGrade = 0; //calculateReadabilityGrade(sentences);
    timePrediction = 0; //numSentences * 15;
  }
  return (
    <div className="flex space-x-4 p-2">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="bg-purple-500 p-4 m-2 rounded-lg text-white">
          <h3 className="text-xl font-bold">Number of Sentences</h3>
          <p className="text-3xl font-extrabold">{numSentences}</p>
        </div>
        <div className="bg-pink-400 p-4  m-2 rounded-lg text-white">
          <h3 className="text-xl font-bold">Number of Questions</h3>
          <p className="text-3xl font-extrabold">{numQuestions}</p>
        </div>
        <div className="bg-red-500 p-4 m-2 rounded-lg text-white">
          <h3 className="text-xl font-bold">Readability Grade</h3>
          <p className="text-3xl font-extrabold">{readabilityGrade}</p>
        </div>
        <div className="bg-orange-500 p-4 m-2 rounded-lg text-white">
          <h3 className="text-xl font-bold">Time Prediction (in minutes)</h3>
          <p className="text-3xl font-extrabold">{timePrediction}</p>
        </div>
      </div>
    </div>
  );
};

const calculateReadabilityGrade = (sentences) => {
  // Implement your logic to calculate the readability grade here
  // Example: counting the average number of words per sentence
  const totalWords = sentences.reduce(
    (count, sentence) => count + sentence.split(" ").length,
    0
  );
  const avgWordsPerSentence = totalWords / sentences.length;

  // Placeholder calculation based on average words per sentence
  if (avgWordsPerSentence < 10) {
    return "Grade 3";
  } else if (avgWordsPerSentence < 15) {
    return "Grade 6";
  } else {
    return "Grade 9+";
  }
};

export default StatCard;
