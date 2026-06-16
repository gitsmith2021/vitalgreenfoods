import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { fadeUp, stagger } from "@/utils/animations";
import { ArrowRight, ChevronDown, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const CAROUSEL_IMAGES = [
  {
    src: "/assets/hero-carousel-1.dim_900x600.webp",
    alt: "Indian organic farm fields",
  },
  {
    src: "/assets/hero-carousel-2.dim_900x600.webp",
    alt: "Fresh organic produce",
  },
  {
    src: "/assets/hero-carousel-3.dim_900x600.webp",
    alt: "Freeze-dried products in jars",
  },
  {
    src: "/assets/hero-carousel-4.dim_900x600.webp",
    alt: "Microgreens growing facility",
  },
];

export function HeroSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleContactScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (api) api.scrollNext();
    }, 3500);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [api, startAutoPlay]);

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row pt-16">
      {/* Left: Text Content */}
      <div className="flex-1 md:w-[55%] flex items-center justify-center bg-white px-8 md:px-16 py-16 md:py-0 order-2 md:order-1">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col gap-8 max-w-xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-light/60 border border-green-mid/30 text-green-deep text-sm font-medium">
              <Leaf size={14} className="text-green-deep" />
              Natural Farming • Premium Quality • Global Markets
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-[1.1]"
          >
            Pure Organic Food <span className="text-green-deep">Exports</span>{" "}
            to the World.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
            Premium natural farm-fresh fruits, vegetables, and functional food
            products — from India&apos;s finest farms to global markets with
            integrity and traceability.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-semibold px-10 h-14 text-base shadow-lg shadow-amber-900/20 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
              onClick={handleContactScroll}
              data-ocid="hero.primary_button"
            >
              Send an Enquiry
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const el = document.querySelector("#products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-gray-300 text-gray-700 hover:border-green-deep hover:text-green-deep h-14 px-10 text-base transition-all duration-200"
              data-ocid="hero.products.link"
            >
              View Our Products
              <ChevronDown size={16} className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right: Image Carousel Panel */}
      <div className="md:w-[45%] h-[55vh] md:h-auto order-1 md:order-2 flex-shrink-0 flex items-center justify-center bg-white p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-lg"
        >
          {/* Card frame */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 overflow-hidden">
            <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {CAROUSEL_IMAGES.map((img) => (
                  <CarouselItem key={img.src}>
                    <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-3 pb-1">
              {CAROUSEL_IMAGES.map((img, idx) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => api?.scrollTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === idx
                      ? "w-6 bg-green-deep"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
