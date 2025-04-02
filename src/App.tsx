import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/aceternity/TextGenerateEffect";
import { BackgroundBeams } from "@/components/aceternity/BackgroundBeams";
import { SparklesCore } from "@/components/aceternity/SparklesCore";
import { InfiniteMovingCards } from "@/components/aceternity/InfiniteMovingCards";
import { HoverEffect } from "@/components/aceternity/HoverEffect";
import { StickyScroll } from "@/components/aceternity/StickyScroll";
import { LampContainer } from "@/components/aceternity/LampContainer";
import { WavyBackground } from "@/components/aceternity/WavyBackground";
import { GlowingStarsBackgroundCard } from "@/components/aceternity/GlowingStarsBackgroundCard";
import { GlobeDemo } from "@/components/aceternity/GlobeDemo";
import { MovingBorderButton } from "@/components/aceternity/MovingBorderButton";
import { CustomCursor } from "@/components/aceternity/CustomCursor";
import { LoadingScreen } from "@/components/aceternity/LoadingScreen";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";

function App() {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-svh bg-[#0B0B0B] text-[#EDEDED] cursor-none">
      {mounted && <CustomCursor />}
      {mounted && isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      {/* Sticky Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/80 backdrop-blur-md border-b border-gray-800/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <h1 className="text-xl md:text-2xl font-serif">
              <span className="font-light">Moscow</span>
              <span className="text-silver-100">Luxury</span>
            </h1>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-400 hover:text-[#EDEDED] transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-400 hover:text-[#EDEDED] transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-gray-400 hover:text-[#EDEDED] transition-colors duration-300"
              >
                Testimonials
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2 mr-2">
              <button
                onClick={() => setLanguage("EN")}
                className={`text-sm px-2 py-1 transition-colors duration-300 ${
                  language === "EN" ? "text-[#EDEDED]" : "text-gray-500"
                }`}
              >
                EN
              </button>
              <span className="text-gray-500">|</span>
              <button
                onClick={() => setLanguage("AR")}
                className={`text-sm px-2 py-1 transition-colors duration-300 ${
                  language === "AR" ? "text-[#EDEDED]" : "text-gray-500"
                }`}
              >
                AR
              </button>
            </div>

            <Sheet>
              <SheetTrigger asChild>
                <MovingBorderButton
                  borderRadius="0.5rem"
                  className="bg-[#0B0B0B] text-[#EDEDED] border-none"
                >
                  Book Now
                </MovingBorderButton>
              </SheetTrigger>
              <SheetContent className="bg-[#0B0B0B] border-gray-800">
                <div className="pt-6 pb-12">
                  <h3 className="text-2xl font-serif font-light mb-6">
                    Reserve Your Concierge
                  </h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-300"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        className="bg-transparent border-gray-800 focus:border-silver-100"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-300"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        className="bg-transparent border-gray-800 focus:border-silver-100"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="arrival"
                        className="text-sm font-medium text-gray-300"
                      >
                        Arrival Date
                      </Label>
                      <Input
                        id="arrival"
                        type="date"
                        className="bg-transparent border-gray-800 focus:border-silver-100"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-300"
                      >
                        Special Requests
                      </Label>
                      <Textarea
                        id="message"
                        className="bg-transparent border-gray-800 focus:border-silver-100 min-h-24"
                        placeholder="Tell us about your preferences"
                      />
                    </div>

                    <Button className="w-full bg-[#EDEDED] text-[#0B0B0B] hover:bg-silver-200 mt-6">
                      Reserve Now
                    </Button>

                    <div className="flex items-center justify-center mt-4 text-xs text-gray-500">
                      <p>By booking, you agree to our terms of service</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="object-cover w-full h-full"
            poster="/placeholder-luxury.jpg"
          >
            <source src="/moscow-luxury.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0B0B0B]/70"></div>
          <SparklesCore
            id="heroSparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleColor="#EDEDED"
            className="w-full h-full"
            particleCount={20}
          />
        </div>

        <LampContainer className="px-6 md:px-10 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-10"
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                Live Moscow
                <br />
                <span className="text-[#EDEDED] opacity-90">Like </span>
                <TextGenerateEffect
                  words={["Royalty", "Nobility", "Luxury", "Exclusivity"]}
                  className="text-silver-100"
                />
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl font-light text-silver-100/90 max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                Private luxury concierge. 5 days. $100.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <MovingBorderButton
                  borderRadius="0"
                  className="bg-transparent border-gray-800 text-lg"
                >
                  Reserve Your Experience
                </MovingBorderButton>
              </motion.div>

              <motion.div
                className="flex items-center justify-center space-x-6 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                <div className="flex flex-col items-center">
                  <p className="text-gray-400 mb-1 text-sm">Verified Service</p>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-silver-100 mr-1" />
                    <span className="text-sm">Trusted by elite travelers</span>
                  </div>
                </div>
                <div className="hidden md:flex h-10 w-px bg-gray-800/50"></div>
                <div className="hidden md:flex items-center space-x-4">
                  <img
                    src="/amex-logo.svg"
                    alt="American Express"
                    className="h-8 opacity-70"
                  />
                  <img
                    src="/visa-logo.svg"
                    alt="Visa"
                    className="h-6 opacity-70"
                  />
                  <img
                    src="/mastercard-logo.svg"
                    alt="Mastercard"
                    className="h-6 opacity-70"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </LampContainer>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-20 md:py-32 relative">
        <BackgroundBeams className="absolute inset-0" />
        <div className="relative z-10 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">
              Exceptional Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Crafted experiences for the most discerning travelers
            </p>
          </div>

          <div className="mb-20">
            <InfiniteMovingCards
              items={[
                <div
                  key="dining"
                  className="p-4 h-[350px] w-full max-w-sm flex flex-col relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-center bg-cover opacity-30"
                    style={{ backgroundImage: "url(/service-dining.jpg)" }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent"></div>
                  <div className="mt-auto p-4 relative z-10">
                    <span className="text-silver-100 text-sm mb-3 block font-medium">
                      01
                    </span>
                    <h3 className="text-2xl font-serif mb-2">Fine Dining</h3>
                    <p className="text-gray-400">
                      Exclusive reservations at Moscow's most prestigious
                      restaurants
                    </p>
                  </div>
                </div>,
                <div
                  key="transport"
                  className="p-4 h-[350px] w-full max-w-sm flex flex-col relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-center bg-cover opacity-30"
                    style={{ backgroundImage: "url(/service-transport.jpg)" }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent"></div>
                  <div className="mt-auto p-4 relative z-10">
                    <span className="text-silver-100 text-sm mb-3 block font-medium">
                      02
                    </span>
                    <h3 className="text-2xl font-serif mb-2">
                      Luxury Transport
                    </h3>
                    <p className="text-gray-400">
                      Premium vehicles with professional chauffeurs at your
                      service
                    </p>
                  </div>
                </div>,
                <div
                  key="shopping"
                  className="p-4 h-[350px] w-full max-w-sm flex flex-col relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-center bg-cover opacity-30"
                    style={{ backgroundImage: "url(/service-shopping.jpg)" }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent"></div>
                  <div className="mt-auto p-4 relative z-10">
                    <span className="text-silver-100 text-sm mb-3 block font-medium">
                      03
                    </span>
                    <h3 className="text-2xl font-serif mb-2">
                      Personal Shopping
                    </h3>
                    <p className="text-gray-400">
                      Bespoke shopping experiences with VIP access to luxury
                      boutiques
                    </p>
                  </div>
                </div>,
                <div
                  key="events"
                  className="p-4 h-[350px] w-full max-w-sm flex flex-col relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-center bg-cover opacity-30"
                    style={{ backgroundImage: "url(/service-events.jpg)" }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent"></div>
                  <div className="mt-auto p-4 relative z-10">
                    <span className="text-silver-100 text-sm mb-3 block font-medium">
                      04
                    </span>
                    <h3 className="text-2xl font-serif mb-2">VIP Events</h3>
                    <p className="text-gray-400">
                      Priority access to exclusive events, galleries, and
                      performances
                    </p>
                  </div>
                </div>,
                <div
                  key="assistance"
                  className="p-4 h-[350px] w-full max-w-sm flex flex-col relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-center bg-cover opacity-30"
                    style={{ backgroundImage: "url(/service-assistance.jpg)" }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent"></div>
                  <div className="mt-auto p-4 relative z-10">
                    <span className="text-silver-100 text-sm mb-3 block font-medium">
                      05
                    </span>
                    <h3 className="text-2xl font-serif mb-2">
                      Personal Assistance
                    </h3>
                    <p className="text-gray-400">
                      24/7 Arabic-speaking concierge support throughout your
                      stay
                    </p>
                  </div>
                </div>,
              ]}
              direction="right"
              speed="slow"
              pauseOnHover={true}
            />
          </div>

          <div className="mt-12 flex justify-center">
            <MovingBorderButton
              borderRadius="0"
              className="bg-transparent border-gray-800"
            >
              View All Services
            </MovingBorderButton>
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="py-20 md:py-32 relative">
        <div className="px-6 md:px-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">
                Why Choose Us
              </h2>

              <HoverEffect
                items={[
                  {
                    title: "Discretion & Trust",
                    description:
                      "We prioritize your privacy with the highest level of confidentiality and professionalism",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "24/7 Local Concierge",
                    description:
                      "Arabic-speaking professionals available around the clock for all your needs",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: "Elite Partnerships",
                    description:
                      "Exclusive access to Moscow's premium venues and establishments",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    ),
                  },
                ]}
              />
            </div>

            <GlobeDemo className="h-[450px] w-full" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-20 md:py-32 relative overflow-hidden"
      >
        <WavyBackground className="absolute inset-0" waveOpacity={0.2} />
        <div className="relative z-10 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">
              Clients' Experiences
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              What our distinguished guests have to say
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The service exceeded all my expectations. My concierge anticipated every need before I could even express it.",
                author: "Mohammed A.",
                location: "Dubai",
                rating: 5,
              },
              {
                quote:
                  "An extraordinary experience that made Moscow feel like home, but with unmatched luxury and attention to detail.",
                author: "Fatima K.",
                location: "Riyadh",
                rating: 5,
              },
              {
                quote:
                  "The Arabic-speaking concierge made our trip seamless and comfortable. True VIP treatment from start to finish.",
                author: "Abdullah M.",
                location: "Abu Dhabi",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <GlowingStarsBackgroundCard key={index} className="p-8">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#EDEDED"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                    </div>
                    <p className="text-[#EDEDED] mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </GlowingStarsBackgroundCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-[#0B0B0B]">
          <SparklesCore
            id="ctaSparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.2}
            particleColor="#EDEDED"
            className="w-full h-full"
            particleCount={15}
          />
        </div>
        <div className="relative z-10 px-6 md:px-10 max-w-4xl mx-auto">
          <div className="bg-[#0B0B0B]/50 backdrop-blur-lg border border-gray-800/30 p-8 md:p-12 rounded-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                Experience Moscow Like Never Before
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Reserve your personal concierge service for just $100 and unlock
                the most exclusive experiences Moscow has to offer.
              </p>

              <MovingBorderButton
                borderRadius="0"
                className="bg-[#EDEDED] text-[#0B0B0B]"
                containerClassName="mx-auto"
              >
                <span className="text-lg font-medium">
                  Book Your Experience
                </span>
              </MovingBorderButton>

              <p className="text-sm text-gray-500 mt-6">
                Limited availability. Reservations subject to confirmation.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <div className="flex items-center">
                <CheckCircle className="text-silver-100 w-5 h-5 mr-2" />
                <span>Multilingual Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-silver-100 w-5 h-5 mr-2" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-silver-100 w-5 h-5 mr-2" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0B0B] border-t border-gray-800/30 py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">
                <span className="font-light">Moscow</span>
                <span className="text-silver-100">Luxury</span>
              </h3>
              <p className="text-gray-400 mb-6">
                Exclusive concierge services for the elite Arab traveler
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-800 text-gray-400 hover:text-silver-100 hover:border-gray-700 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-800 text-gray-400 hover:text-silver-100 hover:border-gray-700 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-800 text-gray-400 hover:text-silver-100 hover:border-gray-700 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Contact</h4>
              <div className="space-y-3">
                <p className="text-gray-400">Email: contact@moscowluxury.com</p>
                <p className="text-gray-400">Phone: +7 (495) 000-0000</p>
                <p className="text-gray-400">WhatsApp: +7 900 000 0000</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Legal</h4>
              <div className="space-y-2">
                <p>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-silver-100 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-silver-100 transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-silver-100 transition-colors duration-300"
                  >
                    Cookie Policy
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800/30 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Moscow Luxury Concierge. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
