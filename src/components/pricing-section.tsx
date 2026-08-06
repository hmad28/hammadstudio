import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";

const pricing = [
  { title: "Website", price: "Rp3.5M", description: "Landing pages and focused websites." },
  { title: "Business Website", price: "Rp6.5M", description: "Complete websites for growing businesses." },
  { title: "Custom Software", price: "Rp12.5M", description: "Dashboards, systems and custom applications." },
];

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t border-black/10 bg-[#f4f2ec] py-20 text-[#080808] sm:py-24">
      <div className="site-container reveal">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-3">
            <span className="label-mono text-[#747471]">Pricing / 04</span>
            <h2 className="mt-4 max-w-[250px] text-[2rem] font-[500] leading-[1.05] tracking-[-.04em] sm:text-[2.4rem]">Clear pricing.<br />No surprises.</h2>
            <Link href="/services" className="group mt-6 inline-flex items-center gap-2 text-xs font-semibold">View full pricing <ArrowUpRightIcon className="button-arrow h-3.5 w-3.5" /></Link>
          </div>

          <div className="border-t border-black/15 lg:col-span-9 lg:grid lg:grid-cols-3 lg:border-t-0">
            {pricing.map((item, index) => (
              <Link key={item.title} href="/services" className={`group relative block border-b border-black/15 py-6 transition-colors hover:bg-black/[.025] lg:border-b-0 lg:border-l lg:px-8 lg:py-3 ${index === 0 ? "lg:border-black/15" : "lg:border-black/15"}`}>
                <div className="flex items-start justify-between gap-4 lg:block">
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-4 text-[0.66rem] text-[#747471]">From</p>
                    <p className="text-[2rem] font-[500] leading-none tracking-[-.04em] transition-transform duration-300 group-hover:translate-x-0.5">{item.price}</p>
                    <p className="mt-5 max-w-[220px] text-xs leading-[1.5] text-[#666662]">{item.description}</p>
                  </div>
                  <ArrowUpRightIcon className="button-arrow h-4 w-4 lg:absolute lg:right-6 lg:top-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}