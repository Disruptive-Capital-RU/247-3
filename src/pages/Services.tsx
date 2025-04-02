import { motion } from "framer-motion";
import { WavyBackground } from "@/components/aceternity/WavyBackground";
import { MovingBorderButton } from "@/components/aceternity/MovingBorderButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BookingForm } from "@/components/booking/BookingForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Services() {
  const serviceCategories = [
    {
      id: "dining",
      title: "Culinary Experiences",
      description:
        "From securing reservations at the most exclusive restaurants to arranging private dining experiences with renowned chefs.",
      image: "/service-dining.jpg",
      services: [
        {
          title: "VIP Restaurant Reservations",
          description:
            "Skip the waitlist with our priority access to the city's most sought-after dining venues.",
        },
        {
          title: "Private Chef Experiences",
          description:
            "Enjoy bespoke menus prepared by award-winning chefs in the comfort of your accommodation.",
        },
        {
          title: "Culinary Tours",
          description:
            "Discover hidden gems and local favorites through our curated food tours with expert guides.",
        },
        {
          title: "Custom Menu Planning",
          description:
            "Special dietary requirements or specific cuisine preferences are catered to with precision.",
        },
      ],
    },
    {
      id: "transport",
      title: "Premium Transportation",
      description:
        "Seamless, luxury transportation options with professional, discrete chauffeurs knowledgeable about the city.",
      image: "/service-transport.jpg",
      services: [
        {
          title: "Chauffeured Luxury Vehicles",
          description:
            "Travel in style with our fleet of premium vehicles and professional drivers available 24/7.",
        },
        {
          title: "Airport Transfers",
          description:
            "Enjoy VIP meet and greet service and seamless transport from the moment you land.",
        },
        {
          title: "Helicopter & Private Jet Services",
          description:
            "For the ultimate in luxury travel, experience the convenience of private air transportation.",
        },
        {
          title: "Yacht Charters",
          description:
            "Explore waterways in style with our curated selection of luxury yachts and experienced crew.",
        },
      ],
    },
    {
      id: "shopping",
      title: "Personal Shopping",
      description:
        "Exclusive shopping experiences with VIP access to luxury boutiques, private showings, and expert personal shoppers.",
      image: "/service-shopping.jpg",
      services: [
        {
          title: "Personal Stylist",
          description:
            "Our fashion experts provide personalized styling advice and accompany you to the finest boutiques.",
        },
        {
          title: "Private Shopping Sessions",
          description:
            "Exclusive after-hours access to luxury stores for a private shopping experience.",
        },
        {
          title: "Product Sourcing",
          description:
            "We locate and secure rare or limited-edition items that align with your preferences.",
        },
        {
          title: "VIP Discounts",
          description:
            "Enjoy special pricing arrangements with our partner luxury retailers.",
        },
      ],
    },
    {
      id: "events",
      title: "VIP Events & Entertainment",
      description:
        "Priority access to exclusive events, private performances, and personalized entertainment options.",
      image: "/service-events.jpg",
      services: [
        {
          title: "Ticket Procurement",
          description:
            "Secure access to sold-out shows, sporting events, and cultural performances.",
        },
        {
          title: "VIP Event Access",
          description:
            "Exclusive entry to fashion shows, gallery openings, and invitation-only events.",
        },
        {
          title: "Private Entertainment",
          description:
            "Arrange private performances, screenings, or custom entertainment experiences.",
        },
        {
          title: "Nightlife Arrangements",
          description:
            "VIP table service and priority entry at the most exclusive clubs and venues.",
        },
      ],
    },
    {
      id: "assistance",
      title: "Personal Assistance",
      description:
        "Comprehensive personal support, from travel planning to daily logistics, all delivered with meticulous attention to detail.",
      image: "/service-assistance.jpg",
      services: [
        {
          title: "Travel Planning",
          description:
            "End-to-end itinerary development tailored to your preferences and interests.",
        },
        {
          title: "Accommodation Arrangements",
          description:
            "Secure the best rooms, suites, or private residences with special amenities.",
        },
        {
          title: "Translation Services",
          description:
            "Professional interpreters and translators available for business or leisure needs.",
        },
        {
          title: "Special Occasion Planning",
          description:
            "From intimate celebrations to grand events, we handle every detail to perfection.",
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[40vh] md:min-h-[50vh] pt-24 pb-20 overflow-hidden">
        <WavyBackground className="absolute inset-0" waveOpacity={0.2} />

        <div className="relative z-10 px-6 md:px-10 max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-light mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our <span className="text-silver-100">Services</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bespoke luxury concierge services designed for the most discerning
            clients
          </motion.p>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 md:py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <div className="relative h-64 md:h-80 overflow-hidden rounded-xl mb-6">
                  <div
                    className="absolute inset-0 bg-center bg-cover transform transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${category.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-[#0B0B0B]/50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-center text-silver-100">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{category.description}</p>

                <Accordion type="single" collapsible className="w-full">
                  {category.services.map((service, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`${category.id}-${idx}`}
                      className="border-b border-gray-800"
                    >
                      <AccordionTrigger className="text-lg py-4">
                        {service.title}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400 pb-4">
                        {service.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Requests */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#0B0B0B]/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-8">
            Bespoke <span className="text-silver-100">Services</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Can't find what you're looking for? Our concierge specialists excel
            at fulfilling unique requests.
          </p>

          <Sheet>
            <SheetTrigger asChild>
              <MovingBorderButton
                borderRadius="0.75rem"
                className="bg-transparent border-gray-800 text-lg"
              >
                Make a Custom Request
              </MovingBorderButton>
            </SheetTrigger>
            <SheetContent className="bg-[#0B0B0B] border-gray-800">
              <BookingForm />
            </SheetContent>
          </Sheet>
        </div>
      </section>
    </>
  );
}
