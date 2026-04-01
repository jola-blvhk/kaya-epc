"use client";

import { RiArrowDropRightLine } from "react-icons/ri";

export function NewsletterForm() {
  return (
    <form
      className="mt-5 flex items-stretch gap-3"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email"
        className="min-h-12 w-full min-w-0 flex-1 rounded-full border border-white/25 bg-white/[0.03] px-5 text-sm text-white placeholder:text-white/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] outline-none transition focus:border-white/45 focus:ring-1 focus:ring-white/20"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/35 bg-white/[0.01] text-white backdrop-blur-[6px] transition hover:border-white/55 hover:bg-white/[0.04] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.22),rgba(255,255,255,0.05)_40%,transparent_70%)] before:bg-size-[90px_90px] before:[mask:radial-gradient(farthest-side,transparent_calc(100%-1.5px),#000_calc(100%-1.5px))] before:opacity-70"
      >
        <RiArrowDropRightLine className="relative z-[1] text-[28px] leading-none" />
      </button>
    </form>
  );
}
