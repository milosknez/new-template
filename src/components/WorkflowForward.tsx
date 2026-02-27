"use client";
import SectionBadge from "./SectionBadge";

export default function WorkflowForward() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <SectionBadge icon="✨" label="Features" />
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[#020a0f] leading-tight mb-4">
            Designed to drive your<br />workflow forward
          </h2>
          <p className="text-[16px] text-gray-500 max-w-[520px] mx-auto leading-relaxed">
            Explore features crafted with precision to help you stay ahead, maximizing productivity every step of the way.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Analytics Card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-sm">📊</span>
                <span className="text-[13px] font-medium">Analytics</span>
              </div>
              <span className="text-gray-300">•••</span>
            </div>
            <div className="flex items-end gap-2 h-[120px]">
              {[25, 15, 35, 28, 70, 40, 30, 45, 35].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  {i === 4 && <div className="bg-[#020a0f] text-white text-[8px] px-1 py-0.5 rounded mb-1">$19,740</div>}
                  <div className={`w-full rounded-t ${i === 4 ? "bg-green-500" : "bg-gray-100"}`} style={{ height: `${h * 1.5}px` }}/>
                </div>
              ))}
            </div>
          </div>

          {/* Task Card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
              <div className="flex-1">
                <div className="text-[13px] font-medium">Launch new website design</div>
                <div className="text-[11px] text-gray-400">Development</div>
              </div>
              <span className="text-gray-300">•••</span>
            </div>
            <p className="text-[12px] text-gray-500 mb-3">Revise the website design to align with the new branding guidelines.</p>
            <div className="flex items-center justify-between text-[11px] text-gray-400 mb-3">
              <span>📅 2 days left</span>
              <span>🔄 in progress</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-gray-500">Progress</span>
              <span className="text-[11px] font-medium">72%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full mt-1">
              <div className="w-[72%] h-full bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Calendar + Donut stack */}
          <div className="space-y-4">
            {/* Mini Calendar */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-3 mb-3 p-2 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-[9px] text-red-500 font-medium">NOV</div>
                  <div className="text-[16px] font-semibold">22</div>
                </div>
                <div className="border-l-2 border-orange-400 pl-3 flex-1">
                  <div className="text-[12px] font-medium">Meeting with the team</div>
                  <div className="text-[10px] text-gray-400">6:00 PM - 7:00 PM</div>
                </div>
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 rounded-full bg-orange-400 border border-white"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-500 border border-white"></div>
                  <div className="w-5 h-5 rounded-full bg-green-500 border border-white"></div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="text-[11px] text-gray-500">Live event</span>
                </div>
                <span className="text-[10px] text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">✦ Going</span>
              </div>
              <div className="mb-3">
                <div className="text-[12px] font-semibold mb-0.5">Meeting notes</div>
                <p className="text-[10px] text-gray-500">Marketing materials are finalized and will be shared with the team for feedback by Friday.</p>
              </div>
              <button className="w-full py-1.5 border border-gray-200 rounded-lg text-[11px] font-medium hover:bg-gray-50 flex items-center justify-center gap-1">📹 Join the call</button>
            </div>

            {/* Donut */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex justify-center">
                  <div className="relative w-[80px] h-[80px]">
                    <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                      <circle cx="40" cy="40" r="32" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                      <circle cx="40" cy="40" r="32" fill="none" stroke="#8b5cf6" strokeWidth="8" strokeDasharray="150" strokeDashoffset="42"/>
                      <circle cx="40" cy="40" r="32" fill="none" stroke="#f97316" strokeWidth="8" strokeDasharray="150" strokeDashoffset="120"/>
                      <circle cx="40" cy="40" r="32" fill="none" stroke="#22c55e" strokeWidth="8" strokeDasharray="150" strokeDashoffset="135"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-[14px] font-semibold">1,248</div>
                        <div className="text-[8px] text-gray-400">Total</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="text-gray-300">⚙</button>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Marketing</div>
                  <div className="flex items-center gap-1.5"><span className="font-medium">72%</span><span className="text-green-500">↗+10.8%</span></div>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-400"></span>Organic search</div>
                  <div className="flex items-center gap-1.5"><span className="font-medium">28%</span><span className="text-red-500">↘-12.4%</span></div>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500"></span>Direct traffic</div>
                  <div className="flex items-center gap-1.5"><span className="font-medium">16%</span><span className="text-green-500">↗+14.5%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {/* Revenue + Customers */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm">💰</span>
                <span className="text-[12px] font-medium">Revenue</span>
                <span className="ml-auto text-gray-300 text-xs">×</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[18px] font-semibold">$50,974</span>
                <span className="text-[10px] text-green-500">↗+25.2%</span>
              </div>
              <svg width="100%" height="30" viewBox="0 0 150 30" fill="none" className="mt-2">
                <path d="M0,20 Q15,18 30,22 T60,15 T90,18 T120,10 T150,14" stroke="#22c55e" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm">👥</span>
                <span className="text-[12px] font-medium">Customers</span>
                <span className="ml-auto text-gray-300 text-xs">×</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[18px] font-semibold">1,218</span>
                <span className="text-[10px] text-red-500">↘-12.4%</span>
              </div>
              <svg width="100%" height="30" viewBox="0 0 150 30" fill="none" className="mt-2">
                <path d="M0,10 Q15,12 30,15 T60,20 T90,18 T120,25 T150,22" stroke="#ef4444" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Integrations list */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 text-gray-400 text-[12px] flex-1">
                🔍 Search
              </div>
              <button className="text-gray-300">⊟</button>
            </div>
            <div className="space-y-2.5">
              {[
                { name: "Springfield", domain: "springfield.com", color: "bg-yellow-500" },
                { name: "Luminous", domain: "luminous.com", color: "bg-green-500" },
                { name: "Cloud", domain: "cloud.com", color: "bg-blue-500" },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded ${item.color} text-white text-[8px] flex items-center justify-center font-bold`}>{item.name[0]}</div>
                    <div>
                      <div className="text-[12px] font-medium">{item.name}</div>
                      <div className="text-[10px] text-gray-400">{item.domain}</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-green-600 font-medium">• Connected</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-3 pt-2 border-t border-gray-100 text-[11px] text-gray-400">
              <span>+</span> Add integration <span className="ml-auto">⚙</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
