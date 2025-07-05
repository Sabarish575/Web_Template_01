"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqAccordion = () => {
  return (
    <div className="w-full max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 tracking-wide">
        Frequently Asked Questions
      </h1>

      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4 transition-all duration-300"
      >
        <AccordionItem value="q1">
          <AccordionTrigger className="text-lg md:text-xl font-semibold hover:text-[#006400] transition-colors">
            What is Yatigo's storage service?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-base text-gray-600">
            Yatigo provides secure, short-term mobile and baggage storage at affordable prices.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger className="text-lg md:text-xl font-semibold hover:text-[#006400] transition-colors">
            How long can I store my items?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-base text-gray-600">
            You can store your items for as little as an hour or as long as several days, depending on your need.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger className="text-lg md:text-xl font-semibold hover:text-[#006400] transition-colors">
            Is my stored item insured?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-base text-gray-600">
            Yes, all stored items are insured against damage, theft, or loss during the rental period.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger className="text-lg md:text-xl font-semibold hover:text-[#006400] transition-colors">
            Where are your lockers located?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-base text-gray-600">
            Our lockers are available in major transport hubs and city centers across India.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5">
          <AccordionTrigger className="text-lg md:text-xl font-semibold hover:text-[#006400] transition-colors">
            How do I book a locker?
          </AccordionTrigger>
          <AccordionContent className="text-sm md:text-base text-gray-600">
            You can book a locker directly from our website or mobile app in just a few clicks.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
