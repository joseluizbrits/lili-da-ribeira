"use client";

import {
  Container,
  Content,
  FAQ,
  Question,
  Sea,
  Title,
  Wrapper,
} from "./styles";
import Fish from "@/app/icons/Fish";
import Plus from "@/app/icons/Plus";
import Waves from "@/app/icons/Waves";
import questions from "@/app/utils/questions";

function Questions() {
  return (
    <Container>
      <Sea>
        <Fish />
        <Waves rotate />
      </Sea>
      <Content>
        <Title>Alguma dúvida?</Title>
        <FAQ>
          {questions.map(({ id, question }) => (
            <Wrapper key={id}>
              <Question>
                <h3>{question}</h3>
                <Plus />
              </Question>
              {/* <Answer><p>{answer}</p></Answer> */}
            </Wrapper>
          ))}
        </FAQ>
      </Content>
    </Container>
  );
}

export default Questions;
