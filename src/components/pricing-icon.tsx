import type { Icon } from "@phosphor-icons/react/lib";
import { Browser } from "@phosphor-icons/react/Browser";
import { Buildings } from "@phosphor-icons/react/Buildings";
import { AirplaneTilt } from "@phosphor-icons/react/AirplaneTilt";
import { GraduationCap } from "@phosphor-icons/react/GraduationCap";
import { UsersThree } from "@phosphor-icons/react/UsersThree";
import { ForkKnife } from "@phosphor-icons/react/ForkKnife";
import { HouseLine } from "@phosphor-icons/react/HouseLine";
import { Bed } from "@phosphor-icons/react/Bed";
import { Newspaper } from "@phosphor-icons/react/Newspaper";
import { FirstAid } from "@phosphor-icons/react/FirstAid";
import { Package } from "@phosphor-icons/react/Package";
import { ShoppingCart } from "@phosphor-icons/react/ShoppingCart";
import { CalendarDots } from "@phosphor-icons/react/CalendarDots";
import { IdentificationCard } from "@phosphor-icons/react/IdentificationCard";
import { Ticket } from "@phosphor-icons/react/Ticket";
import { CalendarCheck } from "@phosphor-icons/react/CalendarCheck";
import { ChartLineUp } from "@phosphor-icons/react/ChartLineUp";
import { FlowArrow } from "@phosphor-icons/react/FlowArrow";
import { Bank } from "@phosphor-icons/react/Bank";
import { Code } from "@phosphor-icons/react/Code";
import type { PricingIcon as PricingIconName } from "@/lib/pricing-catalog";

const icons: Record<PricingIconName, Icon> = {
  landing: Browser, company: Buildings, travel: AirplaneTilt, education: GraduationCap,
  organization: UsersThree, culinary: ForkKnife, property: HouseLine, hotel: Bed,
  media: Newspaper, healthcare: FirstAid, catalog: Package, commerce: ShoppingCart,
  event: CalendarDots, registration: IdentificationCard, ticketing: Ticket,
  booking: CalendarCheck, business: ChartLineUp, operations: FlowArrow,
  government: Bank, custom: Code,
};

export function PricingIcon({ name, className }: { name: PricingIconName; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" className={className} weight="duotone" />;
}
