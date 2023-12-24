import { useLayoutEffect } from "react";
import gsap from "gsap";

function Animation() {
  useLayoutEffect(() => {
    gsap.defaults({
      ease: "power1.out",
      duration: 0.6,
    });

    const ctx = gsap.context(() => {
      gsap.from(".swiper", {
        y: 100,
        opacity: 0,
        delay: 1,
      });
    });

    return () => ctx.revert();
  }, []);
}

export default Animation;
