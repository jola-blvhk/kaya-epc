"use client";

import { useId } from "react";
import { FaLinkedinIn } from "react-icons/fa6";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.5 4.5h3l1.5 4.5-2 1.5c1.2 2.4 3.4 4.6 5.8 5.8l1.5-2 4.5 1.5v3c0 .8-.6 1.5-1.4 1.6C14.8 21 6 12.2 6 5.9c0-.8.7-1.4 1.5-1.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 6.5h16v11H4v-11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4 7.5 12 13l8-5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function FooterSealBadge() {
  const id = useId();
  const pathId = `footer-seal-path-${id.replace(/:/g, "")}`;

  return (
    <div
      className="flex h-40 w-40 shrink-0 items-center justify-center text-white"
      aria-hidden
    >
      <svg viewBox="0 0 160 160" className="h-full w-full">
        <circle
          cx="80"
          cy="80"
          r="74"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.2"
          strokeDasharray="5 7"
        />
        <defs>
          <path
            id={pathId}
            d="M 80,80 m -56,0 a 56,56 0 1,1 112,0 a 56,56 0 1,1 -112,0"
            fill="none"
          />
        </defs>
        <text fill="rgba(255,255,255,0.85)" fontSize="7" letterSpacing="0.18em">
          <textPath href={`#${pathId}`} startOffset="25%">
            Kaya • EPC • Limited •
          </textPath>
        </text>
        <g transform="translate(80 80)">
          <circle r="22" fill="white" />
          <path
            d="M-8 2 L-2 8 L8 -6"
            fill="none"
            stroke="#1E1E24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

type SiteFooterProps = {
  id?: string;
};

export function SiteFooter({ id }: SiteFooterProps) {
  return (
    <footer
      id={id}
      className="border-t border-white/10 bg-white/[0.02] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div className="max-w-xl">
            <div className="text-4xl font-bold tracking-tight sm:text-5xl">
              Káyá
            </div>
            <div className="mt-2 text-[11px] tracking-[0.42em] text-white/70">
              EPC LIMITED
            </div>
            <p className="mt-6 text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              Kaya oil supports the entire lifecycle of your plant with various
              products &amp; services that keep your plant MTBF low, optimized
              and productive.
            </p>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-grid h-12 w-12 place-items-center rounded-full border border-white/35 text-white transition hover:border-white/55 hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="h-6 w-6" aria-hidden />
            </a>

            <div className="mt-10 space-y-4 text-sm text-white/85 sm:text-base">
              <div className="flex items-center gap-2.5">
                <PhoneIcon className="h-5 w-5 shrink-0 text-white" />
                <span className="text-white/50" aria-hidden>
                  •
                </span>
                <a href="tel:+2349123456355" className="hover:text-white">
                  +234 912 3456 355
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MailIcon className="h-5 w-5 shrink-0 text-white" />
                <span className="text-white/50" aria-hidden>
                  •
                </span>
                <a
                  href="mailto:info@kayaoil.com"
                  className="underline decoration-white/40 underline-offset-2 hover:decoration-white"
                >
                  info@kayaoil.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                <span className="text-white/50" aria-hidden>
                  •
                </span>
                <span className="leading-relaxed">
                  3A Gbenga Ademulegun Lane, Parkview, Ikoyi, Lagos.
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-start lg:justify-end lg:pb-2">
            <FooterSealBadge />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs text-white/45">
          © {new Date().getFullYear()} Kaya EPC Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
