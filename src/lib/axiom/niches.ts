import type { HaloTheme, Niche } from "./types";

export const NICHES: Record<
  Niche,
  {
    label: string;
    teamLabel: string;
    teamSingular: string;
    offeringLabel: string;
    offeringSingular: string;
    bookLabel: string;
    locationLabel: string;
    halo: HaloTheme;
    hero: string;
    askPlaceholder: string;
    deskHint: string;
    setupSteps: string[];
  }
> = {
  contractor: {
    label: "General contractor",
    teamLabel: "Crew",
    teamSingular: "Lead",
    offeringLabel: "Jobs",
    offeringSingular: "Job",
    bookLabel: "Book a site visit",
    locationLabel: "Service area",
    halo: "spectrum",
    hero: "/hero-contractor.svg",
    askPlaceholder: "Kitchen remodel estimate? When can you visit the site…",
    deskHint:
      "For builders, remodelers, and trade crews. Add each lead, jobs and prices. Customers book a site visit or estimate.",
    setupSteps: [
      "Set the company name and hours",
      "Upload a job-site or brand photo",
      "Add each crew lead",
      "List jobs and estimate types",
      "Set the service area",
      "Give each lead a PIN",
    ],
  },
  barber: {
    label: "Barber",
    teamLabel: "Barbers",
    teamSingular: "Barber",
    offeringLabel: "Services",
    offeringSingular: "Service",
    bookLabel: "Book a chair",
    locationLabel: "Shop",
    halo: "ember",
    hero: "/hero-barber.jpg",
    askPlaceholder: "Who’s on the chair tonight? Skin fade price…",
    deskHint: "Add each barber, their photo, and an album of cuts. Customers book a person.",
    setupSteps: [
      "Set the shop name and hours",
      "Upload the shop photo",
      "Add each barber",
      "Put a photo on their block",
      "Upload cuts into their album",
      "Give each chair a PIN",
    ],
  },
  tattoo: {
    label: "Tattoo",
    teamLabel: "Artists",
    teamSingular: "Artist",
    offeringLabel: "Work",
    offeringSingular: "Session",
    bookLabel: "Book a session",
    locationLabel: "Studio",
    halo: "ink",
    hero: "/hero-tattoo.jpg",
    askPlaceholder: "Who’s taking flash Friday? Custom consult…",
    deskHint: "Add each artist, their photo, and an album of work. Customers book a session.",
    setupSteps: [
      "Set the studio name and hours",
      "Upload the studio photo",
      "Add each artist",
      "Put a photo on their block",
      "Upload healed work and flash",
      "Give each artist a PIN",
    ],
  },
  food_truck: {
    label: "Food",
    teamLabel: "Kitchen",
    teamSingular: "Window",
    offeringLabel: "Menu",
    offeringSingular: "Plate",
    bookLabel: "Reserve a pickup",
    locationLabel: "Today's lot",
    halo: "solstice",
    hero: "/hero-food.jpg",
    askPlaceholder: "Where are you parked? Is the chili on tonight…",
    deskHint: "Post today’s lot first. Then add plates and prices. People order pickup, not a chair.",
    setupSteps: [
      "Set the truck name",
      "Upload a photo of the truck",
      "Pin today’s lot",
      "Add each plate and price",
      "Turn pickup holds on",
      "Give the window a PIN if you want staff in Desk",
    ],
  },
};

/** Order on Factory / Type pick: contractor first, then the original three. */
export const NICHE_LIST: Niche[] = ["contractor", "barber", "tattoo", "food_truck"];

export function isNiche(value: string): value is Niche {
  return (
    value === "contractor" ||
    value === "barber" ||
    value === "tattoo" ||
    value === "food_truck"
  );
}

/** Default hero photo for this niche. Override wins when the shop sets its own. */
export function heroFor(niche: Niche, override?: string | null): string {
  if (override && override.trim()) return override;
  return NICHES[niche].hero;
}
