/* ==========================================================================
   Peaks to Brews to Ballparks — site script (vanilla JS, no build step)
   - Builds the shared header (mega menu) and footer on every page
   - Renders expedition cards / detail pages from data.js
   ========================================================================== */

(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const params = new URLSearchParams(location.search);

  // Newest first by date; undated trips keep their data.js order after the dated ones
  const logged  = EXPEDITIONS.filter(e => e.status === "logged")
    .map((e, i) => [e, i])
    .sort(([a, i], [b, j]) => (a.date && b.date) ? b.date.localeCompare(a.date) : a.date ? -1 : b.date ? 1 : i - j)
    .map(([e]) => e);
  const planned = EXPEDITIONS.filter(e => e.status === "planned");
  const byCat   = cat => logged.filter(e => e.category === cat);
  const catLabel = c => (CATEGORIES[c] || {}).label || c;
  const catHref  = c => (CATEGORIES[c] || {}).page || `expeditions.html?cat=${c}`;

  // 14ers helpers (fourteeners.js)
  const PEAKS14 = typeof FOURTEENERS !== "undefined" ? FOURTEENERS : [];
  const isSummited = p => !!(p.date || p.done);
  const summited = () => PEAKS14.filter(isSummited).sort((a, b) => (a.date || "").localeCompare(b.date || ""));
  // expedition: "trip-id" → detail page; a full URL or .html path is used as-is
  const reportHref = p => !p.expedition ? "" : /[\/.]/.test(p.expedition) ? p.expedition : `expedition.html?id=${p.expedition}`;

  // Accepts "YYYY-MM-DD", "YYYY-MM" or "YYYY"
  const fmtDate = d => {
    if (!d) return "Date TBD";
    const [y, m, day] = d.split("-").map(Number);
    if (!m) return String(y);
    const dt = new Date(y, m - 1, day || 1, 12);
    return dt.toLocaleDateString("en-US", day ? { month: "short", day: "numeric", year: "numeric" } : { month: "short", year: "numeric" });
  };
  const when = e => e.dateText || fmtDate(e.date);

  // MLB ballparks helpers (ballparks.js)
  const PARKS = typeof BALLPARKS !== "undefined" ? BALLPARKS : [];
  const DIVS  = typeof DIVISIONS !== "undefined" ? DIVISIONS : [];
  const parksVisited = () => PARKS.filter(p => p.visited);
  const photoPath = (e, p) => `assets/photos/${e.id}/${p}.jpg`;
  const media = (src, cat, alt) => src
    ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`
    : `<div class="ph ph--${esc(cat)}">${esc(catLabel(cat))}</div>`;

  /* ------------------------------------------------------------------ */
  /* Header + mega menu                                                  */
  /* ------------------------------------------------------------------ */
  function featureCards(list) {
    const two = list.slice(0, 2);
    while (two.length < 2) two.push(null);
    return two.map(e => e
      ? `<a class="mega-card" href="expedition.html?id=${e.id}">${media(e.cover, e.category, e.title)}
           <span class="cap"><small>${esc(e.location || catLabel(e.category))}</small><strong>${esc(e.title)}</strong></span></a>`
      : `<div class="mega-card"><div class="ph">Coming soon</div></div>`).join("");
  }

  function peaksMega() {
    const c = CATEGORIES.peaks;
    const done = summited();
    return `
      <div class="mega"><div class="mega-inner">
        <div class="mega-col">
          <a class="hl" href="peaks.html">Colorado 14ers</a>
          ${c.regions.map(r => `<a href="peaks.html?range=${encodeURIComponent(r)}#list">${esc(r)} Range</a>`).join("")}
          <a class="all" href="peaks.html#list">All 58 Peaks</a>
          <a class="hl" href="peaks.html#trails" style="margin-top:14px">${esc(c.trails.label)}</a>
          ${trails().slice(0, 4).map(e => `<a href="expedition.html?id=${e.id}">${esc(e.title)}</a>`).join("")}
          <a class="all" href="expeditions.html?cat=peaks&region=${encodeURIComponent(c.trails.region)}">All Trails</a>
        </div>
        <div class="mega-col mega-col--sub">
          <a href="peaks.html#progress">${done.length} of ${PEAKS14.length} summited</a>
          <a href="peaks.html#difficulty">Difficulty Levels</a>
          <a href="peaks.html#facts">Quick Facts</a>
          ${done.slice(-4).reverse().map(p => `<a href="${reportHref(p) || "peaks.html#list"}">✓ ${esc(p.name)}</a>`).join("")}
          <a href="expeditions.html?cat=peaks">Peak trip reports</a>
        </div>
        <div class="mega-features">${featureCards(byCat("peaks"))}</div>
      </div></div>`;
  }

  // Trails = non-14er hikes (category "peaks", region "Trails")
  const isTrail = e => e.region === ((CATEGORIES.peaks.trails || {}).region || "Trails");
  const trails = () => byCat("peaks").filter(isTrail);

  // Menu regions = configured order in data.js + any new region found on logged entries
  function regionsFor(cat) {
    const c = CATEGORIES[cat];
    return [...new Set([...(c.regions || []), ...byCat(cat).map(e => e.region).filter(Boolean)])];
  }

  function ballparksMega() {
    const done = parksVisited();
    return `
      <div class="mega"><div class="mega-inner">
        <div class="mega-col">
          <a class="hl" href="ballparks.html">30 MLB Ballparks</a>
          ${DIVS.map(d => `<a href="ballparks.html?div=${encodeURIComponent(d)}#list">${esc(d)}</a>`).join("")}
          <a class="all" href="ballparks.html#list">All 30 Ballparks</a>
        </div>
        <div class="mega-col mega-col--sub">
          <a href="ballparks.html#progress">${done.length} of ${PARKS.length} visited</a>
          <a href="ballparks.html#divisions">By Division</a>
          ${done.slice(0, 5).map(p => `<a href="${reportHref(p) || "ballparks.html#list"}">✓ ${esc(p.park)}</a>`).join("")}
          <a href="expeditions.html?cat=ballparks">Ballpark trip reports</a>
        </div>
        <div class="mega-features">${featureCards(byCat("ballparks"))}</div>
      </div></div>`;
  }

  function catMega(cat) {
    if (cat === "peaks") return peaksMega();
    if (cat === "ballparks") return ballparksMega();
    const c = CATEGORIES[cat];
    const items = byCat(cat);
    return `
      <div class="mega"><div class="mega-inner">
        <div class="mega-col">
          ${regionsFor(cat).map(r => `<a href="expeditions.html?cat=${cat}&region=${encodeURIComponent(r)}">${esc(r)}</a>`).join("")}
          ${(c.extraLinks || []).map(([l, h]) => `<a class="hl" href="${esc(h)}">${esc(l)}</a>`).join("")}
          <a class="all" href="expeditions.html?cat=${cat}">All ${esc(c.label)}</a>
        </div>
        <div class="mega-col mega-col--sub">
          ${items.slice(0, 8).map(e => `<a href="expedition.html?id=${e.id}">${esc(e.title)}</a>`).join("") || `<a>Nothing logged yet</a>`}
        </div>
        <div class="mega-features">${featureCards(items)}</div>
      </div></div>`;
  }

  function aboutMega() {
    return `
      <div class="mega"><div class="mega-inner">
        <div class="mega-col">
          <a href="about.html#challenge">The Challenge</a>
          <a href="about.html#rules">The Rules</a>
          <a href="about.html#scorecard">The Scorecard</a>
          <a href="about.html#crew">The Crew</a>
        </div>
        <div class="mega-col mega-col--sub">
          <a href="expeditions.html">Full Expedition Log</a>
          <a href="index.html#up-next">Up Next</a>
        </div>
        <div class="mega-features">${featureCards(logged)}</div>
      </div></div>`;
  }

  function buildHeader() {
    const page = document.body.dataset.page;
    const cat = params.get("cat");
    const cur = (key) => {
      if (key === "about" && page === "about") return ' aria-current="page"';
      if (key === "status" && page === "status") return ' aria-current="page"';
      if (key === "log" && page === "log" && !cat) return ' aria-current="page"';
      if (CATEGORIES[key] && page === "log" && cat === key) return ' aria-current="page"';
      if (key === "peaks" && page === "peaks") return ' aria-current="page"';
      if (key === "ballparks" && page === "ballparks") return ' aria-current="page"';
      return "";
    };
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <div class="header-inner">
        <a class="logo" href="index.html" aria-label="${esc(SITE.name)} home">
          <img src="assets/img/logo-white.svg" alt="${esc(SITE.name)}">
        </a>
        <nav class="main-nav" aria-label="Main">
          <div class="nav-item"><button class="nav-link"${cur("about")} aria-expanded="false">About</button>${aboutMega()}</div>
          ${Object.keys(CATEGORIES).map(k => `
            <div class="nav-item"><button class="nav-link"${cur(k)} aria-expanded="false">${esc(CATEGORIES[k].label)}</button>${catMega(k)}</div>`).join("")}
          <div class="nav-item"><a class="nav-link" href="status.html"${cur("status")}>Status</a></div>
          <div class="nav-item"><a class="nav-link" href="expeditions.html"${cur("log")}>Expedition Log</a></div>
          <a class="btn btn--orange nav-cta" href="index.html#up-next">Up Next</a>
        </nav>
        <button class="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>`;
    document.body.prepend(header);

    const items = $$(".nav-item", header).filter(i => $(".mega", i));
    const desktop = () => window.matchMedia("(min-width: 1081px)").matches;
    const closeAll = except => items.forEach(i => { if (i !== except) { i.classList.remove("open"); $(".nav-link", i).setAttribute("aria-expanded", "false"); } });

    items.forEach(item => {
      const btn = $(".nav-link", item);
      let t;
      item.addEventListener("mouseenter", () => { if (!desktop()) return; clearTimeout(t); closeAll(item); item.classList.add("open"); header.classList.add("menu-open"); });
      item.addEventListener("mouseleave", () => { if (!desktop()) return; t = setTimeout(() => { item.classList.remove("open"); if (!$(".nav-item.open", header)) header.classList.remove("menu-open"); }, 120); });
      btn.addEventListener("click", () => {
        const open = !item.classList.contains("open");
        closeAll(item);
        item.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", open);
        if (desktop()) header.classList.toggle("menu-open", open);
      });
    });

    $(".burger", header).addEventListener("click", e => {
      const open = header.classList.toggle("menu-open");
      e.currentTarget.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
      if (!open) closeAll();
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") { closeAll(); if (desktop()) header.classList.remove("menu-open"); } });

    const solid = () => header.classList.toggle("is-solid", window.scrollY > 40);
    solid(); window.addEventListener("scroll", solid, { passive: true });
  }

  /* ------------------------------------------------------------------ */
  /* Footer                                                              */
  /* ------------------------------------------------------------------ */
  function buildFooter() {
    const f = document.createElement("footer");
    f.className = "site-footer";
    f.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <img class="footer-logo" src="assets/img/logo-white.svg" alt="${esc(SITE.name)}">
            <p>${esc(SITE.tagline)}</p>
          </div>
          <div><h4>Expeditions</h4>
            ${Object.keys(CATEGORIES).map(k => `<a href="${catHref(k)}">${esc(CATEGORIES[k].label)}</a>`).join("")}
            <a href="expeditions.html">Full Log</a>
          </div>
          <div><h4>About</h4>
            <a href="about.html#challenge">The Challenge</a>
            <a href="about.html#rules">The Rules</a>
            <a href="about.html#scorecard">The Scorecard</a>
            <a href="about.html#crew">The Crew</a>
            <a href="status.html">Status</a>
          </div>
          <div><h4>Follow</h4>
            <a href="#">Instagram</a>
            <a href="#">GitHub</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${new Date().getFullYear()} ${esc(SITE.name)}</span>
          <span>${logged.length} logged · ${planned.length} up next</span>
        </div>
      </div>`;
    document.body.append(f);
  }

  /* ------------------------------------------------------------------ */
  /* Cards                                                               */
  /* ------------------------------------------------------------------ */
  function card(e) {
    const isPlanned = e.status === "planned";
    const href = isPlanned ? "#" : `expedition.html?id=${e.id}`;
    return `
      <a class="card${isPlanned ? " card--planned" : ""}" href="${href}">
        <div class="card-media">${media(e.cover, e.category, e.title)}<span class="tag tag--${e.category}">${esc(catLabel(e.category))}</span></div>
        <div class="card-body">
          <div class="card-meta">${esc(e.location || "Location TBD")} · ${isPlanned ? "Up next" : esc(when(e))}</div>
          <h3>${esc(e.title)}</h3>
          <p>${esc(e.summary || "")}</p>
          ${isPlanned ? "" : `<span class="text-link">Read the log →</span>`}
        </div>
      </a>`;
  }

  function renderHome() {
    // Hero
    const hero = $("#hero-img"); if (hero) hero.src = SITE.heroImage;
    const latest = logged[0];
    if (latest && $("#hero-latest")) {
      $("#hero-latest").textContent = `Latest · ${latest.title}`;
      $("#hero-link").href = `expedition.html?id=${latest.id}`;
    }
    // Stats
    const set = (id, v) => { const el = $(id); if (el) el.textContent = v; };
    set("#stat-peaks", summited().length);
    set("#stat-brews", byCat("brews").length);
    set("#stat-ballparks", parksVisited().length);
    set("#stat-places", new Set(logged.map(e => e.location).filter(Boolean)).size);
    // Pillars
    const pillars = $("#pillars");
    if (pillars) pillars.innerHTML = Object.entries(CATEGORIES).map(([k, c]) => `
      <a class="pillar" href="${catHref(k)}">
        ${media(c.cover, k, c.label)}
        <div class="pillar-body"><span class="tag tag--${k}">${k === "peaks" ? `${summited().length} / ${PEAKS14.length} 14ers` : k === "ballparks" ? `${parksVisited().length} / ${PARKS.length} MLB parks` : `${byCat(k).length} logged`}</span><h3>${esc(c.label)}</h3><p>${esc(c.blurb)}</p></div>
      </a>`).join("");
    // Latest
    const grid = $("#latest");
    if (grid) grid.innerHTML = logged.slice(0, 6).map(card).join("") || `<div class="empty">No expeditions logged yet.</div>`;
    // Up next
    const nx = $("#up-next-list");
    if (nx) nx.innerHTML = planned.map(e => `<span>${esc(e.title)}</span>`).join("") || "<span>Planning the next one…</span>";
  }

  function renderLog() {
    const grid = $("#log-grid"), chips = $("#filters");
    let cat = params.get("cat") || "all";
    const region = params.get("region");
    const title = $("#log-title"), sub = $("#log-sub");

    chips.innerHTML = [["all", "All"], ...Object.entries(CATEGORIES).map(([k, c]) => [k, c.label]), ["planned", "Up Next"]]
      .map(([k, l]) => `<button class="chip" data-cat="${k}">${esc(l)}</button>`).join("");

    const draw = () => {
      let list = cat === "planned" ? planned : cat === "all" ? logged : byCat(cat);
      if (region && cat !== "all" && cat !== "planned") list = list.filter(e => e.region === region);
      grid.innerHTML = list.map(card).join("") || `<div class="empty">Nothing here yet — the next expedition is out there.</div>`;
      $$(".chip", chips).forEach(c => c.classList.toggle("active", c.dataset.cat === cat));
      const c = CATEGORIES[cat];
      title.textContent = c ? c.label : cat === "planned" ? "Up Next" : "Expedition Log";
      sub.textContent = c ? (region ? `${region} · ${c.blurb}` : c.blurb) : cat === "planned" ? "On the list, not yet conquered." : "Every peak, pint and ballpark — newest first.";
    };
    chips.addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      cat = b.dataset.cat;
      history.replaceState(null, "", cat === "all" ? "expeditions.html" : `expeditions.html?cat=${cat}`);
      draw();
    });
    draw();
  }

  function renderExpedition() {
    const e = logged.find(x => x.id === params.get("id")) || logged[0];
    if (!e) return;
    document.title = `${e.title} · ${SITE.name}`;
    $("#exp-hero").innerHTML = media(e.cover, e.category, e.title);
    $("#exp-tag").textContent = e.category === "peaks" && isTrail(e) ? "Trails" : catLabel(e.category);
    $("#exp-tag").className = `tag tag--${e.category}`;
    $("#exp-title").textContent = e.title;
    $("#exp-summary").textContent = e.summary || "";

    const facts = { "Category": catLabel(e.category) + (e.category === "peaks" && isTrail(e) ? " · Trails" : ""), "Location": e.location || "TBD", "Date": when(e),
      "Rating": e.rating ? "★".repeat(e.rating) + "☆".repeat(5 - e.rating) : "TBD",
      ...(e.crew ? { "Crew": e.crew } : {}), ...(e.facts || {}) };
    const park = PARKS.find(p => p.expedition === e.id);
    if (park) Object.assign(facts, { "Ballpark": park.park, "Division": park.div, "Opened": String(park.opened) });
    const fourteener = PEAKS14.find(p => p.expedition === e.id);
    if (fourteener) Object.assign(facts, {
      "Elevation": `${fourteener.elev.toLocaleString()} ft`,
      "Range": fourteener.range,
      "Difficulty": `${TIERS[fourteener.tier].name} · Class ${fourteener.cls}`,
      "14er #": `${fourteener.rank} of ${PEAKS14.length}`
    });
    $("#exp-facts").innerHTML = Object.entries(facts).map(([k, v]) => `<div class="fact"><span>${esc(k)}</span><strong>${esc(v)}</strong></div>`).join("");
    $("#exp-story").innerHTML = (e.story || []).length
      ? e.story.map(p => `<p>${esc(p)}</p>`).join("")
      : `<p class="muted">Field notes coming soon.</p>`;
    if ((e.links || []).length) $("#exp-story").innerHTML += `<p>${e.links.map(([l, h]) =>
      `<a class="text-link" href="${esc(h)}" target="_blank" rel="noopener">${esc(l)} →</a>`).join(" &nbsp; ")}</p>`;

    const photos = (e.photos || []).map(p => photoPath(e, p));
    $("#exp-gallery").innerHTML = photos.map((src, i) => `<button data-i="${i}" aria-label="Open photo ${i + 1}"><img src="${src}" alt="${esc(e.title)} photo ${i + 1}" loading="lazy"></button>`).join("");
    if (!photos.length) $("#gallery-section").hidden = true;
    lightbox(photos);

    const i = logged.indexOf(e), prev = logged[i - 1], next = logged[i + 1];
    $("#exp-pager").innerHTML =
      (prev ? `<a href="expedition.html?id=${prev.id}">← ${esc(prev.title)}</a>` : `<a href="expeditions.html">← All expeditions</a>`) +
      (next ? `<a href="expedition.html?id=${next.id}">${esc(next.title)} →</a>` : `<span></span>`);
  }

  /* ------------------------------------------------------------------ */
  /* Peaks page — Colorado 14ers tracker                                 */
  /* ------------------------------------------------------------------ */
  function renderPeaks() {
    const done = summited().length, total = PEAKS14.length;
    $("#progress-count").textContent = done;
    $("#progress-total").textContent = total;
    $("#progress-left").textContent = total - done;
    $("#progress-pct").textContent = Math.round(done / total * 100) + "%";
    requestAnimationFrame(() => { $("#progress-bar").style.width = (done / total * 100) + "%"; });

    $("#tiers").innerHTML = Object.entries(TIERS).map(([k, t]) => `
      <div class="tier tier--${k}"><h3>${esc(t.title)}</h3><p>${esc(t.desc)}</p>
        <span class="tier-count">${PEAKS14.filter(p => p.tier == k).length} peaks</span></div>`).join("");

    let tier = "all", range = params.get("range") || "all", sortKey = "rank", asc = true;
    const sel = $("#range-filter");
    [...new Set(PEAKS14.map(p => p.range))].sort().forEach(r => sel.add(new Option(`${r} Range`, r)));
    if (![...sel.options].some(o => o.value === range)) range = "all";
    sel.value = range;

    const chips = $("#tier-filters");
    chips.innerHTML = [["all", "All"], ...Object.entries(TIERS).map(([k, t]) => [k, t.name]), ["done", "Summited"]]
      .map(([k, l]) => `<button class="chip" data-tier="${k}">${esc(l)}</button>`).join("");

    const draw = () => {
      const rows = PEAKS14
        .filter(p => (tier === "all" || (tier === "done" ? isSummited(p) : p.tier == tier)) && (range === "all" || p.range === range))
        .sort((a, b) => {
          const x = a[sortKey], y = b[sortKey];
          const c = typeof x === "number" ? x - y : String(x).localeCompare(String(y));
          return asc ? c : -c;
        });
      $("#peak-body").innerHTML = rows.map(p => {
        const href = reportHref(p);
        return `
        <tr class="${isSummited(p) ? "done" : ""}">
          <td class="num">${p.rank}</td>
          <td><strong>${esc(p.name)}</strong>${p.unranked ? ' <span class="muted">(unranked)</span>' : ""}</td>
          <td class="num">${p.elev.toLocaleString()}</td>
          <td>${esc(p.range)}</td>
          <td><span class="badge badge--${p.tier}">${TIERS[p.tier].name} · Class ${esc(p.cls)}</span></td>
          <td>${isSummited(p) ? `<span class="check">✓</span> ${p.date ? fmtDate(p.date) : "Summited"}` : '<span class="muted">—</span>'}</td>
          <td>${href ? `<a class="text-link" href="${esc(href)}">View hike &amp; photos →</a>` : '<span class="muted">Coming soon</span>'}</td>
        </tr>`;
      }).join("") || `<tr><td colspan="7" class="muted">No peaks match.</td></tr>`;
      $("#peak-count").textContent = `${rows.length} peak${rows.length === 1 ? "" : "s"}`;
      $$(".chip", chips).forEach(c => c.classList.toggle("active", c.dataset.tier === tier));
      $$("th[data-sort]").forEach(th => th.dataset.dir = th.dataset.sort === sortKey ? (asc ? "asc" : "desc") : "");
    };
    chips.addEventListener("click", e => { const b = e.target.closest(".chip"); if (b) { tier = b.dataset.tier; draw(); } });
    sel.addEventListener("change", () => {
      range = sel.value;
      history.replaceState(null, "", range === "all" ? "peaks.html#list" : `peaks.html?range=${encodeURIComponent(range)}#list`);
      draw();
    });
    $$("th[data-sort]").forEach(th => th.addEventListener("click", () => {
      const k = th.dataset.sort; asc = sortKey === k ? !asc : true; sortKey = k; draw();
    }));
    draw();

    // Peak trip reports (logged expeditions in the Peaks category)
    const trailList = trails();
    if ($("#peak-trails")) $("#peak-trails").innerHTML = trailList.map(card).join("") ||
      `<div class="empty">No trails logged yet.</div>`;
    const trips = byCat("peaks").filter(e => !isTrail(e));
    $("#peak-trips").innerHTML = trips.map(card).join("") ||
      `<div class="empty">No peak trip reports yet — the first summit is out there.</div>`;
  }

  /* ------------------------------------------------------------------ */
  /* Ballparks page — 30 MLB parks tracker                               */
  /* ------------------------------------------------------------------ */
  function renderBallparks() {
    const done = parksVisited().length, total = PARKS.length;
    $("#progress-count").textContent = done;
    $("#progress-total").textContent = total;
    $("#progress-left").textContent = total - done;
    $("#progress-pct").textContent = Math.round(done / total * 100) + "%";
    requestAnimationFrame(() => { $("#progress-bar").style.width = (done / total * 100) + "%"; });

    $("#divisions-grid").innerHTML = DIVS.map(d => {
      const parks = PARKS.filter(p => p.div === d);
      return `<div class="div-card"><h3>${esc(d)} <span>${parks.filter(p => p.visited).length}/${parks.length}</span></h3>
        <ul>${parks.map(p => `<li class="${p.visited ? "done" : ""}"><span class="abbr">${esc(p.abbr)}</span>${esc(p.park)}${p.visited ? ' <span class="check">✓</span>' : ""}</li>`).join("")}</ul></div>`;
    }).join("");

    let filter = "all", div = params.get("div") || "all", sortKey = "div", asc = true;
    const sel = $("#div-filter");
    DIVS.forEach(d => sel.add(new Option(d, d)));
    if (!DIVS.includes(div)) div = "all";
    sel.value = div;

    const chips = $("#park-filters");
    chips.innerHTML = [["all", "All"], ["visited", "Visited"], ["todo", "To visit"]]
      .map(([k, l]) => `<button class="chip" data-f="${k}">${l}</button>`).join("");

    const draw = () => {
      const rows = PARKS
        .filter(p => (filter === "all" || (filter === "visited" ? p.visited : !p.visited)) && (div === "all" || p.div === div))
        .sort((a, b) => {
          const x = sortKey === "div" ? DIVS.indexOf(a.div) : a[sortKey], y = sortKey === "div" ? DIVS.indexOf(b.div) : b[sortKey];
          const c = typeof x === "number" || typeof x === "boolean" ? Number(x) - Number(y) : String(x).localeCompare(String(y));
          return (asc ? c : -c) || a.park.localeCompare(b.park);
        });
      $("#park-body").innerHTML = rows.map(p => {
        const href = reportHref(p);
        return `
        <tr class="${p.visited ? "done" : ""}">
          <td><strong>${esc(p.park)}</strong></td>
          <td>${esc(p.team)}</td>
          <td>${esc(p.city)}</td>
          <td>${esc(p.div)}</td>
          <td class="num">${p.opened}</td>
          <td>${p.visited ? `<span class="check">✓</span> ${p.date ? fmtDate(p.date) : "Visited"}` : '<span class="muted">—</span>'}</td>
          <td>${href ? `<a class="text-link" href="${esc(href)}">View game &amp; photos →</a>` : '<span class="muted">Coming soon</span>'}</td>
        </tr>`;
      }).join("") || `<tr><td colspan="7" class="muted">No ballparks match.</td></tr>`;
      $("#park-count").textContent = `${rows.length} ballpark${rows.length === 1 ? "" : "s"}`;
      $$(".chip", chips).forEach(c => c.classList.toggle("active", c.dataset.f === filter));
      $$("th[data-sort]").forEach(th => th.dataset.dir = th.dataset.sort === sortKey ? (asc ? "asc" : "desc") : "");
    };
    chips.addEventListener("click", e => { const b = e.target.closest(".chip"); if (b) { filter = b.dataset.f; draw(); } });
    sel.addEventListener("change", () => {
      div = sel.value;
      history.replaceState(null, "", div === "all" ? "ballparks.html#list" : `ballparks.html?div=${encodeURIComponent(div)}#list`);
      draw();
    });
    $$("th[data-sort]").forEach(th => th.addEventListener("click", () => {
      const k = th.dataset.sort; asc = sortKey === k ? !asc : true; sortKey = k; draw();
    }));
    draw();

    const trips = byCat("ballparks");
    $("#park-trips").innerHTML = trips.map(card).join("") ||
      `<div class="empty">No ballpark trip reports yet — play ball.</div>`;
  }

  /* ------------------------------------------------------------------ */
  /* Status page — Springs breweries, 14ers, ballparks                   */
  /* ------------------------------------------------------------------ */
  const ICONS = {
    peak: [
      '<path d="M8 44 L20 32 L25 35 L34 21 L44 31 L56 42"/><path d="M34 21 L31 30 L35 36"/><path d="M25 35 L23 40"/><path d="M44 31 L42 36"/>',
      '<path d="M8 44 L18 35 L24 37 L30 26 L34 29 L38 24 L48 34 L56 41"/><path d="M30 26 L27 35 L30 40"/><path d="M38 24 L37 32 L41 37"/>',
      '<path d="M9 44 L22 34 L32 22 L42 32 L55 43"/><path d="M32 22 L28 31 L31 38"/><path d="M32 22 L36 30"/><path d="M22 34 L20 39"/>'
    ],
    park: '<path d="M10 30 Q32 6 54 30"/><path d="M32 52 L10 30"/><path d="M32 52 L54 30"/><path d="M32 46 L24 38 L32 30 L40 38 Z"/><circle cx="32" cy="38" r="1.6"/>',
    mug: '<path d="M18 24 H40 V46 a4 4 0 0 1 -4 4 H22 a4 4 0 0 1 -4 -4 Z"/><path d="M40 29 H45 a5 5 0 0 1 5 5 V38 a5 5 0 0 1 -5 5 H40"/><path d="M16 24 c1 -6 6 -7 9 -4 c2 -5 8 -5 10 -1 c4 -3 8 0 7 5"/><path d="M24 30 V44 M30 30 V44"/>'
  };
  const icon = paths => `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

  function stItem({ done, href, svg, top, name, sub }) {
    const tag = href ? "a" : "div";
    return `<${tag} class="st-item${done ? " done" : ""}"${href ? ` href="${esc(href)}"` : ""}>
      <span class="st-icon">${icon(svg)}${done ? '<span class="st-check">✓</span>' : ""}</span>
      <span class="st-text"><span class="st-top">${esc(top)}</span><span class="st-name">${esc(name)}</span>${sub ? `<span class="st-sub">${esc(sub)}</span>` : ""}</span>
    </${tag}>`;
  }
  const stGroup = (title, items) => `<div class="st-group"><h3>${esc(title)}</h3><div class="st-grid">${items.join("")}</div></div>`;

  function renderStatus() {
    const loggedIds = new Set(logged.map(e => e.id));
    const SB = typeof SPRINGS_BREWERIES !== "undefined" ? SPRINGS_BREWERIES : [];
    const sbDone = b => b.visited || (b.expedition && loggedIds.has(b.expedition));
    const tripHref = id => id && loggedIds.has(id) ? `expedition.html?id=${id}` : "";
    const AZ = typeof ARIZONA_BREWERIES !== "undefined" ? ARIZONA_BREWERIES : [];
    const azDone = b => b.visited || (b.expedition && loggedIds.has(b.expedition));

    // Summary tiles
    const tiles = [
      ["#springs", "Springs Breweries", SB.filter(sbDone).length, SB.length, "mug"],
      ...(AZ.length ? [["#arizona", "Gary's Arizona Brews", AZ.filter(azDone).length, AZ.length, "mug"]] : []),
      ["#fourteeners", "Colorado 14ers", summited().length, PEAKS14.length, "peak"],
      ["#ballparks", "MLB Ballparks", parksVisited().length, PARKS.length, "park"]
    ];
    $("#st-summary").innerHTML = tiles.map(([h, l, d, t, ic]) => `
      <a class="st-tile" href="${h}">
        <span class="st-icon${t && d === t ? " done" : ""}">${icon(ic === "peak" ? ICONS.peak[0] : ICONS[ic])}</span>
        <span><strong>${d}<small> / ${t}</small></strong><span class="lbl">${l}</span>
        <span class="pbar"><span style="width:${t ? d / t * 100 : 0}%"></span></span></span>
      </a>`).join("");

    // Springs breweries
    $("#st-springs").innerHTML = stGroup(`Colorado Springs (${SB.length} breweries)`, SB.map(b => stItem({
      done: sbDone(b), href: tripHref(b.expedition) || "SpringsBrewery.html", svg: ICONS.mug,
      top: sbDone(b) ? "Visited" : "To visit", name: b.name, sub: b.note || ""
    })));

    // Gary's Arizona breweries grouped by area (synced from the claude.ai brew board)
    if (AZ.length && $("#st-az")) {
      const areas = [...new Set(AZ.map(b => b.area))];
      $("#st-az").innerHTML = areas.map(a => {
        const list = AZ.filter(b => b.area === a);
        return stGroup(`${a} (${list.filter(azDone).length} of ${list.length})`, list.map(b => stItem({
          done: azDone(b), href: tripHref(b.expedition) || "https://claude.ai/artifact/NWatG7JEB5gGWhZ6NBFdYt", svg: ICONS.mug,
          top: azDone(b) ? (b.date ? `Visited ${b.date}` : "Visited") : b.city, name: b.name, sub: azDone(b) ? b.city : (b.note || "")
        })));
      }).join("");
      if ($("#st-az-synced") && typeof ARIZONA_SYNCED !== "undefined") $("#st-az-synced").textContent = `Stamps are made on Gary's Brew Passport and copied here nightly · last updated ${ARIZONA_SYNCED}`;
    }

    // 14ers grouped by range (most peaks first)
    const ranges = [...new Set(PEAKS14.map(p => p.range))]
      .sort((a, b) => PEAKS14.filter(p => p.range === b).length - PEAKS14.filter(p => p.range === a).length || a.localeCompare(b));
    $("#st-peaks").innerHTML = ranges.map(r => {
      const list = PEAKS14.filter(p => p.range === r).sort((a, b) => b.elev - a.elev);
      return stGroup(`${r} Range (${list.length} peak${list.length === 1 ? "" : "s"})`, list.map(p => stItem({
        done: isSummited(p), href: reportHref(p) || `peaks.html?range=${encodeURIComponent(p.range)}#list`, svg: ICONS.peak[p.rank % 3],
        top: `${p.elev.toLocaleString()} ft`, name: p.name
      })));
    }).join("");

    // Ballparks grouped by division
    $("#st-parks").innerHTML = DIVS.map(d => {
      const list = PARKS.filter(p => p.div === d);
      return stGroup(`${d} (${list.filter(p => p.visited).length} of ${list.length})`, list.map(p => stItem({
        done: p.visited, href: reportHref(p) || `ballparks.html?div=${encodeURIComponent(d)}#list`, svg: ICONS.park,
        top: p.city, name: p.park, sub: p.team
      })));
    }).join("");
  }

  function lightbox(photos) {
    const lb = $("#lightbox"); if (!lb || !photos.length) return;
    const img = $("img", lb); let idx = 0;
    const show = n => { idx = (n + photos.length) % photos.length; img.src = photos[idx]; };
    $("#exp-gallery").addEventListener("click", e => { const b = e.target.closest("button"); if (!b) return; show(+b.dataset.i); lb.classList.add("open"); });
    $(".lb-close", lb).onclick = () => lb.classList.remove("open");
    $(".lb-prev", lb).onclick = () => show(idx - 1);
    $(".lb-next", lb).onclick = () => show(idx + 1);
    lb.addEventListener("click", e => { if (e.target === lb) lb.classList.remove("open"); });
    document.addEventListener("keydown", e => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") lb.classList.remove("open");
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
  }

  /* ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    buildHeader();
    buildFooter();
    const page = document.body.dataset.page;
    if (page === "home") renderHome();
    if (page === "log") renderLog();
    if (page === "peaks") renderPeaks();
    if (page === "ballparks") renderBallparks();
    if (page === "status") renderStatus();
    if (page === "expedition") renderExpedition();
  });
})();
