"use client";
import { ChevronRight } from "lucide-react";
import SectionBadge from "./SectionBadge";

export default function MobileApp() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative w-[280px] bg-white rounded-[40px] border-[8px] border-gray-800 shadow-2xl overflow-hidden">
              {/* Status Bar */}
              <div className="flex items-center justify-between px-6 py-2 bg-white">
                <span className="text-[11px] font-semibold">9:41</span>
                <div className="w-[80px] h-[25px] bg-black rounded-full absolute top-0 left-1/2 -translate-x-1/2"></div>
                <div className="flex items-center gap-1 text-[10px]">
                  <span>▂▄▆█</span>
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* App Content */}
              <div className="px-4 pb-6 pt-2">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[13px] text-gray-400">‹</span>
                  <span className="text-[15px] font-semibold">Dashboard</span>
                  <span className="text-gray-400">+</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="border border-gray-100 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px]">💰</span>
                      <span className="text-[10px] font-medium">Revenue</span>
                      <span className="ml-auto text-gray-300 text-[8px]">×</span>
                    </div>
                    <div className="text-[16px] font-semibold">$50,974</div>
                    <div className="text-[9px] text-green-500">↗+25.2%</div>
                    <svg width="100%" height="20" viewBox="0 0 100 20" fill="none" className="mt-1">
                      <path d="M0,15 Q10,12 20,14 T40,10 T60,12 T80,8 T100,10" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[10px]">📋</span>
                      <span className="text-[10px] font-medium">Expenses</span>
                    </div>
                    <div className="text-[16px] font-semibold">$7,62...</div>
                    <svg width="100%" height="20" viewBox="0 0 100 20" fill="none" className="mt-1">
                      <path d="M0,10 Q10,12 20,8 T40,14 T60,10 T80,16 T100,12" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                </div>

                {/* Calendar */}
                <div className="border border-gray-100 rounded-xl p-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px]">📅</span>
                    <span className="text-[11px] font-medium">Calendar</span>
                    <span className="ml-auto text-gray-300 text-[10px]">•••</span>
                  </div>
                  {[
                    { date: "22", title: "Session with James", time: "6:00 PM - 7:00 PM" },
                    { date: "25", title: "Meeting with Lisa", time: "3:00 PM - 3:30 PM" },
                    { date: "28", title: "Project Kickoff with Alex", time: "12:00 PM - 2:00 PM" },
                  ].map((event) => (
                    <div key={event.title} className="flex items-center gap-2 py-1.5 border-b border-gray-50 last:border-0">
                      <div className="text-center w-6">
                        <div className="text-[7px] text-red-500 font-medium">NOV</div>
                        <div className="text-[12px] font-semibold">{event.date}</div>
                      </div>
                      <div className="border-l border-orange-400 pl-2 flex-1">
                        <div className="text-[10px] font-medium truncate">{event.title}</div>
                        <div className="text-[8px] text-gray-400">{event.time}</div>
                      </div>
                      <div className="flex -space-x-1">
                        <div className="w-4 h-4 rounded-full bg-orange-400 border border-white"></div>
                        <div className="w-4 h-4 rounded-full bg-blue-500 border border-white"></div>
                        <div className="w-4 h-4 rounded-full bg-green-500 border border-white"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customers */}
                <div className="border border-gray-100 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px]">👥</span>
                    <span className="text-[11px] font-medium">Customers</span>
                    <span className="ml-auto text-gray-300 text-[10px]">•••</span>
                  </div>
                  {[
                    { name: "Omar Press", role: "Founder" },
                    { name: "Abram Curtis", role: "Head of Product" },
                  ].map((person) => (
                    <div key={person.name} className="flex items-center gap-2 py-1.5">
                      <div className="w-5 h-5 rounded-full bg-gray-200 text-[7px] flex items-center justify-center font-medium">
                        {person.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className="text-[10px] font-medium">{person.name}</div>
                        <div className="text-[8px] text-gray-400">{person.role}</div>
                      </div>
                      <div className="ml-auto flex gap-1 text-gray-300 text-[10px]">
                        📞 ✉️
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionBadge icon="📱" label="Download apps" />
            <h2 className="text-[40px] md:text-[48px] font-semibold text-[#020a0f] leading-tight mb-5">
              Designed to work seamlessly anywhere
            </h2>
            <p className="text-[16px] text-gray-500 leading-relaxed mb-6">
              Our app keeps you in touch and in control, giving you access to our services anytime, anywhere.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-1.5 bg-[#020a0f] text-white text-[14px] font-medium px-6 py-3 rounded-full hover:bg-[#1a2530] transition-colors">
                Download <ChevronRight size={14} />
              </a>
              <a href="#" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#020a0f] border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
                Learn more <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
