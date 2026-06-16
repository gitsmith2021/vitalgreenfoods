import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { fadeUp, stagger } from "@/utils/animations";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  ArrowRight,
  Award,
  CheckCircle2,
  Globe,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    countryCode: "91",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false);

    if (!form.name || !form.email || !form.message) {
      setIsError(true);
      return;
    }

    if (form.phone && form.phone.length < 6) {
      setIsError(true);
      return;
    }

    setIsPending(true);

    try {
      // ✅ 1. Send to ADMIN (you)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          company: form.company,
          phone: `+${form.countryCode} ${form.phone}`,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      // ✅ 2. Send AUTO-REPLY to USER
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      // ✅ Success state
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        company: "",
        countryCode: "91",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsError(true);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="contact" className="section-pad bg-cream-dark/40">
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
            Contact Us
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Interested in our products? Send us an enquiry and our team will
            respond within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl border border-border shadow-card p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8 gap-5"
                    data-ocid="contact.success_state"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                        Enquiry Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Your enquiry has been saved. Our export team will
                        respond within 24 hours.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      className="border-green-deep text-green-deep hover:bg-green-light/50"
                    >
                      Send Another Enquiry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-foreground"
                        >
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="h-11 bg-background border-input focus:border-ring"
                          data-ocid="contact.input"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          Email Address{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="h-11 bg-background border-input focus:border-ring"
                          data-ocid="contact.email.input"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="company"
                        className="text-sm font-medium text-foreground"
                      >
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company or organisation"
                        value={form.company}
                        onChange={handleChange}
                        className="h-11 bg-background border-input focus:border-ring"
                        data-ocid="contact.company.input"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label className="text-sm font-medium text-foreground">
                        Phone Number
                      </Label>
                      <div className="flex gap-2 items-center">
                        <div className="flex items-center border border-input rounded-md bg-background focus-within:border-ring h-11 flex-shrink-0">
                          <span className="pl-3 text-sm text-muted-foreground select-none">
                            +
                          </span>
                          <Input
                            name="countryCode"
                            value={form.countryCode}
                            onChange={handleChange}
                            placeholder="91"
                            className="border-0 shadow-none h-full w-16 px-1.5 focus-visible:ring-0 bg-transparent"
                            maxLength={4}
                            data-ocid="contact.countrycode.input"
                          />
                        </div>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Phone number"
                          value={form.phone}
                          onChange={handleChange}
                          className="h-11 bg-background border-input focus:border-ring flex-1"
                          data-ocid="contact.phone.input"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements — products of interest, quantities, target market..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-background border-input focus:border-ring resize-none"
                        data-ocid="contact.textarea"
                      />
                    </div>

                    {/* Error state */}
                    <AnimatePresence>
                      {isError && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm"
                          data-ocid="contact.error_state"
                        >
                          <AlertCircle size={16} className="flex-shrink-0" />
                          Something went wrong. Please try again or email us
                          directly.
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isPending}
                      className="w-full bg-green-deep hover:bg-green-mid text-primary-foreground font-semibold h-12 text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:transform-none"
                      data-ocid="contact.submit_button"
                    >
                      {isPending ? (
                        <>
                          <Loader2
                            size={18}
                            className="mr-2 animate-spin"
                            data-ocid="contact.loading_state"
                          />
                          Sending Enquiry...
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <ArrowRight size={18} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value:
                      "Head Office: A404 - Isha Anandham, Allapakkam, New Perungalathur, Chennai - 600063.\nProcessing Unit: Tiruchirappalli (Trichy), Tamil Nadu",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@vitalgreenproducts.com",
                    href: "mailto:info@vitalgreenproducts.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 84287 78725",
                    href: "tel:+918428778725",
                  },
                  {
                    icon: Globe,
                    label: "Export Markets",
                    value: "European Union & Global Markets",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={18} className="text-green-deep" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gold-warm uppercase tracking-wide mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground text-sm hover:text-green-deep transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground text-sm whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications note */}
            <div className="p-6 rounded-xl bg-green-light/50 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Award size={18} className="text-green-deep" />
                <h4 className="font-semibold text-foreground text-sm">
                  Certifications &amp; Compliance
                </h4>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-mid flex-shrink-0" />
                  EU Organic Regulation (EC) 834/2007
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-mid flex-shrink-0" />
                  Phytosanitary Certificate Compliant
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-mid flex-shrink-0" />
                  EU Customs &amp; Import Ready
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-mid flex-shrink-0" />
                  Lab Tested — Pesticide &amp; Heavy Metal Free
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
