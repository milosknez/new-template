"use client";
import { ChevronRight } from "lucide-react";
import SectionBadge from "./SectionBadge";

function IntegrationIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:shadow-md hover:border-gray-200 transition-all cursor-pointer">
      {children}
    </div>
  );
}

export default function Integrations() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionBadge icon="🔗" label="Integrations" />
            <h2 className="text-[40px] md:text-[48px] font-semibold text-[#020a0f] leading-tight mb-5">
              Integrates with your favorite tools
            </h2>
            <p className="text-[16px] text-gray-500 leading-relaxed mb-6">
              Enhance productivity, streamline processes, and keep everything connected without disrupting.
            </p>
            <a href="#" className="inline-flex items-center gap-1 text-[14px] font-medium text-[#020a0f] border border-gray-200 rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors">
              Explore integrations <ChevronRight size={14} />
            </a>
          </div>

          {/* Icon Grid - staggered layout like original */}
          <div className="grid grid-cols-4 gap-y-4 gap-x-3">
            {/* Row 1 - offset */}
            <div className="col-start-2">
              <IntegrationIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3v18M3 12h18" stroke="#7c5cbf" strokeWidth="2.5" strokeLinecap="round"/></svg>
              </IntegrationIcon>
            </div>

            {/* Row 2 */}
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 8l8-4 8 4-8 4-8-4z" fill="#9ca3af"/><path d="M4 12l8 4 8-4" stroke="#9ca3af" strokeWidth="1.5" fill="none"/><path d="M4 16l8 4 8-4" stroke="#9ca3af" strokeWidth="1.5" fill="none"/></svg>
            </IntegrationIcon>
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="#c8a951" strokeWidth="2"/><circle cx="12" cy="12" r="8" stroke="#c8a951" strokeWidth="1.5" strokeDasharray="4 3"/></svg>
            </IntegrationIcon>
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 5h4v14H7z" fill="#8b5cf6"/><path d="M13 9h4v10h-4z" fill="#a78bfa"/></svg>
            </IntegrationIcon>
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><text x="6" y="18" fontSize="16" fontWeight="700" fontFamily="serif" fill="#333">h</text></svg>
            </IntegrationIcon>

            {/* Row 3 */}
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#4353ff" strokeWidth="2"/><text x="8" y="16" fontSize="11" fontWeight="600" fill="#4353ff">W</text></svg>
            </IntegrationIcon>
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6l-12 12" stroke="#333" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </IntegrationIcon>
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 8c0-2 2-4 6-4s6 2 6 4-2 4-6 6c-4-2-6-4-6-6z" fill="#333"/><path d="M6 14c0 2 2 4 6 6 4-2 6-4 6-6" stroke="#333" strokeWidth="1.5" fill="none"/></svg>
            </IntegrationIcon>
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 8l4-4 4 4 4-4 4 4" stroke="#4a90d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 14l4-4 4 4 4-4 4 4" stroke="#4a90d9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </IntegrationIcon>

            {/* Row 4 */}
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 18L12 6l8 12H4z" fill="#7ab648" fillOpacity="0.8"/><path d="M8 18L12 10l4 8H8z" fill="#5a8f30"/></svg>
            </IntegrationIcon>
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4v16M4 12h16" stroke="#15c39a" strokeWidth="2.5" strokeLinecap="round"/><path d="M7 7l10 10M17 7l-10 10" stroke="#15c39a" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </IntegrationIcon>
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#18bfff" strokeWidth="2.5" strokeLinecap="round"/><circle cx="12" cy="16" r="2" fill="#18bfff"/></svg>
            </IntegrationIcon>
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4v8l6 4" stroke="#333" strokeWidth="2" strokeLinecap="round"/><path d="M12 4v8l-6 4" stroke="#999" strokeWidth="2" strokeLinecap="round"/></svg>
            </IntegrationIcon>

            {/* Row 5 */}
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="12" r="4" stroke="#e4405f" strokeWidth="1.5" fill="none"/><circle cx="16" cy="12" r="4" stroke="#e4405f" strokeWidth="1.5" fill="none"/></svg>
            </IntegrationIcon>
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#7cb9a0" strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="4" stroke="#7cb9a0" strokeWidth="1.5" fill="none" strokeDasharray="3 2"/></svg>
            </IntegrationIcon>
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="6" y="6" width="12" height="12" rx="2" stroke="#999" strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="3" stroke="#999" strokeWidth="1.5" fill="none"/><circle cx="16" cy="8" r="1" fill="#999"/></svg>
            </IntegrationIcon>
            <IntegrationIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12l4-8 4 8-4 8-4-8z" fill="#5e6ad2" fillOpacity="0.6"/><path d="M14 12l4-8v16l-4-8z" fill="#5e6ad2"/></svg>
            </IntegrationIcon>
          </div>
        </div>
      </div>
    </section>
  );
}
