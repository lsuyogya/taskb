import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";

interface UseRotatingWordsOptions {
  duration?: number;
  pause?: number;
}

export function useRotatingWords(
  container: RefObject<HTMLElement | null>,
  options: UseRotatingWordsOptions = {},
) {
  const { duration = 0.4, pause = 0.75 } = options;

  useGSAP(
    () => {
      const targets = container.current?.querySelectorAll(".rotating-word");
      if (!targets?.length) return;

      const numberOfTargets = targets.length;
      const stagger = duration + pause;
      const repeatDelay = stagger * (numberOfTargets - 1) + pause;

      gsap
        .timeline()
        .from(targets, {
          y: 80,
          duration,
          opacity: 0,
          stagger: { each: stagger, repeat: -1, repeatDelay },
        })
        .to(
          targets,
          {
            y: -80,
            duration,
            opacity: 0,
            stagger: { each: stagger, repeat: -1, repeatDelay },
          },
          stagger, // <-- .to() starts at this position, not after .from() ends
        );
    },
    { scope: container, dependencies: [container] },
  );
}
