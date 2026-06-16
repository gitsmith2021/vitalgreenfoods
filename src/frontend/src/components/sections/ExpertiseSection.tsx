import { EXPERTISE } from "@/data/constants";
import { fadeUp, stagger } from "@/utils/animations";
import { motion } from "motion/react";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-pad bg-cream-dark/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold tracking-widest text-gold-warm uppercase mb-3"
          >
            Core Expertise
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4"
          >
            What We Do{" "}
            <span className="gold-underline text-green-deep">Best</span>
          </motion.h2>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {EXPERTISE.map((item, idx) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={idx}
              className="bg-card rounded-xl border border-border p-6 shadow-xs hover:shadow-md transition-shadow duration-200"
              data-ocid={`expertise.item.${idx + 1}`}
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
      </div>
    </section>
  );
}
