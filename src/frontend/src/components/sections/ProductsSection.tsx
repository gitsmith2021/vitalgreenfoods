import {
  CATEGORY_BADGE_COLORS,
  CATEGORY_GRADIENT_COLORS,
  FREEZE_CATEGORIES,
  PRODUCT_IMAGES,
} from "@/data/constants";
import { fadeUp, stagger } from "@/utils/animations";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type ProductItem = { name: string; categoryId: string; categoryLabel: string };

function ProductCard({
  product,
  categoryId,
  categoryLabel,
  index,
}: {
  product: string;
  categoryId: string;
  categoryLabel: string;
  index: number;
}) {
  const imageSrc = PRODUCT_IMAGES[product];
  const gradientClass = CATEGORY_GRADIENT_COLORS[categoryId];
  const badgeClass = CATEGORY_BADGE_COLORS[categoryId];

  return (
    <motion.div
      variants={fadeUp}
      custom={index % 8}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden flex flex-col"
      data-ocid={`products.item.${index + 1}`}
    >
      {/* Image area */}
      <div
        className={`relative bg-gradient-to-br ${gradientClass} p-4 aspect-[4/3] flex items-center justify-center`}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={product}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-white/60 flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-500">
              {product.charAt(0)}
            </span>
          </div>
        )}
        {/* Category badge top-right */}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${badgeClass}`}
        >
          {categoryLabel.replace("Freeze Dried ", "")}
        </span>
      </div>

      {/* Name */}
      <div className="px-4 py-3">
        <p className="font-semibold text-gray-800 text-sm leading-snug">
          {product}
        </p>
      </div>
    </motion.div>
  );
}

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const tabColors: Record<string, string> = {
    all: "bg-gray-800 text-white border-gray-800",
    vegetables: "bg-green-deep text-white border-green-deep",
    fruits: "bg-amber-500 text-white border-amber-500",
    microgreens: "bg-emerald-600 text-white border-emerald-600",
    "moringa-coconut": "bg-teal-600 text-white border-teal-600",
    "fruit-pulps": "bg-orange-600 text-white border-orange-600",
    spices: "bg-red-600 text-white border-red-600",
  };

  const headingColors: Record<string, string> = {
    vegetables: "text-green-deep",
    fruits: "text-amber-600",
    microgreens: "text-emerald-700",
    "moringa-coconut": "text-teal-700",
    "fruit-pulps": "text-orange-700",
    spices: "text-red-700",
  };

  const allTabs = [
    { id: "all", label: "All Products" },
    ...FREEZE_CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
  ];

  // Build flat list of products for display
  const displayProducts: ProductItem[] =
    activeCategory === "all"
      ? FREEZE_CATEGORIES.flatMap((cat) =>
          cat.products.map((p) => ({
            name: p,
            categoryId: cat.id,
            categoryLabel: cat.label,
          })),
        )
      : (
          FREEZE_CATEGORIES.find((c) => c.id === activeCategory)?.products ?? []
        ).map((p) => ({
          name: p,
          categoryId: activeCategory,
          categoryLabel:
            FREEZE_CATEGORIES.find((c) => c.id === activeCategory)?.label ?? "",
        }));

  const activeCategoryData =
    activeCategory !== "all"
      ? FREEZE_CATEGORIES.find((c) => c.id === activeCategory)
      : null;

  return (
    <section id="products" className="section-pad bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold tracking-widest text-gold-warm uppercase mb-3"
          >
            Our Products
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4"
          >
            Our Freeze-Dried <span className="heading-gradient">Products</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Premium freeze-dried produce sourced from India&apos;s finest farms
            — lock in natural colour, taste, and nutrition for global markets.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {allTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === tab.id
                  ? tabColors[tab.id]
                  : "bg-card text-foreground border-border hover:border-green-mid hover:text-green-deep"
              }`}
              data-ocid={`products.${tab.id}.tab`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Category description (only when specific category active) */}
        <AnimatePresence mode="wait">
          {activeCategoryData && (
            <motion.div
              key={`desc-${activeCategory}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <h3
                className={`font-display text-2xl md:text-3xl font-semibold mb-2 ${
                  headingColors[activeCategory]
                }`}
              >
                {activeCategoryData.label}
              </h3>
              <p className="text-muted-foreground text-base max-w-3xl leading-relaxed">
                {activeCategoryData.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {displayProducts.map((product, idx) => (
              <ProductCard
                key={`${product.categoryId}-${product.name}`}
                product={product.name}
                categoryId={product.categoryId}
                categoryLabel={product.categoryLabel}
                index={idx}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
