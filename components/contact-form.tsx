"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

const initialState: FormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "loading", message: "Sending..." });

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
      })
    });

    if (response.ok) {
      setState({ status: "success", message: "Thanks! We will reach out within one business day." });
      form.reset();
      return;
    }

    setState({ status: "error", message: "We could not send your request. Please try again." });
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-panel">
      <h3 className="text-lg font-semibold text-slate-900">Tell us about your workflow</h3>
      <p className="mt-1 text-sm text-slate-600">Book a free call and get a custom automation plan.</p>

      <div className="mt-5 space-y-4">
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-slate-700">Name</span>
          <input
            required
            name="name"
            type="text"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-primary-200 transition focus:border-primary-500 focus:ring"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-slate-700">Email</span>
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-primary-200 transition focus:border-primary-500 focus:ring"
            placeholder="you@company.com"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-medium text-slate-700">Message</span>
          <textarea
            required
            name="message"
            rows={4}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-primary-200 transition focus:border-primary-500 focus:ring"
            placeholder="What repetitive process would you like to automate?"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={state.status === "loading"}
        className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-primary-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-600 disabled:cursor-not-allowed disabled:bg-primary-300"
      >
        {siteConfig.ctaLabel}
      </button>

      {state.message && (
        <p
          className={`mt-3 text-sm ${
            state.status === "error" ? "text-red-600" : "text-slate-600"
          }`}
          role="status"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
