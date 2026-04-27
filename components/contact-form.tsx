"use client";

import { FormEvent, useState } from "react";
import { useSitePreferences } from "@/lib/providers/site-preferences";

type FormState = { status: "idle" | "loading" | "success" | "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });
  const { dict } = useSitePreferences();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "loading", message: "..." });

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    if (!payload.name || !payload.email || !payload.message || !payload.company) {
      setState({ status: "error", message: dict.contact.form.error });
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setState({ status: "success", message: dict.contact.form.success });
      form.reset();
      return;
    }

    setState({ status: "error", message: dict.contact.form.error });
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6">
      <div className="grid gap-4">
        <input required name="name" placeholder={dict.contact.form.name} className="rounded-lg border border-violetBrand-300/40 bg-transparent px-3 py-2 text-sm outline-none" />
        <input required type="email" name="email" placeholder={dict.contact.form.email} className="rounded-lg border border-violetBrand-300/40 bg-transparent px-3 py-2 text-sm outline-none" />
        <input required name="company" placeholder={dict.contact.form.company} className="rounded-lg border border-violetBrand-300/40 bg-transparent px-3 py-2 text-sm outline-none" />
        <textarea required name="message" placeholder={dict.contact.form.message} rows={5} className="rounded-lg border border-violetBrand-300/40 bg-transparent px-3 py-2 text-sm outline-none" />
      </div>
      <button type="submit" className="mt-4 w-full rounded-lg bg-violetBrand-600 px-4 py-3 text-sm font-semibold text-white hover:bg-violetBrand-500" disabled={state.status === "loading"}>
        {dict.contact.form.submit}
      </button>
      {state.message && <p className={`mt-3 text-sm ${state.status === "error" ? "text-red-500" : "text-emerald-500"}`}>{state.message}</p>}
    </form>
  );
}
