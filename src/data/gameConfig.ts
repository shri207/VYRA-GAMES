export interface GameFeature {
  id: string;
  title: string;
  description: string;
  isVerified: boolean;
}

export interface CharacterSkin {
  id: string;
  name: string;
  theme: string;
  description: string;
}

export interface GameData {
  id: string;
  title: string;
  tagline: string;
  eyebrow: string;
  genre: string;
  platforms: string[];
  status: string;
  statusBadge: string;
  engine: string;
  description: string;
  synopsis: string;
  coverImage: string;
  bannerImage: string;
  playtestUrl?: string;
  features: GameFeature[];
  characterSkins: CharacterSkin[];
  systemSpecs: {
    platform: string;
    osRequirement: string;
    ram: string;
    storage: string;
    input: string;
  };
}

export const CM_VIJAY_GAME: GameData = {
  id: 'cm-vijay-street-battle',
  title: 'CM Vijay – Street Battle',
  tagline: 'Rooted in Tamil Street Culture. Built for Hard-Hitting 2D Action.',
  eyebrow: 'FEATURED PROJECT',
  genre: '2D Beat \'Em Up / Street Combat Action',
  platforms: ['Android (Initial Target)', 'PC (Future Consideration)'],
  status: 'In Active Development',
  statusBadge: 'Closed Playtest Pre-Registration',
  engine: 'Godot Engine 4 (2D Physics & Animation State Machines)',
  description:
    'Step into a stylized action experience featuring colorful 2D visuals, character-inspired designs, challenging enemy encounters, and street-combat energy rooted in Tamil pop culture.',
  synopsis:
    'When corrupt forces overtake the city quarters and historic streets, a charismatic people\'s champion takes a stand. Battle through bustling market crossroads, temple avenues, and urban flyovers in classic arcade-style side-scrolling beat \'em up action.',
  coverImage: '/images/cm-vijay-cover.svg?v=2',
  bannerImage: '/images/cm-vijay-cover.svg?v=2',
  features: [
    {
      id: 'combat',
      title: 'Action-Packed 2D Combat',
      description: 'Fluid combo chaining, heavy knockdown punches, dodge mechanics, and signature finisher strikes crafted in Godot 2D.',
      isVerified: true,
    },
    {
      id: 'enemies',
      title: 'Distinctive Enemy Encounters',
      description: 'Brawler mobs, riot-baton enforcers, and dynamic stage minibosses requiring reactive counter-attacks.',
      isVerified: true,
    },
    {
      id: 'skins',
      title: 'Thematic Character Outfits',
      description: 'Multiple outfit inspirations celebrating iconic Tamil cinema action styles and festival attire.',
      isVerified: true,
    },
    {
      id: 'controls',
      title: 'Mobile-Optimized Touch Controls',
      description: 'Responsive virtual d-pad and tactile touch action buttons designed specifically for mid-range Android hardware.',
      isVerified: true,
    },
    {
      id: 'audio',
      title: 'High-Energy Street Audio',
      description: 'Percussive local drum rhythms, energetic cheering crowds, and crisp combat hit soundscapes.',
      isVerified: true,
    },
  ],
  characterSkins: [
    {
      id: 'peoples-leader',
      name: 'Champion White Kurta',
      theme: 'Classic Signature',
      description: 'Crisp white rolled-up kurta shirt with ceremonial red and black angavastram draped over the shoulder.',
    },
    {
      id: 'street-fighter',
      name: 'Madurai Black Cargo',
      theme: 'Tactical Urban',
      description: 'Dark utility jacket with rolled sleeves and reinforced combat boots built for gritty alley brawls.',
    },
    {
      id: 'festival-dhoti',
      name: 'Festival Silk Veshti',
      theme: 'Traditional Heritage',
      description: 'Traditional gold-bordered veshti paired with festive red sash for high-kicking martial agility.',
    },
  ],
  systemSpecs: {
    platform: 'Android Mobile',
    osRequirement: 'Android 9.0 (Pie) or higher',
    ram: '3GB RAM minimum (4GB recommended)',
    storage: '350MB free space',
    input: 'Touchscreen virtual gamepad (Bluetooth controllers supported in testing)',
  },
};

export const STUDIO_PHILOSOPHY = [
  {
    number: '01',
    title: 'Story',
    quote: 'Every memorable game begins with an idea worth exploring.',
    description:
      'We aim to build experiences that spark curiosity, honor local cultural narratives, and leave a lasting impression on players across the world.',
  },
  {
    number: '02',
    title: 'Gameplay',
    quote: 'Responsive controls, satisfying hits, and replayable encounters.',
    description:
      'We focus on the micro-details that make playing enjoyable: input snappiness, tactile impact weight, fair challenge curves, and intuitive mechanics.',
  },
  {
    number: '03',
    title: 'Craft',
    quote: 'Every visual and audio element contributes to the atmosphere.',
    description:
      'From hand-drawn character silhouette concepts to Godot engine animation trees and architectural backdrop research, every pixel is intentional.',
  },
];

export const PLANNED_DEVLOG_TOPICS = [
  {
    id: 'godot-combat',
    title: 'Engineering 2D Combat States in Godot 4',
    category: 'Game Engine Architecture',
    summary: 'A deep look into our finite state machine (FSM) implementation for hit-stun, combo branch buffering, and frame-accurate collision shapes.',
    readTime: '6 min read',
    status: 'Upcoming Post',
  },
  {
    id: 'temple-art',
    title: 'Temple Gopuram Level Art & Sunset Shaders',
    category: 'Art & Environment',
    summary: 'How we researched historic Thanjavur and Madurai temple architecture to build atmospheric parallax backgrounds with warm golden-hour lighting.',
    readTime: '5 min read',
    status: 'Upcoming Post',
  },
  {
    id: 'sprite-rigging',
    title: 'Fluid 2D Sprite Rigging for Street Brawlers',
    category: 'Animation & Rigging',
    summary: 'Balancing keyframed impact weight with cut-out bone deformation to achieve punchy, cinematic motion on mobile screens.',
    readTime: '7 min read',
    status: 'Upcoming Post',
  },
];
