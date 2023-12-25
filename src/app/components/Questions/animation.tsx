import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

function Animation() {
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
            start: "+=20% 90%",
            end: "center 90%",
            scrub: true,
            markers: true,
          },
        })
        .to("#fish", {
          x: 20,
          y: -60,
        })
        .to("#fish", {
          x: 100,
          y: 60,
        });
    });

    return () => ctx.revert();
  }, []);
}

export default Animation;
