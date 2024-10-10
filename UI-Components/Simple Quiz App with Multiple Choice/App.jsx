import React, { useState } from "react";

const initialQuiz = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Iron"],
    correctAnswer: "Oxygen",
  },
];

function QuizApp() {
  const [questions, setQuestions] = useState(initialQuiz);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const proceedToNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
      {currentIndex < questions.length ? (
        <div>
          <p>{questions[currentIndex].question}</p>
          <ul>
            {questions[currentIndex].options.map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswerSelection(option)}
                />
                <span>{option}</span>
              </li>
            ))}
          </ul>
          <button onClick={proceedToNextQuestion}>Next Question</button>
          <p>Score: {score}</p>
        </div>
      ) : (
        <div>
          <p>Quiz submitted!</p>
          <p>Final Score: {score}</p>
        </div>
      )}
    </div>
  );
}

export default QuizApp;