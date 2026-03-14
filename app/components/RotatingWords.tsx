"use client";
import { useRef } from "react";
import { useRotatingWords } from "../hooks/useRotatingWords";

const RotatingWords = () => {
  const wrapper1 = useRef<HTMLDivElement>(null);
  const wrapper2 = useRef<HTMLDivElement>(null);
  const wrapper3 = useRef<HTMLDivElement>(null);
  useRotatingWords(wrapper1, { duration: 0.4, pause: 2 });
  useRotatingWords(wrapper2, { duration: 0.4, pause: 4 });
  useRotatingWords(wrapper3, { duration: 0.4, pause: 3 });
  return (
    <div className="text-4xl md:text-[58px] font-bold flex flex-col gap-6 md:gap-[35px] text-light-900 min-w-[15ch]">
      <div className="wrapper overflow-hidden h-lh" ref={wrapper1}>
        <h3 className="rotating-word">UI & UX</h3>
        <h3 className="rotating-word">Development</h3>
        <h3 className="rotating-word">Blockchain</h3>
      </div>
      <div className="wrapper overflow-hidden h-lh" ref={wrapper2}>
        <h3 className="rotating-word">Development</h3>
        <h3 className="rotating-word">UI & UX</h3>
        <h3 className="rotating-word">Blockchain</h3>
      </div>
      <div className="wrapper overflow-hidden h-lh" ref={wrapper3}>
        <h3 className="rotating-word">Blockchain</h3>
        <h3 className="rotating-word">UI & UX</h3>
        <h3 className="rotating-word">Development</h3>
      </div>
    </div>
  );
};

export default RotatingWords;
