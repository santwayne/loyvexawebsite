export const NAV = [
  { label: 'Platform', to: '/platform' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'Team', to: '/team' },
  { label: 'FAQ', to: '/faq' },
];

export const CONTACT_EMAIL = 'hello@loyvexa.com';

const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const MODULES = [
  {
    slug: 'authentication',
    tag: '01 / AUTHENTICATE',
    title: 'Product Authentication',
    img: u('photo-1581092921461-eab62e97a780'),
    alt: 'Product quality inspection',
    short: 'Help customers verify genuine products with a simple scan and give your brand another trusted touchpoint.',
    points: [
      'Unique QR identity for each product or pack',
      'Simple scan-to-verify journey for customers and partners',
      'Every verification becomes a brand touchpoint',
      'Scan activity visible to your brand team',
    ],
  },
  {
    slug: 'loyalty',
    tag: '02 / REWARD',
    title: 'Channel Loyalty',
    img: u('photo-1553413077-190dd305871c'),
    alt: 'Warehouse distribution',
    short: 'Recognise dealer, retailer and mechanic participation with structured points, rewards and engagement.',
    points: [
      'Points for eligible purchases, scans and actions',
      'Separate programme rules for each partner type',
      'Schemes and campaigns you can run for a set period',
      'Reward redemption tracked in one place',
    ],
  },
  {
    slug: 'intelligence',
    tag: '03 / UNDERSTAND',
    title: 'Brand Intelligence',
    img: u('photo-1556761175-b413da4baf72'),
    alt: 'Business team collaboration',
    short: 'Bring activity and engagement signals into clearer views that help teams make informed decisions.',
    points: [
      'Channel activity by region, partner and product',
      'See which partners are active and which have gone quiet',
      'Campaign and scheme performance at a glance',
      'Data your sales team can act on',
    ],
  },
];

export const AUDIENCES = [
  { icon: '◆', title: 'Manufacturers & brands', text: 'Run one loyalty and authentication programme across your whole channel, and see how partners engage with your products.' },
  { icon: '▲', title: 'Distributors', text: 'Give your network a clear reason to push your products, with schemes and rewards that are easy to explain.' },
  { icon: '●', title: 'Dealers & retailers', text: 'Earn points on eligible purchases and scans, track balances and redeem rewards without paperwork.' },
  { icon: '✦', title: 'Mechanics & end customers', text: 'Scan to check a product is genuine and get recognised for choosing and recommending your brand.' },
];

export const INDUSTRIES = [
  { name: 'Automotive & Auto Parts', img: u('photo-1486262715619-67b85e0b08d3'), alt: 'Automotive workshop', text: 'Reach mechanics and workshops who influence which spare parts get fitted.' },
  { name: 'Two-Wheeler & Mobility', img: u('photo-1558981806-ec527fa84c39'), alt: 'Motorcycle', text: 'Engage dealers and service points across a wide, fast-moving network.' },
  { name: 'Electrical & Electronics', img: u('photo-1581091226825-a6a2a5aee158'), alt: 'Electrical manufacturing', text: 'Reward electricians and retailers and help buyers verify genuine products.' },
  { name: 'Industrial & Engineering', img: u('photo-1504917595217-d4dc5ebe6122'), alt: 'Industrial fabrication', text: 'Strengthen relationships with distributors and B2B buyers of components.' },
  { name: 'Consumer Products', img: u('photo-1602143407151-7111542de6e8'), alt: 'Consumer products', text: 'Turn every pack into a way to reach the end customer directly.' },
  { name: 'Building Materials', img: u('photo-1586864387967-d02ef85d93e8'), alt: 'Building materials', text: 'Engage contractors, masons and dealers who drive brand choice on site.' },
];

export const STEPS = [
  { n: '01', title: 'Connect your products', text: 'Set up product identity and the engagement journey for your brand.', detail: 'We map your product range, partner types and goals, then set up QR identity and the scan journey that fits your channel.' },
  { n: '02', title: 'Invite participation', text: 'Give customers and channel partners a simple way to take part.', detail: 'Distributors, dealers, retailers and mechanics join through a simple onboarding flow and start scanning.' },
  { n: '03', title: 'Reward engagement', text: 'Recognise eligible actions through your loyalty programme design.', detail: 'Points, schemes and rewards follow the rules you set, so partners know exactly what they earn and why.' },
  { n: '04', title: 'Learn and improve', text: 'Use channel activity and insights to plan better engagement.', detail: 'Activity data shows what is working by region, partner and product, so you can adjust schemes and focus your sales effort.' },
];

export const FAQS = [
  { q: 'What is Loyvexa?', a: 'Loyvexa is a brand engagement and channel loyalty platform designed to connect brands, channel partners and customers through product authentication and loyalty experiences.' },
  { q: 'Who can use Loyvexa?', a: 'Manufacturers and product-led businesses that work with distributors, dealers, retailers, mechanics or end customers can explore whether Loyvexa fits their channel model.' },
  { q: 'Can the loyalty programme be customised?', a: 'Programme rules, eligible actions and reward structures can be discussed based on your business requirements.' },
  { q: 'Do my partners need to install anything?', a: 'Partners take part through a simple scan journey on their phone. The exact setup is planned with you based on how your channel works.' },
  { q: 'Can Loyvexa work with my existing systems?', a: 'Integration with your existing billing, accounting or distributor software can be discussed during the walkthrough.' },
  { q: 'How can I see the platform?', a: 'Send a demo request from the contact page so the team can understand your requirements and arrange a walkthrough.' },
];

// Same team as Waynur — generic titles only, no invented bios.
export const TEAM = [
  { initials: 'PT', name: 'Pankaj Thakur', role: 'Founder & Director' },
  { initials: 'PK', name: 'Pavnoor Kaur', role: 'Co-founder' },
  { initials: 'PM', name: 'Piyush Mehndiratta', role: 'Marketing Head' },
  { initials: 'SM', name: 'Surbhi Mehndiratta', role: 'Graphic Designer' },
  { initials: 'BK', name: 'Baljeet Kaur', role: 'Graphic Designer' },
  { initials: 'AS', name: 'Arpan Saini', role: 'Software Developer' },
  { initials: 'SK', name: 'Sant Kaur', role: 'Senior Software Developer' },
  { initials: 'MK', name: 'Mandeep Kaur', role: 'Senior Web Developer' },
];
