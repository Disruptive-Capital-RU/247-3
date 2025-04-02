import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { CustomCursor } from "@/components/aceternity/CustomCursor";
import { LoadingScreen } from "@/components/aceternity/LoadingScreen";
import { MovingBorderButton } from "@/components/aceternity/MovingBorderButton";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BookingForm } from "@/components/booking/BookingForm";
import { useLanguage } from "@/i18n";

export function MainLayout() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { language, setLanguage, t, isRTL } = useLanguage();

  // Handle language toggle
  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
  };

  useEffect(() => {
    // Initialize
    setMounted(true);

    // Limit loading time to 1 second max
    const timer = setTimeout(() => setIsLoading(false), 1000);

    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      clearTimeout(timer);
    };
  }, []);

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      className="min-h-svh bg-[#0B0B0B] text-[#EDEDED] cursor-none"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {mounted && <CustomCursor />}
      {mounted && isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/80 backdrop-blur-md border-b border-gray-800/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link to="/" className="text-xl md:text-2xl font-serif">
              <span className="font-light text-silver-100">24/7</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/how-we-help"
                className="text-gray-400 hover:text-[#EDEDED] transition-colors duration-300"
              >
                {t("nav.howWeHelp")}
              </Link>
              <Link
                to="/services"
                className="text-gray-400 hover:text-[#EDEDED] transition-colors duration-300"
              >
                {t("nav.services")}
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-[#EDEDED] transition-colors duration-300"
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-[#EDEDED] transition-colors duration-300"
              >
                {t("nav.contact")}
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={toggleLanguage}
              className="text-sm px-3 py-1.5 border border-gray-800/50 rounded-md hover:border-gray-700 transition-colors duration-300"
            >
              {t("common.languageSwitch")}
            </button>

            <Sheet>
              <SheetTrigger asChild>
                <MovingBorderButton
                  borderRadius="0.75rem"
                  className="bg-[#0B0B0B] text-[#EDEDED] border-none"
                >
                  {t("nav.bookNow")}
                </MovingBorderButton>
              </SheetTrigger>
              <SheetContent className="bg-[#0B0B0B] border-gray-800">
                <BookingForm />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0B0B0B] border-t border-gray-800/30 py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">
                <span className="font-light text-silver-100">24/7</span>
              </h3>
              <p className="text-gray-400 mb-6">
                The personal concierge service trusted by those who never wait.
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
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4">Contact</h4>
              <div className="space-y-3">
                <p className="text-gray-400">Email: contact@247concierge.com</p>
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
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800/30 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} 24/7 Concierge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
