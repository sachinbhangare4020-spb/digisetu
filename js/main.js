/* ==============================================================
   DIGISETU — shared behaviour used across every page
   ============================================================== */

function qs(param){
  return new URLSearchParams(window.location.search).get(param);
}

/* ---------- Mobile nav toggle ---------- */
function initNavToggle(){
  const btn = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if(!btn || !nav) return;
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}

/* ---------- Mega menu (Services, in the header) ---------- */
function initMegaMenu(){
  const wrap = document.getElementById('servicesMega');
  if(!wrap) return;
  const list = wrap.querySelector('.mega-list');
  const panel = wrap.querySelector('.mega-panel');
  const trigger = wrap.querySelector('.mega-trigger');

  list.innerHTML = CATEGORIES.map((cat, i) => `
    <button type="button" data-index="${i}" class="${i===0 ? 'active' : ''}">
      ${cat.name} <span>›</span>
    </button>
  `).join('');

  function renderPanel(index){
    const cat = CATEGORIES[index];
    panel.innerHTML = `
      <div class="eyebrow">Selected capability</div>
      <h4>${cat.name}</h4>
      <div class="mega-grid">
        ${cat.services.slice(0, 12).map(s => `<a href="service-detail.html?slug=${s.slug}">${s.name}</a>`).join('')}
      </div>
      <a class="mega-view-all" href="services.html?cat=${cat.slug}">View all ${cat.services.length} services in ${cat.name} →</a>
    `;
  }
  renderPanel(0);

  list.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      list.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPanel(Number(btn.dataset.index));
    });
    btn.addEventListener('click', () => {
      list.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPanel(Number(btn.dataset.index));
    });
  });

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    wrap.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if(!wrap.contains(e.target)) wrap.classList.remove('open');
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') wrap.classList.remove('open');
  });
}

/* ---------- Home page: capability category grid ---------- */
function renderHomeCategoryGrid(){
  const grid = document.getElementById('catGrid');
  if(!grid) return;
  grid.innerHTML = CATEGORIES.map((cat, i) => `
    <a class="cat-tile" href="services.html?cat=${cat.slug}">
      <div>
        <span class="n">${String(i+1).padStart(2,'0')}</span>
        <h4>${cat.name}</h4>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="count">${cat.services.length} services</span>
        <span class="arrow">→</span>
      </div>
    </a>
  `).join('');
}

/* ---------- Services page ---------- */
function initServicesPage(){
  const sidebar = document.getElementById('catSidebar');
  const main = document.getElementById('servicesMain');
  if(!sidebar || !main) return;

  let activeSlug = qs('cat') || CATEGORIES[0].slug;
  if(!findCategoryBySlug(activeSlug)) activeSlug = CATEGORIES[0].slug;

  function renderSidebar(){
    sidebar.innerHTML = CATEGORIES.map(cat => `
      <button type="button" data-slug="${cat.slug}" class="${cat.slug === activeSlug ? 'active' : ''}">
        ${cat.name} <span class="cnt">${cat.services.length}</span>
      </button>
    `).join('');
    sidebar.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        activeSlug = btn.dataset.slug;
        history.replaceState(null, '', `services.html?cat=${activeSlug}`);
        renderSidebar();
        renderMain();
        window.scrollTo({top: main.offsetTop - 100, behavior:'smooth'});
      });
    });
  }

  function renderMain(){
    const cat = findCategoryBySlug(activeSlug);
    main.innerHTML = `
      <div class="cat-header">
        <div class="eyebrow">Capability category</div>
        <h2>${cat.name}</h2>
        <p>${cat.tagline}</p>
        ${cat.about ? `<p class="cat-about">${cat.about}</p>` : ''}
      </div>
      <div class="service-grid">
        ${cat.services.map(s => `
          <a class="service-tile" href="service-detail.html?slug=${s.slug}">
            <span>${s.name}</span>
            <span class="arrow">→</span>
          </a>
        `).join('')}
      </div>
    `;
  }

  renderSidebar();
  renderMain();
}

/* ---------- Service detail page ---------- */
function initServiceDetailPage(){
  const root = document.getElementById('detailRoot');
  if(!root) return;
  const slug = qs('slug');
  const found = slug ? findServiceBySlug(slug) : null;

  if(!found){
    root.innerHTML = `<div class="wrap" style="padding:80px 24px;"><h1>Service not found</h1><p>That service link looks broken. <a href="services.html" style="color:var(--copper);">Browse all services →</a></p></div>`;
    return;
  }

  const { service, category } = found;
  document.title = `${service.name} | Digisetu`;

  document.getElementById('crumbCat').textContent = category.name;
  document.getElementById('crumbCat').href = `services.html?cat=${category.slug}`;
  document.getElementById('crumbService').textContent = service.name;

  document.getElementById('detailTitle').textContent = service.name;
  document.getElementById('detailLead').textContent =
    `Part of our ${category.name} capability. Below is what's covered, how we run the engagement, what it costs to get started thinking about, and what you receive at the end of it.`;

  // Build the full content "brief" for this one service (data.js + wordbank -> service-content.js)
  const content = buildServiceContent(service, category);

  document.getElementById('quickCategory').textContent = category.name;
  document.getElementById('quickTimeline').textContent = content.quickFacts.timeline;
  document.getElementById('quickEngagement').textContent = content.quickFacts.engagement;

  document.getElementById('directAnswer').textContent = content.directAnswer;
  document.getElementById('aboutText').textContent = content.about;
  document.getElementById('whoForText').textContent = content.whoFor;
  document.getElementById('suitabilityText').textContent = content.suitability;

  document.getElementById('deliverablesList').innerHTML =
    content.includes.map(d => `<li>${d}</li>`).join('');
  document.getElementById('notIncludedList').innerHTML =
    content.notIncluded.map(d => `<li>${d}</li>`).join('');

  document.getElementById('tiersGrid').innerHTML = content.tiers.map(t => `
    <div class="tier-card">
      <h4>${t.name}</h4>
      <p>${t.blurb}</p>
      <ul>${t.features.map(f => `<li>${f}</li>`).join('')}</ul>
    </div>
  `).join('');

  document.getElementById('processList').innerHTML =
    content.process.map(p => `<li><div><strong>${p.t}</strong><p>${p.d}</p></div></li>`).join('');

  document.getElementById('faqList').innerHTML = content.faqs.map((f, i) => `
    <details class="faq-item" ${i === 0 ? 'open' : ''}>
      <summary>${f.q}</summary>
      <p>${f.a}</p>
    </details>
  `).join('');

  const related = category.services.filter(s => s.slug !== service.slug).slice(0, 6);
  document.getElementById('relatedList').innerHTML = related.map(r => `<a href="service-detail.html?slug=${r.slug}">${r.name}</a>`).join('');

  const inquireLink = document.getElementById('inquireBtn');
  if(inquireLink) inquireLink.href = `contact.html?service=${service.slug}`;
}

/* ---------- Contact / inquiry form page ---------- */
function initContactPage(){
  const select = document.getElementById('serviceSelect');
  if(!select) return;

  select.innerHTML = `<option value="">Select a service</option>` + CATEGORIES.map(cat => `
    <optgroup label="${cat.name}">
      ${cat.services.map(s => `<option value="${s.slug}">${s.name}</option>`).join('')}
    </optgroup>
  `).join('');

  const preselect = qs('service');
  if(preselect) select.value = preselect;

  const form = document.getElementById('inquiryForm');
  const success = document.getElementById('form-success');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // NOTE: there is no backend wired up yet. This stores the enquiry
    // locally as a placeholder and shows a confirmation message.
    // Replace this block with a real API call / form endpoint before launch.
    try{
      const data = Object.fromEntries(new FormData(form).entries());
      const existing = JSON.parse(localStorage.getItem('digisetu_enquiries') || '[]');
      existing.push({ ...data, submittedAt: new Date().toISOString() });
      localStorage.setItem('digisetu_enquiries', JSON.stringify(existing));
    }catch(err){ /* localStorage may be unavailable; fail silently */ }
    form.reset();
    success.style.display = 'block';
    success.scrollIntoView({ behavior:'smooth', block:'center' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initMegaMenu();
  renderHomeCategoryGrid();
  initServicesPage();
  initServiceDetailPage();
  initContactPage();
});
function initRippleEffect(){
  document.querySelectorAll('.cta-btn, .service-tile, .cat-tile').forEach(element => {
    element.addEventListener('click', function(event){
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');

      ripple.className = 'click-ripple';
      ripple.style.left = `${event.clientX - rect.left}px`;
      ripple.style.top = `${event.clientY - rect.top}px`;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}
