import { Button } from "@/components/ui/button";
import { WHY_US } from "@/data/constants";
import { fadeUp, stagger } from "@/utils/animations";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function WhyUsSection() {
  return (
    <section id="why-us" className="section-pad relative overflow-hidden">
      {/* Background image accent (bleed left) */}
      <div className="absolute inset-y-0 right-0 w-1/3 lg:w-2/5 hidden lg:block pointer-events-none">
        <img
          src="/assets/products-collage.dim_800x500.webp"
          alt="Organic spices collage"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold tracking-widest text-gold-warm uppercase mb-3"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-semibold text-foreground max-w-xl"
          >
            Built on{" "}
            <span className="gold-underline text-green-deep">Trust</span>,{" "}
            Quality &amp; Sustainability
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-5xl"
        >
          {WHY_US.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={idx}
              className="why-card bg-card rounded-xl border border-border p-6 shadow-xs"
              data-ocid={`why.item.${idx + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center mb-5">
                <item.icon size={22} className="text-green-deep" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-green-deep to-green-mid text-white flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl shadow-card"
        >
          <div>
            <h3 className="font-display text-2xl font-semibold mb-1">
              Ready to source premium natural products?
            </h3>
            <p className="text-white/75 text-sm">
              Our team responds to all import and wholesale enquiries within 24
              hours.
            </p>
          </div>
          <Button
            size="lg"
            className="flex-shrink-0 bg-amber-400 hover:bg-amber-300 text-amber-950 font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            data-ocid="why.contact.primary_button"
          >
            Start an Enquiry
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
