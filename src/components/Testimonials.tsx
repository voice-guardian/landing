
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Bessie Cooper",
    role: "Co-Founder, CEO",
    company: "Altexbone",
    content: "We love this app! Our users were using it for their projects, so clients already knew what this app was and how to use it."
  },
  {
    name: "Albert Flores",
    role: "Senior Product Manager",
    company: "Ridoria",
    content: "I didn't know designing in Figma could be this individualized. I'd never considered it before, but this app changed my mind."
  },
  {
    name: "Jenny Wilson",
    role: "Head of Marketing",
    company: "Altexbone",
    content: "We love this app! Our users were using it for their projects, so clients already knew what this app was and how to use it."
  }
];

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll('.testimonial-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Trusted by leading creators,<br />
          managers, labels, and publishers.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <a
              key={index}
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="testimonial-card opacity-0 translate-y-4 transition-all duration-700 delay-100 transform hover:scale-105"
            >
              <div className="bg-white p-10 rounded-lg shadow-lg h-full min-h-[400px]">
                <p className="text-gray-600 mb-8 text-xl leading-relaxed">{testimonial.content}</p>
                <div className="mt-8">
                  <p className="font-semibold text-2xl">{testimonial.name}</p>
                  <p className="text-lg text-gray-500 mt-2">{testimonial.role}</p>
                  <p className="text-lg text-primary mt-1">{testimonial.company}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
