import { NAV_LINKS } from "@/data/constants";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

export function Footer({ onAdminOpen }: { onAdminOpen: () => void }) {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-green-deep text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <img
              src="/assets/vgf-logo-new.svg"
              alt="Vital Green Food (VGF) Private Limited"
              className="h-28 w-auto object-contain mb-4 filter brightness-0 invert"
              loading="lazy"
            />
            <p className="text-white/65 text-sm leading-relaxed max-w-xs">
              Premium natural agricultural products from India&apos;s finest
              farms — delivered to global markets with integrity and
              traceability.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.href)}
                    className="text-white/65 hover:text-white text-sm transition-colors"
                    data-ocid={`footer.${link.label.toLowerCase()}.link`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/65">
              <li className="flex items-start gap-2">
                <MapPin
                  size={13}
                  className="text-amber-400 flex-shrink-0 mt-0.5"
                />
                <span>
                  A404 - Isha Anandham, Allapakkam,
                  <br />
                  New Perungalathur, Chennai - 600063
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:info@vitalgreenfoods.com"
                  className="hover:text-white transition-colors"
                >
                  info@vitalgreenfoods.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-amber-400 flex-shrink-0" />
                +91 84287 78725
              </li>
              <li className="flex items-center gap-2">
                <Globe size={13} className="text-amber-400 flex-shrink-0" />
                <a
                  href="https://www.vitalgreenfoods.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.vitalgreenfoods.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CIN & TAN Highlight */}
        <div className="mt-8 mb-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-xl px-6 py-4 border border-white/15">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
              Company Corporate Identification #
            </p>
            <p className="text-amber-300 font-bold text-lg tracking-wide">
              U47212TN2026PTC190055
            </p>
          </div>
          <div className="bg-white/10 rounded-xl px-6 py-4 border border-white/15">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-1">
              Tax Deduction &amp; Collection A/C #
            </p>
            <p className="text-amber-300 font-bold text-lg tracking-wide">
              CHEV27217B
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        {/* <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>
            © {year} Vital Green Food (VGF) Private Limited. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <p>
              Built with{" "}
              <span className="text-red-400" aria-label="love">
                ♥
              </span>{" "}
              using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
            <button
              type="button"
              onClick={onAdminOpen}
              className="text-white/20 hover:text-white/40 text-xs transition-colors"
              data-ocid="footer.admin_link"
            >
              Admin
            </button>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
