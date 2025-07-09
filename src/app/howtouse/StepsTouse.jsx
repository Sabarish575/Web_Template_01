"use client"
import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    id: "scan",
    title: "Scan",
    content: [
      "Scan the QR code on the locker's screen",
      'Select "Keep/Store"',
      "No app needed – just scan and go",
    ],
  },
  {
    id: "pay",
    title: "Pay",
    content: [
      "₹20 for 12 hrs / ₹30 for 24 hrs",
      "Pay via UPI or card",
      "Quick and secure payment",
    ],
  },
  {
    id: "store",
    title: "Store & Go",
    content: [
      "Set a 4-digit code",
      "Locker opens automatically",
      "Drop your phone and close the locker",
    ],
  },
  {
    id: "return",
    title: "Return Anytime",
    content: [
      "Scan the QR code again",
      "Enter your passcode to open locker",
      "Collect your phone – done!",
    ],
  },
];

function StepsTouse() {
  const [activeStep, setActiveStep] = useState("scan");
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.3,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="flex w-full min-h-screen">
      {/* Left Side - Navigation */}
      <div className="w-2/5 sm:w-1/2 p-4 sm:p-6 lg:p-10">
        <div className="sticky top-20">
          <ul className="space-y-3 sm:space-y-4 lg:space-y-6 text-lg sm:text-2xl lg:text-4xl font-semibold">
            {steps.map((step) => (
              <li
                key={step.id}
                className={`transition-colors duration-300 ${
                  activeStep === step.id
                    ? "text-blue-600"
                    : "text-gray-700"
                }`}
              >
                {step.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-3/5 sm:w-1/2 p-4 sm:p-6 lg:p-10 flex flex-col space-y-16 sm:space-y-24 lg:space-y-40 overflow-y-auto">
        {steps.map((step, i) => (
          <div
            key={step.id}
            id={step.id}
            ref={(el) => (sectionRefs.current[i] = el)}
            className="space-y-3 sm:space-y-4 lg:space-y-5"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              {`Step ${i + 1}: ${step.title}`}
            </h1>
            <ul className="list-disc text-base sm:text-lg lg:text-xl ml-6 sm:ml-8 lg:ml-10 space-y-1 sm:space-y-2">
              {step.content.map((point, j) => (
                <li key={j} className="leading-relaxed">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StepsTouse;