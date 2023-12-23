"use client";

import { Container, FAQ, Question, Sea, Separator, Title } from "./styles";

import { nunito } from "@/app/lib/fonts";
import { useState } from "react";

import Fish from "@/app/icons/Fish";
import Plus from "@/app/icons/Plus";
import Waves from "@/app/icons/Waves";
import questions from "@/app/utils/questions";

function Questions() {
  const [activeQuestion, setActiveQuestion] = useState("");

  function handleQuestion(e: React.MouseEvent<HTMLElement>) {
    if (!e.currentTarget) return;

    if (e.currentTarget.id === activeQuestion) return setActiveQuestion("");

    const questionId = e.currentTarget.id;
    return setActiveQuestion(questionId);
  }

  return (
    <>
      <Sea>
        <Fish />
        <Waves rotate />
      </Sea>
      <Container>
        <Title>Alguma dúvida?</Title>
        <FAQ>
          {questions.map(({ id, question, answer }) => (
            <div key={id}>
              <Question
                id={id}
                className={activeQuestion === id ? "active" : ""}
                onClick={(e) => handleQuestion(e)}
              >
                <h3>{question}</h3>
                <Plus />
                <div className="answer">
                  <p className={nunito.className}>{answer}</p>
                </div>
              </Question>
              <Separator />
            </div>
          ))}
        </FAQ>
      </Container>
    </>
  );
}

export default Questions;
