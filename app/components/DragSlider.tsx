"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight } from "react-feather";

gsap.registerPlugin(Draggable, useGSAP);

const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"];

export default function DragSlider() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Cursor follow
  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const cursor = cursorRef.current;
      if (!wrapper || !cursor) return;

      const onMove = (e: MouseEvent) => {
        const { left, top } = wrapper.getBoundingClientRect();
        gsap.to(cursor, {
          x: e.clientX - left,
          y: e.clientY - top,
          duration: 0.15,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      wrapper.addEventListener("mousemove", onMove);
      return () => wrapper.removeEventListener("mousemove", onMove);
    },
    { scope: wrapperRef },
  );

  // Draggable + live progress
  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      const progress = progressRef.current;
      if (!wrapper || !track || !progress) return;

      const maxDrag = -(track.scrollWidth - wrapper.clientWidth);

      const updateProgress = (x: number) => {
        const pct = Math.abs(x / maxDrag) * 100;
        gsap.to(progress, {
          width: `${pct}%`,
          duration: 0.1,
          ease: "none",
          overwrite: "auto",
        });
      };

      const draggable = Draggable.create(track, {
        type: "x",
        bounds: { minX: maxDrag, maxX: 0 },
        inertia: true,
        cursor: "none",
        activeCursor: "none",
        onDragStart() {
          setIsDragging(true);
        },
        onDrag() {
          updateProgress(this.x);
        },
        // Keep updating during inertia throw
        onThrowUpdate() {
          updateProgress(this.x);
        },
        onDragEnd() {
          setIsDragging(false);
        },
      });

      return () => draggable[0].kill();
    },
    { scope: wrapperRef },
  );

  return (
    <div ref={wrapperRef} className="w-full" style={{ cursor: "none" }}>
      {/* Slider viewport */}
      <div
        className="relative overflow-hidden rounded-xl w-full"
        style={{ touchAction: "pan-y" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Custom cursor */}
        <div
          ref={cursorRef}
          className="absolute z-20 pointer-events-none -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: isHovering ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        >
          <div
            className={[
              "bg-[#d9d9d9] rounded-full flex items-center justify-center",
              "shadow-lg text-sm font-medium select-none transition-all duration-200",
              isDragging ? "w-16 h-16 scale-90" : "w-20 h-20",
            ].join(" ")}
          >
            {isDragging ? (
              <div className="flex gap-2">
                <ChevronLeft size={18} />
                <ChevronRight size={18} />
              </div>
            ) : (
              "Drag"
            )}
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform select-none"
          style={{ width: "max-content" }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="relative shrink-0 rounded-xl overflow-hidden w-175 h-105 lg:w-255 lg:h-140"
            >
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar — outside overflow:hidden so it's always visible */}
      <div className="w-full h-1.75 bg-[#ededed] mt-8 md:mt-15 relative rounded-[50px] overflow-clip">
        <div
          ref={progressRef}
          className="absolute left-0 top-0 h-full w-0 bg-[#cfcfcf]"
        />
      </div>
    </div>
  );
}
