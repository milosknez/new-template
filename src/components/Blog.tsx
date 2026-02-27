"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import SectionBadge from "./SectionBadge";

const posts = [
  {
    category: "Stories",
    categoryColor: "text-green-600",
    title: "Code collaboration and best practices for seamless teamwork",
    date: "Jan 9, 2025",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=400&fit=crop",
  },
  {
    category: "Business",
    categoryColor: "text-blue-600",
    title: "Tips for optimizing your platform's performance and speed",
    date: "Jan 8, 2025",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=600&h=400&fit=crop",
  },
  {
    category: "Insights",
    categoryColor: "text-orange-600",
    title: "Building brand loyalty through exceptional customer support",
    date: "Jan 7, 2025",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&h=400&fit=crop",
  },
];

export default function Blog() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <SectionBadge icon="📚" label="Resources" />
          <h2 className="text-[40px] md:text-[48px] font-semibold text-[#020a0f] leading-tight mb-4">
            The latest insights
          </h2>
          <p className="text-[16px] text-gray-500 max-w-[520px] mx-auto leading-relaxed">
            Explore a curated collection of guides, tools, and insights designed to help you get the most out of our products and services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <a key={post.title} href="#" className="group">
              <div className="rounded-2xl h-[240px] mb-4 overflow-hidden relative">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className={`text-[13px] font-medium ${post.categoryColor} mb-2`}>{post.category}</div>
              <h3 className="text-[17px] font-semibold text-[#020a0f] leading-snug mb-2 group-hover:underline">{post.title}</h3>
              <p className="text-[13px] text-gray-400">{post.date}</p>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center gap-1 text-[14px] font-medium text-[#020a0f] border border-gray-200 rounded-full px-5 py-2.5 hover:bg-gray-50 transition-colors">
            Explore resources <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
