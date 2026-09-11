/* ==============================================================
   DIGISETU — per-service detail content generator
   ------------------------------------------------------------
   500 services means nobody is hand-writing 500 unique pages.
   Instead, this file builds a full, structured "brief" for any
   service from three inputs:
     1. the service's own name/slug (from data.js)
     2. its category's tagline + about text (from data.js)
     3. a small per-category word bank (js/category-wordbank.js)
        describing typical users, a use case, a buyer concern,
        and the rough tech stack for that category.

   To give a genuinely custom page for ONE specific service,
   just add an optional `detail: {...}` object to that service's
   entry in data.js (see the OVERRIDE SHAPE comment below) —
   the generator fills in only the fields you don't provide.
   ============================================================== */

/* deterministic pseudo-random pick, seeded by string so the same
   service always renders the same content (no Math.random) */
function seedIndex(str, mod){
  let h = 0;
  for(let i=0;i<str.length;i++){ h = (h*31 + str.charCodeAt(i)) >>> 0; }
  return h % mod;
}
function pick(arr, seedStr){ return arr[seedIndex(seedStr, arr.length)]; }

const TIMELINE_BANDS = ['3–5 weeks', '5–8 weeks', '8–14 weeks', '10–18 weeks'];
const ENGAGEMENT_MODELS = ['Fixed-scope project', 'Fixed-scope project or dedicated team', 'Dedicated team, monthly'];

function buildServiceContent(service, category){
  const wb = (typeof CATEGORY_WORDBANK !== 'undefined' && CATEGORY_WORDBANK[category.slug]) || {
    users: 'teams in this category', example: 'a typical project in this space',
    concern: 'timeline, cost and long-term maintainability', stack: 'a stack matched to the requirement'
  };
  const name = service.name;
  // service names are already Title Case, so they read fine dropped into a sentence
  const nameLower = name;
  const seed = service.slug;
  const override = service.detail || {};

  const directAnswer = override.directAnswer ||
    `${name} is the planning, design, engineering and handover of a working system — scoped to a specific outcome rather than sold as a generic package. ` +
    `A typical engagement defines who uses it and why, decides the architecture, builds it in reviewable stages, and ends with a deployed system plus source code and documentation you own outright.`;

  const about = override.about ||
    `${category.about} In the specific case of ${nameLower}, that means starting from ${wb.example}, and working backward into the screens, data model and integrations that actually make it work — rather than starting from a feature list.`;

  const whoFor = override.whoFor ||
    `This service is usually the right fit for ${wb.users}. It suits teams who already know the problem they're solving and want an accountable build partner, more than teams still deciding whether to build anything at all — that earlier decision is better made in a short discovery call, before any scoping begins.`;

  const suitability = override.suitability ||
    `${name} is worth doing as a dedicated engagement when the outcome is specific enough to scope — a defined user, a defined workflow, a defined "done." It's premature when the underlying business process itself is still being figured out; in that case a short discovery conversation is a better first step than a full build.`;

  const includes = override.includes || [
    `A scoped, written proposal for ${nameLower} before any build work starts — what's in, what's out, timeline and cost`,
    'Architecture and data-model decisions made explicit up front, not discovered halfway through the build',
    'Development in short, reviewable stages so you see working progress instead of a single delivery date',
    'Functional and usability testing before anything reaches real users',
    'Full source code, environment access and documentation handed over at the end — no lock-in',
    `A short walkthrough session so your team can operate and extend ${nameLower} independently`
  ];

  const notIncluded = override.notIncluded || [
    'Ongoing content, marketing or growth work — this is an engineering engagement, not a marketing retainer',
    'Long-term managed hosting or 24/7 on-call support, unless added as a separate maintenance plan',
    'Legal, financial, tax or regulatory sign-off — specialist advice from a qualified professional stays a separate track'
  ];

  const tierNamePool = [
    ['Essentials', 'Growth', 'Enterprise'],
    ['Starter', 'Scale', 'Custom'],
  ];
  const tierNames = pick(tierNamePool, seed + 'tiernames');

  const tiers = override.tiers || [
    {
      name: tierNames[0],
      blurb: `A focused first version of ${nameLower} — the core workflow working end to end, nothing speculative added.`,
      features: [
        'Core workflow scoped and built end to end',
        'Single environment: one primary user role',
        `Standard integrations for ${category.name.toLowerCase()}`,
        'Handover documentation and a walkthrough call',
        `Typical timeline: ${pick(TIMELINE_BANDS.slice(0,2), seed+'t1')}`
      ]
    },
    {
      name: tierNames[1],
      blurb: `${name} built for a team that already has real users and needs it to hold up under that load.`,
      features: [
        'Everything in the first tier, plus multiple user roles and permissions',
        'Custom integrations with your existing tools',
        'Performance and load testing before launch',
        'A short post-launch support window included',
        `Typical timeline: ${pick(TIMELINE_BANDS.slice(1,3), seed+'t2')}`
      ]
    },
    {
      name: tierNames[2],
      blurb: `A larger-scope build for organisations with compliance, scale or multi-team requirements around ${nameLower}.`,
      features: [
        'Everything in the previous tier, plus compliance and audit-focused engineering',
        'Dedicated team option instead of fixed-scope delivery',
        'Custom architecture review for scale and security',
        'Extended support and maintenance plan available',
        `Typical timeline: ${pick(TIMELINE_BANDS.slice(2,4), seed+'t3')}`
      ]
    }
  ];

  const process = override.process || [
    { t: 'Discover', d: `Understand the problem ${nameLower} is meant to solve, who uses it, and the constraints around ${wb.concern}.` },
    { t: 'Scope & propose', d: 'A written proposal covering exactly what will be built, the timeline and the cost — reviewed and agreed before work starts.' },
    { t: 'Design & architect', d: `Key decisions on data model, integrations and ${wb.stack} made explicit and reviewed with you up front.` },
    { t: 'Build in stages', d: 'Development in short, reviewable increments, with working progress you can see and give feedback on as it happens.' },
    { t: 'Test', d: 'Functional, usability and — where relevant — load testing before anything reaches real users.' },
    { t: 'Launch & handover', d: 'Deployment, full documentation and a walkthrough so your team owns it going forward, with source code included.' }
  ];

  const faqs = override.faqs || [
    {
      q: `What exactly does ${nameLower} include?`,
      a: `Scope is agreed in writing before work starts, but it typically covers discovery, design, engineering, testing and a handover with source code and documentation. See "What you'll receive" above for the full list, and "Three ways to scope it" for how depth changes by tier.`
    },
    {
      q: `How long does ${nameLower} take?`,
      a: `Most engagements run ${pick(TIMELINE_BANDS, seed+'faqtime')}, depending on scope, integrations and how quickly feedback comes back during build stages. A firm timeline is confirmed after discovery, not before.`
    },
    {
      q: `How much does it cost?`,
      a: `Cost follows scope — the tier, integrations, and whether it's fixed-price or a dedicated team. We share a written cost estimate as part of the proposal, before any commitment is made.`
    },
    {
      q: `Do we own the code afterward?`,
      a: `Yes. Source code, environment access and documentation are handed over at the end of the engagement. There's no dependency on us to keep operating what was built.`
    },
    {
      q: `What if our requirements change partway through?`,
      a: `Requirements shifting mid-build is normal. Because delivery happens in short, reviewable stages, changes are scoped and costed as they come up instead of derailing the whole timeline.`
    },
    {
      q: `Do you offer support after launch?`,
      a: `Yes, as a separate maintenance arrangement — response times, scope and cost are agreed explicitly rather than assumed to be included in the build.`
    }
  ];

  const quickFacts = {
    timeline: override.timeline || pick(TIMELINE_BANDS, seed + 'quicktime'),
    engagement: override.engagement || pick(ENGAGEMENT_MODELS, seed + 'quickeng')
  };

  return { directAnswer, about, whoFor, suitability, includes, notIncluded, tiers, process, faqs, quickFacts };
}
