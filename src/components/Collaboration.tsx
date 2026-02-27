"use client";
import { ChevronRight } from "lucide-react";
import SectionBadge from "./SectionBadge";

export default function Collaboration() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <SectionBadge icon="👥" label="Seamless collaboration" />
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[#020a0f] leading-tight mb-4">
            Powering teamwork to<br />simplify workflows
          </h2>
          <p className="text-[16px] text-gray-500 max-w-[520px] mx-auto leading-relaxed">
            Say goodbye to version chaos and embrace a smoother workflow designed to help your team achieve more, together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: Invite members */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 h-[280px] flex items-center justify-center mb-5">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 w-full max-w-[260px]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">👥</span>
                    <div>
                      <div className="text-[13px] font-medium text-[#020a0f]">Collaboration</div>
                      <div className="text-[11px] text-gray-400">Invite members</div>
                    </div>
                  </div>
                  <div className="w-10 h-5 bg-green-500 rounded-full relative">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center font-medium">DM</div>
                      <div>
                        <div className="text-[12px] font-medium">David Mitchell</div>
                        <div className="text-[10px] text-gray-400">heydavid@gmail.com</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">Owner ▾</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-orange-400 text-white text-[10px] flex items-center justify-center font-medium">TW</div>
                      <div>
                        <div className="text-[12px] font-medium">Tim Williams</div>
                        <div className="text-[10px] text-gray-400">timwill@gmail.com</div>
                      </div>
                    </div>
                    <span className="text-[10px] text-green-600 font-medium">Accepted</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-[18px] font-semibold text-[#020a0f] mb-2">Invite members</h3>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-3">Share, edit, and manage projects in real-time, ensuring everyone stays aligned and productive.</p>
            <a href="#" className="inline-flex items-center gap-1 text-[14px] font-medium text-[#020a0f] hover:underline">Learn more <ChevronRight size={14} /></a>
          </div>

          {/* Card 2: Edit together */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 h-[280px] flex items-center justify-center mb-5">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 w-full max-w-[220px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">📄</div>
                  <div>
                    <div className="text-[12px] font-medium">Presentation |</div>
                    <div className="text-[10px] text-gray-400">Showcasing our market opportuni...</div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white text-[8px] flex items-center justify-center font-medium absolute-ish ml-auto">Kate</div>
                </div>
                <div className="flex items-center gap-2 mb-2 text-[11px] text-gray-400">
                  <span>📎 report.pdf</span>
                  <span>🔄 in progress</span>
                </div>
                <div className="flex gap-1 mt-2">
                  <span className="w-6 h-6 rounded-full bg-green-500 text-white text-[8px] flex items-center justify-center font-medium">David</span>
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-white text-[8px] flex items-center justify-center font-medium">Mike</span>
                </div>
              </div>
            </div>
            <h3 className="text-[18px] font-semibold text-[#020a0f] mb-2">Edit together</h3>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-3">Work smarter with collaborative editing tools that keep everyone on the same page.</p>
            <a href="#" className="inline-flex items-center gap-1 text-[14px] font-medium text-[#020a0f] hover:underline">Learn more <ChevronRight size={14} /></a>
          </div>

          {/* Card 3: Instant feedback */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8 h-[280px] flex items-center justify-center mb-5">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 w-full max-w-[240px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center font-medium">KA</div>
                  <div>
                    <span className="text-[12px] font-medium">Kate Adams</span>
                    <span className="text-[10px] text-gray-400 ml-1">· 5 min ago</span>
                  </div>
                  <span className="ml-auto text-gray-300">•••</span>
                </div>
                <p className="text-[12px] text-gray-600 mb-3">Let&apos;s chat with the team about this and get everyone&apos;s thoughts.</p>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-500 text-[11px]">☁ update.fig</span>
                </div>
                <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
                  <span className="text-[11px] text-gray-400">👍 2</span>
                  <span className="text-[11px] text-gray-400">🚀 5</span>
                  <span className="text-[11px] text-gray-400">😊</span>
                  <span className="ml-auto text-[11px] text-gray-400 flex items-center gap-1">💬 Reply</span>
                </div>
              </div>
            </div>
            <h3 className="text-[18px] font-semibold text-[#020a0f] mb-2">Instant feedback</h3>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-3">Easily share thoughts, ask questions, and provide feedback directly within your files.</p>
            <a href="#" className="inline-flex items-center gap-1 text-[14px] font-medium text-[#020a0f] hover:underline">Learn more <ChevronRight size={14} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
