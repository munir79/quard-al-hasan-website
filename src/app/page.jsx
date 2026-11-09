import InteractiveOrbsBackground from "@/components/flairs/InteractiveOrbsBackground";
import FlairsHero from "@/components/flairs/FlairsHero";
import WorkflowsCarousel from "@/components/flairs/WorkflowsCarousel";
import AiInnovationSection from "@/components/flairs/AiInnovationSection";
import GlobalDeliveryMap from "@/components/flairs/GlobalDeliveryMap";
import ImpactMetricsFlairs from "@/components/flairs/ImpactMetricsFlairs";
import DeliveryFramework from "@/components/flairs/DeliveryFramework";
import TestimonialsFlairs from "@/components/flairs/TestimonialsFlairs";
import ConversionCtaFlairs from "@/components/flairs/ConversionCtaFlairs";

export const metadata = {
  title: "Qardh Al Hasan Fintech Sdn. Bhd. | Scale Smart Your Systems",
  description:
    "Scale Smart Your Systems. Succeed with AI-Powered Technology & FinTech Innovation from one accountable partner you trust in Kuala Lumpur, Malaysia.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#07080E]">
      {/* 1. FlairsTech Hero Section (Background Video & Atmospheric Glow) */}
      <div className="relative w-full overflow-hidden bg-[#08080C]">
        <InteractiveOrbsBackground />
        <FlairsHero />
      </div>

      {/* 2. Cyber Glassmorphic Workflows & Ecosystem Section (Exact Reference Design) */}
      <WorkflowsCarousel />

      {/* 3. FlairsTech Third Section: Global Delivery Local Feel Dotted Map */}
      <GlobalDeliveryMap />

      {/* 4. FlairsTech Fourth Section: AI Innovation Showcase (AIMY Showcase) */}
      <AiInnovationSection />

      {/* 5. FlairsTech Fifth Section: Measurable Impact & Metrics */}
      <ImpactMetricsFlairs />

      {/* 6. FlairsTech Delivery Framework (3 Phases) */}
      <DeliveryFramework />

      {/* 7. Client Testimonials */}
      <TestimonialsFlairs />

      {/* 8. Conversion Closing CTA */}
      <ConversionCtaFlairs />
    </div>
  );
}
