import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type IngredientsType = {
  id: string;
  name: string;
  desc: string;
  icon: JSX.Element;
  arrow: JSX.Element;
}[];

function Animation(ingredients: IngredientsType) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from("#ingredients h2", {
        scrollTrigger: {
          trigger: "#ingredients",
          start: "top 80%",
          end: "bottom center",
        },
        y: 60,
        opacity: 0,
      });

      ingredients.forEach(({ id }) => {
        gsap.from(`#${id}`, {
          scrollTrigger: {
            trigger: `#${id}`,
            start: "top 90%",
            end: "bottom center",
          },
          y: 40,
          opacity: 0,
          duration: 0.2,
        });
      });
    });

    return () => ctx.revert();
  }, [ingredients]);
}

export default Animation;
