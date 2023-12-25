import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

type QuestionsType = {
  id: string;
  question: string;
  answer: string;
}[];

function Animation(questions: QuestionsType) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.defaults({
        ease: "power1.out",
        duration: 0.6,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#fish",
            start: "+=20% bottom",
            end: "300% bottom",
            scrub: true,
          },
        })
        .to("#fish", {
          x: 0,
          y: -40,
          rotate: "10deg",
          scale: 1.1,
        })
        .to("#fish", {
          x: 100,
          y: 80,
          rotate: "55deg",
          scale: 1,
        });

      gsap.from("#questions h2", {
        scrollTrigger: {
          trigger: "#questions h2",
          start: "-=40px 90%",
          end: "bottom 90%",
        },
        y: 60,
        opacity: 0,
      });

      questions.forEach(({ id }) => {
        gsap.from(`#${id}-anime`, {
          scrollTrigger: {
            trigger: `#${id}-anime`,
            start: "-=60px 90%",
            end: "bottom 90%",
          },
          y: 60,
          opacity: 0,
        });
      });
    });

    return () => ctx.revert();
  }, [questions]);
}

export default Animation;
