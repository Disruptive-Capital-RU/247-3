import { motion } from "framer-motion";
import { GlobeDemo } from "@/components/aceternity/GlobeDemo";
import { GlowingStarsBackgroundCard } from "@/components/aceternity/GlowingStarsBackgroundCard";

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[40vh] md:min-h-[50vh] pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/about-hero.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-[#0B0B0B]/80"></div>
        </div>

        <div className="relative z-10 px-6 md:px-10 max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-silver-100">24/7</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The story behind the most trusted luxury concierge service
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">
                Our <span className="text-silver-100">Story</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Founded by a team of luxury hospitality experts with deep
                connections to both Eastern and Western cultures, 24/7 was born
                from a simple observation: the most discerning travelers from
                the Gulf region deserved a truly personalized experience that
                understood their unique preferences and cultural expectations.
              </p>
              <p className="text-gray-300 mb-6">
                What began as a boutique service for a select clientele has
                evolved into the premier concierge service trusted by elite
                travelers who value discretion, quality, and genuine cultural
                understanding.
              </p>
              <p className="text-gray-300">
                Our name reflects our core promise – we are truly available
                around the clock, providing seamless support and exceptional
                service whenever our clients need us. No request is too complex,
                no detail too small for our attention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[450px] w-full"
            >
              <GlobeDemo className="w-full h-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#0B0B0B]/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">
              Our <span className="text-silver-100">Values</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Discretion",
                description:
                  "We understand that privacy is paramount. Every interaction with our clients is handled with the utmost confidentiality.",
                icon: "🔒",
              },
              {
                title: "Excellence",
                description:
                  "We relentlessly pursue perfection in every detail, constantly raising the bar for what luxury service means.",
                icon: "✨",
              },
              {
                title: "Cultural Intelligence",
                description:
                  "We bridge cultural gaps effortlessly, ensuring our clients feel understood and respected at all times.",
                icon: "🌍",
              },
              {
                title: "Resourcefulness",
                description:
                  "When faced with challenges, we find creative solutions that exceed expectations.",
                icon: "💡",
              },
              {
                title: "Accessibility",
                description:
                  "True to our name, we are available 24/7, ready to assist whenever our clients need us.",
                icon: "🕗",
              },
              {
                title: "Personalization",
                description:
                  "We believe luxury means tailoring every experience to the individual, never offering one-size-fits-all solutions.",
                icon: "👤",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <GlowingStarsBackgroundCard className="p-8 h-full">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </GlowingStarsBackgroundCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">
              Our <span className="text-silver-100">Team</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Meet the expert concierges who make the extraordinary possible
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alexander",
                role: "Culinary Specialist",
                image: "/team-alexander.jpg",
                description:
                  "With connections to the city's most exclusive restaurants and a passion for fine dining, Alexander ensures our clients enjoy unforgettable culinary experiences.",
              },
              {
                name: "Sophia",
                role: "Event & Entertainment Director",
                image: "/team-sophia.jpg",
                description:
                  "Sophia's background in luxury event planning and extensive network gives our clients access to the most prestigious cultural and entertainment events.",
              },
              {
                name: "Malik",
                role: "VIP Relations",
                image: "/team-malik.jpg",
                description:
                  "Fluent in Arabic and deeply familiar with Gulf culture, Malik specializes in ensuring our Arab clients feel perfectly at home while enjoying bespoke experiences.",
              },
              {
                name: "Nina",
                role: "Luxury Shopping Consultant",
                image: "/team-nina.jpg",
                description:
                  "Former personal stylist to celebrities, Nina provides expert guidance and exclusive access to luxury fashion boutiques and limited edition items.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group"
              >
                <div className="relative h-80 overflow-hidden rounded-xl mb-6">
                  <div
                    className="absolute inset-0 bg-center bg-cover transform transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                    <p className="text-silver-100 text-sm">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
