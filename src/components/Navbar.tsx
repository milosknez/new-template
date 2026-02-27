"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[64px]">
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="14" fill="#020a0f"/>
            <path d="M8 10c2-3 5-4 8-2s4 5 2 8-5 4-8 2" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M10 14c1-2 3-3 5-1.5s2.5 3.5 1 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
          <span className="text-[17px] font-semibold text-[#020a0f]">Superior</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="relative">
            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              className="flex items-center gap-1 text-[14px] text-gray-600 hover:text-[#020a0f] transition-colors"
            >
              Pages <ChevronDown size={14} />
            </button>
            {pagesOpen && (
              <div className="absolute top-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 w-48">
                {["Home", "About", "Pricing", "Blog", "Contact"].map((item) => (
                  <a key={item} href="#" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#020a0f]">
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#" className="text-[14px] text-gray-600 hover:text-[#020a0f] transition-colors">About</a>
          <a href="#" className="text-[14px] text-gray-600 hover:text-[#020a0f] transition-colors">Pricing</a>
          <a href="#" className="text-[14px] text-gray-600 hover:text-[#020a0f] transition-colors">Integrations</a>
          <a href="#" className="text-[14px] text-gray-600 hover:text-[#020a0f] transition-colors">Blog</a>
        </div>

        <a href="#" className="hidden md:flex items-center gap-1 text-[14px] font-medium text-[#020a0f] border border-gray-200 rounded-full px-5 py-2 hover:bg-gray-50 transition-colors">
          Book a demo <ChevronRight size={14} />
        </a>
      </div>
    </nav>
  );
}
