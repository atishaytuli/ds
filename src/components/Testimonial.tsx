import { useEffect, useRef } from "react";
import gsap from "gsap";
import TestimonialCard from "./Cards";

const testimonials = [
  {
    id: 1,
    text: "Competitive Edge",
  },
  {
    id: 2,
    text: "Engagement",
  },
  {
    id: 3,
    text: "Driven by Result",
  },
  {
    id: 4,
    text: "Faster Go-To Market",
  },
  {
    id: 5,
    text: "Omni-channel Approach",
  },
  {
    id: 6,
    text: "Innovation Focus",
  },
];

const TestimonialsSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;

    Array.from(cards).forEach((card, index) => {
      const isSecondRow = index >= 3;

      gsap.set(cards, { y: 0 });

      gsap.to(card, {
        y: "-100vh",
        duration: 20,
        ease: "none",
        repeat: -1,
        onComplete: () => {
          gsap.to(card, {
            y: isSecondRow ? "20px" : "-20px",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
        },
      });
    });
  }, []);

  return (
    <div className="h-screen bg-white overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">

          <div
            ref={cardsRef}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-8 auto-rows-fr"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                text={testimonial.text}
              />
            ))}
          </div>

          <div className="w-full lg:w-1/2 top-30">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-black mb-4  ml-24 leading-tight font-[SR]">
              <span className="italic font-[LO]">See </span> what
              <br />
              <span className="text-8xl">our</span>
              <br />
              <span className="font-semibold">CLIENTS</span>
              <br /> 
              <span className="font-[LO]">SAYING...</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;