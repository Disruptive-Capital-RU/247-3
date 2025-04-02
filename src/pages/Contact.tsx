import { useState } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/aceternity/SparklesCore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Check, Loader2, MapPin, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

type ContactStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<ContactStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[40vh] md:min-h-[50vh] pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0B0B0B]"></div>
          <SparklesCore
            id="contactSparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleColor="#EDEDED"
            className="w-full h-full"
            particleCount={30}
          />
        </div>

        <div className="relative z-10 px-6 md:px-10 max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact <span className="text-silver-100">Us</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Reach out to start planning your extraordinary experience
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-8">
                Get in <span className="text-silver-100">Touch</span>
              </h2>

              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-silver-100" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3">Call Us</h3>
                    <p className="text-gray-300 mb-1">+7 (495) 000-0000</p>
                    <p className="text-gray-300">WhatsApp: +7 900 000 0000</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Available 24/7, in multiple languages
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-silver-100" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3">Email Us</h3>
                    <p className="text-gray-300">contact@247concierge.com</p>
                    <p className="text-gray-500 text-sm mt-2">
                      We respond to all inquiries within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-gray-900/50 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-silver-100" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-3">VIP Office</h3>
                    <p className="text-gray-300">
                      Moscow City, Federation Tower
                      <br />
                      69th Floor, Suite 6901
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-xl mb-6">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {["English", "Arabic", "Russian", "French", "Chinese"].map(
                    (language) => (
                      <div
                        key={language}
                        className="px-4 py-2 bg-gray-900/50 rounded-full text-sm"
                      >
                        {language}
                      </div>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#0B0B0B]/40 backdrop-blur-sm border border-gray-800/30 p-8 md:p-10 rounded-xl"
            >
              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-serif font-light mb-3">
                    Message Sent
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Thank you for reaching out. A 24/7 concierge representative
                    will contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-serif font-light mb-6">
                    Send a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-300"
                      >
                        Full Name <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-transparent border-gray-800 focus:border-silver-100 rounded-xl"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-300"
                      >
                        Email Address <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-transparent border-gray-800 focus:border-silver-100 rounded-xl"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-medium text-gray-300"
                      >
                        Phone Number (optional)
                      </Label>
                      <div className="flex">
                        <div className="bg-gray-900/50 border border-r-0 border-gray-800 rounded-l-xl px-3 flex items-center text-gray-400">
                          +
                        </div>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-transparent border-gray-800 focus:border-silver-100 rounded-none rounded-r-xl flex-1"
                          placeholder="e.g. 7 900 123 4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-300"
                      >
                        Message <span className="text-red-400">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-transparent border-gray-800 focus:border-silver-100 min-h-24 rounded-xl"
                        placeholder="How can we assist you?"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={
                        status === "submitting" ||
                        !formData.name ||
                        !formData.email ||
                        !formData.message
                      }
                      className={cn(
                        "w-full mt-6 rounded-xl transition-all duration-300",
                        "bg-[#EDEDED] text-[#0B0B0B] hover:bg-silver-200",
                        "hover:ring-1 hover:ring-slate-300/30",
                        "disabled:opacity-70"
                      )}
                    >
                      {status === "submitting" ? (
                        <span className="flex items-center">
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </Button>

                    <div className="text-center text-xs text-gray-500 mt-4">
                      <p>
                        We value your privacy and will never share your
                        information.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#0B0B0B]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">
              Our <span className="text-silver-100">Location</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Located in the heart of Moscow's business district
            </p>
          </div>

          <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.4876565518213!2d37.53379967680518!3d55.74975097326641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdee3bc746b%3A0x484ab37a7d54f0ae!2sFederation%20Tower!5e0!3m2!1sen!2sus!4v1712069478965!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
