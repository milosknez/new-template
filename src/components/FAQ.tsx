"use client";
import { useState } from "react";
import { ChevronRight, Plus, Minus } from "lucide-react";
import SectionBadge from "./SectionBadge";

const faqs = [
  {
    question: "Is my data safe with your platform?",
    answer: "Yes, we take data security seriously. We use industry-standard encryption, regular security audits, and comply with major data protection regulations to ensure your data is always safe.",
  },
  {
    question: "What kind of customer support do you offer?",
    answer: "We offer 24/7 customer support through live chat, email, and phone. Our dedicated team is always ready to help you with any questions or issues you might have.",
  },
  {
    question: "How does the pricing for your web solution work?",
    answer: "Our pricing is transparent and flexible. We offer multiple tiers to suit different business sizes, from startups to enterprises. All plans include core features with additional premium options.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time without any cancellation fees. Your access will continue until the end of your current billing period.",
  },
  {
    question: "Can I upgrade or downgrade my subscription plan?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences in pricing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-[680px] mx-auto">
        <div className="text-center mb-12">
          <SectionBadge icon="❓" label="FAQ" />
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[#020a0f] leading-tight mb-4">
            In case you<br />missed anything
          </h2>
          <p className="text-[16px] text-gray-500 mb-6">We&apos;re here to answer all your questions.</p>
          <a href="#" className="inline-flex items-center gap-1 text-[14px] font-medium text-[#020a0f] border border-gray-200 rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors">
            Contact support <ChevronRight size={14} />
          </a>
        </div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full text-left"
              >
                <span className="text-[15px] font-medium text-[#020a0f] pr-4">{faq.question}</span>
                {openIndex === i ? <Minus size={18} className="text-gray-400 shrink-0" /> : <Plus size={18} className="text-gray-400 shrink-0" />}
              </button>
              {openIndex === i && (
                <p className="text-[14px] text-gray-500 leading-relaxed mt-3 animate-fade-in-up">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
