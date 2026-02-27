"use client";
import { ChevronRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#0a0f14] pt-24 pb-0 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#111820] rounded-3xl px-8 py-20 text-center relative overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-teal-900/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-1/3 right-1/3 w-[250px] h-[250px] bg-slate-600/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10">
            <h2 className="text-[40px] md:text-[48px] font-semibold text-white leading-tight mb-5">
              Start your trial today.
            </h2>
            <p className="text-[16px] text-gray-400 max-w-[520px] mx-auto leading-relaxed mb-8">
              Unlock the potential of your business with our next-level SaaS platform. Transform your workflows and achieve new heights today.
            </p>
            <a href="#" className="inline-flex items-center gap-1.5 bg-white text-[#020a0f] text-[14px] font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Get started <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
