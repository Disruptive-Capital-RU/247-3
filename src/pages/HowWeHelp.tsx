import { motion } from "framer-motion";
import { HoverEffect } from "@/components/aceternity/HoverEffect";
import { StickyScroll } from "@/components/aceternity/StickyScroll";
import { SparklesCore } from "@/components/aceternity/SparklesCore";

export function HowWeHelp() {
  const content = [
    {
      title: "Personal Touch",
      description:
        "Each client is assigned a dedicated concierge who understands your preferences, anticipates your needs, and ensures every detail is perfect. Your concierge becomes an extension of your lifestyle, available whenever you need assistance.",
      content: (
        <div className="h-full w-full bg-[url('/concierge-service.jpg')] bg-cover bg-center rounded-xl" />
      ),
    },
    {
      title: "Cultural Fluency",
      description:
        "Our team includes Arabic speakers who understand the cultural nuances and expectations of our clients from the Gulf region. We bridge language barriers and ensure you feel at home while enjoying the best experiences available.",
      content: (
        <div className="h-full w-full bg-[url('/cultural-experience.jpg')] bg-cover bg-center rounded-xl" />
      ),
    },
    {
      title: "VIP Access",
      description:
        "Through our extensive network of partnerships with the most exclusive venues, we provide VIP access to restaurants, clubs, events, and experiences that would otherwise be unavailable. Skip the lines and enjoy preferential treatment.",
      content: (
        <div className="h-full w-full bg-[url('/vip-access.jpg')] bg-cover bg-center rounded-xl" />
      ),
    },
    {
      title: "Customized Experiences",
      description:
        "We don't offer pre-packaged itineraries. Instead, we design bespoke experiences tailored to your specific interests and preferences, ensuring that every moment of your stay is exactly how you envision it.",
      content: (
        <div className="h-full w-full bg-[url('/custom-experience.jpg')] bg-cover bg-center rounded-xl" />
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[40vh] md:min-h-[50vh] pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0B0B0B]"></div>
          <SparklesCore
            id="howWeHelpSparkles"
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
            How We <span className="text-silver-100">Help</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our approach combines personalized attention, cultural
            understanding, and exclusive access to create extraordinary
            experiences.
          </motion.p>
        </div>
      </section>

      {/* Sticky Scroll Content */}
      <section className="py-20 md:py-32">
        <div className="mx-auto">
          <StickyScroll content={content} />
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">
              The 24/7 <span className="text-silver-100">Difference</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              What sets us apart from standard concierge services
            </p>
          </div>

          <HoverEffect
            items={[
              {
                title: "24/7 Availability",
                description:
                  "Our concierges are available around the clock, ready to assist you at any hour. Your time is valuable, and we're always there when you need us.",
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
                title: "Absolute Discretion",
                description:
                  "We operate with the highest level of confidentiality. Your privacy is paramount, and we ensure complete discretion in all our services.",
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
                title: "Elite Partnerships",
                description:
                  "Our exclusive relationships with premium venues and service providers give you access to experiences that aren't available to the general public.",
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
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Cultural Expertise",
                description:
                  "Our team understands the specific needs and expectations of our Arab clients, ensuring a comfortable experience that respects your cultural preferences.",
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
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                ),
              },
              {
                title: "No Request Too Complex",
                description:
                  "We specialize in fulfilling challenging requests. Our resourceful team excels at making the seemingly impossible happen for our clients.",
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
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                ),
              },
              {
                title: "Value-Driven Approach",
                description:
                  "We focus on delivering exceptional value for your investment. Our services are premium but designed to maximize your experience and satisfaction.",
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
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971z"
                    />
                  </svg>
                ),
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
