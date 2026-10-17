"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqData } from "@/data/landing";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqData.items[0]?.id ?? null);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="duvidas"
      aria-labelledby="faq-heading"
      className="border-t border-[#E4DFD5] bg-[#F1EDE4]/45 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[#5D7464]">
            {faqData.eyebrow}
          </span>
          <h2
            id="faq-heading"
            className="mt-3 font-serif text-3xl font-normal tracking-tight text-[#1F2622] sm:text-4xl"
          >
            {faqData.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#525B55]">
            {faqData.description}
          </p>
        </div>

        {/* Accessible Accordion */}
        <div className="mt-12 divide-y divide-[#E4DFD5] rounded-3xl border border-[#DFD9CE] bg-[#FCFBF9] px-6 sm:px-9">
          {faqData.items.map((item) => {
            const isOpen = openId === item.id;
            const buttonId = `faq-button-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div key={item.id} className="py-5 sm:py-6">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => handleToggle(item.id)}
                    className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5D7464] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FCFBF9] rounded-md"
                  >
                    <span className="font-serif text-lg font-medium text-[#1F2622] sm:text-xl">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                        isOpen
                          ? "border-[#24382E] bg-[#24382E] text-[#F8F6F1]"
                          : "border-[#D8D1C4] bg-[#F8F6F1] text-[#525B55]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={isOpen ? "mt-3.5 pr-8" : "hidden"}
                >
                  <p className="text-sm leading-relaxed text-[#525B55] sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
