import { FOUNDERS } from "@/data/constants";
import { fadeUp, stagger } from "@/utils/animations";
import { ArrowRight, Download, FileText, Users } from "lucide-react";
import { motion } from "motion/react";

export function FoundersSection() {
  return (
    <section id="founders" className="section-pad bg-cream-dark/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mb-14 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold tracking-widest text-gold-warm uppercase mb-3"
          >
            Leadership
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-semibold text-foreground"
          >
            Meet Our{" "}
            <span className="gold-underline text-green-deep">Founders</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-muted-foreground text-base max-w-xl mx-auto"
          >
            The people behind Vital Green Food — driven by a passion for nature,
            quality, and lasting impact.
          </motion.p>
        </motion.div>

        {/* Founder cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="flex flex-col gap-10 max-w-6xl mx-auto"
        >
          {FOUNDERS.map((founder, idx) => (
            <motion.div
              key={founder.title}
              variants={fadeUp}
              custom={idx}
              className="bg-card border border-border rounded-3xl p-8 shadow-xs flex flex-col md:flex-row gap-8 lg:gap-12"
              data-ocid={`founders.item.${idx + 1}`}
            >
              {/* Left Column: Avatar & Name */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/3 lg:w-1/4 flex-shrink-0 gap-5">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-green-light flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm border border-border/50">
                  {"image" in founder && typeof founder.image === "string" ? (
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    /* Photo Placeholder */
                    <Users size={48} className="text-green-deep/30" />
                  )}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {founder.name}
                  </h3>
                  <p className="text-[13px] text-gold-warm font-medium uppercase tracking-widest mt-1.5">
                    {founder.title}
                  </p>
                </div>
              </div>

              {/* Right Column: Bio, Expertise, CV, Research */}
              <div className="flex flex-col flex-1 pb-2">
                {/* Bio */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Expertise tags & CV Link */}
                <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-2 mt-auto pt-2">
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-green-light text-green-deep border border-green-mid/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {"cvLink" in founder &&
                    typeof founder.cvLink === "string" && (
                      <a
                        href={founder.cvLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-deep text-xs font-semibold rounded-full hover:bg-green-deep hover:text-white transition-all duration-300 border border-green-200 ml-auto"
                      >
                        View Complete CV
                        <Download size={14} />
                      </a>
                    )}
                </div>

                {/* Research Papers */}
                {"researchPapers" in founder &&
                  Array.isArray(founder.researchPapers) &&
                  founder.researchPapers.length > 0 && (
                    <div className="pt-6 mt-4 border-t border-border/60">
                      <p className="text-sm font-semibold text-foreground mb-4">
                        Recognized Research Publications
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {founder.researchPapers.map((paper: any, i: number) => (
                          <a
                            key={i}
                            href={paper.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col p-5 rounded-xl border border-border bg-background hover:border-green-deep hover:shadow-md transition-all duration-300"
                            title={paper.title}
                          >
                            <div className="flex items-start gap-3 mb-2">
                              <div className="w-10 h-10 rounded-full bg-green-50 text-green-deep flex items-center justify-center flex-shrink-0 group-hover:bg-green-deep group-hover:text-white transition-colors duration-300">
                                <FileText size={18} />
                              </div>
                              <h4 className="font-semibold text-sm leading-snug text-foreground pt-0.5 group-hover:text-green-deep transition-colors line-clamp-3">
                                {paper.title}
                              </h4>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 mb-4 leading-relaxed line-clamp-3">
                              {paper.description}
                            </p>
                            <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-green-deep/80 group-hover:text-green-deep">
                              <span>Click to Read More</span>
                              <ArrowRight
                                size={14}
                                className="group-hover:translate-x-1 transition-transform"
                              />
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
