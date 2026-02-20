export interface Leader {
  id: number;
  name: string;
  title: string;
  message: string;
  image: string;
  reverse?: boolean;
}

export const leadershipData: Leader[] = [
  {
    id: 1,
    name: "Kiran Mazumdar-Shaw",
    title: "Chairperson",
    message:
      "Our commitment to scientific excellence and patient-centric innovation drives us to push the boundaries of drug discovery and development. We are dedicated to creating long-term value for all our stakeholders through sustainable and ethical practices.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Peter Bains",
    title: "Managing Director & CEO",
    message:
      "Syngene is well positioned for accelerating growth and transformation, with the potential to become a leader in serving the global biopharma and wider life sciences outsourcing market models.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    // reverse: true,
  },
  {
    id: 3,
    name: "Deepak Jain",
    title: "Chief Scientific Officer",
    message:
      "Despite sectoral headwinds, Syngene delivered resilient performance with strong cash generation of Rs 1,168 Cr, fully funding our USD 85 Mn capex including a strategic U.S. biologics facility acquisition, thus positioning us for long-term growth in the high-potential CRDMO market.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  },
];
