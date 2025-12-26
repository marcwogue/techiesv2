import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
};

export default function PinnedWrapper({ children }: Props) {
    const wrapperRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (!wrapperRef.current) return;
  
      const panels = gsap.utils.toArray<HTMLElement>(
        wrapperRef.current.querySelectorAll(".panel")
      );
  
      panels.forEach((panel, i) => {
        const pinTarget = panel.querySelector<HTMLElement>(".pin");
  
        if (!pinTarget) return;
  
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "bottom top",
          pin: pinTarget, // 👈 pin interne
          pinSpacing: true,
        });
  
        if (i > 0) {
          gsap.to(panels[i - 1], {
            scale: 0.92,
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        }
      });
  
      return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);
  
    return (
      <div ref={wrapperRef}>
        {Array.isArray(children)
          ? children.map((child, i) => (
              <section key={i} className="panel">
                <div className="pin">
                  {child}
                </div>
              </section>
            ))
          : (
              <section className="panel">
                <div className="pin">
                  {children}
                </div>
              </section>
            )}
      </div>
    );
  }
  

