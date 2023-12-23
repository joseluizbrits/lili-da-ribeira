"use client";

import { nunito } from "@/app/lib/fonts";
import { Container, IngredientsList, Title } from "./styles";
import { ingredients } from "@/app/utils/ingredients";

function Ingredients() {
  return (
    <Container>
      <Title>Ingredientes</Title>
      <IngredientsList>
        {ingredients.map(({ id, name, desc, icon, arrow }) => (
          <li key={id} id={id} className={nunito.className}>
            <div className="wrapp">
              {icon}
              <p>{name}</p>
            </div>
            {arrow}
          </li>
        ))}
      </IngredientsList>
    </Container>
  );
}

export default Ingredients;
