import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

import { StaticImageData } from "next/image";

type storyDescriptionsType = {
  id: string;
  img: StaticImageData;
  alt: string;
  desc: string;
}[];

function Animation(storyDescriptions: storyDescriptionsType) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.defaults({
        ease: "power1.out",
        duration: 0.6,
      });

      gsap.from("#about h2", {
        scrollTrigger: {
          trigger: "#about h2",
          start: "+=40px 80%",
          end: "bottom center",
        },
        y: 60,
        opacity: 0,
      });

      storyDescriptions.forEach(({ id }) => {
        gsap.from(`#${id} img`, {
          scrollTrigger: {
            trigger: `#${id} img`,
            start: "-=80px 90%",
            end: "bottom center",
          },
          y: 60,
          opacity: 0,
        });

        gsap.from(`#${id} p`, {
          scrollTrigger: {
            trigger: `#${id} p`,
            start: "top 90%",
            end: "bottom center",
          },
          y: 60,
          opacity: 0,
        });
      });

      gsap.from("#about .last-paragraph", {
        scrollTrigger: {
          trigger: "#about .last-paragraph",
          start: "-=80px 90%",
          end: "bottom center",
        },
        y: 60,
        opacity: 0,
      });

      gsap.from(".hands-on", {
        scrollTrigger: {
          trigger: ".hands-on",
          start: "top 70%",
          end: "bottom center",
          scrub: true,
        },
        x: 300,
      });
    });

    return () => ctx.revert();
  }, [storyDescriptions]);
}

export default Animation;
