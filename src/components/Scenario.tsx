"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import SectionBadge from "./SectionBadge";

const tabs = [
  { id: "calendar", icon: "📅", label: "Meaningful calendar" },
  { id: "analytics", icon: "📊", label: "Insightful analytics" },
  { id: "integration", icon: "🔗", label: "Seamless integration" },
  { id: "boards", icon: "📋", label: "Effortless boards" },
];

const tabContent: Record<string, { badge: string; title: string; description: string }> = {
  calendar: {
    badge: "Meaningful calendar",
    title: "Stay organized and on track",
    description: "Effortlessly manage your time and tasks with our intuitive scheduling calendar. Create, modify, and share events with ease.",
  },
  analytics: {
    badge: "Insightful analytics",
    title: "Track performance at a glance",
    description: "Track key performance indicators, generate reports, and gain actionable insights to drive your business forward.",
  },
  integration: {
    badge: "Seamless integration",
    title: "Connect all your tools",
    description: "Keep everything connected without any limits. Integrate with your favorite tools and streamline your workflow.",
  },
  boards: {
    badge: "Effortless boards",
    title: "Visualize your workflow",
    description: "Visual way to organize and track your tasks and projects with flexible, customizable boards.",
  },
};

export default function Scenario() {
  const [activeTab, setActiveTab] = useState("calendar");
  const content = tabContent[activeTab];

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <SectionBadge icon="✨" label="Features" />
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[#020a0f] leading-tight mb-4">
            Suited for every scenario
          </h2>
          <p className="text-[16px] text-gray-500 max-w-[520px] mx-auto leading-relaxed">
            Explore the comprehensive suite of tools designed to enhance your productivity and streamline your workflow.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-white border border-gray-200 text-[#020a0f] shadow-sm"
                  : "text-gray-500 hover:text-[#020a0f]"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionBadge icon="📅" label={content.badge} />
              <h3 className="text-[28px] font-semibold text-[#020a0f] mb-4">{content.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-6">{content.description}</p>
              <a href="#" className="inline-flex items-center gap-1 text-[14px] font-medium text-[#020a0f] border border-gray-200 rounded-full px-5 py-2.5 hover:bg-white transition-colors">
                Learn more <ChevronRight size={14} />
              </a>
            </div>
            <div className="flex justify-center">
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
                  <p className="text-[11px] text-gray-500">Marketing materials are finalized and will be shared with the team for feedback by Friday.</p>
                </div>
                <button className="w-full py-2 border border-gray-200 rounded-lg text-[12px] font-medium text-[#020a0f] hover:bg-gray-50 flex items-center justify-center gap-1.5">
                  📹 Join the call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
