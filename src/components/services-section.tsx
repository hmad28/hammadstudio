import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";

const services = [
  { number: "01", title: "Websites", description: "Marketing sites, company profiles, campaigns and event platforms." },
  { number: "02", title: "Commerce", description: "Storefronts, checkout, payments and order experiences." },
  { number: "03", title: "Business Systems", description: "Dashboards, booking, CRM and operational software." },
  { number: "04", title: "Custom Software", description: "MVPs, SaaS products and custom web applications." },
];

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-[#f4f2ec] pb-20 text-[#080808] sm:pb-20 lg:pb-24">
      <div className="site-container reveal">
        <div className="grid gap-4 pb-9 lg:grid-cols-12 lg:gap-6 lg:pb-9">
          <div className="lg:col-span-3"><span className="label-mono text-[#747471]">Services / 02</span></div>
          <div className="lg:col-span-9"><h2 className="text-[clamp(2.25rem,4vw,3.8rem)] font-[500] leading-none tracking-[-.045em]">What we do.</h2></div>
        </div>

        <div className="border-t border-black/15">
          {services.map((service) => (
            <Link key={service.number} href="/services" className="group grid grid-cols-[44px_1fr_30px] items-start gap-x-3 gap-y-3 border-b border-black/15 py-6 transition-colors duration-300 hover:bg-black/[.025] sm:grid-cols-[70px_1fr_36px] sm:py-7 lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-2 lg:py-7">
              <span className="font-[family-name:var(--font-geist-mono)] text-[0.7rem] text-[#8a8a86] transition-colors group-hover:text-[#080808] lg:col-span-1">{service.number}</span>
              <h3 className="text-[1.65rem] font-[500] leading-none tracking-[-.035em] transition-transform duration-300 ease-out group-hover:translate-x-2 sm:text-[2rem] lg:col-span-5 lg:text-[2.4rem]">{service.title}</h3>
              <p className="col-start-2 max-w-[430px] text-sm leading-[1.55] text-[#666662] sm:text-[0.95rem] lg:col-span-5 lg:col-start-auto">{service.description}</p>
              <ArrowUpRightIcon className="button-arrow col-start-3 row-start-1 h-4 w-4 justify-self-end lg:col-span-1 lg:col-start-auto lg:row-start-auto lg:h-5 lg:w-5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}