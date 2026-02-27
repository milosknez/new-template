"use client";
import { ChevronRight } from "lucide-react";
import SectionBadge from "./SectionBadge";

export default function AnalyticsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Donut Chart Card */}
          <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full max-w-[320px]">
              <div className="flex justify-end mb-4">
                <button className="text-gray-300">⚙</button>
              </div>
              {/* Donut Chart */}
              <div className="flex justify-center mb-6">
                <div className="relative w-[140px] h-[140px]">
                  <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#8b5cf6" strokeWidth="12"
                      strokeDasharray="226" strokeDashoffset="63" strokeLinecap="round" />
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#f97316" strokeWidth="12"
                      strokeDasharray="226" strokeDashoffset="185" strokeLinecap="round" />
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#22c55e" strokeWidth="12"
                      strokeDasharray="226" strokeDashoffset="203" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[24px] font-semibold text-[#020a0f]">1,248</div>
                      <div className="text-[12px] text-gray-400">Total</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <span className="text-[13px] text-gray-600">Marketing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-medium">72%</span>
                    <span className="text-[11px] text-green-500">↗+10.8%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                    <span className="text-[13px] text-gray-600">Organic search</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-medium">18%</span>
                    <span className="text-[11px] text-red-500">↘-12.4%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                    <span className="text-[13px] text-gray-600">Direct traffic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-medium">10%</span>
                    <span className="text-[11px] text-green-500">↗+14.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionBadge icon="📊" label="Insightful analytics" />
            <h2 className="text-[40px] md:text-[48px] font-semibold text-[#020a0f] leading-tight mb-5">
              Analytics that power smarter decisions
            </h2>
            <p className="text-[16px] text-gray-500 leading-relaxed mb-6">
              Our cutting-edge analytics deliver detailed trends, patterns, and actionable intelligence to help you make informed decisions and stay ahead of the competition.
            </p>
            <a href="#" className="inline-flex items-center gap-1 text-[14px] font-medium text-[#020a0f] border border-gray-200 rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors">
              Learn more <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
