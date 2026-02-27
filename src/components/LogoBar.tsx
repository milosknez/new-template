"use client";

const logos = [
  { name: "Springfield", icon: "🏛" },
  { name: "Orbitc", icon: "🌐" },
  { name: "Cloud", icon: "☁" },
  { name: "Proline", icon: "⚡" },
  { name: "Amsterdam", icon: "🔷" },
  { name: "Luminous", icon: "✨" },
];

export default function LogoBar() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-[14px] font-semibold text-[#020a0f] mb-8">Trusted by the world leaders</p>
        <div className="flex items-center justify-center gap-10 flex-wrap">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2 text-gray-400 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-lg">{logo.icon}</span>
              <span className="text-[15px] font-semibold">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
