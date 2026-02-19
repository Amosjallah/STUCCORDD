"use client";

import { FormEvent, useCallback, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { validateEmail, validatePhone } from "@/lib/utils";

type Fields = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof Fields, string>>;

const initialFields: Fields = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const canSubmit = useMemo(() => status !== "submitting", [status]);

  const setField = useCallback(<K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }, []);

  const validate = useCallback((data: Fields): FieldErrors => {
    const next: FieldErrors = {};

    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!data.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!validatePhone(data.phone)) next.phone = "Please enter a valid phone number.";

    if (!data.email.trim()) next.email = "Please enter your email address.";
    else if (!validateEmail(data.email)) next.email = "Please enter a valid email address.";

    if (!data.subject.trim()) next.subject = "Please add a subject.";
    if (!data.message.trim()) next.message = "Please tell us about your project.";
    else if (data.message.trim().length < 20) next.message = "Please add a bit more detail (20+ characters).";

    return next;
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (!canSubmit) return;

      const nextErrors = validate(fields);
      if (Object.keys(nextErrors).length > 0) {
        setErrors(nextErrors);
        return;
      }

      setStatus("submitting");

      // Future-ready: swap this simulated submit with a server action/API route.
      await new Promise((r) => setTimeout(r, 900));

      setStatus("success");
    },
    [canSubmit, fields, validate]
  );

  const reset = useCallback(() => {
    setFields(initialFields);
    setErrors({});
    setStatus("idle");
  }, []);

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-accent-DEFAULT to-gradient-end text-white">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Message sent.
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Thanks—our team will get back to you shortly.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Button variant="outline" onClick={reset}>
                Send another
              </Button>
              <a href={`mailto:${fields.email || "contact@stuccord.com"}`} className="inline-flex">
                <Button variant="primary">Email us directly</Button>
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            onSubmit={onSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                label="Name"
                required
                value={fields.name}
                onChange={(e) => setField("name", e.target.value)}
                error={errors.name}
                autoComplete="name"
              />
              <Input
                label="Phone"
                required
                value={fields.phone}
                onChange={(e) => setField("phone", e.target.value)}
                error={errors.phone}
                autoComplete="tel"
              />
            </div>

            <Input
              label="Email"
              type="email"
              required
              value={fields.email}
              onChange={(e) => setField("email", e.target.value)}
              error={errors.email}
              autoComplete="email"
            />

            <Input
              label="Subject"
              required
              value={fields.subject}
              onChange={(e) => setField("subject", e.target.value)}
              error={errors.subject}
            />

            <Textarea
              label="Message"
              required
              rows={5}
              value={fields.message}
              onChange={(e) => setField("message", e.target.value)}
              error={errors.message}
              placeholder="Tell us what you’re building, timeline, and goals…"
            />

            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-gray-500 dark:text-gray-500">
                By submitting, you agree to be contacted by STUCCORD.
              </p>
              <Button type="submit" variant="primary" disabled={!canSubmit}>
                {status === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import Button from "./ui/Button";
import { validateEmail, validatePhone } from "@/lib/utils";

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - replace with actual API endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your API
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
            <p className="text-green-800 dark:text-green-200">
              Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
            placeholder="Your full name"
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
            placeholder="(+233) 054-758-1168"
          />
        </div>

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          placeholder="your.email@example.com"
        />

        <Input
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          required
          placeholder="What is this regarding?"
        />

        <Textarea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
          placeholder="Tell us about your project..."
          rows={6}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <motion.div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Send Message
              <Send className="w-5 h-5" />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
