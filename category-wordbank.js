const CATEGORY_WORDBANK = {
  "web-development": {
    "users": "founders, marketing teams and internal stakeholders who need a site that loads fast, ranks reasonably and is easy to update without calling a developer every time",
    "example": "a company replacing an outdated site with one built on a modern stack, with a CMS the marketing team can actually use",
    "concern": "page speed, SEO fundamentals, and not being locked into a platform that's hard to leave later",
    "stack": "modern front-end frameworks, a headless or traditional CMS where useful, and hosting sized to actual traffic"
  },
  "ecommerce-and-retail": {
    "users": "retail and D2C teams running or launching an online store, marketplace or ordering system",
    "example": "a retailer consolidating a messy multi-channel setup into one storefront with accurate live inventory",
    "concern": "checkout conversion, payment reliability, and inventory numbers staying accurate across channels",
    "stack": "a commerce platform or headless commerce layer, a payment gateway, and inventory/fulfilment integrations"
  },
  "mobile-app-development": {
    "users": "product teams shipping a first app or rebuilding one that's fallen behind on performance or app-store requirements",
    "example": "a company launching a companion app for an existing web product, sharing the same backend and accounts",
    "concern": "app-store approval risk, ongoing OS-version maintenance, and native-feeling performance",
    "stack": "Swift/Kotlin for native builds, Flutter or React Native for cross-platform, and push notification/analytics tooling"
  },
  "crm-erp-and-enterprise": {
    "users": "operations and finance leaders whose team is outgrowing spreadsheets or an off-the-shelf tool that no longer fits",
    "example": "a mid-size company replacing three disconnected spreadsheets with one internal system reflecting how the team actually works",
    "concern": "data migration accuracy, user adoption, and not rebuilding a bloated version of what they already have",
    "stack": "a relational database, role-based access control, and integrations into existing accounting or HR tools"
  },
  "saas-products": {
    "users": "founders and product teams building a subscription product from an MVP through to a scaled platform",
    "example": "a founder turning a validated idea into a billable multi-tenant product with proper account isolation",
    "concern": "subscription billing correctness, tenant data isolation, and the product staying maintainable as customers scale",
    "stack": "multi-tenant architecture patterns, a billing/subscription provider, and an admin dashboard for internal operations"
  },
  "ai-and-machine-learning": {
    "users": "teams with a specific, repeated task they believe AI could speed up or make more consistent",
    "example": "a support team deploying an AI assistant that handles first-line queries and hands off the rest to a human",
    "concern": "output accuracy, data privacy, and cost at scale once usage moves past a small pilot",
    "stack": "an appropriate foundation model, retrieval or fine-tuning where relevant, and evaluation before production rollout"
  },
  "data-and-analytics": {
    "users": "teams making decisions off gut feel or manually assembled spreadsheets because their data lives in five different places",
    "example": "a company building one reliable revenue dashboard instead of five conflicting spreadsheet versions",
    "concern": "data accuracy at the source, refresh reliability, and dashboards that answer the actual business question",
    "stack": "a data warehouse or pipeline layer, a BI tool, and defined metrics with a single source of truth"
  },
  "cybersecurity": {
    "users": "teams that need a credible security posture for a compliance requirement, a client audit, or their own peace of mind",
    "example": "a company preparing for a client's security questionnaire or an upcoming compliance audit",
    "concern": "which risks are actually worth fixing first, and how much ongoing monitoring realistically costs",
    "stack": "vulnerability scanning, access-control review, and monitoring/alerting sized to the environment"
  },
  "blockchain-and-web3": {
    "users": "teams with a specific reason shared, verifiable state matters — not blockchain for its own sake",
    "example": "a project that needs independently verifiable state or asset control that a normal database can't provide",
    "concern": "smart contract security, gas costs, and whether an on-chain approach is actually needed for the problem",
    "stack": "an appropriate EVM-compatible network, audited contract patterns, and wallet/oracle integration where required"
  },
  "games-ar-and-vr": {
    "users": "studios, brands and product teams building an interactive or immersive experience for entertainment, training or marketing",
    "example": "a brand building an AR product experience or a studio prototyping a playable game concept",
    "concern": "performance on target hardware, asset pipeline efficiency, and app-store or platform review requirements",
    "stack": "Unity or Unreal Engine, AR/VR SDKs for the target headset or device, and an optimised asset pipeline"
  },
  "cloud-and-devops": {
    "users": "engineering teams whose deployments are manual, fragile, or held together by one person's institutional knowledge",
    "example": "a team moving from manual deployments to a reliable CI/CD pipeline with proper monitoring",
    "concern": "uptime, deployment reliability, and cloud cost that doesn't creep up unexplained month over month",
    "stack": "a major cloud provider, containerisation, infrastructure-as-code, and CI/CD pipelines with monitoring"
  },
  "iot-and-embedded": {
    "users": "hardware-adjacent teams that need firmware, connectivity and a cloud platform to work together reliably",
    "example": "a manufacturer connecting equipment to a monitoring platform that alerts on abnormal readings",
    "concern": "device reliability in the field, data volume management, and over-the-air update safety",
    "stack": "embedded firmware, an IoT connectivity protocol, and a cloud ingestion and device-management layer"
  },
  "automation-and-integrations": {
    "users": "operations teams manually copying data between tools, or re-entering the same information in multiple systems",
    "example": "a team eliminating a weekly manual export/import process by wiring the two systems together directly",
    "concern": "reliability when a connected system changes its API, and clear failure alerts instead of silent breakage",
    "stack": "an integration or workflow-automation platform, custom middleware where needed, and monitored webhooks"
  },
  "edtech": {
    "users": "schools, training providers and edtech founders building or modernising a learning platform",
    "example": "a training provider replacing a generic LMS with a platform built around their specific course structure",
    "concern": "learner engagement and completion, content management ease for instructors, and accessibility",
    "stack": "an LMS foundation or custom build, video delivery infrastructure, and progress/assessment tracking"
  },
  "fintech": {
    "users": "financial institutions and fintech founders building products that move or manage other people's money",
    "example": "a fintech founder building a payments or lending product that needs to pass regulatory and security review",
    "concern": "regulatory compliance, transaction accuracy, and the audit trail holding up under scrutiny",
    "stack": "payment gateway or banking-rail integrations, strong encryption and access control, and audit logging"
  },
  "healthtech": {
    "users": "clinics, hospitals and healthtech founders building patient-facing or clinical-facing software",
    "example": "a clinic replacing paper-based patient records with a secure, compliant digital system",
    "concern": "regulatory compliance around patient data, clinical workflow accuracy, and system uptime",
    "stack": "compliant data storage and encryption, role-based clinical access control, and relevant health-data standards"
  },
  "marketplace-and-on-demand": {
    "users": "founders and operators building a two-sided platform connecting buyers and sellers, or requesters and providers",
    "example": "a founder launching a two-sided marketplace that needs listings, matching, and split payments from day one",
    "concern": "trust and safety between both sides, payment splitting accuracy, and solving the cold-start problem",
    "stack": "real-time matching logic, split-payment handling, and rating/trust mechanisms between both sides"
  },
  "digital-content-and-platforms": {
    "users": "media companies and content-led businesses whose current platform can't keep up with their publishing pace or audience growth",
    "example": "a publisher moving to a platform built for their actual content volume and editorial workflow",
    "concern": "content delivery performance at scale, editorial team independence, and search visibility",
    "stack": "a CMS suited to content volume, a CDN for delivery, and search/SEO infrastructure"
  },
  "industry-solutions": {
    "users": "organisations in a specific sector whose workflow doesn't fit neatly into generic off-the-shelf software",
    "example": "an organisation whose sector-specific process doesn't map cleanly onto any generic off-the-shelf tool",
    "concern": "the software matching how the sector actually works, and compliance with sector-specific rules",
    "stack": "a custom data model built around the sector's real workflow, plus relevant compliance and integration needs"
  },
  "product-engineering-and-support": {
    "users": "product owners whose original build team has moved on, or who need ongoing capacity without hiring in-house",
    "example": "a product owner who needs a dependable team to maintain and extend a system after the original build",
    "concern": "response time on production issues, code quality staying consistent over time, and not re-explaining context repeatedly",
    "stack": "the product's existing stack, plus monitoring, testing and a defined support/response process"
  }
};