"use client";
import { ChevronRight } from "lucide-react";
import SectionBadge from "./SectionBadge";

export default function EverythingSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <SectionBadge icon="✨" label="Features" />
            <h2 className="text-[40px] md:text-[48px] font-semibold text-[#020a0f] leading-tight">
              Everything you need to<br />grow, in one place
            </h2>
            <p className="text-[16px] text-gray-500 max-w-[520px] leading-relaxed mt-4">
              Our platform is designed with simplicity in mind, ensuring that even the least tech-savvy users can navigate effortlessly.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-1 text-[14px] font-medium text-[#020a0f] border border-gray-200 rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors mt-6 md:mt-0">
            Learn more <ChevronRight size={14} />
          </a>
        </div>

        {/* Dashboard Preview Image (simplified) */}
        <div className="bg-gray-50 rounded-2xl p-4 overflow-hidden">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transform perspective-1000 rotateX-2">
            <div className="flex min-h-[360px]">
              {/* Mini Sidebar */}
              <div className="w-[160px] border-r border-gray-100 p-3 shrink-0">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded bg-green-500 text-white text-[8px] flex items-center justify-center font-bold">A</div>
                  <div className="text-[11px] font-medium">Acme</div>
                </div>
                {["Dashboard", "Calendar", "Analytics", "Finance", "Customers"].map((item, i) => (
                  <div key={item} className={`text-[11px] px-2 py-1.5 rounded mb-0.5 ${i === 0 ? "bg-gray-50 font-medium" : "text-gray-400"}`}>{item}</div>
                ))}
                <div className="mt-3 text-[9px] text-gray-300 uppercase font-medium px-2">Favorites</div>
                {["Design System", "Marketing Team", "Presentation"].map((item) => (
                  <div key={item} className="text-[11px] text-gray-400 px-2 py-1">{item}</div>
                ))}
              </div>
              {/* Main Area */}
              <div className="flex-1 p-4">
                <div className="text-[14px] font-semibold mb-1">Dashboard</div>
                <div className="text-[10px] text-gray-400 mb-3">Effortlessly manage your business</div>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[
                    { label: "Revenue", value: "$50,974", change: "+25.2%" },
                    { label: "Expenses", value: "$7,620", change: "+19.8%" },
                    { label: "Customers", value: "1,218", change: "-12.4%" },
                    { label: "Projects", value: "125", change: "+7.8%" },
                  ].map((stat) => (
                    <div key={stat.label} className="border border-gray-100 rounded-lg p-2">
                      <div className="text-[9px] text-gray-400">{stat.label}</div>
                      <div className="text-[13px] font-semibold">{stat.value}</div>
                      <div className={`text-[8px] ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>{stat.change}</div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-gray-100 rounded-lg p-2">
                    <div className="text-[10px] font-medium mb-1">📊 Analytics</div>
                    <div className="flex items-end gap-1 h-[60px]">
                      {[15, 25, 35, 50, 30, 20, 35].map((h, i) => (
                        <div key={i} className={`flex-1 rounded-t ${i === 3 ? "bg-green-500" : "bg-gray-100"}`} style={{ height: `${h}px` }}/>
                      ))}
                    </div>
                  </div>
                  <div className="border border-gray-100 rounded-lg p-2">
                    <div className="text-[10px] font-medium mb-1">📅 Calendar</div>
                    {["Creative Session with James", "Collaboration Meeting with Lisa", "Project Kickoff with Alex"].map((event) => (
                      <div key={event} className="text-[8px] text-gray-500 py-0.5 truncate">{event}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature icons row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {[
            { icon: "📅", title: "Meaningful calendar", desc: "Create, modify, and share events with ease." },
            { icon: "📊", title: "Insightful analytics", desc: "Track key performance indicators, generate reports." },
            { icon: "🔗", title: "Seamless integration", desc: "Keep everything connected without any limits." },
            { icon: "📋", title: "Effortless boards", desc: "Visual way to organize and track your tasks and projects." },
          ].map((feature) => (
            <div key={feature.title} className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
                <span>{feature.icon}</span>
                <span className="text-[14px] font-semibold text-[#020a0f]">{feature.title}</span>
              </div>
              <p className="text-[13px] text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
