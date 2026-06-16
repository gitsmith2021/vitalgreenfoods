import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/data/constants";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 nav-glass transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent shadow-none"}`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 flex-shrink-0"
          data-ocid="nav.link"
        >
          <img
            src="/assets/vgf-logo-new.svg"
            alt="Vital Green Food (VGF) Private Limited"
            className="h-[2.8rem] w-auto object-contain"
          />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 text-foreground hover:text-green-deep hover:bg-green-light/50"
                data-ocid={`nav.${link.label.toLowerCase().replace(" ", "-")}.link`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <Button
              size="sm"
              className="ml-2 bg-green-deep hover:bg-green-mid text-primary-foreground font-medium"
              onClick={() => handleNav("#contact")}
              data-ocid="nav.contact.primary_button"
            >
              Enquire Now
            </Button>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-foreground transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden nav-glass border-t border-border overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:text-green-deep hover:bg-green-light/50 rounded-lg transition-colors"
                    data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  className="w-full bg-green-deep hover:bg-green-mid text-primary-foreground"
                  onClick={() => handleNav("#contact")}
                  data-ocid="nav.mobile.contact.primary_button"
                >
                  Enquire Now
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
