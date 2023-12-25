import { useLayoutEffect } from "react";
import gsap from "gsap";

function Animation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({
        ease: "power1.out",
        duration: 0.6,
      });

      gsap
        .timeline()
        .fromTo(
          ".swiper",
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            delay: 0.6,
          }
        )
        .from(
          ".swiper .desc",
          {
            y: 20,
            opacity: 0,
          },
          "<=0.4"
        )
        .from(
          ".swiper .label",
          {
            y: 20,
            opacity: 0,
          },
          "<+0.4"
        )
        .from(
          ".swiper-button-prev",
          {
            y: 20,
            opacity: 0,
          },
          "<+0.4"
        )
        .from(
          ".swiper-button-next",
          {
            y: 20,
            opacity: 0,
          },
          "<+0.1"
        );
    });

    return () => ctx.revert();
  }, []);
}

export default Animation;
