"use client";
import { useState } from "react";
import SectionBadge from "./SectionBadge";

const features = [
  {
    id: "calendar",
    icon: "📅",
    title: "Meaningful calendar",
    description: "Effortlessly manage your time and tasks with our intuitive scheduling calendar. Create, modify, and share events with ease.",
  },
  {
    id: "analytics",
    icon: "📊",
    title: "Insightful analytics",
    description: "Track key performance indicators, generate reports, and gain actionable insights to drive growth.",
  },
  {
    id: "integration",
    icon: "🔗",
    title: "Seamless integration",
    description: "Keep everything connected without any limits. Seamlessly integrate with all your favorite tools.",
  },
  {
    id: "boards",
    icon: "📋",
    title: "Effortless boards",
    description: "Visual way to organize and track your tasks and projects with flexible boards.",
  },
];

export default function ExploreFeatures() {
  const [active, setActive] = useState("calendar");

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <SectionBadge icon="✨" label="Features" />
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[#020a0f] leading-tight mb-4">
            Explore our most<br />powerful features
          </h2>
          <p className="text-[16px] text-gray-500 max-w-[520px] mx-auto leading-relaxed">
            Each feature is crafted to provide seamless integration and performance, ensuring a high level of functionality and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Accordion */}
          <div className="space-y-0">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActive(feature.id)}
                className={`w-full text-left py-5 border-t border-gray-200 first:border-t-0 transition-all ${
                  active === feature.id ? "" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span>{feature.icon}</span>
                  <span className={`text-[15px] font-semibold ${active === feature.id ? "text-[#020a0f]" : "text-gray-400"}`}>
                    {feature.title}
                  </span>
                </div>
                {active === feature.id && (
                  <p className="text-[14px] text-gray-500 leading-relaxed mt-2 pl-8 animate-fade-in-up">
                    {feature.description}
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* Preview Card */}
          <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 w-full max-w-[320px]">
              <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-[10px] text-red-500 font-medium">NOV</div>
                  <div className="text-[20px] font-semibold text-[#020a0f]">22</div>
                </div>
                <div className="border-l-2 border-orange-400 pl-3 flex-1">
                  <div className="text-[14px] font-medium text-[#020a0f]">Meeting with the team</div>
                  <div className="text-[12px] text-gray-400">6:00 PM - 7:00 PM</div>
                </div>
                <div className="flex -space-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-orange-400 text-white text-[8px] flex items-center justify-center font-medium border-2 border-white">JD</div>
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-[8px] flex items-center justify-center font-medium border-2 border-white">JS</div>
                  <div className="w-6 h-6 rounded-full bg-green-500 text-white text-[8px] flex items-center justify-center font-medium border-2 border-white">TW</div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-[12px] text-gray-500">Live event</span>
                </div>
                <span className="text-[11px] text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">✦ Going</span>
              </div>
              <div className="mb-4">
                <div className="text-[13px] font-semibold text-[#020a0f] mb-1">Meeting notes</div>
                <p className="text-[11px] text-gray-500 leading-relaxed">Marketing materials are finalized and will be shared with the team for feedback by Friday.</p>
              </div>
              <button className="w-full py-2 border border-gray-200 rounded-lg text-[12px] font-medium text-[#020a0f] hover:bg-gray-50 flex items-center justify-center gap-1.5">
                📹 Join the call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
