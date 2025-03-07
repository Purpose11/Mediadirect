"use client";

import { useEffect, useRef } from "react";
import TypeIt from "typeit";

export default function TypeEffect() {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const instance = new TypeIt(elementRef.current, {
      strings: ["INFLUENTIAL", "INNOVATIVE", "INSPIRING", "INFINITE"],
      speed: 200,
      waitUntilVisible: true,
      loop: true,
      breakLines: false,
      afterComplete: (instance: any) => {
        instance.destroy();
      },
    }).go();

    return () => {
      instance.destroy();
    };
  }, []);

  return <span ref={elementRef} className="text-purple-500 font-bold"></span>;
}
