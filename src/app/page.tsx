"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Collaboration from "@/components/Collaboration";
import CalendarSection from "@/components/CalendarSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import Scenario from "@/components/Scenario";
import EverythingSection from "@/components/EverythingSection";
import ExploreFeatures from "@/components/ExploreFeatures";
import WorkflowForward from "@/components/WorkflowForward";
import Integrations from "@/components/Integrations";
import MobileApp from "@/components/MobileApp";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AnimateOnScroll>
        <LogoBar />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Collaboration />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CalendarSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <AnalyticsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FeaturesGrid />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Scenario />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <EverythingSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ExploreFeatures />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <WorkflowForward />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Integrations />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <MobileApp />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Testimonials />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <Blog />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FAQ />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CTA />
      </AnimateOnScroll>
      <Footer />
    </main>
  );
}
