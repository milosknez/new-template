"use client";
import { useState } from "react";
import SectionBadge from "./SectionBadge";

const testimonials = [
  { quote: "Using this product has been such a smooth experience. It's clear that a lot of thought went into making it user-friendly.", name: "Diana Mountner", role: "Head of Product, Cloud", color: "bg-blue-400" },
  { quote: "I didn't realize how much I needed this product until I started using it. It's so well-made and easy to use, and it saves me so much time and effort.", name: "Paul Smith", role: "Creative Director, Luminous", color: "bg-green-500" },
  { quote: "This product does everything I hoped for and more. The design is so intuitive, and it fits seamlessly into my routine.", name: "Tim Williams", role: "Founder, Orbitc", color: "bg-purple-500" },
  { quote: "I've tried countless products over the years, but nothing comes close to this. The design is incredibly user-friendly, and it works flawlessly every time.", name: "James Anderson", role: "Founder, Aura", color: "bg-orange-400" },
  { quote: "It's rare to find a product that's both simple and powerful, but this one nails it. It's become an essential tool for me, and I can't imagine being without it.", name: "David Mitchell", role: "VP of Sales, ProLine", color: "bg-red-400" },
  { quote: "I'm genuinely impressed with how well this works. It's easy to integrate into my routine, and the results are consistently amazing.", name: "Benjamin Miller", role: "Product Manager, Hamilton", color: "bg-teal-500" },
  { quote: "I was surprised at how easy this was to set up and use. It's clearly made with the user in mind, and it performs beautifully.", name: "Matthew Brooks", role: "Co-Founder, Amsterdam", color: "bg-indigo-500" },
  { quote: "This is exactly what I was looking for. It's straightforward, efficient, and beautifully designed. Highly recommend it to anyone!", name: "William Carter", role: "Head of Product, Manila", color: "bg-pink-500" },
  { quote: "This has exceeded all my expectations. It's incredibly simple to use, yet so effective, it's made my life so much easier.", name: "John Parker", role: "Marketing Director, Manila", color: "bg-yellow-600" },
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <SectionBadge icon="💬" label="Testimonials" />
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[#020a0f] leading-tight mb-4">
            Trusted by the best<br />in your industry
          </h2>
          <p className="text-[16px] text-gray-500 max-w-[520px] mx-auto leading-relaxed">
            Find out why our solution is the top choice for fast-growing startups.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {displayed.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <p className="text-[14px] text-gray-600 leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} text-white text-[11px] flex items-center justify-center font-medium`}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-[13px] font-medium text-[#020a0f]">{t.name}</div>
                  <div className="text-[12px] text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#020a0f] border border-gray-200 rounded-full px-5 py-2.5 hover:bg-white transition-colors"
            >
              Show more +
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
