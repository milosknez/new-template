"use client";
import { ChevronRight } from "lucide-react";
import SectionBadge from "./SectionBadge";

export default function CalendarSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionBadge icon="📅" label="Meaningful calendar" />
            <h2 className="text-[40px] md:text-[48px] font-semibold text-[#020a0f] leading-tight mb-5">
              Dynamic planner that keeps you ahead
            </h2>
            <p className="text-[16px] text-gray-500 leading-relaxed mb-6">
              Stay one step ahead with a calendar that grows with your schedule. Adapt quickly to changes, manage priorities effectively, and achieve your goals with ease.
            </p>
            <a href="#" className="inline-flex items-center gap-1 text-[14px] font-medium text-[#020a0f] border border-gray-200 rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors">
              Learn more <ChevronRight size={14} />
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 w-full max-w-[340px]">
              {/* Calendar Header */}
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
                  <div className="w-7 h-7 rounded-full bg-orange-400 text-white text-[10px] flex items-center justify-center font-medium border-2 border-white">JD</div>
                  <div className="w-7 h-7 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center font-medium border-2 border-white">JS</div>
                  <div className="w-7 h-7 rounded-full bg-green-500 text-white text-[10px] flex items-center justify-center font-medium border-2 border-white">TW</div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-[12px] text-gray-500">Live event</span>
                </div>
                <span className="text-[11px] text-green-600 font-medium bg-green-50 px-2.5 py-1 rounded-full">✦ Going</span>
              </div>

              <div className="mb-4">
                <div className="text-[14px] font-semibold text-[#020a0f] mb-1">Meeting notes</div>
                <p className="text-[12px] text-gray-500 leading-relaxed">
                  Marketing materials are finalized and will be shared with the team for feedback by Friday.
                </p>
              </div>

              <button className="w-full py-2.5 border border-gray-200 rounded-lg text-[13px] font-medium text-[#020a0f] hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                📹 Join the call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
