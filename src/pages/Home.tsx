import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/aceternity/TextGenerateEffect";
import { SparklesCore } from "@/components/aceternity/SparklesCore";
import { LampContainer } from "@/components/aceternity/LampContainer";
import { BackgroundBeams } from "@/components/aceternity/BackgroundBeams";
import { InfiniteMovingCards } from "@/components/aceternity/InfiniteMovingCards";
import { MovingBorderButton } from "@/components/aceternity/MovingBorderButton";
import { CheckCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BookingForm } from "@/components/booking/BookingForm";

export function Home() {
  return (
    <>
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
                Experience
                <br />
                <span className="text-[#EDEDED] opacity-90">Luxury </span>
                <TextGenerateEffect
                  words={["Redefined", "Reimagined", "Perfected"]}
                  className="text-silver-100"
                />
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl font-light text-silver-100/90 max-w-xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                Elite concierge services for the most discerning clients.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Sheet>
                  <SheetTrigger asChild>
                    <MovingBorderButton
                      borderRadius="0"
                      className="bg-transparent border-gray-800 text-lg"
                    >
                      Reserve Your Experience
                    </MovingBorderButton>
                  </SheetTrigger>
                  <SheetContent className="bg-[#0B0B0B] border-gray-800">
                    <BookingForm />
                  </SheetContent>
                </Sheet>
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
      <section className="py-20 md:py-32 relative">
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
                      Exclusive reservations at the most prestigious restaurants
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
            <Sheet>
              <SheetTrigger asChild>
                <MovingBorderButton
                  borderRadius="0"
                  className="bg-transparent border-gray-800"
                >
                  Reserve Now
                </MovingBorderButton>
              </SheetTrigger>
              <SheetContent className="bg-[#0B0B0B] border-gray-800">
                <BookingForm />
              </SheetContent>
            </Sheet>
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
          <div className="bg-[#0B0B0B]/50 backdrop-blur-lg border border-gray-800/30 p-8 md:p-12 rounded-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                Experience Luxury Like Never Before
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Reserve your personal concierge service and unlock the most
                exclusive experiences available.
              </p>

              <Sheet>
                <SheetTrigger asChild>
                  <MovingBorderButton
                    borderRadius="0.75rem"
                    className="bg-[#EDEDED] text-[#0B0B0B]"
                    containerClassName="mx-auto"
                  >
                    <span className="text-lg font-medium">
                      Book Your Experience
                    </span>
                  </MovingBorderButton>
                </SheetTrigger>
                <SheetContent className="bg-[#0B0B0B] border-gray-800">
                  <BookingForm />
                </SheetContent>
              </Sheet>

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
    </>
  );
}
