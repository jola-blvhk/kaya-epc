import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

function GearIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10.4 4.2h3.2l.5 2.1c.6.2 1.1.5 1.6.9l2-.8 1.6 2.7-1.7 1.3c.1.6.1 1.2 0 1.8l1.7 1.3-1.6 2.7-2-.8c-.5.4-1 .7-1.6.9l-.5 2.1h-3.2l-.5-2.1c-.6-.2-1.1-.5-1.6-.9l-2 .8-1.6-2.7 1.7-1.3c-.1-.6-.1-1.2 0-1.8L4.2 9.2l1.6-2.7 2 .8c.5-.4 1-.7 1.6-.9l.5-2.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function AspirationSealBadge({ className }: { className?: string }) {
  return (
    <div
      className={["relative flex h-40 w-40 items-center justify-center", className ?? ""].join(
        " ",
      )}
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
            id="aspirationSealTextPath"
            d="M 80,80 m -56,0 a 56,56 0 1,1 112,0 a 56,56 0 1,1 -112,0"
            fill="none"
          />
        </defs>
        <text fill="rgba(255,255,255,0.85)" fontSize="7" letterSpacing="0.18em">
          <textPath href="#aspirationSealTextPath" startOffset="25%">
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

export default function Home() {
  const navLinks = [
 
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Our Services", href: "#services" },
    
  ];

  const products: {
    title: string;
    image: string;
    imageAlt: string;
    lines: string[];
  }[] = [
    {
      title: "Gas Processing",
      image: "/products/gas-processing.webp",
      imageAlt:
        "Aerial view of industrial storage tanks, rail, and port terminal",
      lines: [
        "Natural Gas Treatment",
        "Bed Supports",
        "Process Equipments",
        "Catalyst Intermediates",
      ],
    },
    {
      title: "Chemicals & Additives",
      image: "/products/chemicals-additives.webp",
      imageAlt: "Glass molecular structure on a soft blue-grey background",
      lines: ["Chemicals", "Additives", "Purifications", "Air Drying"],
    },
    {
      title: "Refinery & Petrochemicals",
      image: "/products/refinery-petrochemicals.webp",
      imageAlt:
        "Low-angle view of stainless steel industrial storage silos against sky",
      lines: [
        "Catalysts, Adsorbents & Specialty Products",
        "Process Equipment & Modular Units",
        "Chemical & Additives",
        "Computational Fluid Dynamics (Fluidized Beds)",
      ],
    },
    {
      title: "Computational Fluid Dynamics",
      image: "/products/cfd.webp",
      imageAlt: "Abstract fluid surface with teal water and warm reflected light",
      lines: [
        "Fluidized Bed Troubleshooting",
        "FCC Units/Refining Process Optimization",
        "Turn Around Maintenance (TAM)",
        "Clean Technologies & Renewables",
      ],
    },
  ];

  /** Replace `public/about/aspirations.png` with your single composite image. */
  const aspirationsImage = "/about/aspirations.png";

  /** Our Drive section — gallery visual (replace in `public/services/` if needed). */
  const ourDriveImage = "/services/our-drive.png";

  const serviceHighlights = [
    { title: "Engineering Services", icon: "/icons/engineering-services.svg" },
    { title: "Procurement Services", icon: "/icons/procurement-services.svg" },
    { title: "General Consultancy", icon: "/icons/general-consultancy.svg" },
    { title: "Construction Services", icon: "/icons/construction-services.svg" },
    { title: "Logistic Services", icon: "/icons/logistic-services.svg" },
    { title: "Maintenance Services", icon: "/icons/maintenance-services.svg" },
  ];

  return (
    <div className="min-h-screen bg-transparent text-foreground">
      <div className="relative flex min-h-screen flex-col overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero/kaya-hero.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_10%,rgba(255,255,255,0.10)_0%,transparent_55%),radial-gradient(ellipse_at_80%_15%,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.65))]" />

        <SiteHeader navLinks={navLinks} />

        <section className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-10 pt-10 sm:pt-14">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-7">
              <Image
                src="/brand/kaya-hero-logo.svg"
                alt="Kaya EPC Limited logo"
                width={271}
                height={230}
                loading="eager"
                className="h-auto w-[170px] sm:w-[250px] md:w-full max-w-[420px] object-contain"
              />
              <p className="mt-6 max-w-2xl leading-[190%] text-sm md:text-base md:leading-[200%]  tracking-[15%] ">
                We are a startup performance driven EPC Company focused on
                helping our client to meet their goals and objectives through
                our experienced management and smart service delivery
                strategies. We minimise our clients operational risks by
                providing high value products & services through our world
                class partners.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:muhammed@kaya-epc.com"
                  className="inline-flex rounded-full border border-white/40 bg-transparent px-10 py-3.5 text-sm font-medium leading-[200%] tracking-[15%] text-white transition hover:border-white/60 hover:bg-white/6"
                >
                  Contact us
                </a>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="relative hidden items-start justify-end md:flex">
                <Image
                  src="/hero/hero-right-graphic.svg"
                  alt=""
                  width={500}
                  height={500}
                  priority
                  className="h-auto w-full max-w-[500px] object-contain"
                  aria-hidden="true"
                />
                <div className="absolute right-32 top-24 max-w-[220px] text-left text-4xl leading-tight">
                  Future
                  <br />
                  Energy &
                  <br />
                  Renewables
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>

      <section className="" id="services">
        <div className="mx-auto max-w-7xl  py-10 sm:py-12">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {serviceHighlights.map((service) => (
              <article
                key={service.title}
                className="flex flex-col items-center text-center"
              >
                <div className="flex  items-center justify-center text-white/35">
                  {service.icon ? (
                    <Image
                      src={service.icon}
                      alt=""
                      width={89}
                      height={89}
                      className="h-full w-full "
                      aria-hidden="true"
                    />
                  ) : (
                    <GearIcon className="h-8 w-8" />
                  )}
                </div>
                <h3 className="mt-8 text-sm font-medium tracking-[9%] leading-[150%] ">
                  {(() => {
                    const [firstWord, ...restWords] = service.title.split(" ");
                    return restWords.length > 0 ? (
                      <>
                        {firstWord}
                        <br />
                        {restWords.join(" ")}
                      </>
                    ) : (
                      service.title
                    );
                  })()}
                </h3>
                <button
                  type="button"
                  aria-label={`View ${service.title}`}
                  className="relative mt-8 grid h-11 w-11 place-items-center rounded-full border border-white/35 bg-white/[0.01] text-white/90 backdrop-blur-[6px] transition hover:border-white/60 hover:bg-white/[0.04] before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.22),rgba(255,255,255,0.05)_40%,transparent_70%)] before:[background-size:90px_90px] before:[mask:radial-gradient(farthest-side,transparent_calc(100%-1.5px),#000_calc(100%-1.5px))] before:opacity-70"
                >
                  <RiArrowDropRightLine className="text-[28px] leading-none" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <main className="relative mx-auto max-w-7xl space-y-16 px-6 pb-20 pt-16 sm:space-y-20 sm:pt-20 md:space-y-24 md:pt-24 lg:space-y-[122px] lg:pt-[122px] xl:space-y-[162px] xl:pt-[162px]">
        <section id="about" className="relative">
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-[122px]">
            <div className="relative z-0">
              <h2 className="text-2xl font-medium tracking-[15%] leading-[200%]  sm:text-[32px]">
                Aspirations &amp; Core Value
              </h2>
              <p className="mt-1 text-sm leading-7 font-light tracking-[15%] sm:text-base sm:leading-8">
                We will achieve our vision by catering to customer&apos;s need
                with high quality and cost-effective products and services and
                concern for people and safety, with dedicated and discipline work
                force and by practicing participative style of leadership and
                management.
              </p>
              <ul className="mt-8 text-sm leading-[200%] font-light tracking-[15%] sm:text-base">
                {[
                  "Customer Centrism",
                  "Respect",
                  "Passion & Commitment.",
                  "Trust & Freedom",
                  "Learning & Adaptability",
                  "Team Work",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-3.5 h-1 w-1 shrink-0 rounded-full bg-white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-0">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-white/15 sm:aspect-[16/10]">
                <Image
                  src={aspirationsImage}
                  alt="Aspirations and core values"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-[42%] z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
              <AspirationSealBadge />
            </div>
          </div>
        </section>

        <section
          id="services"
          className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-[122px]"
        >
          <div className="relative order-2 min-h-[280px] w-full overflow-hidden rounded-2xl border border-white/10 sm:min-h-[360px] lg:order-1 lg:min-h-[420px]">
            <Image
              src={ourDriveImage}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>

          <div className="order-1 flex flex-col justify-center lg:order-2">
            <h2 className="text-2xl font-medium tracking-[15%] leading-[200%]  sm:text-[32px]">
              Our Drive
            </h2>
            <p className="mt-1 text-sm leading-7 font-light tracking-[15%] sm:text-base sm:leading-8">
              We pursue safe, reliable delivery across energy and industrial
              projects—aligning execution discipline with clear communication,
              strong partnerships, and measurable performance for every client we
              serve.
            </p>
            {/* <p className="mt-10 text-sm leading-6 text-white/60">
              Want to stay updated on our services?{" "}
              <span className="font-medium text-white/85">Subscribe Now!</span>
            </p>
            <NewsletterForm /> */}
          </div>
        </section>

        <section id="products" className="text-white">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">Products</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-14 gap-y-12 sm:grid-cols-2 lg:gap-x-20 [&>*]:min-w-0">
            {products.map((p) => (
              <article key={p.title} className="flex flex-col">
                <div className="h-32 w-32 shrink-0 overflow-hidden rounded-xl sm:h-36 sm:w-36">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    width={320}
                    height={320}
                    unoptimized
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="leading-[200%] text-xl font-medium tracking-[15%] sm:text-[32px]">
                  {p.title === "Refinery & Petrochemicals" ? (
                    <>
                      Refinery &amp;
                      <br />
                      Petrochemicals
                    </>
                  ) : (
                    p.title
                  )}
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm leading-[200%] font-light tracking-[15%] sm:text-[15px]">
                  {p.lines.map((l) => (
                    <li key={l} className="flex items-start gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <a
              href="#contact"
              className=" rounded-full border border-white/40 bg-transparent px-10 py-3.5 text-sm font-medium tracking-[15%] leading-[200%] text-white transition hover:border-white/60 hover:bg-white/[0.06]"
            >
              Contact Us
             
            </a>
          </div>
        </section>
      </main>

      <SiteFooter id="contact" />
    </div>
  );
}
