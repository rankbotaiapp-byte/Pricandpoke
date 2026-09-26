/**
 * AXIOM HALO TEMPLATE — Scout packet for Prick and Poke Tattoo.
 * Paste this file over src/config/business.ts in a clone of
 * https://github.com/rankbotaiapp-byte/axiomHalotemplate
 * Then deploy that clone. Owner photos go in Desk after PIN 4242.
 *
 * Verdict: prime · Active tattoo/piercing booking business with online booking system (Jotform), phone contact available, walk-in friendly, and no evidence of existing AI receptionist. Strong booking-based model with regular social media presence and client reviews.
 * Source: linktr.ee/prickandpoketattoo
 * Hours as published: (not found — confirm in Desk)
 * Phone (not shown on the public shop until owner opts in): (458) 212-3544
 */
import type { HaloTheme, Niche } from "@/lib/axiom/types";


export const BUSINESS = {
  active: true,
  id: "prick-and-poke-tattoo",
  name: "Prick and Poke Tattoo",
  niche: "tattoo",
  tagline: "Custom • Fine-line • Floral • Memorial • Ornamental areola designs",
  about: "Robin creates meaningful tattoos including custom, fine-line, floral, memorial, and sensual ornamental areola art. Walk-ins and consults welcome. Services available in Grants Pass, OR and Olympia, WA.",
  halo: "ink",
  pin: "4242",
  locationName: "914A SW 6th St, Grants Pass, OR 97526",
  locationNote: "",
  heroImage: null,
  team: [
    {
      name: "Robin",
      role: "Artist",
      bio: ""
    }
  ],
  offerings: [
    {
      member: 1,
      title: "Custom Tattoo Consultation",
      description: "Consultation for custom tattoo design",
      minutes: 90,
      cents: 0,
      kind: "service"
    },
    {
      member: 1,
      title: "Fine-Line Tattoos",
      description: "Fine-line custom tattoo work",
      minutes: 90,
      cents: 0,
      kind: "service"
    },
    {
      member: 1,
      title: "Floral Tattoos",
      description: "Floral design tattoos",
      minutes: 90,
      cents: 0,
      kind: "service"
    },
    {
      member: 1,
      title: "Memorial Tattoos",
      description: "Memorial and commemorative tattoos",
      minutes: 90,
      cents: 0,
      kind: "service"
    }
  ],
  posts: []
} as const;
