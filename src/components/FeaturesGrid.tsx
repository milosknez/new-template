"use client";
import SectionBadge from "./SectionBadge";

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <SectionBadge icon="✨" label="Features" />
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[#020a0f] leading-tight mb-4">
            Features designed to<br />empower your workflow
          </h2>
          <p className="text-[16px] text-gray-500 max-w-[520px] mx-auto leading-relaxed">
            Stay ahead with tools that prioritize your needs, integrating insights and efficiency into one powerful platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {/* Data insights - large card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 overflow-hidden">
            <div className="bg-gray-50 rounded-xl p-4 mb-5 h-[200px] flex items-end">
              {/* Mini bar chart */}
              <div className="flex items-end gap-2 w-full h-full">
                <div className="flex items-center gap-2 mb-2 absolute-ish">
                  <span className="text-sm">📊</span>
                  <span className="text-[13px] font-medium">Analytics</span>
                  <span className="ml-auto text-gray-300">•••</span>
                </div>
                <div className="flex items-end gap-3 w-full mt-auto">
                  {[30, 20, 45, 35, 90, 50, 40, 55, 45].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      {i === 4 && (
                        <div className="bg-[#020a0f] text-white text-[9px] px-1.5 py-0.5 rounded mb-1 whitespace-nowrap">$19,740</div>
                      )}
                      <div
                        className={`w-full rounded-t ${i === 4 ? "bg-green-500" : "bg-gray-200"}`}
                        style={{ height: `${h}px` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-[18px] font-semibold text-[#020a0f] mb-2">Data insights</h3>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              Make smarter, more informed decisions with powerful and actionable data insights, designed to empower your business with the tools needed to drive growth, efficiency, and success.
            </p>
          </div>

          {/* Collaborate together */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 overflow-hidden">
            <div className="bg-gray-50 rounded-xl p-6 mb-5 h-[200px] flex items-center justify-center relative">
              {/* Avatars with connection lines */}
              <div className="relative w-full h-full">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="absolute top-12 left-8 w-10 h-10 rounded-full bg-orange-200 border-2 border-white shadow-sm flex items-center justify-center text-[12px] font-medium text-orange-800">AB</div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-300 border-2 border-white shadow-sm"></div>
                <div className="absolute top-12 right-8 w-10 h-10 rounded-full bg-yellow-300 border-2 border-white shadow-sm flex items-center justify-center text-[12px]">⭐</div>
                <div className="absolute bottom-8 left-12 w-10 h-10 rounded-full bg-red-200 border-2 border-white shadow-sm"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-purple-300 border-2 border-white shadow-sm"></div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-400 opacity-50"></div>
                <div className="absolute top-2 left-1/3 w-6 h-6 rounded-full bg-yellow-400 opacity-40"></div>
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 160">
                  <line x1="100" y1="60" x2="50" y2="80" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4"/>
                  <line x1="100" y1="60" x2="150" y2="80" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4"/>
                  <line x1="50" y1="80" x2="60" y2="120" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4"/>
                  <line x1="150" y1="80" x2="100" y2="130" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4"/>
                </svg>
              </div>
            </div>
            <h3 className="text-[18px] font-semibold text-[#020a0f] mb-2">Collaborate together</h3>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              Collaborate with your team, share updates instantly, and achieve your goals faster.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {/* App shortcuts */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="bg-gray-50 rounded-xl p-6 mb-5 h-[160px] flex items-center justify-center">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <div className="w-8 h-10 bg-gray-100 rounded border border-gray-200"></div>
                    <div className="w-8 h-10 bg-gray-100 rounded border border-gray-200"></div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <kbd className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-[14px] font-mono shadow-sm">⌘</kbd>
                  <kbd className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-[14px] font-mono shadow-sm">K</kbd>
                </div>
                <div className="text-[12px] text-gray-400 mt-2">Command menu</div>
              </div>
            </div>
            <h3 className="text-[18px] font-semibold text-[#020a0f] mb-2">App shortcuts</h3>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              Save time, boost efficiency, and focus on what truly matters for you.
            </p>
          </div>

          {/* Seamless integrations */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="bg-gray-50 rounded-xl p-6 mb-5 h-[160px] flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Integration icons in a circle */}
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-green-400"></div>
                </div>
                <div className="absolute top-2 left-1/4 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-[12px]">☁</div>
                <div className="absolute bottom-2 left-1/4 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[12px]">⚙</div>
                <div className="absolute top-2 right-1/4 w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-[12px]">⭐</div>
                {/* Dashed circle */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 140">
                  <circle cx="100" cy="70" r="50" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5" />
                </svg>
              </div>
            </div>
            <h3 className="text-[18px] font-semibold text-[#020a0f] mb-2">Seamless integrations</h3>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              Seamlessly connect your favorite apps and platforms with our powerful integrations.
            </p>
          </div>

          {/* Smart widgets */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="bg-gray-50 rounded-xl p-6 mb-5 h-[160px] flex items-center justify-center">
              <div className="bg-white rounded-xl border border-gray-100 p-4 w-full max-w-[180px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm">💰</span>
                  <span className="text-[12px] font-medium">Revenue</span>
                  <span className="ml-auto text-gray-300 text-[10px]">×</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[18px] font-semibold">$50,974</span>
                  <span className="text-[10px] text-green-500">↗+25.2%</span>
                </div>
                <svg width="100%" height="30" viewBox="0 0 150 30" fill="none" className="mt-2">
                  <path d="M0,20 Q15,18 30,22 T60,15 T90,18 T120,10 T150,14" stroke="#22c55e" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
            <h3 className="text-[18px] font-semibold text-[#020a0f] mb-2">Smart widgets</h3>
            <p className="text-[14px] text-gray-500 leading-relaxed">
              Provides real-time data, actionable insights, and key metrics at a glance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
