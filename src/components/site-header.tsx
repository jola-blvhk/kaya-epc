import Image from "next/image";

export type SiteNavLink = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  navLinks: SiteNavLink[];
};

export function SiteHeader({ navLinks }: SiteHeaderProps) {
  return (
    <header className="relative border-b border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <a href="#" aria-label="Kaya EPC home">
            <Image
              src="/brand/kaya-logo.png"
              alt="Kaya EPC logo"
              width={200}
              height={62}
              className="h-8 w-auto object-contain"
              priority
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/85 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <details className="group relative md:hidden">
            <summary
              className="cursor-pointer list-none rounded-lg border border-white/20 bg-white/5 p-2 text-white/90 marker:content-none"
              aria-label="Toggle navigation menu"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </summary>
            <nav className="absolute right-0 z-20 mt-2 w-52 rounded-xl border border-white/15 bg-[#1E1E24]/95 p-2 shadow-xl backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
