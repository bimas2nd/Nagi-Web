export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
  philosophy1: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  philosophy2: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
  vision: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
  project1: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=80',
  project2: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
  project3: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  project4: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
  portrait1: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  portrait2: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  portrait3: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  portrait4: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
}

export const NAV_ITEMS = [
  { id: '01', label: 'Philosophy', href: '#philosophy', image: IMAGES.philosophy1 },
  { id: '02', label: 'Vision & Mandate', href: '#vision', image: IMAGES.vision },
  { id: '03', label: 'Capabilities', href: '#capabilities', image: IMAGES.project3 },
  { id: '04', label: 'Landmarks', href: '#landmarks', image: IMAGES.project2 },
  { id: '05', label: 'Leadership', href: '#leadership', image: IMAGES.portrait1 },
  { id: '06', label: 'Contact', href: '#contact', image: IMAGES.hero },
]

export const DIVISIONS = [
  {
    id: '01',
    title: 'Spatial Architecture & Masterplanning',
    image: IMAGES.project1,
    scope: ['Urban masterplanning', 'Civic and cultural landmarks', 'Adaptive reuse strategies', 'Interior spatial narratives'],
    clients: 'Rijksmuseum Foundation, Port of Rotterdam, Mori Building Co.',
    leadership: 'Led by Elena van der Meer, Managing Partner â€” Architecture',
  },
  {
    id: '02',
    title: 'Intelligent Building Systems & IoT',
    image: IMAGES.project3,
    scope: ['Climate telemetry & BMS', 'Zero-trust digital infrastructure', 'Predictive maintenance AI', 'Occupant experience platforms'],
    clients: 'UBS Asset Management, Schiphol Group, NTT Urban Development',
    leadership: 'Led by Kenji Sato, Chief Technology Officer',
  },
  {
    id: '03',
    title: 'Digital Brand & Interactive Experiences',
    image: IMAGES.philosophy2,
    scope: ['Immersive spatial media', 'Corporate identity systems', 'Wayfinding & environmental graphics', 'Interactive installations'],
    clients: 'Aesop, Loewe Foundation, National Gallery Singapore',
    leadership: 'Led by Noor de Vries, Creative Director',
  },
  {
    id: '04',
    title: 'Sustainable Material R&D Ventures',
    image: IMAGES.project4,
    scope: ['Regenerative material labs', 'Carbon lifecycle auditing', 'Circular construction systems', 'Biophilic facade engineering'],
    clients: 'European Climate Foundation, Takenaka Corporation, Arup',
    leadership: 'Led by Dr. Hana Morimoto, Director of Material Futures',
  },
]

export const PROJECTS = [
  {
    id: 'p1',
    title: 'Amsterdam Canal Pavilion',
    location: 'Amsterdam, NL',
    year: '2024',
    image: IMAGES.project1,
    narrative: 'A restrained civic pavilion along the Prinsengracht that balances Dutch water heritage with autonomous climate systems. The structure operates as a living interface between public realm and digital stewardship.',
    metrics: ['4,200 mÂ² GFA', 'Net-zero operational carbon', 'BREEAM Outstanding', '18-month delivery'],
    testimonial: 'â€œNagi // Vander delivered a civic space that feels inevitableâ€”quietly intelligent and profoundly humane.â€ â€” City of Amsterdam',
  },
  {
    id: 'p2',
    title: 'Kyoto Monolith Sanctuary',
    location: 'Kyoto, JP',
    year: '2023',
    image: IMAGES.project2,
    narrative: 'A contemplative corporate retreat embedded in cedar woodland, where Japanese spatial precision meets invisible sensor networks. Every threshold is tuned for acoustic calm and thermal equilibrium.',
    metrics: ['2,800 mÂ² GFA', 'Passive cooling strategy', '96% local material sourcing', 'LEED Platinum'],
    testimonial: 'â€œA sanctuary where technology recedes and craft speaks. It has reshaped how our leadership gathers.â€ â€” Kyoei Holdings',
  },
  {
    id: 'p3',
    title: 'Zurich Autonomous HQ',
    location: 'Zurich, CH',
    year: '2025',
    image: IMAGES.project3,
    narrative: 'A headquarters for a global asset manager, orchestrating zero-trust infrastructure, predictive energy systems, and flexible work landscapes within a rigorously minimal envelope.',
    metrics: ['22,000 mÂ² GFA', '38% energy reduction', '5,000+ IoT endpoints', 'WELL Gold'],
    testimonial: 'â€œThe building anticipates us. It is the most composed and capable workplace we have ever occupied.â€ â€” Helvetia Capital',
  },
  {
    id: 'p4',
    title: 'Singapore Biophilic Tower',
    location: 'Singapore, SG',
    year: '2026',
    image: IMAGES.project4,
    narrative: 'A vertical ecosystem integrating regenerative facades, rainwater symbiosis, and adaptive shading. A prototype for equatorial corporate architecture that breathes with its climate.',
    metrics: ['41-storey mixed-use', '60% potable water offset', '12,000 mÂ² sky gardens', 'Green Mark Platinum'],
    testimonial: 'â€œAn audacious yet serene landmarkâ€”proof that density and ecology can coexist with grace.â€ â€” Straits Urban Development',
  },
]

export const LEADERS = [
  {
    name: 'Elena van der Meer',
    role: 'Managing Partner, Architecture',
    location: 'Amsterdam',
    image: IMAGES.portrait1,
    quote: 'â€œPermanence is not weightâ€”it is clarity of purpose.â€',
    bio: 'Former partner at OMA. Leads global masterplanning with a focus on civic permanence and regenerative urbanism across Europe.',
  },
  {
    name: 'Kenji Sato',
    role: 'Chief Technology Officer',
    location: 'Tokyo',
    image: IMAGES.portrait2,
    quote: 'â€œThe most advanced systems are the ones you never notice.â€',
    bio: 'Ex-NTT R&D lead. Pioneers invisible autonomous infrastructure, merging building intelligence with zero-trust digital ecosystems.',
  },
  {
    name: 'Noor de Vries',
    role: 'Creative Director',
    location: 'Amsterdam',
    image: IMAGES.portrait3,
    quote: 'â€œA brand should feel like a room you want to stay in.â€',
    bio: 'Award-winning experiential designer shaping spatial identities and interactive narratives for global cultural institutions.',
  },
  {
    name: 'Dr. Hana Morimoto',
    role: 'Director of Material Futures',
    location: 'Tokyo',
    image: IMAGES.portrait4,
    quote: 'â€œMaterials remember. We must choose what they remember.â€',
    bio: 'Materials scientist and architect leading R&D in regenerative composites, circular construction, and carbon lifecycle innovation.',
  },
]

export const MISSIONS = [
  {
    id: 'I',
    title: 'Timeless Spatial Permanence',
    desc: 'Designing corporate and civic environments using regenerative materials and acoustic calm.',
    detail: 'We pursue architecture that outlasts trend cyclesâ€”spaces composed for longevity, tactility, and human ease. Our material strategies prioritize local sourcing, low embodied carbon, and sensory warmth.',
    kpis: ['85% regenerative material specification', '40-year lifecycle design horizon', 'Acoustic comfort rating STC 55+'],
    image: IMAGES.philosophy1,
  },
  {
    id: 'II',
    title: 'Invisible Technological Autonomy',
    desc: 'Embedding AI, climate telemetry, and zero-trust networks seamlessly behind tactile surfaces.',
    detail: 'Intelligence should serve quietly. We integrate building systems, predictive climate control, and secure digital layers that disappear into the architectural fabric while elevating performance.',
    kpis: ['30â€“45% operational energy reduction', '99.99% systems uptime SLA', 'Zero-trust across 100% deployments'],
    image: IMAGES.project3,
  },
  {
    id: 'III',
    title: 'Cross-Cultural Craftsmanship',
    desc: 'Bridging Dutch architectural pragmatism with Japanese spatial precision (Ma).',
    detail: 'Our studios operate as one practice across continents. We combine pragmatic Dutch clarity with the Japanese reverence for interval, proportion, and restraintâ€”crafting environments that feel both exacting and alive.',
    kpis: ['4 integrated global studios', 'Bilingual design leadership', '120+ cross-border collaborations'],
    image: IMAGES.project2,
  },
]
