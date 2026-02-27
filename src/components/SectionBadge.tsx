"use client";

export default function SectionBadge({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-[13px] font-medium text-orange-500 mb-4">
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
