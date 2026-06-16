import { fadeUp, stagger } from "@/utils/animations";
import { Globe, Heart } from "lucide-react";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold tracking-widest text-gold-warm uppercase mb-4"
            >
              About Us
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight"
            >
              India&apos;s Natural{" "}
              <span className="gold-underline text-green-deep">Heritage</span>,
              <br />
              Shared with the World
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              <strong className="text-foreground">
                Vital Green Food (VGF) Private Limited
              </strong>{" "}
              is a natural agriculture company headquartered in Chennai, with
              advanced processing units in Tiruchirappalli (Trichy), Tamil Nadu.
              We specialize in farming, cultivation, processing, and value
              addition of premium farm-fresh fruits, high-grade vegetables,
              grocery products, functional foods, and nutraceuticals.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-base leading-relaxed mb-10"
            >
              Our mission is to bridge the gap between traditional superfoods
              and modern health-conscious consumers — delivering high-quality,
              natural, eco-friendly products while empowering local farming
              communities across India.
            </motion.p>

            {/* Value pillars */}
            <motion.div
              variants={stagger}
              className="flex flex-col sm:flex-row gap-4"
            >
              {[
                { icon: "🌿", label: "Natural & Sustainable" },
                { icon: "🌏", label: "Global Markets" },
                { icon: "🔍", label: "Farm to Market Traceability" },
              ].map((pillar) => (
                <motion.div
                  key={pillar.label}
                  variants={fadeUp}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary border border-border"
                >
                  <span className="text-xl">{pillar.icon}</span>
                  <span className="text-sm font-semibold text-foreground">
                    {pillar.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative background card */}
            <div className="absolute -top-6 -right-6 w-full h-full rounded-2xl bg-green-light/40 border border-border" />
            {/* Main panel */}
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <div className="bg-gradient-to-br from-green-deep to-green-mid p-8 md:p-10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: "Chennai", label: "Headquarters" },
                    { n: "Trichy", label: "Processing Unit" },
                    { n: "6+", label: "Core Expertise Areas" },
                    { n: "100%", label: "Natural Sourcing" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white/10 rounded-xl p-5 text-center border border-white/10"
                    >
                      <div className="font-display text-2xl font-bold text-amber-300 mb-1">
                        {item.n}
                      </div>
                      <div className="text-white/70 text-xs font-medium">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white/80 text-sm italic font-display leading-relaxed">
                    &ldquo;We believe natural farming is not just a practice —
                    it is a responsibility to the land, the farmer, and the
                    consumer.&rdquo;
                  </p>
                  <p className="text-amber-300 text-sm font-semibold mt-2">
                    — Vital Green Food (VGF)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-20 grid md:grid-cols-2 gap-6"
        >
          {/* Vision */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-gradient-to-br from-green-deep/10 to-green-mid/5 border border-green-mid/20 p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center">
                <Globe size={20} className="text-green-deep" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Our Vision
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To become a globally recognized natural food and agricultural
              enterprise that promotes sustainable farming and healthy living.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl bg-gradient-to-br from-gold-warm/10 to-amber-500/5 border border-gold-warm/20 p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <Heart size={20} className="text-amber-700" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Our Mission
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To bridge the gap between traditional superfoods and modern
              health-conscious consumers by offering high-quality, natural, and
              eco-friendly products while empowering local farming communities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
