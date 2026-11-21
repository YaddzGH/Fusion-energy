/*
  Every string, number and seed record on the site lives here. Edit this file
  first. Pages and sections only lay it out.
*/

export const brand = {
  name: 'SatuArah Entertainment',
  short: 'SatuArah',
  tagline: 'Produksi film pelajar, dari naskah sampai tayang.',
  email: 'satuarent@gmail.com',
  pressEmail: 'satuarent@gmail.com',
  phone: '+62 858-5921-0894',
  site: 'https://satuarah-entertainment.site.je',
  address: ['Wadah kru produksi film pelajar', 'Indonesia'],
}

/*
  Every photo and render on the site goes through this one map. The files in
  public/images are generated stand-ins: swap in real photography by dropping
  files there and changing the paths here. Renders marked "cut-out" need a
  transparent background. Diagrams, icons and the reactor explorer stay SVG.
*/
export const photos = {
  /** Home hero: one production still, shot behind the camera. */
  set: '/images/set.jpg',
  /** Shown through the thermal filter (ThermalImage), so any portrait works. */
  crew: '/images/crew-satuarah.jpg',
  /** Cut-out render of the reactor module: home hero and the prototype card. */
  reactor: '/images/reactor.webp',
  /** Cut-out holographic vessels: "Who we’re building for" and the Applications hero. */
  shipCargo: '/images/ship-cargo.webp',
  shipFrigate: '/images/ship-frigate.webp',
  /** Applications page: one photo per market. */
  seaCargo: '/images/sea-cargo.webp',
  seaFrigate: '/images/sea-frigate.webp',
  seaOffshore: '/images/sea-offshore.webp',
  /** News covers (posts[].image). */
  newsCoil: '/images/news-coil.webp',
  newsStellarator: '/images/news-stellarator.webp',
  newsRotterdam: '/images/news-rotterdam.webp',
  /** Careers page header. */
  careers: '/images/careers.webp',
}
export type PhotoKey = keyof typeof photos

/*
  Front-page navigation. Sections of this page are anchors; the rest is the
  crew's existing site, so nothing here pretends to be a page we have not
  rebuilt yet.
*/
export const nav = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Divisi', href: '#divisi' },
  { label: 'Alur', href: '#alur' },
  { label: 'Berita', href: `${brand.site}/berita.php` },
  { label: 'Galeri', href: `${brand.site}/galeri.php` },
]

export const cta = { label: 'Masuk Sistem', href: `${brand.site}/admin.php` }

export const systems = [
  {
    title: 'Absensi Digital',
    body: 'Absensi sesi produksi berbasis QR, lengkap dengan dashboard admin dan riwayat kehadiran per anggota.',
    href: 'https://script.google.com/macros/s/AKfycbznuQWUI4w2a2dTJJ-atAVqU7TJ_yiWx2O3QZEmJThS1xqBcE9JKqSHDtC9k2yiqyAVwA/exec',
    status: 'Aktif' as const,
  },
  {
    title: 'Portal Redaksi & Galeri',
    body: 'Dashboard admin untuk menerbitkan berita, mengunggah foto galeri karya, dan moderasi komentar.',
    href: `${brand.site}/admin.php`,
    status: 'Aktif' as const,
  },
  {
    title: 'Sistem Berikutnya',
    body: 'Slot untuk inventaris alat, jadwal syuting, atau sistem baru lainnya.',
    href: '#sistem',
    status: 'Mendatang' as const,
  },
]

export const hero = {
  eyebrow: 'Produksi film pendek pelajar',
  title: ['Satu arah,', 'banyak cerita.'],
  body: 'SatuArah Entertainment adalah wadah kru produksi film pelajar, dari naskah sampai tayang. Satu halaman ini menghubungkan semua sistem internal kami: absensi produksi, berita, galeri karya, dan data keanggotaan.',
  primary: { label: 'Kenali Kami', href: '#tentang' },
  secondary: { label: 'Lihat Sistem', href: '#sistem' },
  frame: {
    top: 'REC 00:12:04',
    meta: '24 FPS',
    caption: 'Di balik layar',
    note: 'Satu kru, satu lokasi, satu arah.',
  },
  stats: [
    { value: '7', unit: 'divisi', label: 'Produksi dalam satu kru' },
    { value: '2', unit: 'sistem', label: 'Aktif dipakai kru' },
    { value: '1', unit: 'kru', label: 'Satu visi bersama' },
  ],
}

export type Segment = 'shipping' | 'defense' | 'offshore'

export const divisions = [
  { name: 'Produksi & Manajemen', body: 'Jadwal, anggaran, dan jalannya produksi dari hari pertama sampai tayang.' },
  { name: 'Penyutradaraan & Naskah', body: 'Menerjemahkan ide menjadi cerita, adegan, dan arahan di lokasi.' },
  { name: 'Cinemedia', body: 'Kamera, lighting, dan suara: semua gambar yang sampai ke layar.' },
  { name: 'Editing', body: 'Menyusun ritme, warna, dan suara sampai filmnya utuh.' },
  { name: 'Artistik & Property', body: 'Set, dekorasi, dan properti yang membangun dunia cerita.' },
  { name: 'Wardrobe', body: 'Kostum dan tata rias yang membuat karakter terasa nyata.' },
  { name: 'Talent', body: 'Pemain yang membawa naskah menjadi adegan.' },
  { name: 'Redaksi', body: 'Berita, galeri, dan tulisan yang mencatat perjalanan kru.' },
]

export const why = {
  title: ['Kenapa', 'SatuArah?'],
  cards: [
    {
      kind: 'team' as const,
      title: 'Kru yang benar-benar bikin film',
      body: 'Bukan ekstrakurikuler teori. Setiap anggota pegang peran nyata di produksi, dari menyusun jadwal sampai memegang kamera.',
    },
    {
      kind: 'prototype' as const,
      title: 'Dari naskah sampai tayang',
      body: 'Satu alur kerja yang sama untuk setiap film: ide, naskah, syuting, pasca, lalu tayang. Semua tercatat rapi lintas divisi.',
    },
    {
      kind: 'volume' as const,
      title: 'Satu arah, satu tim',
      body: 'Tujuh divisi produksi bekerja dalam satu jadwal, satu lokasi, dan tanggung jawab yang jelas.',
      stat: '7',
      unit: 'divisi',
    },
  ],
  /* Genre we work in, shown as a typographic strip on the team card. */
  pedigree: [
    { name: 'SLICE OF LIFE', style: 'wide' as const },
    { name: 'Comedy', style: 'serif' as const },
    { name: 'DRAMA', style: 'serif-caps' as const },
    { name: 'Eksperimental', style: 'mono' as const },
  ],
}

export const milestones = [
  { when: '01', title: 'Ide & Naskah', body: 'Menemukan cerita, menulis naskah, dan membagi peran sebelum kamera dinyalakan.' },
  { when: '02', title: 'Pra-produksi', body: 'Jadwal, lokasi, properti, wardrobe, dan uji kamera disiapkan lintas divisi.' },
  { when: '03', title: 'Produksi', body: 'Hari syuting: semua divisi bekerja di lokasi yang sama, satu arah.', current: true },
  { when: '04', title: 'Pasca-produksi', body: 'Editing, warna, tata suara, dan musik sampai film siap tayang.' },
  { when: '05', title: 'Tayang', body: 'Nonton bareng di sekolah, lalu diunggah ke galeri karya.' },
]

export const mission = {
  title: ['Satu sistem,', 'banyak catatan.'],
  body: 'Data umum terbuka. Data sensitif, terkunci. Anggota masuk lewat sistem masing-masing dengan akun sendiri.',
  rows: systems.map((s) => ({ title: s.title, body: s.body, href: s.href })),
}

export const footer = {
  blurb: 'Wadah kru produksi film pelajar: satu arah, banyak cerita, dari naskah sampai tayang.',
  columns: [
    {
      title: 'Jelajahi',
      links: [
        { label: 'Berita & Update', href: `${brand.site}/berita.php` },
        { label: 'Galeri Karya', href: `${brand.site}/galeri.php` },
        { label: 'Database Kru', href: `${brand.site}/database.html` },
      ],
    },
    {
      title: 'Sistem',
      links: [
        { label: 'Absensi Digital', href: 'https://script.google.com/macros/s/AKfycbznuQWUI4w2a2dTJJ-atAVqU7TJ_yiWx2O3QZEmJThS1xqBcE9JKqSHDtC9k2yiqyAVwA/exec' },
        { label: 'Portal Redaksi', href: `${brand.site}/admin.php` },
        { label: 'Sistem Internal', href: '#sistem' },
      ],
    },
  ],
  legal: '© 2026 SatuArah Entertainment. Dikelola oleh kru Redaksi.',
}

/* ---------- Technology ---------- */

export const technology = {
  eyebrow: 'Technology',
  title: 'A stellarator built for the sea',
  body: 'Our reactor holds plasma in a twisted magnetic bottle made by high-temperature superconducting coils. No pulsed current, no disruptions: a steady burn that suits a ship’s steady load.',
  parts: [
    {
      id: 'coils',
      name: 'HTS magnet coils',
      body: 'Twelve non-planar coils wound from REBCO tape create a 12 tesla field at 20 kelvin. They are the reason the plant is small.',
      spec: '12 T on coil',
      x: 24,
      y: 30,
    },
    {
      id: 'plasma',
      name: 'Plasma chamber',
      body: 'Deuterium-tritium plasma at 150 million °C circulates in a helical path, never touching the vessel wall.',
      spec: '150 M °C',
      x: 50,
      y: 52,
    },
    {
      id: 'blanket',
      name: 'Lithium blanket',
      body: 'A liquid lithium-lead blanket catches fast neutrons, turns them into heat and breeds the tritium the reactor needs.',
      spec: 'Self-sufficient fuel',
      x: 76,
      y: 34,
    },
    {
      id: 'power',
      name: 'Power conversion',
      body: 'A closed-cycle supercritical CO₂ turbine converts blanket heat to electricity for the ship’s electric drive.',
      spec: '42% efficiency',
      x: 62,
      y: 80,
    },
  ],
  specs: [
    { label: 'Net electric output', value: '40 MW' },
    { label: 'Plant volume', value: '150 m³' },
    { label: 'Plant mass', value: '1,100 t' },
    { label: 'Fuel load', value: '< 1 kg per year' },
    { label: 'Refit interval', value: '20 years' },
    { label: 'Emissions', value: 'None at point of use' },
  ],
  principles: [
    { title: 'Steady state', body: 'Stellarators run continuously, so the plant follows the ship’s load without pulsing or storage.' },
    { title: 'Passively safe', body: 'There is no chain reaction to run away. Lose power and the plasma simply cools in milliseconds.' },
    { title: 'Built to be serviced', body: 'Modular blanket cassettes swap out in port with a standard crane in under a week.' },
  ],
}

/* ---------- Applications ---------- */

export const applications = {
  eyebrow: 'Applications',
  title: 'Power for the ships that move the world',
  body: 'Shipping burns 300 million tonnes of fuel a year. A single Tidewell unit can drive a large container ship for two decades.',
  segments: [
    {
      id: 'shipping' as Segment,
      title: 'Commercial Shipping',
      body: 'Container ships, bulk carriers and tankers run on heavy fuel oil and face tightening emissions rules. Fusion removes both the fuel bill and the exhaust.',
      points: ['Meets IMO 2050 net-zero with no offsets', 'Frees fuel-tank volume for cargo', 'Constant speed regardless of bunker price'],
    },
    {
      id: 'defense' as Segment,
      title: 'Defense',
      body: 'Navies plan around fuel logistics. A fusion plant lets surface ships stay on station for months and powers directed-energy systems.',
      points: ['Endurance limited by crew, not fuel', 'No fissile material aboard', 'Megawatt-class power for sensors and lasers'],
    },
    {
      id: 'offshore' as Segment,
      title: 'Offshore and Research',
      body: 'Floating platforms, icebreakers and research vessels work far from ports and grids, where every litre of fuel is costly to deliver.',
      points: ['Grid-scale power at remote sites', 'Long polar seasons', 'Quiet operation for acoustic science'],
    },
  ],
  calculator: {
    title: 'What a voyage costs today',
    body: 'Pick a vessel and a route length to see the fuel and CO₂ a Tidewell unit would replace.',
    vessels: [
      { id: 'feeder', label: 'Feeder container ship', tonnesPerDay: 35 },
      { id: 'ulcv', label: 'Ultra-large container ship', tonnesPerDay: 220 },
      { id: 'tanker', label: 'Crude tanker', tonnesPerDay: 75 },
      { id: 'frigate', label: 'Frigate', tonnesPerDay: 45 },
    ],
    knots: 16,
    fuelUsdPerTonne: 620,
    co2PerTonne: 3.114,
  },
}

/* ---------- Company ---------- */

export const company = {
  eyebrow: 'Company',
  title: 'We build hard things at sea level',
  body: 'Tidewell started with one question: what if the fusion plant didn’t have to power a city, just a ship? A smaller target makes a smaller, sooner reactor.',
  stats: [
    { value: '38', label: 'People on the team' },
    { value: '$62M', label: 'Raised to date' },
    { value: '14', label: 'Patents filed' },
    { value: '3', label: 'Shipping partners signed' },
  ],
  team: [
    { name: 'Mara Lindqvist', role: 'Co-founder, CEO', bio: 'Led propulsion programs at a launch company; naval architect by training.' },
    { name: 'Dev Okafor', role: 'Co-founder, CTO', bio: 'Built superconducting magnets for compact stellarator experiments.' },
    { name: 'Ines Duarte', role: 'Head of Plasma Physics', bio: 'Fifteen years in confinement theory and stellarator optimisation.' },
    { name: 'Tom Achebe', role: 'Head of Marine Integration', bio: 'Former chief engineer on ultra-large container ships.' },
    { name: 'Yuki Tanabe', role: 'Head of Manufacturing', bio: 'Scaled battery-pack production from prototype to gigafactory.' },
    { name: 'Sam Reyes', role: 'Head of Safety and Licensing', bio: 'Worked with maritime class societies on novel propulsion rules.' },
  ],
  values: [
    { title: 'Hardware first', body: 'We learn by building. A part on the bench beats a slide every time.' },
    { title: 'Small is fast', body: 'Every design choice is judged by whether it makes the plant smaller.' },
    { title: 'Safety is the product', body: 'A reactor nobody trusts will never leave port.' },
  ],
  backers: ['Breakwater Ventures', 'Longshore Capital', 'Polaris Climate Fund', 'Harbor Light Partners', 'Kestrel Deep Tech'],
}

/* ---------- Careers ---------- */

export const teams = ['Engineering', 'Physics', 'Marine', 'Operations'] as const
export type Team = (typeof teams)[number]

export type Job = {
  slug: string
  title: string
  team: Team
  location: string
  type: string
  summary: string
  responsibilities: string[]
  requirements: string[]
}

export const jobs: Job[] = [
  {
    slug: 'magnet-engineer',
    title: 'Superconducting Magnet Engineer',
    team: 'Engineering',
    location: 'San Francisco',
    type: 'Full time',
    summary: 'Design, wind and test the REBCO coils at the heart of the reactor.',
    responsibilities: ['Own coil winding from tape spool to cold test', 'Model quench behaviour and protection circuits', 'Work with physics on coil shape tolerances'],
    requirements: ['Experience with superconducting or high-field magnets', 'Comfort in a lab with cryogenics', 'Clear written design reviews'],
  },
  {
    slug: 'vacuum-systems-engineer',
    title: 'Vacuum Systems Engineer',
    team: 'Engineering',
    location: 'San Francisco',
    type: 'Full time',
    summary: 'Build the ultra-high vacuum vessel and its pumping systems.',
    responsibilities: ['Design UHV vessels, ports and seals', 'Specify pumps and gauges', 'Run leak checks and bake-outs'],
    requirements: ['UHV design experience', 'Mechanical CAD fluency', 'Hands-on assembly skills'],
  },
  {
    slug: 'plasma-physicist',
    title: 'Computational Plasma Physicist',
    team: 'Physics',
    location: 'San Francisco or remote',
    type: 'Full time',
    summary: 'Optimise stellarator configurations for a compact marine plant.',
    responsibilities: ['Run equilibrium and transport codes', 'Feed coil shapes to engineering', 'Publish and present results'],
    requirements: ['PhD in plasma physics or a related field', 'Python and a compiled language', 'Experience with stellarator codes a plus'],
  },
  {
    slug: 'naval-architect',
    title: 'Naval Architect',
    team: 'Marine',
    location: 'Rotterdam',
    type: 'Full time',
    summary: 'Integrate the reactor into real hulls with our shipping partners.',
    responsibilities: ['Lay out engine rooms around the plant', 'Work with class societies on approval', 'Model stability and shielding mass'],
    requirements: ['Degree in naval architecture', 'Five years on commercial vessels', 'Familiarity with class rules'],
  },
  {
    slug: 'marine-electrical-engineer',
    title: 'Marine Electrical Engineer',
    team: 'Marine',
    location: 'Rotterdam',
    type: 'Full time',
    summary: 'Design the electric drive and power distribution aboard ship.',
    responsibilities: ['Specify switchboards, drives and motors', 'Plan redundancy for propulsion power', 'Support sea trials'],
    requirements: ['Marine or utility power experience', 'Medium-voltage systems', 'Willingness to travel to shipyards'],
  },
  {
    slug: 'technician',
    title: 'Fabrication Technician',
    team: 'Operations',
    location: 'San Francisco',
    type: 'Full time',
    summary: 'Machine, weld and assemble prototype hardware on our shop floor.',
    responsibilities: ['Run manual and CNC machines', 'TIG weld stainless and aluminium', 'Keep the shop safe and tidy'],
    requirements: ['Three years in a machine shop', 'Read engineering drawings', 'Certified welding a plus'],
  },
]

/* ---------- News ---------- */

export const newsCategories = ['Milestones', 'Press', 'Research'] as const
export type NewsCategory = (typeof newsCategories)[number]

export type Post = {
  slug: string
  title: string
  category: NewsCategory
  date: string
  summary: string
  body: string[]
  tone: 'fire' | 'ocean' | 'steel'
  /** Large text on the cover (fire covers only). */
  cover?: string
  /** Cover photo from `photos`; without one the cover is drawn from `tone`. */
  image?: PhotoKey
}

export const posts: Post[] = [
  {
    slug: 'first-coil-full-field',
    title: 'Our first coil reaches full field',
    category: 'Milestones',
    date: '2026-10-14',
    summary: 'The first production coil held 12 tesla at 20 kelvin for six hours on the test stand.',
    tone: 'ocean',
    image: 'newsCoil',
    body: [
      'Last week the first of twelve production coils for our prototype reached its full design field on the test stand at Pier 70, and held it for six hours.',
      'The coil is wound from about 9 kilometres of REBCO tape on a non-planar former machined in-house. Getting the winding tension right on a twisted shape took four practice coils.',
      'Next we will cycle the coil a hundred times and then deliberately quench it to prove the protection system. The remaining eleven coils are already being wound.',
    ],
  },
  {
    slug: 'series-a',
    title: 'Tidewell raises $50M to build its prototype',
    category: 'Press',
    date: '2026-07-02',
    summary: 'The round funds the integrated prototype and doubles the engineering team.',
    tone: 'fire',
    cover: '$50M',
    body: [
      'Tidewell Fusion has raised a $50M Series A led by Breakwater Ventures, with Longshore Capital and Polaris Climate Fund.',
      'The money funds the integrated prototype through first plasma and lets us double the engineering team across San Francisco and Rotterdam.',
      'Shipping produces nearly three percent of global emissions. We think the fastest route to zero runs through a reactor small enough to fit in a hull.',
    ],
  },
  {
    slug: 'compact-stellarator-paper',
    title: 'A compact stellarator for marine duty',
    category: 'Research',
    date: '2026-04-18',
    summary: 'Our physics team publishes the configuration behind the 150 m³ plant.',
    tone: 'steel',
    image: 'newsStellarator',
    body: [
      'Today our physics team published the magnetic configuration at the heart of our design: a four-period quasi-isodynamic stellarator optimised for size.',
      'The paper shows how relaxing a few reactor-scale constraints, like tritium breeding ratio margins, shrinks the plant enough for a ship.',
      'All the input files are public so others can reproduce and critique the work.',
    ],
  },
  {
    slug: 'rotterdam-office',
    title: 'Opening our Rotterdam office',
    category: 'Milestones',
    date: '2026-02-09',
    summary: 'Our marine integration team moves next to the shipyards and class societies.',
    tone: 'ocean',
    image: 'newsRotterdam',
    body: [
      'Our marine integration team now works from Rotterdam, a short ride from the yards and class societies we work with every week.',
      'The office is hiring naval architects and marine electrical engineers. See the open roles on our careers page.',
    ],
  },
]

/* ---------- Forms ---------- */

export const earlyAccess = {
  eyebrow: 'Early access',
  title: 'Reserve a reactor slot',
  body: 'Early partners help shape the first marine units and get first allocation from our production line.',
  steps: ['Who you are', 'Your fleet', 'Review'],
  segments: [
    { id: 'shipping', label: 'Commercial shipping', hint: 'Owners, operators, charterers' },
    { id: 'defense', label: 'Defense', hint: 'Navies, coast guards, contractors' },
    { id: 'offshore', label: 'Offshore and research', hint: 'Platforms, icebreakers, science' },
  ],
  fleetSizes: ['1 to 5 vessels', '6 to 25 vessels', '26 to 100 vessels', 'More than 100'],
  timelines: ['Newbuild before 2032', 'Newbuild after 2032', 'Retrofit', 'Exploring'],
  success: {
    title: 'You’re on the list',
    body: 'Thanks. Our partnerships team will reply within two working days.',
  },
}

export const contact = {
  eyebrow: 'Contact',
  title: 'Talk to Tidewell',
  body: 'Investors, press and partners: tell us what you need and we’ll route it to the right person.',
  topics: [
    { id: 'investors', label: 'Investors' },
    { id: 'press', label: 'Press' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'general', label: 'General' },
  ],
  offices: [
    { city: 'San Francisco', lines: ['Pier 70, Building 12', 'San Francisco, CA 94107'] },
    { city: 'Rotterdam', lines: ['Maashaven Zuidzijde 2', '3081 AE Rotterdam'] },
  ],
}

export const notFound = {
  title: 'Lost at sea',
  body: 'This page drifted off our charts. Head back to port or try one of these.',
}
