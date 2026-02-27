"use client";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import DashboardUI from "./DashboardUI";

const words = ["powerful", "intuitive", "reliable"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-[140px] pb-[40px] px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Announcement badge */}
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-[13px]">
              <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">New</span>
              <span className="text-gray-600">Announcing API 2.0</span>
            </div>
          </div>

          <h1 className="text-[56px] md:text-[64px] font-semibold leading-[1.1] tracking-tight text-[#020a0f] mb-5">
            The most{" "}
            <span
              className={`inline-block transition-all duration-300 ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ color: "#9ca3af" }}
            >
              {words[wordIndex]}
            </span>
            <br />
            business platform.
          </h1>
          <p className="text-[17px] text-gray-500 max-w-[580px] mx-auto mb-8 leading-relaxed">
            Unlock the potential of your business with our next-level SaaS platform. Transform your workflows and achieve new heights today.
          </p>
          <div className="flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-1.5 bg-[#020a0f] text-white text-[14px] font-medium px-6 py-3 rounded-full hover:bg-[#1a2530] transition-colors">
              Get started <ChevronRight size={14} />
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#020a0f] border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
              Learn more <ChevronRight size={14} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-16 relative"
        >
          <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_8px_60px_rgba(0,0,0,0.06)] overflow-hidden">
            <DashboardUI />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
