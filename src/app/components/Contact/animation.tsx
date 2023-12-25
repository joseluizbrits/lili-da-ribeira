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

      gsap.from("#contact h2", {
        scrollTrigger: {
          trigger: "#contact h2",
          start: "-=60px 90%",
          end: "bottom center",
        },
        y: 60,
        opacity: 0,
      });

      gsap.from("#contact a", {
        scrollTrigger: {
          trigger: "#contact a",
          start: "-=80px 90%",
          end: "bottom center",
        },
        y: 60,
        opacity: 0,
      });
    });

    return () => ctx.revert();
  }, []);
}

export default Animation;
