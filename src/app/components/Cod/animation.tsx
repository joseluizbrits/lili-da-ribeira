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

      gsap.from("#cod h2", {
        scrollTrigger: {
          trigger: "#cod h2",
          start: "top 80%",
          end: "bottom center",
        },
        y: 60,
        opacity: 0,
      });

      gsap.from("#cod p", {
        scrollTrigger: {
          trigger: "#cod p",
          start: "-=60px 80%",
          end: "bottom center",
        },
        y: 60,
        opacity: 0,
      });

      gsap.from("#cod a", {
        scrollTrigger: {
          trigger: "#cod a",
          start: "-=80px 80%",
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
