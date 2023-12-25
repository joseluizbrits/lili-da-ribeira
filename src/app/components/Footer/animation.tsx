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

      gsap.from("footer .logo", {
        scrollTrigger: {
          trigger: "footer .logo",
          start: "50% 90%",
          end: "bottom center",
        },
        y: 60,
        opacity: 0,
      });

      gsap.from("footer li", {
        scrollTrigger: {
          trigger: "footer li",
          start: "-=80px 90%",
          end: "bottom center",
        },
        y: 60,
        opacity: 0,
        stagger: 0.1,
      });

      gsap.from("footer .card", {
        scrollTrigger: {
          trigger: "footer .card",
          start: "-=70px 90%",
          end: "bottom center",
        },
        y: 60,
        opacity: 0,
      });

      gsap.from("footer #address", {
        scrollTrigger: {
          trigger: "footer #address",
          start: "-=160px 90%",
          end: "bottom center",
        },
        y: 20,
        opacity: 0,
      });

      gsap.from("footer #copyright", {
        scrollTrigger: {
          trigger: "footer #copyright",
          start: "-=120px 90%",
          end: "bottom center",
        },
        y: 10,
        opacity: 0,
      });
    });

    return () => ctx.revert();
  }, []);
}

export default Animation;
