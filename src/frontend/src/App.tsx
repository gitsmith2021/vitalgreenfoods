import { AboutSection } from "@/components/sections/AboutSection";
import { AdminPanel } from "@/components/sections/AdminPanel";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { Footer } from "@/components/sections/Footer";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { Navbar } from "@/components/sections/Navbar";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Vital Green Food | Premium Organic Food Exports</title>
        <meta
          name="description"
          content="Premium natural farm-fresh fruits, vegetables, and functional food products — from India's finest farms to global markets."
        />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <WhyUsSection />
        <AboutSection />
        <ExpertiseSection />
        <FoundersSection />
        <ContactSection />
      </main>
      <Footer onAdminOpen={() => setShowAdmin(true)} />
      <AnimatePresence>
        {showAdmin && <AdminPanel onClose={() => setShowAdmin(false)} />}
      </AnimatePresence>
    </div>
  );
}
