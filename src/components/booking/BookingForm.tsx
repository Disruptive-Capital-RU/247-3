import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n";

type BookingStatus = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredLanguage: "English",
  });

  const [status, setStatus] = useState<BookingStatus>("idle");
  const [assignedConcierge, setAssignedConcierge] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.phone) {
      return;
    }

    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setAssignedConcierge("Maks"); // In a real app, this would come from the backend
    }, 1500);
  };

  // If form is successfully submitted, show confirmation
  if (status === "success") {
    return (
      <div className="pt-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-serif font-light mb-3">
            {t("booking.success.title")}
          </h3>
          <p className="text-gray-300 mb-6">
            {t("booking.success.description").replace(
              "{name}",
              assignedConcierge
            )}
          </p>
          <p className="text-sm text-gray-400">
            {t("booking.success.notification")}
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-6 pb-12">
      <h3 className="text-2xl font-serif font-light mb-6">
        {t("booking.title")}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-gray-300">
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
          <Label htmlFor="phone" className="text-sm font-medium text-gray-300">
            Phone Number <span className="text-red-400">*</span>
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
              required
            />
          </div>
          <p className="text-xs text-gray-500">
            Include country code (e.g. 7 for Russia, 971 for UAE)
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email Address (optional)
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent border-gray-800 focus:border-silver-100 rounded-xl"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="preferredLanguage"
            className="text-sm font-medium text-gray-300"
          >
            Preferred Language
          </Label>
          <select
            id="preferredLanguage"
            name="preferredLanguage"
            value={formData.preferredLanguage}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-transparent border border-gray-800 focus:border-silver-100 rounded-xl outline-none"
            aria-label="Select your preferred language"
          >
            <option value="English" className="bg-gray-900">
              English
            </option>
            <option value="Arabic" className="bg-gray-900">
              Arabic
            </option>
            <option value="Russian" className="bg-gray-900">
              Russian
            </option>
          </select>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="message"
            className="text-sm font-medium text-gray-300"
          >
            Special Requests (optional)
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent border-gray-800 focus:border-silver-100 min-h-24 rounded-xl"
            placeholder="Tell us about your preferences"
          />
        </div>

        <Button
          type="submit"
          disabled={
            status === "submitting" || !formData.name || !formData.phone
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
              Processing...
            </span>
          ) : (
            t("booking.button")
          )}
        </Button>

        <div className="flex items-center justify-center mt-4 text-xs text-gray-500">
          <p>{t("booking.terms")}</p>
        </div>
      </form>
    </div>
  );
}
