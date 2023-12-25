"use client";

import { Container, Description, List, Name, Title } from "./styles";
import Animation from "./animation";

import { nunito } from "@/app/lib/fonts";
import { ingredients } from "@/app/utils/ingredients";
import { useState } from "react";

function Ingredients() {
  Animation(ingredients);

  const [activeItem, setActiveItem] = useState("");

  function handleItem(e: React.MouseEvent<HTMLElement>) {
    if (!e.currentTarget) return;

    const item = e.currentTarget.id;

    if (item === activeItem) return setActiveItem("");

    return setActiveItem(item);
  }

  return (
    <Container id="ingredients">
      <Title>Ingredientes</Title>
      <List>
        {ingredients.map(({ id, name, desc, icon, arrow }) => (
          <li key={id} className={nunito.className}>
            <Name
              id={id}
              onClick={handleItem}
              className={id === activeItem ? "active" : ""}
            >
              <div className="wrapp">
                {icon}
                <h3>{name}</h3>
              </div>
              {arrow}
            </Name>
            <Description
              id={`${id}-desc`}
              className={id === activeItem ? "active" : ""}
            >
              <p>{desc}</p>
            </Description>
          </li>
        ))}
      </List>
    </Container>
  );
}

export default Ingredients;
