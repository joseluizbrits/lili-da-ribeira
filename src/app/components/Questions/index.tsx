"use client";

import { Container, FAQ, Question, Sea, Separator, Title } from "./styles";

import { nunito } from "@/app/lib/fonts";
import { useState } from "react";

import Fish from "@/app/icons/Fish";
import Plus from "@/app/icons/Plus";
import questions from "@/app/utils/questions";
import Animation from "./animation";

function Questions() {
  Animation();

  const [activeQuestion, setActiveQuestion] = useState("");

  function handleQuestion(e: React.MouseEvent<HTMLElement>) {
    if (!e.currentTarget) return;

    const question = e.currentTarget.id;

    if (question === activeQuestion) return setActiveQuestion("");

    return setActiveQuestion(question);
  }

  return (
    <>
      <Sea>
        <Fish />
      </Sea>
      <Container id="questions">
        <Title>Alguma dúvida?</Title>
        <FAQ>
          {questions.map(({ id, question, answer }, index) => (
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
              {index < questions.length - 1 && <Separator />}
            </div>
          ))}
        </FAQ>
      </Container>
    </>
  );
}

export default Questions;
