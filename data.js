/* ============================================================
   DIGISETU — Service catalogue data
   ------------------------------------------------------------
   This is the single source of truth for the whole site.
   Every page (home, services, service-detail, contact) reads
   from this file, so adding a new service or category means
   editing ONLY this file — the HTML never changes.

   HOW TO ADD A SERVICE:
   Find the category object below and push a new entry into its
   `services` array:
       { slug: "your-service-slug", name: "Your Service Name" }
   The slug becomes the URL: service-detail.html?slug=your-service-slug

   HOW TO ADD A CATEGORY:
   Copy one category block, give it a unique `slug`, `name`,
   `tagline` and `services` array, and add it to CATEGORIES.

   NOTE: The four categories marked with a ★ below (Web
   Development, AI & Machine Learning, Blockchain & Web3,
   FinTech) are filled in with a full, real service list.
   The remaining sixteen categories currently carry a starter
   list of 8 services each — replace/extend these with your
   actual offering before going live.
   ============================================================ */

const CATEGORIES = [
  {
    slug: "web-development",
    name: "Web Development",
    tagline: "Websites and web platforms built for how people actually browse and buy.",
    about: "Web Development covers everything from a five-page brochure site to a custom web application with its own login, database and admin panel. Every build starts from the same question — what does a visitor need to be able to do here — and works backward into the pages, data and integrations that make that possible.",
    services: [
      { slug: "corporate-website-development", name: "Corporate Website Development" },
      { slug: "small-business-website-development", name: "Small Business Website Development" },
      { slug: "startup-website-development", name: "Startup Website Development" },
      { slug: "enterprise-website-development", name: "Enterprise Website Development" },
      { slug: "custom-web-application-development", name: "Custom Web Application Development" },
      { slug: "progressive-web-app-development", name: "Progressive Web App Development" },
      { slug: "single-page-application-development", name: "Single Page Application Development" },
      { slug: "multi-page-website-development", name: "Multi Page Website Development" },
      { slug: "landing-page-development", name: "Landing Page Development" },
      { slug: "portfolio-website-development", name: "Portfolio Website Development" },
      { slug: "personal-brand-website-development", name: "Personal Brand Website Development" },
      { slug: "blog-and-magazine-website-development", name: "Blog and Magazine Website Development" },
      { slug: "news-portal-development", name: "News Portal Development" },
      { slug: "membership-website-development", name: "Membership Website Development" },
      { slug: "community-website-development", name: "Community Website Development" },
      { slug: "directory-website-development", name: "Directory Website Development" },
      { slug: "job-portal-development", name: "Job Portal Development" },
      { slug: "real-estate-website-development", name: "Real Estate Website Development" },
      { slug: "travel-website-development", name: "Travel Website Development" },
      { slug: "hotel-website-development", name: "Hotel Website Development" },
      { slug: "restaurant-website-development", name: "Restaurant Website Development" },
      { slug: "event-website-development", name: "Event Website Development" },
      { slug: "nonprofit-website-development", name: "Nonprofit Website Development" },
      { slug: "government-portal-development", name: "Government Portal Development" },
      { slug: "multilingual-website-development", name: "Multilingual Website Development" }
    ]
  },
  {
    slug: "ecommerce-and-retail",
    name: "Ecommerce & Retail",
    tagline: "Online stores and retail systems that turn browsing into buying.",
    about: "Ecommerce & Retail work is about turning browsing into a completed checkout — product catalogues, cart and payment flow, inventory sync and the operational tools a retail team needs on the back end. Storefront polish matters less than whether the checkout, inventory and fulfilment actually hold together under real order volume.",
    services: [
      { slug: "ecommerce-website-development", name: "Ecommerce Website Development" },
      { slug: "multi-vendor-marketplace-development", name: "Multi Vendor Marketplace Development" },
      { slug: "d2c-brand-store-development", name: "D2C Brand Store Development" },
      { slug: "b2b-ecommerce-platform-development", name: "B2B Ecommerce Platform Development" },
      { slug: "subscription-commerce-platform", name: "Subscription Commerce Platform" },
      { slug: "point-of-sale-system-development", name: "Point of Sale System Development" },
      { slug: "inventory-management-system", name: "Inventory Management System" },
      { slug: "retail-pos-integration", name: "Retail POS Integration" }
    ]
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    tagline: "Native and cross-platform apps people keep on their home screen.",
    about: "Mobile App Development means building the version of your product people carry in their pocket — native iOS/Android or a single cross-platform codebase, wired to the same backend as your web product where one exists. The build decision usually comes down to performance needs versus one codebase for both platforms.",
    services: [
      { slug: "ios-app-development", name: "iOS App Development" },
      { slug: "android-app-development", name: "Android App Development" },
      { slug: "cross-platform-app-development", name: "Cross Platform App Development" },
      { slug: "flutter-app-development", name: "Flutter App Development" },
      { slug: "react-native-app-development", name: "React Native App Development" },
      { slug: "tablet-app-development", name: "Tablet App Development" },
      { slug: "wearable-app-development", name: "Wearable App Development" },
      { slug: "app-modernization-and-migration", name: "App Modernization and Migration" }
    ]
  },
  {
    slug: "crm-erp-and-enterprise",
    name: "CRM, ERP & Enterprise",
    tagline: "Systems that keep sales, operations and finance working off one source of truth.",
    about: "CRM, ERP & Enterprise systems replace spreadsheets and disconnected tools with one shared source of truth for sales, operations and finance. The hard part is rarely the interface — it's mapping the actual business process correctly before any screen gets built.",
    services: [
      { slug: "custom-crm-development", name: "Custom CRM Development" },
      { slug: "custom-erp-development", name: "Custom ERP Development" },
      { slug: "hrms-development", name: "HRMS Development" },
      { slug: "supply-chain-management-system", name: "Supply Chain Management System" },
      { slug: "procurement-management-system", name: "Procurement Management System" },
      { slug: "warehouse-management-system", name: "Warehouse Management System" },
      { slug: "enterprise-portal-development", name: "Enterprise Portal Development" },
      { slug: "crm-erp-integration-services", name: "CRM ERP Integration Services" }
    ]
  },
  {
    slug: "saas-products",
    name: "SaaS Products",
    tagline: "Multi-tenant products designed to be sold, not just shipped.",
    about: "SaaS Products work covers building a multi-tenant product meant to be sold to many customers — not a one-off internal tool. That means billing, plan tiers, tenant isolation and an admin layer are part of the build from day one, not bolted on after the first customer signs up.",
    services: [
      { slug: "saas-mvp-development", name: "SaaS MVP Development" },
      { slug: "multi-tenant-architecture-development", name: "Multi Tenant Architecture Development" },
      { slug: "saas-billing-and-subscription-system", name: "SaaS Billing and Subscription System" },
      { slug: "saas-admin-dashboard-development", name: "SaaS Admin Dashboard Development" },
      { slug: "white-label-saas-development", name: "White Label SaaS Development" },
      { slug: "saas-migration-services", name: "SaaS Migration Services" },
      { slug: "api-first-saas-development", name: "API First SaaS Development" },
      { slug: "saas-product-scaling", name: "SaaS Product Scaling" }
    ]
  },
  {
    slug: "ai-and-machine-learning",
    name: "AI & Machine Learning",
    tagline: "Practical AI that makes a workflow faster or a decision better — not AI for its own sake.",
    about: "AI & Machine Learning services here mean applying AI to a specific, named workflow — answering support tickets, extracting data from documents, recommending the next product — rather than AI as a headline feature. A working proof of value on real data comes before any production build.",
    services: [
      { slug: "generative-ai-application-development", name: "Generative AI Application Development" },
      { slug: "custom-ai-software-development", name: "Custom AI Software Development" },
      { slug: "ai-chatbot-development", name: "AI Chatbot Development" },
      { slug: "ai-voice-assistant-development", name: "AI Voice Assistant Development" },
      { slug: "ai-agent-development", name: "AI Agent Development" },
      { slug: "multi-agent-ai-system-development", name: "Multi Agent AI System Development" },
      { slug: "retrieval-augmented-generation-development", name: "Retrieval Augmented Generation Development" },
      { slug: "enterprise-knowledge-assistant-development", name: "Enterprise Knowledge Assistant Development" },
      { slug: "ai-customer-support-automation", name: "AI Customer Support Automation" },
      { slug: "ai-sales-assistant-development", name: "AI Sales Assistant Development" },
      { slug: "ai-recruitment-platform-development", name: "AI Recruitment Platform Development" },
      { slug: "ai-education-platform-development", name: "AI Education Platform Development" },
      { slug: "ai-healthcare-application-development", name: "AI Healthcare Application Development" },
      { slug: "ai-financial-analysis-platform", name: "AI Financial Analysis Platform" },
      { slug: "ai-legal-document-assistant", name: "AI Legal Document Assistant" },
      { slug: "ai-content-generation-platform", name: "AI Content Generation Platform" },
      { slug: "ai-image-generation-application", name: "AI Image Generation Application" },
      { slug: "ai-video-generation-application", name: "AI Video Generation Application" },
      { slug: "ai-speech-recognition-application", name: "AI Speech Recognition Application" },
      { slug: "ai-recommendation-engine-development", name: "AI Recommendation Engine Development" },
      { slug: "computer-vision-solution-development", name: "Computer Vision Solution Development" },
      { slug: "natural-language-processing-solution", name: "Natural Language Processing Solution" },
      { slug: "predictive-analytics-solution", name: "Predictive Analytics Solution" },
      { slug: "machine-learning-model-development", name: "Machine Learning Model Development" },
      { slug: "mlops-platform-development", name: "MLOps Platform Development" }
    ]
  },
  {
    slug: "data-and-analytics",
    name: "Data & Analytics",
    tagline: "Turning scattered numbers into dashboards people actually check.",
    about: "Data & Analytics work turns numbers scattered across systems into dashboards and pipelines people actually open and trust. The starting question is always which decision this data is meant to inform — a dashboard nobody checks isn't a useful deliverable regardless of how it looks.",
    services: [
      { slug: "business-intelligence-dashboard-development", name: "Business Intelligence Dashboard Development" },
      { slug: "data-warehouse-development", name: "Data Warehouse Development" },
      { slug: "data-pipeline-engineering", name: "Data Pipeline Engineering" },
      { slug: "data-migration-services", name: "Data Migration Services" },
      { slug: "real-time-analytics-platform", name: "Real Time Analytics Platform" },
      { slug: "reporting-automation-solution", name: "Reporting Automation Solution" },
      { slug: "data-visualization-development", name: "Data Visualization Development" },
      { slug: "master-data-management-solution", name: "Master Data Management Solution" }
    ]
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    tagline: "Security work sized to actual risk, not a checklist.",
    about: "Cybersecurity work here is sized to actual risk rather than sold as a fixed checklist — reviewing what's exposed, fixing what matters most first, and building the monitoring needed to catch the next issue early. What gets prioritised depends on what's actually at risk, not a generic template.",
    services: [
      { slug: "application-security-audit", name: "Application Security Audit" },
      { slug: "penetration-testing-services", name: "Penetration Testing Services" },
      { slug: "vulnerability-assessment-services", name: "Vulnerability Assessment Services" },
      { slug: "secure-code-review", name: "Secure Code Review" },
      { slug: "identity-and-access-management-solution", name: "Identity and Access Management Solution" },
      { slug: "data-encryption-and-privacy-solution", name: "Data Encryption and Privacy Solution" },
      { slug: "security-operations-center-setup", name: "Security Operations Center Setup" },
      { slug: "compliance-and-audit-readiness", name: "Compliance and Audit Readiness" }
    ]
  },
  {
    slug: "blockchain-and-web3",
    name: "Blockchain & Web3",
    tagline: "Distributed systems engineering, built with the same rigour as everything else here.",
    about: "Blockchain & Web3 work is distributed-systems engineering — held to the same rigour as any other production software, with the added weight that on-chain mistakes can be expensive or irreversible. Every engagement starts by testing whether a blockchain is actually the right tool for the problem, before any contract gets written.",
    services: [
      { slug: "blockchain-application-development", name: "Blockchain Application Development" },
      { slug: "smart-contract-development", name: "Smart Contract Development" },
      { slug: "web3-application-development", name: "Web3 Application Development" },
      { slug: "decentralized-application-development", name: "Decentralized Application Development" },
      { slug: "defi-platform-development", name: "DeFi Platform Development" },
      { slug: "decentralized-exchange-development", name: "Decentralized Exchange Development" },
      { slug: "crypto-wallet-development", name: "Crypto Wallet Development" },
      { slug: "token-development", name: "Token Development" },
      { slug: "nft-marketplace-development", name: "NFT Marketplace Development" },
      { slug: "dao-platform-development", name: "DAO Platform Development" },
      { slug: "blockchain-supply-chain-solution", name: "Blockchain Supply Chain Solution" },
      { slug: "blockchain-identity-solution", name: "Blockchain Identity Solution" },
      { slug: "blockchain-voting-platform", name: "Blockchain Voting Platform" },
      { slug: "blockchain-healthcare-solution", name: "Blockchain Healthcare Solution" },
      { slug: "blockchain-real-estate-platform", name: "Blockchain Real Estate Platform" },
      { slug: "blockchain-gaming-platform", name: "Blockchain Gaming Platform" },
      { slug: "asset-tokenization-platform", name: "Asset Tokenization Platform" },
      { slug: "security-token-offering-platform", name: "Security Token Offering Platform" },
      { slug: "initial-coin-offering-platform", name: "Initial Coin Offering Platform" },
      { slug: "crypto-payment-gateway-development", name: "Crypto Payment Gateway Development" },
      { slug: "cross-chain-bridge-development", name: "Cross Chain Bridge Development" },
      { slug: "layer-2-solution-development", name: "Layer 2 Solution Development" },
      { slug: "private-blockchain-development", name: "Private Blockchain Development" },
      { slug: "blockchain-audit-services", name: "Blockchain Audit Services" },
      { slug: "web3-consulting-services", name: "Web3 Consulting Services" }
    ]
  },
  {
    slug: "games-ar-and-vr",
    name: "Games, AR & VR",
    tagline: "Interactive and immersive builds across 2D, 3D, AR and VR.",
    about: "Games, AR & VR covers interactive builds across 2D, 3D, augmented and virtual reality — from a browser-based game to a full immersive VR experience. Performance budgets and target hardware get decided early, because they shape almost every technical choice after.",
    services: [
      { slug: "2d-game-development", name: "2D Game Development" },
      { slug: "3d-game-development", name: "3D Game Development" },
      { slug: "augmented-reality-app-development", name: "Augmented Reality App Development" },
      { slug: "virtual-reality-app-development", name: "Virtual Reality App Development" },
      { slug: "metaverse-platform-development", name: "Metaverse Platform Development" },
      { slug: "game-backend-development", name: "Game Backend Development" },
      { slug: "multiplayer-game-development", name: "Multiplayer Game Development" },
      { slug: "ar-vr-training-simulation-development", name: "AR VR Training Simulation Development" }
    ]
  },
  {
    slug: "cloud-and-devops",
    name: "Cloud & DevOps",
    tagline: "Infrastructure and delivery pipelines that stay boring in production.",
    about: "Cloud & DevOps work is about infrastructure and deployment pipelines that stay boring in production — no 3am pages for preventable reasons. The measure of success is uneventful releases, not a flashy dashboard nobody looks at during an incident.",
    services: [
      { slug: "cloud-migration-services", name: "Cloud Migration Services" },
      { slug: "cloud-infrastructure-setup", name: "Cloud Infrastructure Setup" },
      { slug: "ci-cd-pipeline-setup", name: "CI/CD Pipeline Setup" },
      { slug: "kubernetes-and-container-orchestration", name: "Kubernetes and Container Orchestration" },
      { slug: "infrastructure-as-code-services", name: "Infrastructure as Code Services" },
      { slug: "site-reliability-engineering", name: "Site Reliability Engineering" },
      { slug: "cloud-cost-optimization", name: "Cloud Cost Optimization" },
      { slug: "devops-consulting-services", name: "DevOps Consulting Services" }
    ]
  },
  {
    slug: "iot-and-embedded",
    name: "IoT & Embedded",
    tagline: "Connecting hardware to software, safely and reliably.",
    about: "IoT & Embedded work connects physical hardware to software safely and reliably — device firmware, connectivity, and the cloud platform that collects and acts on what the devices report. Device-level constraints like power and connectivity are treated as first-class requirements, not afterthoughts.",
    services: [
      { slug: "iot-application-development", name: "IoT Application Development" },
      { slug: "embedded-systems-development", name: "Embedded Systems Development" },
      { slug: "iot-device-integration", name: "IoT Device Integration" },
      { slug: "industrial-iot-solution-development", name: "Industrial IoT Solution Development" },
      { slug: "smart-home-solution-development", name: "Smart Home Solution Development" },
      { slug: "connected-vehicle-solution-development", name: "Connected Vehicle Solution Development" },
      { slug: "iot-dashboard-and-monitoring", name: "IoT Dashboard and Monitoring" },
      { slug: "firmware-development-services", name: "Firmware Development Services" }
    ]
  },
  {
    slug: "automation-and-integrations",
    name: "Automation & Integrations",
    tagline: "Removing the manual, repeated steps between the systems you already run.",
    about: "Automation & Integrations work removes the manual, repeated steps between systems that already exist — connecting tools your team already relies on so data stops being copied by hand between them. The goal is a workflow nobody has to remember to run, not a flashy new dashboard.",
    services: [
      { slug: "business-process-automation", name: "Business Process Automation" },
      { slug: "robotic-process-automation", name: "Robotic Process Automation" },
      { slug: "workflow-automation-solution", name: "Workflow Automation Solution" },
      { slug: "third-party-api-integration", name: "Third Party API Integration" },
      { slug: "payment-gateway-integration", name: "Payment Gateway Integration" },
      { slug: "erp-crm-integration-services", name: "ERP CRM Integration Services" },
      { slug: "marketing-automation-setup", name: "Marketing Automation Setup" },
      { slug: "custom-automation-tool-development", name: "Custom Automation Tool Development" }
    ]
  },
  {
    slug: "edtech",
    name: "EdTech",
    tagline: "Learning platforms built around how students and instructors actually work.",
    about: "EdTech work is built around how students and instructors actually work day to day — course delivery, assessment, progress tracking and the admin tools a school or training provider needs behind the scenes. What matters most is whether an instructor with limited time actually completes their weekly tasks in it, not feature count.",
    services: [
      { slug: "learning-management-system-development", name: "Learning Management System Development" },
      { slug: "online-course-platform-development", name: "Online Course Platform Development" },
      { slug: "virtual-classroom-development", name: "Virtual Classroom Development" },
      { slug: "student-information-system-development", name: "Student Information System Development" },
      { slug: "exam-and-assessment-platform", name: "Exam and Assessment Platform" },
      { slug: "edtech-mobile-app-development", name: "EdTech Mobile App Development" },
      { slug: "corporate-training-platform-development", name: "Corporate Training Platform Development" },
      { slug: "gamified-learning-platform-development", name: "Gamified Learning Platform Development" }
    ]
  },
  {
    slug: "fintech",
    name: "FinTech",
    tagline: "Financial software where correctness, security and compliance come first.",
    about: "FinTech work treats correctness, security and regulatory compliance as the starting requirement, not something layered on afterward — because a financial bug is rarely just a bug. Every design decision is checked against what happens if this specific step fails, before it's checked against anything else.",
    services: [
      { slug: "fintech-application-development", name: "FinTech Application Development" },
      { slug: "digital-banking-platform-development", name: "Digital Banking Platform Development" },
      { slug: "mobile-banking-app-development", name: "Mobile Banking App Development" },
      { slug: "digital-wallet-development", name: "Digital Wallet Development" },
      { slug: "payment-gateway-development", name: "Payment Gateway Development" },
      { slug: "payment-aggregator-platform-development", name: "Payment Aggregator Platform Development" },
      { slug: "lending-platform-development", name: "Lending Platform Development" },
      { slug: "loan-management-system-development", name: "Loan Management System Development" },
      { slug: "buy-now-pay-later-platform", name: "Buy Now Pay Later Platform" },
      { slug: "investment-platform-development", name: "Investment Platform Development" },
      { slug: "stock-trading-platform-development", name: "Stock Trading Platform Development" },
      { slug: "wealth-management-platform-development", name: "Wealth Management Platform Development" },
      { slug: "personal-finance-app-development", name: "Personal Finance App Development" },
      { slug: "expense-management-platform", name: "Expense Management Platform" },
      { slug: "accounting-software-development", name: "Accounting Software Development" },
      { slug: "invoice-and-billing-software", name: "Invoice and Billing Software" },
      { slug: "insurance-platform-development", name: "Insurance Platform Development" },
      { slug: "insurtech-app-development", name: "InsurTech App Development" },
      { slug: "regtech-platform-development", name: "RegTech Platform Development" },
      { slug: "kyc-verification-platform-development", name: "KYC Verification Platform Development" },
      { slug: "aml-compliance-platform-development", name: "AML Compliance Platform Development" },
      { slug: "credit-scoring-system-development", name: "Credit Scoring System Development" },
      { slug: "financial-fraud-detection-platform", name: "Financial Fraud Detection Platform" },
      { slug: "crowdfunding-platform-development", name: "Crowdfunding Platform Development" },
      { slug: "remittance-platform-development", name: "Remittance Platform Development" }
    ]
  },
  {
    slug: "healthtech",
    name: "HealthTech",
    tagline: "Care and clinical software built around patient safety and data privacy.",
    about: "HealthTech work is built around patient safety and data privacy first, with everything else — scheduling, records, telehealth — built on top of that foundation. Getting the compliance and privacy layer right early avoids a costly retrofit once the product is already in clinical use.",
    services: [
      { slug: "telemedicine-platform-development", name: "Telemedicine Platform Development" },
      { slug: "electronic-health-record-system", name: "Electronic Health Record System" },
      { slug: "hospital-management-system-development", name: "Hospital Management System Development" },
      { slug: "patient-engagement-app-development", name: "Patient Engagement App Development" },
      { slug: "appointment-scheduling-system", name: "Appointment Scheduling System" },
      { slug: "remote-patient-monitoring-solution", name: "Remote Patient Monitoring Solution" },
      { slug: "pharmacy-management-system", name: "Pharmacy Management System" },
      { slug: "health-insurance-platform-development", name: "Health Insurance Platform Development" }
    ]
  },
  {
    slug: "marketplace-and-on-demand",
    name: "Marketplace & On-Demand",
    tagline: "Two-sided platforms connecting supply and demand in real time.",
    about: "Marketplace & On-Demand platforms connect supply and demand in real time — listings, matching, payments and the trust mechanisms that keep both sides of a two-sided platform showing up. The chicken-and-egg problem of getting both sides onto the platform shapes almost every early product decision.",
    services: [
      { slug: "on-demand-service-app-development", name: "On-Demand Service App Development" },
      { slug: "ride-hailing-app-development", name: "Ride Hailing App Development" },
      { slug: "food-delivery-app-development", name: "Food Delivery App Development" },
      { slug: "grocery-delivery-app-development", name: "Grocery Delivery App Development" },
      { slug: "home-services-marketplace-development", name: "Home Services Marketplace Development" },
      { slug: "freelance-marketplace-development", name: "Freelance Marketplace Development" },
      { slug: "rental-marketplace-development", name: "Rental Marketplace Development" },
      { slug: "booking-and-reservation-platform", name: "Booking and Reservation Platform" }
    ]
  },
  {
    slug: "digital-content-and-platforms",
    name: "Digital Content & Platforms",
    tagline: "Publishing, streaming and content platforms built to scale with an audience.",
    about: "Digital Content & Platforms covers publishing, streaming and content platforms built to scale with a growing audience — content management, delivery infrastructure and the tools a content team needs to publish without waiting on engineering. Editorial teams need to move independently once launched, without waiting on a developer for routine publishing.",
    services: [
      { slug: "video-streaming-platform-development", name: "Video Streaming Platform Development" },
      { slug: "audio-streaming-platform-development", name: "Audio Streaming Platform Development" },
      { slug: "content-management-system-development", name: "Content Management System Development" },
      { slug: "digital-publishing-platform-development", name: "Digital Publishing Platform Development" },
      { slug: "podcast-platform-development", name: "Podcast Platform Development" },
      { slug: "social-media-platform-development", name: "Social Media Platform Development" },
      { slug: "content-monetization-platform", name: "Content Monetization Platform" },
      { slug: "digital-asset-management-system", name: "Digital Asset Management System" }
    ]
  },
  {
    slug: "industry-solutions",
    name: "Industry Solutions",
    tagline: "Software shaped around the workflows of a specific sector.",
    about: "Industry Solutions are software shaped around the workflows of a specific sector, rather than a generic tool stretched to fit. Existing sector-specific processes and terminology are treated as fixed constraints the software is built around, not reasons to force a generic workflow.",
    services: [
      { slug: "manufacturing-erp-solution", name: "Manufacturing ERP Solution" },
      { slug: "logistics-and-fleet-management-system", name: "Logistics and Fleet Management System" },
      { slug: "construction-management-software", name: "Construction Management Software" },
      { slug: "agriculture-technology-solution", name: "Agriculture Technology Solution" },
      { slug: "legal-practice-management-software", name: "Legal Practice Management Software" },
      { slug: "hospitality-management-software", name: "Hospitality Management Software" },
      { slug: "retail-chain-management-software", name: "Retail Chain Management Software" },
      { slug: "energy-and-utilities-software-solution", name: "Energy and Utilities Software Solution" }
    ]
  },
  {
    slug: "product-engineering-and-support",
    name: "Product Engineering & Support",
    tagline: "The long-term work of keeping a product healthy after launch.",
    about: "Product Engineering & Support is the long-term work of keeping a product healthy after launch — bug fixes, performance work, dependency upgrades and a dedicated team that already knows the codebase. This work is judged by how few surprises a product owner has, not by visible new features.",
    services: [
      { slug: "product-discovery-and-strategy", name: "Product Discovery and Strategy" },
      { slug: "mvp-development-services", name: "MVP Development Services" },
      { slug: "legacy-software-modernization", name: "Legacy Software Modernization" },
      { slug: "application-maintenance-and-support", name: "Application Maintenance and Support" },
      { slug: "quality-assurance-and-testing-services", name: "Quality Assurance and Testing Services" },
      { slug: "dedicated-development-team", name: "Dedicated Development Team" },
      { slug: "code-audit-and-technical-due-diligence", name: "Code Audit and Technical Due Diligence" },
      { slug: "ui-ux-design-services", name: "UI/UX Design Services" }
    ]
  }
];

// Flat lookup used by the service-detail and contact pages
function findServiceBySlug(slug) {
  for (const cat of CATEGORIES) {
    const svc = cat.services.find(s => s.slug === slug);
    if (svc) return { service: svc, category: cat };
  }
  return null;
}

function findCategoryBySlug(slug) {
  return CATEGORIES.find(c => c.slug === slug) || null;
}

function totalServiceCount() {
  return CATEGORIES.reduce((sum, c) => sum + c.services.length, 0);
}