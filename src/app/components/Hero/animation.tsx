import { useLayoutEffect } from "react";
import gsap from "gsap";

function Animation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({
        ease: "power1.out",
        duration: 0.6,
      });

      gsap.from("#hero h1", {
        x: -60,
        opacity: 0,
      });
    });

    return () => ctx.revert();
  }, []);
}

export default Animation;
