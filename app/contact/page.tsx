import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { BRAND } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata(
  "Contact Us",
  "Get in touch with STUCCORD. Let's start a conversation about your digital project. Contact us via phone, email, or visit our office in Koforidua, Ghana.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get in touch with us and let&apos;s discuss how we can help grow your brand
          </p>
        </div>
      </div>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent-DEFAULT to-gradient-end flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Phone
                    </h3>
                    <a
                      href={`tel:${BRAND.phone}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-accent-DEFAULT transition-colors"
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent-DEFAULT to-gradient-end flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-accent-DEFAULT transition-colors"
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent-DEFAULT to-gradient-end flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {BRAND.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-96 rounded-2xl bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">
                Map placeholder - Add Google Maps embed here
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                {BRAND.location}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
