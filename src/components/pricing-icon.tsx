import type { Icon } from "@phosphor-icons/react/lib";
import { Browser } from "@phosphor-icons/react/Browser";
import { Buildings } from "@phosphor-icons/react/Buildings";
import { MegaphoneSimple } from "@phosphor-icons/react/MegaphoneSimple";
import { AirplaneTilt } from "@phosphor-icons/react/AirplaneTilt";
import { GraduationCap } from "@phosphor-icons/react/GraduationCap";
import { Package } from "@phosphor-icons/react/Package";
import { ShoppingCart } from "@phosphor-icons/react/ShoppingCart";
import { IdentificationCard } from "@phosphor-icons/react/IdentificationCard";
import { Ticket } from "@phosphor-icons/react/Ticket";
import { CalendarCheck } from "@phosphor-icons/react/CalendarCheck";
import { ChartLineUp } from "@phosphor-icons/react/ChartLineUp";
import { FlowArrow } from "@phosphor-icons/react/FlowArrow";
import { Code } from "@phosphor-icons/react/Code";
import type { PricingIcon as PricingIconName } from "@/lib/pricing-catalog";

const icons: Record<PricingIconName, Icon> = {
  landing: Browser, company: Buildings, sales: MegaphoneSimple, travel: AirplaneTilt, education: GraduationCap,
  catalog: Package, commerce: ShoppingCart, registration: IdentificationCard, ticketing: Ticket,
  booking: CalendarCheck, business: ChartLineUp, operations: FlowArrow,
  custom: Code,
};

export function PricingIcon({ name, className }: { name: PricingIconName; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" className={className} weight="duotone" />;
}
