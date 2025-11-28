"use client";

import arrow_down from "@/public/arrow-down.svg";
import Image from "next/image";
import { useState } from "react";

interface QuestionProps {
  question: string;
  answer: string;
}

export default function Question({ question, answer }: QuestionProps) {
  const [questionState, setQuestionState] = useState(false);

  let answerStyles: string;
  let arrowStyles: string;

  questionState != false
    ? ((answerStyles = ""), (arrowStyles = "rotate-540"))
    : ((answerStyles = "hidden"), (arrowStyles = ""));

  function handleQuestionState() {
    setQuestionState(!questionState);
  }

  return (
    <article
      onClick={() => handleQuestionState()}
      className={`flex flex-col p-6 rounded-3xl cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-150`}
    >
      <div className="flex items-center justify-between">
        <button
          aria-label="افتح السؤال"
          onClick={() => handleQuestionState()}
          className={`cursor-pointer duration-300 ${arrowStyles}`}
        >
          <Image src={arrow_down} alt="" width={30} />
        </button>

        <p className="text-2xl font-semibold">{question}</p>
      </div>

      <p className={`self-end mt-8 ${answerStyles}`}>{answer}</p>
    </article>
  );
}
