const meals = [
  { id: "lentejas-huevo", name: "Lentejas con arroz y huevo", short: "Lentejas con arroz", description: "Un plato casero de lentejas, arroz, huevo y tomate para una pausa con más tiempo.", price: 9, time: 15, place: "Comedor", emoji: "🍛", image: "assets/plato-lentejas.jpg", bg: "#f4ead2", iron: true, light: false, moments: ["Almuerzo"], ingredients: ["Lentejas", "Arroz", "Huevo", "Tomate"], allergens: ["Huevo"], nutrition: "Las legumbres forman parte de una alimentación diversa. La vitamina C de frutas y verduras ayuda a absorber el hierro de origen vegetal.", substitute: "Si prefieres otra opción, busca un sánguche de huevo y una fruta cítrica." },
  { id: "lentejas", name: "Ensalada de legumbres y verduras", short: "Ensalada de legumbres", description: "Una mezcla fresca de legumbres y verduras para variar tu pausa.", price: 9, time: 15, place: "Comedor", emoji: "🥗", image: "assets/ensalada.jpg", bg: "#e9f0d9", iron: true, light: true, moments: ["Almuerzo", "Snack"], tags: ["Vegetariana", "Hierro"], ingredients: ["Legumbres", "Hojas verdes", "Tomate", "Verduras"], allergens: [], nutrition: "Las legumbres forman parte de una alimentación diversa. La vitamina C de frutas y verduras ayuda a absorber el hierro de origen vegetal.", substitute: "Para algo más rápido, prueba un pan con huevo y una fruta cítrica." },
  { id: "huevo", name: "Sánguche de huevo y palta", short: "Huevo y palta", description: "Una alternativa sencilla, fácil de llevar a la siguiente clase.", price: 6, time: 5, place: "Cafetería", emoji: "🥑", image: "assets/sandwich-vegetales.jpg", bg: "#e7f0df", iron: false, light: true, moments: ["Desayuno", "Snack"], tags: ["Vegetariana", "Rápida"], ingredients: ["Huevo", "Palta", "Pan", "Tomate"], allergens: ["Gluten", "Huevo"], nutrition: "Una combinación simple para resolver una pausa corta. Revisa con el local cómo se prepara y qué ingredientes incluye.", substitute: "Si no hay huevo, una fruta con yogur puede ser una alternativa rápida." },
  { id: "pollo", name: "Pollo con arroz y tomate", short: "Pollo con arroz", description: "Pollo salteado con arroz y tomate, servido en un plato.", price: 12, time: 10, place: "Local cercano", emoji: "🍗", image: "assets/plato-pollo.jpg", bg: "#f3e9d8", iron: true, light: false, moments: ["Almuerzo"], tags: ["Para llevar"], ingredients: ["Pollo", "Arroz", "Tomate"], allergens: [], nutrition: "El pollo y las verduras pueden formar parte de una alimentación variada. Los ingredientes y la disponibilidad dependen del local.", substitute: "Para una alternativa sin carne, consulta por un plato con legumbres." },
  { id: "avena", name: "Avena con plátano y yogur", short: "Avena y fruta", description: "Algo suave y fresco para cuando quieres una pausa ligera.", price: 5, time: 5, place: "Cafetería", emoji: "🥣", image: "assets/avena.jpg", bg: "#f3edd9", iron: false, light: true, moments: ["Desayuno", "Snack"], tags: ["Ligera", "Vegetariana"], ingredients: ["Avena", "Plátano", "Yogur"], allergens: ["Gluten", "Lácteos"], nutrition: "Una opción sencilla de cafetería. Confirma los ingredientes y posibles trazas directamente con quien la prepara.", substitute: "Si no consumes lácteos, pregunta si hay una versión con bebida vegetal." },
  { id: "atun", name: "Galletas con atún y tomate", short: "Atún y tomate", description: "Una opción salada, rápida y práctica para comer entre clases.", price: 8, time: 5, place: "Máquina", emoji: "🐟", bg: "#e4eff0", iron: false, light: true, moments: ["Snack"], tags: ["Rápida", "Para llevar"], ingredients: ["Atún", "Galletas", "Tomate"], allergens: ["Pescado", "Gluten"], nutrition: "Consulta el empaque para revisar ingredientes, alérgenos y fecha de vencimiento.", substitute: "También puedes elegir una fruta y un puñado de frutos secos, si son adecuados para ti." },
  { id: "quinua", name: "Bowl de quinua y verduras", short: "Quinua y verduras", description: "Quinua, verduras de estación y huevo, servidos en un bowl.", price: 11, time: 15, place: "Comedor", emoji: "🍲", image: "assets/bowl-quinua.jpg", bg: "#e8eddf", iron: true, light: true, moments: ["Almuerzo"], tags: ["Vegetariana", "Hierro"], ingredients: ["Quinua", "Verduras", "Huevo"], allergens: ["Huevo"], nutrition: "Una propuesta vegetal y referencial. La mezcla exacta cambia según los ingredientes disponibles.", substitute: "Si tienes poco tiempo, pregunta por una porción de quinua para llevar." },
  { id: "fruta", name: "Fruta de estación y queso", short: "Fruta y queso", description: "Una pausa breve con fruta fresca y queso en porción individual.", price: 5, time: 5, place: "Máquina", emoji: "🍊", bg: "#f8ead7", iron: false, light: true, moments: ["Desayuno", "Snack"], tags: ["Ligera", "Rápida"], ingredients: ["Mandarina", "Queso"], allergens: ["Lácteos"], nutrition: "La fruta aporta variedad y frescura. Revisa la conservación del producto antes de elegir.", substitute: "Si no consumes lácteos, elige una fruta sola o consulta por otra combinación." }
];

const sourceLinks = {
  minsaIron: "https://www.gob.pe/21579",
  minsaVitaminC: "https://www.gob.pe/institucion/minsa/noticias/49439-vitamina-c-aumenta-la-absorcion-del-hierro-en-los-alimentos",
  who: "https://www.who.int/news-room/fact-sheets/detail/anaemia",
  minsaCare: "https://www.gob.pe/23344-que-es-la-anemia-diagnostico-y-tratamiento"
};
const pageContent = document.getElementById("page-content");
const dialog = document.getElementById("app-dialog");
const dialogContent = document.getElementById("dialog-content");
const toastRegion = document.getElementById("toast-region");
const STORAGE_KEY = "nutricampus-demo-v1";

function freshState() {
  return { page: "inicio", setupDone: false, setupSkipped: false, prefs: { time: "", budget: "", place: "" }, exclusions: [], filters: { time: "", budget: "", place: "", iron: false, light: false, moment: "" }, search: "", sort: "recommended", favorites: [], planned: null, lastSelected: null, history: [], feelings: [], dismissedFeelings: [] };
}
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    return saved ? { ...freshState(), ...saved, prefs: { ...freshState().prefs, ...(saved.prefs || {}) }, filters: { ...freshState().filters, ...(saved.filters || {}) } } : freshState();
  } catch { return freshState(); }
}
let state = loadState();
let setupStep = 1;
let setupDraft = { ...state.prefs };
let dialogMealId = null;
let toastTimer;

function persist() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* The experience remains usable if storage is unavailable. */ }
}
function money(n) { return `S/ ${n}`; }
function mealById(id) { return meals.find((meal) => meal.id === id); }
function esc(value = "") { return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]); }
function dateISO(date) { const adjusted = new Date(date.getTime() - date.getTimezoneOffset() * 60000); return adjusted.toISOString().slice(0, 10); }
function prettyDate(value) { if (!value) return ""; return new Intl.DateTimeFormat("es-PE", { weekday: "long", day: "numeric", month: "long" }).format(new Date(`${value}T12:00:00`)); }
function prettyDay(value) { if (!value) return ""; return new Intl.DateTimeFormat("es-PE", { day: "2-digit" }).format(new Date(`${value}T12:00:00`)); }
function shortWeekday(value) { if (!value) return ""; return new Intl.DateTimeFormat("es-PE", { weekday: "short" }).format(new Date(`${value}T12:00:00`)).replace(".", ""); }
function showToast(message) {
  toastRegion.innerHTML = `<div class="toast" role="status">${esc(message)}</div>`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toastRegion.innerHTML = ""; }, 3200);
}
function updateNavigation() {
  document.querySelectorAll("[data-page]").forEach((button) => {
    const active = button.dataset.page === state.page;
    button.classList.toggle("is-active", active);
    if (button.classList.contains("nav-item") || button.classList.contains("mobile-nav-item")) {
      if (active) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
    }
  });
}
function changePage(page, scroll = true) {
  state.page = page;
  persist();
  renderPage();
  updateNavigation();
  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
}
function allergenMatch(meal) { return !state.exclusions.some((item) => meal.allergens.includes(item)); }
function currentMoment() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 11) return "Desayuno";
  if (hour >= 12 && hour < 16) return "Almuerzo";
  return "Snack";
}
function currentRecommendation() {
  const moment = currentMoment();
  const matches = meals.filter((meal) => allergenMatch(meal) && (!state.prefs.time || meal.time <= Number(state.prefs.time)) && (!state.prefs.budget || meal.price <= Number(state.prefs.budget)) && (!state.prefs.place || meal.place === state.prefs.place));
  return matches.find((meal) => meal.moments.includes(moment)) || matches[0] || null;
}
function foodArtwork(meal, compact = false) {
  const artwork = meal.image ? `<img class="food-photo" src="${meal.image}" alt="Plato de ${esc(meal.short)}" loading="lazy" />` : `<span class="food-emoji" aria-hidden="true">${meal.emoji}</span>`;
  return `<div class="${compact ? "food-visual" : "detail-hero"}" style="--food-bg:${meal.bg}" role="img" aria-label="${meal.image ? `Plato de ${esc(meal.short)}` : `Ilustración de ${esc(meal.short)}`}">${artwork}</div>`;
}
function mealCard(meal) {
  const saved = state.favorites.includes(meal.id);
  const pills = [`<span class="meta-pill">◷ ${meal.time} min</span>`, `<span class="meta-pill">${esc(meal.place)}</span>`, ...(meal.light ? [`<span class="meta-pill">Ligera</span>`] : []), ...(meal.iron ? [`<span class="meta-pill iron-label">✦ Fuente de hierro</span>`] : [])].join("");
  return `<article class="food-card">${foodArtwork(meal, true)}<button class="favorite-toggle ${saved ? "is-saved" : ""}" data-action="toggle-favorite" data-id="${meal.id}" aria-label="${saved ? "Quitar de favoritos" : "Guardar en favoritos"}: ${esc(meal.name)}" aria-pressed="${saved}">${saved ? "♥" : "♡"}</button><div class="food-card-body"><h3>${esc(meal.name)}</h3><p>${esc(meal.description)}</p><div class="meta-line">${pills}</div><div class="food-card-footer"><strong>${money(meal.price)}</strong><button class="button button-secondary button-small" data-action="detail" data-id="${meal.id}">Ver detalle <span aria-hidden="true">→</span></button></div></div></article>`;
}
const prepIdeas = [
  { mealId: "huevo", prepTime: 5, cost: 4, ingredients: "Pan · huevo · palta" },
  { mealId: "avena", prepTime: 5, cost: 3, ingredients: "Avena · plátano · yogur" },
  { mealId: "lentejas", prepTime: 10, cost: 6, ingredients: "Lentejas cocidas · tomate · limón" }
];
function prepIdeasTemplate() {
  return `<div class="section-heading"><div><span class="eyebrow"><span class="eyebrow-dot"></span>También desde casa</span><h2>Ideas rápidas para llevar</h2><p class="muted">Preparaciones sencillas para armar antes de salir.</p></div></div><div class="prep-grid">${prepIdeas.map((idea) => { const meal = mealById(idea.mealId); const saved = state.favorites.includes(meal.id); return `<article class="prep-card">${meal.image ? `<img src="${meal.image}" alt="Preparación sugerida: ${esc(meal.short)}" loading="lazy" />` : `<span class="prep-emoji" aria-hidden="true">${meal.emoji}</span>`}<div class="prep-card-body"><div class="prep-card-top"><h3>${esc(meal.name)}</h3><button class="favorite-toggle ${saved ? "is-saved" : ""}" data-action="toggle-favorite" data-id="${meal.id}" aria-label="${saved ? "Quitar de favoritos" : "Guardar idea en favoritos"}: ${esc(meal.name)}" aria-pressed="${saved}">${saved ? "♥" : "♡"}</button></div><div class="meta-line"><span class="meta-pill">⏱ ${idea.prepTime} min de preparación</span><span class="meta-pill">${money(idea.cost)} aprox.</span></div><p>${esc(idea.ingredients)}.</p><button class="inline-link" data-action="detail" data-id="${meal.id}">Ver ingredientes y opción →</button></div></article>`; }).join("")}</div><p class="filter-note">Tiempos y costos aproximados; pueden variar según los ingredientes que tengas en casa y los precios locales.</p>`;
}
function sectionTitle(eyebrow, title, description, action = "") {
  return `<div class="page-title"><div><span class="eyebrow"><span class="eyebrow-dot"></span>${eyebrow}</span><h1>${title}</h1><p>${description}</p></div>${action}</div>`;
}
function homeTemplate() {
  const meal = currentRecommendation();
  const recommendationLabel = meal?.moments.includes(currentMoment()) ? `Una idea para tu ${currentMoment().toLocaleLowerCase("es")}` : "Otra opción que encaja";
  const recommendation = meal ? `<article class="recommendation-card" aria-labelledby="recommendation-title"><div class="recommendation-top"><span class="eyebrow"><span class="eyebrow-dot"></span>${recommendationLabel}</span><span class="tag-soft">✦ Recomendación</span></div><div class="food-art">${meal.image ? `<img class="feature-photo" src="${meal.image}" alt="Plato de ${esc(meal.short)}" />` : `<span class="food-emoji" role="img" aria-label="${esc(meal.short)}">${meal.emoji}</span>`}</div><div class="recommendation-details"><div><h2 id="recommendation-title">${esc(meal.name)}</h2><p>◷ ${meal.time} min &nbsp; · &nbsp; ${esc(meal.place)}</p></div><span class="price-large">${money(meal.price)}</span></div><button class="button" data-action="detail" data-id="${meal.id}">Ver esta opción <span aria-hidden="true">→</span></button></article>` : `<article class="recommendation-card no-recommendation"><div class="recommendation-top"><span class="eyebrow"><span class="eyebrow-dot"></span>Una idea para hoy</span></div><div class="food-art"><span class="food-emoji" aria-hidden="true">🌿</span></div><div class="recommendation-details"><div><h2>No encontramos una opción con esas preferencias</h2><p>Amplía tus filtros o revisa tus alimentos excluidos.</p></div></div><button class="button" data-action="edit-profile">Revisar preferencias</button><button class="button button-quiet" data-page="explorar">Explorar todas las opciones</button></article>`;
  const planned = state.planned ? mealById(state.planned.mealId) : null;
  const recentMeal = state.lastSelected ? mealById(state.lastSelected.mealId) : null;
  const hasFeeling = recentMeal && (state.feelings.some((item) => item.selectionId === state.lastSelected.selectionId) || state.dismissedFeelings.includes(state.lastSelected.selectionId));
  return `<section class="home-hero" aria-labelledby="welcome-title">
    <div class="welcome-card"><span class="eyebrow"><span class="eyebrow-dot"></span>Tu pausa, mejor elegida</span><h1 id="welcome-title">Come mejor, <span>incluso entre clases.</span></h1><p class="body-copy">Encuentra algo rico para tu pausa, según el tiempo que tienes, tu presupuesto y lo que te provoca.</p><div class="welcome-actions"><button class="button button-primary" data-action="open-setup">Personalizar mis opciones <span aria-hidden="true">→</span></button><button class="button button-quiet" data-action="guest">Continuar como invitado</button></div><button class="button button-quiet button-small" data-action="login">Ingresar con correo</button></div>
    ${recommendation}
  </section>
  ${!state.setupDone ? `<aside class="setup-banner"><div class="setup-copy"><span class="setup-icon" aria-hidden="true">✧</span><div><strong>${state.setupSkipped ? "Explora a tu ritmo" : "Recomendaciones más a tu medida"}</strong><p>${state.setupSkipped ? "Puedes guardar tu tiempo, presupuesto y lugar habitual cuando quieras." : "Cuéntanos 3 cosas para encontrar opciones que te queden cerca."}</p></div></div><button class="button button-outline button-small" data-action="open-setup">${state.setupSkipped ? "Completar preferencias" : "Configurar ahora"}</button></aside>` : ""}
  <div class="section-heading"><div><span class="eyebrow"><span class="eyebrow-dot"></span>Resuelve tu pausa</span><h2>¿Qué necesitas ahora?</h2></div><button class="inline-link" data-page="explorar">Ver todas las opciones →</button></div>
  <div class="quick-grid"><button class="quick-card" data-action="go-filter" data-filter="iron"><span class="quick-icon" aria-hidden="true">🌿</span><span><h3>Algo con hierro</h3><p>Encuentra opciones y aprende un poco más.</p></span></button><button class="quick-card" data-action="go-filter" data-filter="quick"><span class="quick-icon" aria-hidden="true">⚡</span><span><h3>Tengo poco tiempo</h3><p>Ideas para una pausa de 5 minutos.</p></span></button><button class="quick-card" data-action="go-filter" data-filter="light"><span class="quick-icon" aria-hidden="true">🌱</span><span><h3>Algo ligero</h3><p>Opciones para seguir con tus clases.</p></span></button><button class="quick-card" data-page="planificar"><span class="quick-icon" aria-hidden="true">🗓️</span><span><h3>Organizar mi comida</h3><p>Deja lista una opción para después.</p></span></button></div>
  ${prepIdeasTemplate()}
  <div class="content-grid" style="margin-top:16px"><article class="panel"><div class="panel-heading"><div><h2>¿Buscas cambiar tu snack?</h2><p>Compara opciones rápidas y elige lo que te venga bien.</p></div><span class="quick-icon" aria-hidden="true">🍌</span></div><button class="button button-secondary button-small" data-action="go-filter" data-filter="quick">Ver opciones rápidas →</button></article><article class="panel"><div class="panel-heading"><div><h2>¿Gaseosa o bebida energética?</h2><p>Agua o limonada con poca azúcar pueden ser alternativas sencillas cuando están disponibles.</p></div><span class="quick-icon" aria-hidden="true">💧</span></div><button class="inline-link" data-action="learn">Conocer la orientación del MINSA →</button></article></div>
  <div class="section-heading"><div><span class="eyebrow"><span class="eyebrow-dot"></span>Para ti</span><h2>Un poco de orientación</h2></div><button class="inline-link" data-action="learn">Ver contenidos →</button></div>
  <div class="content-grid"><article class="panel"><div class="panel-heading"><div><h2>Tu próxima pausa</h2><p>Una decisión sencilla puede empezar aquí.</p></div><span class="quick-icon" aria-hidden="true">🥗</span></div>${planned ? `<div class="meal-row"><span class="food-thumb" aria-hidden="true">${planned.emoji}</span><div class="meal-row-copy"><strong>${esc(planned.name)}</strong><span>${prettyDate(state.planned.date)} · ${esc(state.planned.time)}</span></div><span class="meal-row-meta">Planificada</span></div><button class="inline-link" data-page="planificar">Ver planificación →</button>` : meal ? `<div class="content-teaser"><span class="quick-icon" aria-hidden="true">＋</span><div><strong>¿Ya sabes qué comerás?</strong><p>Guarda una opción y elige el día y la hora de tu próxima comida.</p><button class="button button-secondary button-small" data-action="plan" data-id="${meal.id}">Planificar esta opción</button></div></div>` : `<div class="content-teaser"><span class="quick-icon" aria-hidden="true">＋</span><div><strong>Prueba otras preferencias</strong><p>Amplía tu búsqueda para ver más alternativas.</p><button class="button button-secondary button-small" data-page="explorar">Explorar opciones</button></div></div>`}</article>
    <article class="panel"><div class="panel-heading"><div><h2>Un dato para llevar</h2><p>Contenido breve, con fuentes que puedes consultar.</p></div><span class="quick-icon" aria-hidden="true">💡</span></div><div class="content-teaser"><span class="quick-icon" aria-hidden="true">🍊</span><div><strong>Hierro y vitamina C</strong><p>Acompañar alimentos de origen vegetal con frutas o verduras con vitamina C puede ayudar a absorber mejor el hierro.</p><button class="button button-secondary button-small" data-action="learn">Leer en 30 segundos</button></div></div></article></div>
  ${recentMeal && !hasFeeling ? `<section class="panel feeling-prompt" style="margin-top:20px"><div class="panel-heading"><div><h2>¿Cómo te sentó ${esc(recentMeal.short.toLowerCase())}?</h2><p>Tu respuesta es opcional y toma una pulsación.</p></div></div><div class="welcome-actions"><button class="button button-outline" data-action="feeling" data-feeling="Ligero" data-id="${recentMeal.id}">🌱 Ligero</button><button class="button button-outline" data-action="feeling" data-feeling="Normal" data-id="${recentMeal.id}">🙂 Normal</button><button class="button button-outline" data-action="feeling" data-feeling="Pesado" data-id="${recentMeal.id}">☁️ Pesado</button><button class="button button-quiet" data-action="dismiss-feeling">Ahora no</button></div></section>` : ""}
  <p class="disclaimer"><strong>Una guía, no un diagnóstico.</strong> NutriCampus comparte ideas generales para acompañar tus decisiones. Si tienes dudas sobre anemia o necesitas orientación personal, consulta a un profesional de salud.</p>`;
}

function currentMeals() {
  let list = meals.filter(allergenMatch);
  const f = state.filters;
  if (f.time) list = list.filter((meal) => meal.time <= Number(f.time));
  if (f.budget) list = list.filter((meal) => meal.price <= Number(f.budget));
  if (f.place) list = list.filter((meal) => meal.place === f.place);
  if (f.iron) list = list.filter((meal) => meal.iron);
  if (f.light) list = list.filter((meal) => meal.light);
  if (f.moment) list = list.filter((meal) => meal.moments.includes(f.moment));
  const query = state.search.trim().toLocaleLowerCase("es");
  if (query) list = list.filter((meal) => `${meal.name} ${meal.description} ${meal.place} ${meal.tags.join(" ")} ${meal.ingredients.join(" ")}`.toLocaleLowerCase("es").includes(query));
  if (state.sort === "price") list.sort((a, b) => a.price - b.price);
  if (state.sort === "time") list.sort((a, b) => a.time - b.time);
  return list;
}
function activeChips() {
  const f = state.filters;
  return [f.time ? `${f.time} min máx.` : "", f.budget ? `${money(f.budget)} máx.` : "", f.place, f.moment, f.iron ? "Fuente de hierro" : "", f.light ? "Ligera" : ""].filter(Boolean).map((label) => `<span class="filter-chip">${esc(label)}</span>`).join("");
}
function resultsTemplate() {
  const list = currentMeals();
  const content = list.length ? list.map(mealCard).join("") : `<div class="empty-state"><span class="empty-emoji" aria-hidden="true">🔎</span><h3>No encontramos opciones con esos filtros</h3><p>Prueba con más tiempo, un presupuesto mayor o elige otro lugar. También puedes limpiar los filtros.</p><button class="button button-primary button-small" data-action="clear-filters">Limpiar filtros</button></div>`;
  return `<div id="results-status" class="results-count" role="status" aria-live="polite">${list.length} ${list.length === 1 ? "opción encontrada" : "opciones encontradas"}</div><div id="active-filters" class="active-filters">${activeChips()}</div><div id="food-results" class="food-grid">${content}</div>`;
}
function exploreTemplate() {
  return `${sectionTitle("Encuentra algo que te funcione", "Explorar opciones", "Filtra por tu pausa, tu presupuesto o el lugar que tienes a mano.")}
    <div class="explore-layout"><aside class="panel filters-panel" aria-label="Filtros de opciones"><div class="filter-heading"><h2>Filtrar opciones</h2><button class="inline-link" data-action="clear-filters">Limpiar</button></div><div class="filter-columns">
      <div class="filter-group"><label class="filter-label" for="food-search">Busca por nombre</label><div class="search-wrap"><span aria-hidden="true">⌕</span><input id="food-search" class="search-input" type="search" placeholder="Ej. lentejas, sánguche" value="${esc(state.search)}" autocomplete="off" /></div><p class="filter-note">Puedes escribir parte del nombre o un ingrediente.</p></div>
      <div class="filter-group"><label class="filter-label" for="filter-time">Tiempo disponible</label><select id="filter-time" class="field-select" data-filter-key="time"><option value="">Cualquier tiempo</option><option value="5" ${state.filters.time === "5" ? "selected" : ""}>Hasta 5 minutos</option><option value="10" ${state.filters.time === "10" ? "selected" : ""}>Hasta 10 minutos</option><option value="15" ${state.filters.time === "15" ? "selected" : ""}>Hasta 15 minutos</option></select></div>
      <div class="filter-group"><label class="filter-label" for="filter-budget">Presupuesto máximo</label><select id="filter-budget" class="field-select" data-filter-key="budget"><option value="">Cualquier precio</option><option value="5" ${state.filters.budget === "5" ? "selected" : ""}>Hasta S/ 5</option><option value="10" ${state.filters.budget === "10" ? "selected" : ""}>Hasta S/ 10</option><option value="15" ${state.filters.budget === "15" ? "selected" : ""}>Hasta S/ 15</option></select></div>
      <div class="filter-group"><label class="filter-label" for="filter-place">Lugar</label><select id="filter-place" class="field-select" data-filter-key="place"><option value="">Todos los lugares</option>${["Cafetería", "Comedor", "Máquina", "Local cercano"].map((p) => `<option ${state.filters.place === p ? "selected" : ""}>${p}</option>`).join("")}</select></div>
      <div class="filter-group"><label class="filter-label" for="filter-moment">Momento del día</label><select id="filter-moment" class="field-select" data-filter-key="moment"><option value="">Cualquier momento</option>${["Desayuno", "Almuerzo", "Snack"].map((m) => `<option ${state.filters.moment === m ? "selected" : ""}>${m}</option>`).join("")}</select></div>
      <div class="filter-group"><label class="filter-label" for="filter-iron">Orientación</label><select id="filter-iron" class="field-select" data-filter-key="iron"><option value="false" ${!state.filters.iron ? "selected" : ""}>Todas las opciones</option><option value="true" ${state.filters.iron ? "selected" : ""}>Fuente de hierro</option></select><p class="filter-note">Las etiquetas se basan en información nutricional referenciada.</p></div>
      <div class="filter-group"><label class="filter-label" for="filter-light">Ligereza</label><select id="filter-light" class="field-select" data-filter-key="light"><option value="false" ${!state.filters.light ? "selected" : ""}>Todas las opciones</option><option value="true" ${state.filters.light ? "selected" : ""}>Solo opciones ligeras</option></select></div>
      </div></aside>
      <section aria-label="Resultados de búsqueda"><div class="results-toolbar"><div id="results-count-wrap"><div id="results-status" class="results-count" role="status" aria-live="polite">${currentMeals().length} ${currentMeals().length === 1 ? "opción encontrada" : "opciones encontradas"}</div></div><label class="results-count" for="sort-results">Ordenar <select id="sort-results" class="sort-select"><option value="recommended" ${state.sort === "recommended" ? "selected" : ""}>Recomendadas</option><option value="price" ${state.sort === "price" ? "selected" : ""}>Menor precio</option><option value="time" ${state.sort === "time" ? "selected" : ""}>Menor tiempo</option></select></label></div><div id="active-filters" class="active-filters">${activeChips()}</div><div id="food-results" class="food-grid" aria-live="polite">${currentMeals().length ? currentMeals().map(mealCard).join("") : `<div class="empty-state"><span class="empty-emoji" aria-hidden="true">🔎</span><h3>No encontramos opciones con esos filtros</h3><p>Prueba con más tiempo, un presupuesto mayor o elige otro lugar. También puedes limpiar los filtros.</p><button class="button button-primary button-small" data-action="clear-filters">Limpiar filtros</button></div>`}</div></section></div>`;
}
function planTemplate() {
  const planned = state.planned && mealById(state.planned.mealId);
  const main = planned ? `<article class="plan-card"><div class="plan-date"><b>${prettyDay(state.planned.date)}</b><span>${shortWeekday(state.planned.date)}</span></div><div class="plan-card-main"><strong>${planned.emoji} ${esc(planned.name)}</strong><span>${prettyDate(state.planned.date)} · ${esc(state.planned.time)} · ${money(planned.price)}</span><div class="meta-line"><span class="meta-pill">${esc(planned.place)}</span>${state.planned.consumed ? `<span class="meta-pill iron-label">✓ Consumida</span>` : `<span class="meta-pill">Planificada</span>`}</div></div><div class="welcome-actions">${!state.planned.consumed ? `<button class="button button-secondary button-small" data-action="consumed">Marcar consumida</button>` : ""}<button class="button button-outline button-small" data-action="edit-plan">Editar</button><button class="button button-danger button-small" data-action="cancel-plan">Cancelar</button></div></article>` : `<div class="empty-state"><span class="empty-emoji" aria-hidden="true">🗓️</span><h3>Aún no tienes una comida planificada</h3><p>Elige una alternativa, selecciona el día y la hora, y la encontrarás aquí y en tu inicio.</p><button class="button button-primary" data-page="explorar">Explorar opciones <span aria-hidden="true">→</span></button></div>`;
  return `${sectionTitle("Organiza tu próxima pausa", "Planificar comida", "Deja elegida una alternativa para que tu día fluya un poco mejor.", planned ? "" : `<button class="button button-primary" data-page="explorar">Ver opciones</button>`)}<div class="plan-layout"><section class="panel"><div class="panel-heading"><div><h2>Mi próxima comida</h2><p>Tu planificación también aparece en Inicio.</p></div><span class="quick-icon" aria-hidden="true">🗓️</span></div>${main}</section><aside class="panel"><div class="panel-heading"><div><h2>Una pausa posible</h2><p>Ideas flexibles, según lo que tengas a mano.</p></div></div><p class="body-copy" style="font-size:14px">Los horarios de clases cambian. Puedes mover o cancelar tu planificación cuando quieras. Los precios y lugares son referenciales; confirma disponibilidad con el local.</p><button class="button button-secondary button-small" data-page="explorar">Buscar otra opción</button></aside></div>`;
}
function favoritesTemplate() {
  const list = state.favorites.map(mealById).filter(Boolean).filter(allergenMatch);
  const cards = list.length ? list.map(mealCard).join("") : `<div class="empty-state"><span class="empty-emoji" aria-hidden="true">♡</span><h3>Tus opciones favoritas aparecerán aquí</h3><p>Guarda una alternativa que te guste y vuelve a elegirla en otra pausa.</p><button class="button button-primary" data-page="explorar">Explorar alternativas</button></div>`;
  return `${sectionTitle("Tus opciones guardadas", "Favoritos", "Encuentra rápido esas alternativas que te gustaría repetir.")}<div class="food-grid">${cards}</div>`;
}
function feelingSummary() {
  const latest = state.feelings.slice(-7).reverse();
  if (!latest.length) return `<div class="empty-state"><span class="empty-emoji" aria-hidden="true">🌱</span><h3>Tu resumen empieza con una elección</h3><p>Después de comer, puedes registrar con una pulsación si te sentiste ligero, normal o pesado.</p></div>`;
  return `<div>${latest.map((entry) => { const meal = mealById(entry.mealId); const icon = entry.feeling === "Ligero" ? "🌱" : entry.feeling === "Normal" ? "🙂" : "☁️"; return `<div class="meal-row"><span class="food-thumb" aria-hidden="true">${icon}</span><div class="meal-row-copy"><strong>${esc(entry.feeling)} · ${esc(meal?.short || "Comida")}</strong><span>${new Intl.DateTimeFormat("es-PE", { day: "numeric", month: "short" }).format(new Date(entry.date))}</span></div></div>`; }).join("")}</div>`;
}
function profileTemplate() {
  const prefs = state.prefs;
  const timeText = prefs.time ? `Hasta ${prefs.time} min` : "Sin preferencia";
  const budgetText = prefs.budget ? `Hasta ${money(prefs.budget)}` : "Sin límite";
  const placeText = prefs.place || "Cualquier lugar";
  return `${sectionTitle("Tu espacio", "Mi perfil", "Ajusta tus preferencias y revisa lo que has registrado.")}<div class="profile-grid"><section class="profile-card"><div class="profile-avatar" aria-hidden="true">A</div><h2>Hola, Alex</h2><p>Tu perfil se guarda en este dispositivo. No necesitas crear una cuenta para probar NutriCampus.</p><button class="button" data-action="edit-profile">Editar mis preferencias</button></section><div class="panel"><div class="panel-heading"><div><h2>Mis preferencias</h2><p>Se aplican a tus recomendaciones.</p></div><button class="inline-link" data-action="edit-profile">Editar</button></div><div class="preference-row"><strong>Tiempo</strong><span>${esc(timeText)}</span></div><div class="preference-row"><strong>Presupuesto</strong><span>${esc(budgetText)}</span></div><div class="preference-row"><strong>Lugar habitual</strong><span>${esc(placeText)}</span></div><div class="preference-row"><strong>No consumo</strong><span>${state.exclusions.length ? esc(state.exclusions.join(", ")) : "Sin restricciones guardadas"}</span></div></div></div>
    <div class="section-heading"><div><span class="eyebrow"><span class="eyebrow-dot"></span>Tu experiencia</span><h2>Cómo te has sentido</h2><p class="muted">Tus últimas siete respuestas, sin juicios ni metas de peso.</p></div></div><section class="panel">${feelingSummary()}</section>
    <div class="section-heading"><div><span class="eyebrow"><span class="eyebrow-dot"></span>Orientación general</span><h2>Aprende sobre el hierro</h2></div><button class="inline-link" data-action="learn">Ver contenidos →</button></div><div class="content-teaser"><span class="quick-icon" aria-hidden="true">🌿</span><div><strong>Información breve, con fuente visible</strong><p>Ideas generales para acompañar tus elecciones; no reemplazan una consulta de salud.</p><button class="button button-secondary button-small" data-action="learn">Leer contenidos</button></div></div>
    <p class="disclaimer"><strong>Orientación educativa:</strong> estos contenidos no diagnostican ni tratan anemia. El diagnóstico y las recomendaciones personales corresponden a un profesional de salud. <a class="source-link" href="${sourceLinks.minsaCare}" target="_blank" rel="noopener noreferrer">Consultar información del MINSA</a></p>`;
}
function learnTemplate() {
  return `${sectionTitle("Pequeños datos, mejores decisiones", "Aprende sobre el hierro", "Ideas generales para tu día a día, con fuentes oficiales para ampliar la información.", `<button class="button button-outline" data-page="explorar">Ver opciones con hierro</button>`)}<div class="learn-grid">
    <article class="learn-card"><span class="learn-icon" aria-hidden="true">🥩</span><h3>¿Qué alimentos lo aportan?</h3><p>El MINSA menciona alimentos como sangrecita, hígado, bazo, pescado de carne oscura y carnes rojas como fuentes de hierro. La disponibilidad puede variar en cada cafetería.</p><a class="source-link" href="${sourceLinks.minsaIron}" target="_blank" rel="noopener noreferrer">Fuente: Ministerio de Salud del Perú ↗</a></article>
    <article class="learn-card"><span class="learn-icon" aria-hidden="true">🍊</span><h3>Hierro vegetal + vitamina C</h3><p>Acompañar legumbres u otros alimentos vegetales con frutas o verduras con vitamina C puede ayudar a absorber mejor el hierro de origen vegetal. Una idea: lentejas con tomate y limón.</p><a class="source-link" href="${sourceLinks.minsaVitaminC}" target="_blank" rel="noopener noreferrer">Fuente: Ministerio de Salud del Perú ↗</a></article>
    <article class="learn-card"><span class="learn-icon" aria-hidden="true">🍎</span><h3>Una alternativa para el snack</h3><p>Si quieres variar un snack, explora opciones sencillas como fruta de estación, yogur o un sánguche pequeño. Revisa ingredientes y alérgenos, y escoge algo que se ajuste a tus preferencias.</p><button class="button button-secondary button-small" data-action="go-filter" data-filter="quick">Explorar opciones rápidas →</button></article>
    <article class="learn-card"><span class="learn-icon" aria-hidden="true">💧</span><h3>Una bebida para acompañar</h3><p>El MINSA propone refrescos naturales como limonada o naranjada con poca azúcar y recomienda evitar jugos procesados. Confirma qué bebidas ofrece cada punto del campus.</p><a class="source-link" href="${sourceLinks.minsaVitaminC}" target="_blank" rel="noopener noreferrer">Fuente: Ministerio de Salud del Perú ↗</a></article>
    <article class="learn-card"><span class="learn-icon" aria-hidden="true">🫘</span><h3>Combina con lo que tengas</h3><p>La OMS recomienda una alimentación diversa, que puede incluir legumbres, verduras de hojas verdes, pescado y carnes. Elige combinaciones que estén a tu alcance y te gusten.</p><a class="source-link" href="${sourceLinks.who}" target="_blank" rel="noopener noreferrer">Fuente: Organización Mundial de la Salud ↗</a></article>
    <article class="learn-card"><span class="learn-icon" aria-hidden="true">ℹ️</span><h3>Información, no diagnóstico</h3><p>La anemia no se puede confirmar por una lista de alimentos ni por cómo te sientes. Si te preocupa tu salud, consulta a un profesional para recibir orientación y evaluación.</p><a class="source-link" href="${sourceLinks.minsaCare}" target="_blank" rel="noopener noreferrer">Fuente: Ministerio de Salud del Perú ↗</a></article>
  </div><div class="disclaimer"><strong>Alcance de NutriCampus:</strong> estos microcontenidos son educativos. No indican cantidades, dietas terapéuticas ni sustituyen atención profesional.</div>`;
}
function renderPage() {
  const templates = { inicio: homeTemplate, explorar: exploreTemplate, planificar: planTemplate, favoritos: favoritesTemplate, perfil: profileTemplate, aprender: learnTemplate };
  pageContent.innerHTML = (templates[state.page] || homeTemplate)();
  updateNavigation();
}
function updateExploreResults() {
  const results = document.getElementById("food-results");
  if (!results) return;
  const list = currentMeals();
  const status = document.getElementById("results-count-wrap");
  if (status) status.innerHTML = `<div id="results-status" class="results-count" role="status" aria-live="polite">${list.length} ${list.length === 1 ? "opción encontrada" : "opciones encontradas"}</div>`;
  const chips = document.getElementById("active-filters");
  if (chips) chips.innerHTML = activeChips();
  results.innerHTML = list.length ? list.map(mealCard).join("") : `<div class="empty-state"><span class="empty-emoji" aria-hidden="true">🔎</span><h3>No encontramos opciones con esos filtros</h3><p>Prueba con más tiempo, un presupuesto mayor o elige otro lugar. También puedes limpiar los filtros.</p><button class="button button-primary button-small" data-action="clear-filters">Limpiar filtros</button></div>`;
}

function dialogShell(title, description, body, actions = "") {
  return `<div class="dialog-inner"><div class="dialog-top"><div><h2 id="dialog-title">${title}</h2>${description ? `<p>${description}</p>` : ""}</div><button class="close-dialog" data-action="close-dialog" aria-label="Cerrar">×</button></div>${body}${actions}</div>`;
}
function openDialog(html) { dialogContent.innerHTML = html; if (!dialog.open) dialog.showModal(); }
function closeDialog() { if (dialog.open) dialog.close(); }
function showSetup(step = 1) {
  setupStep = step;
  setupDraft = { ...state.prefs };
  renderSetupDialog();
}
function renderSetupDialog() {
  const stepInfo = [
    { title: "¿Cuánto dura tu pausa?", text: "Elige el tiempo que tienes normalmente entre clases.", label: "Tiempo disponible", id: "setup-time", options: [["5", "5 minutos"], ["10", "10 minutos"], ["15", "15 minutos"]], key: "time" },
    { title: "¿Cuánto quieres gastar?", text: "Usaremos tu presupuesto para ordenar las opciones que te sirven.", label: "Presupuesto máximo", id: "setup-budget", options: [["5", "Hasta S/ 5"], ["10", "Hasta S/ 10"], ["15", "Hasta S/ 15"]], key: "budget" },
    { title: "¿Dónde sueles comer?", text: "Así podemos mostrar primero lo que tienes a mano.", label: "Lugar habitual", id: "setup-place", options: [["Cafetería", "Cafetería"], ["Comedor", "Comedor"], ["Máquina", "Máquina expendedora"], ["Local cercano", "Local cercano"]], key: "place" }
  ][setupStep - 1];
  const opts = stepInfo.options.map(([value, label]) => `<option value="${value}" ${setupDraft[stepInfo.key] === value ? "selected" : ""}>${label}</option>`).join("");
  const actions = `<div class="dialog-actions"><button class="button button-quiet" data-action="skip-setup">Omitir</button><div class="dialog-actions-right">${setupStep > 1 ? `<button class="button button-outline" data-action="setup-back">Volver</button>` : ""}<button class="button button-primary" data-action="setup-next">${setupStep === 3 ? "Guardar preferencias" : "Continuar"} <span aria-hidden="true">→</span></button></div></div>`;
  openDialog(dialogShell(stepInfo.title, `${stepInfo.text} <span class="muted">Paso ${setupStep} de 3</span>`, `<div class="step-indicators" aria-label="Paso ${setupStep} de 3">${[1, 2, 3].map((n) => `<span class="${n <= setupStep ? "active" : ""}"></span>`).join("")}</div><div class="form-field"><label for="${stepInfo.id}">${stepInfo.label}</label><select class="field-select" id="${stepInfo.id}"><option value="">Elige una opción</option>${opts}</select></div>`, actions));
}
function showDetail(id) {
  const meal = mealById(id);
  if (!meal) return;
  dialogMealId = id;
  const allergens = meal.allergens.length ? meal.allergens.map(esc).join(", ") : "No se declaran alérgenos en esta ficha";
  const favorite = state.favorites.includes(id);
  const actions = `<div class="dialog-actions"><button class="button button-outline button-small" data-action="toggle-favorite" data-id="${id}">${favorite ? "♥ Guardado" : "♡ Guardar"}</button><div class="dialog-actions-right"><button class="button button-secondary button-small" data-action="plan" data-id="${id}">Planificar</button><button class="button button-primary button-small" data-action="select-meal" data-id="${id}">Elegir opción</button></div></div>`;
  const body = `${foodArtwork(meal)}<div class="detail-facts"><span class="detail-fact">◷ ${meal.time} min</span><span class="detail-fact">${money(meal.price)} · referencial</span><span class="detail-fact">${esc(meal.place)}</span>${meal.iron ? `<span class="detail-fact iron-label">✦ Fuente de hierro</span>` : ""}</div><p class="body-copy" style="font-size:14px">${esc(meal.description)}</p><div class="detail-section"><h3>Ingredientes referenciales</h3><p>${meal.ingredients.map(esc).join(" · ")}</p><h3>Alérgenos declarados</h3><p>⚠ ${allergens}. Confirma con quien prepara o vende el alimento; la información del local puede cambiar.</p></div><details class="detail-section"><summary><strong>Información nutricional orientativa</strong></summary><p>${esc(meal.nutrition)}</p>${meal.iron ? `<a class="source-link" href="${sourceLinks.who}" target="_blank" rel="noopener noreferrer">Consultar fuente oficial ↗</a>` : ""}</details><details class="detail-section"><summary><strong>¿Buscas otra alternativa?</strong></summary><p>${esc(meal.substitute)}</p></details><p class="filter-note">Lugar, precio e ingredientes son referenciales. Verifica la disponibilidad y los alérgenos en el punto de venta.</p>`;
  openDialog(dialogShell(esc(meal.name), "Detalle de alternativa", body, actions));
}
function showPlanDialog(id, editing = false) {
  const planned = editing ? state.planned : null;
  const mealId = id || planned?.mealId;
  const today = dateISO(new Date());
  const tomorrow = dateISO(new Date(Date.now() + 86400000));
  const mealOptions = meals.filter(allergenMatch).map((meal) => `<option value="${meal.id}" ${meal.id === mealId ? "selected" : ""}>${esc(meal.name)} · ${money(meal.price)}</option>`).join("");
  const body = `<div class="form-field"><label for="plan-meal">Alternativa</label><select class="field-select" id="plan-meal">${mealOptions}</select></div><div class="form-field"><label for="plan-date">Día</label><input class="text-input" id="plan-date" type="date" min="${today}" value="${planned?.date || tomorrow}" required /></div><div class="form-field"><label for="plan-time">Hora</label><input class="text-input" id="plan-time" type="time" value="${planned?.time || "12:30"}" required /></div><p class="filter-note">La comida planificada se verá en Inicio y en esta sección. Los recordatorios no están activos en esta demo.</p>`;
  const actions = `<div class="dialog-actions"><button class="button button-quiet" data-action="close-dialog">Cancelar</button><div class="dialog-actions-right"><button class="button button-primary" data-action="save-plan">${editing ? "Guardar cambios" : "Confirmar planificación"}</button></div></div>`;
  openDialog(dialogShell(editing ? "Ajustar planificación" : "Planificar mi comida", "Elige un día y una hora que te funcionen.", body, actions));
}
function showProfileDialog() {
  const exclusions = ["Lácteos", "Frutos secos", "Mariscos", "Pescado", "Huevo", "Gluten"];
  const checkboxes = exclusions.map((item) => `<label class="check-option"><input type="checkbox" name="exclusion" value="${item}" ${state.exclusions.includes(item) ? "checked" : ""} />${item}</label>`).join("");
  const body = `<div class="form-field"><label for="profile-time">Mi tiempo de pausa</label><select class="field-select" id="profile-time"><option value="">Sin preferencia</option>${[["5", "5 min"], ["10", "10 min"], ["15", "15 min"]].map(([v, label]) => `<option value="${v}" ${state.prefs.time === v ? "selected" : ""}>${label}</option>`).join("")}</select></div><div class="form-field"><label for="profile-budget">Mi presupuesto máximo</label><select class="field-select" id="profile-budget"><option value="">Sin límite</option>${[["5", "S/ 5"], ["10", "S/ 10"], ["15", "S/ 15"]].map(([v, label]) => `<option value="${v}" ${state.prefs.budget === v ? "selected" : ""}>${label}</option>`).join("")}</select></div><div class="form-field"><label for="profile-place">Mi lugar habitual</label><select class="field-select" id="profile-place"><option value="">Cualquier lugar</option>${["Cafetería", "Comedor", "Máquina", "Local cercano"].map((place) => `<option ${state.prefs.place === place ? "selected" : ""}>${place}</option>`).join("")}</select></div><fieldset class="form-field" style="border:0;padding:0;margin:0"><legend>Alimentos que prefiero evitar</legend><div class="checkbox-list">${checkboxes}</div><p class="filter-note">Las opciones que incluyan estos ingredientes dejarán de aparecer.</p></fieldset>`;
  const actions = `<div class="dialog-actions"><button class="button button-quiet" data-action="close-dialog">Cancelar</button><div class="dialog-actions-right"><button class="button button-primary" data-action="save-profile">Guardar</button></div></div>`;
  openDialog(dialogShell("Mis preferencias", "Puedes actualizar estos datos cuando cambie tu horario o tus necesidades.", body, actions));
}
function showLoginDialog() {
  const body = `<div class="form-field"><label for="login-email">Correo</label><input class="text-input" id="login-email" type="email" autocomplete="email" required placeholder="tu@correo.com" /></div><div class="form-field"><label for="login-password">Contraseña</label><input class="text-input" id="login-password" type="password" autocomplete="current-password" required placeholder="Tu contraseña" /></div><p class="filter-note">Demo local: no enviamos ni guardamos tus credenciales. Para probar NutriCampus sin cuenta, puedes continuar como invitado.</p>`;
  const actions = `<div class="dialog-actions"><button class="button button-quiet" data-action="close-dialog">Cancelar</button><div class="dialog-actions-right"><button class="button button-primary" data-action="login-submit">Ingresar</button></div></div>`;
  openDialog(dialogShell("Ingresa a NutriCampus", "Usa solo tu correo y contraseña.", body, actions));
}
function showConfirmDialog(id) {
  const meal = mealById(id);
  if (!meal) return;
  dialogMealId = id;
  const body = `<div class="content-teaser"><span class="quick-icon" aria-hidden="true">${meal.emoji}</span><div><strong>${esc(meal.name)}</strong><p>${meal.time} min · ${money(meal.price)} · ${esc(meal.place)}</p></div></div><p class="body-copy" style="margin-top:17px;font-size:14px">Confirma para guardar tu elección en este dispositivo. También puedes dejarla planificada para otro momento.</p>`;
  const actions = `<div class="dialog-actions"><button class="button button-quiet" data-action="close-dialog">Volver</button><div class="dialog-actions-right"><button class="button button-outline button-small" data-action="plan" data-id="${id}">Planificar</button><button class="button button-primary" data-action="confirm-selection" data-id="${id}">Confirmar elección</button></div></div>`;
  openDialog(dialogShell("¿Elegimos esta opción?", "Confirma tu elección.", body, actions));
}

function saveFeeling(feeling, mealId) {
  const selectionId = state.lastSelected?.mealId === mealId ? state.lastSelected.selectionId : `selection-${Date.now()}`;
  if (!state.feelings.some((item) => item.selectionId === selectionId)) state.feelings.push({ mealId, feeling, selectionId, date: new Date().toISOString() });
  state.feelings = state.feelings.slice(-30);
  persist();
  renderPage();
  showToast("Gracias por contarnos. Tu respuesta quedó guardada en este dispositivo.");
}
function clearFilters() {
  state.filters = { time: "", budget: "", place: "", iron: false, light: false, moment: "" };
  state.search = "";
  state.sort = "recommended";
  persist();
  renderPage();
}

document.addEventListener("click", (event) => {
  const pageButton = event.target.closest("[data-page]");
  const button = event.target.closest("[data-action]");
  if (pageButton && !button) { changePage(pageButton.dataset.page); return; }
  if (pageButton && button && pageButton === button) { changePage(pageButton.dataset.page); return; }
  if (!button) return;
  const { action, id } = button.dataset;
  if (action === "close-dialog") { closeDialog(); return; }
  if (action === "open-setup") { showSetup(); return; }
  if (action === "guest" || action === "skip-setup") { state.setupDone = false; state.setupSkipped = true; state.prefs = { time: "", budget: "", place: "" }; state.filters = { time: "", budget: "", place: "", iron: false, light: false, moment: "" }; persist(); closeDialog(); changePage("inicio", false); showToast("Estás explorando como invitado. Puedes personalizar más tarde."); return; }
  if (action === "setup-back") { if (setupStep > 1) { setupStep -= 1; renderSetupDialog(); } return; }
  if (action === "setup-next") {
    const fields = ["setup-time", "setup-budget", "setup-place"];
    const key = ["time", "budget", "place"][setupStep - 1];
    const value = document.getElementById(fields[setupStep - 1])?.value || "";
    if (!value) { showToast("Elige una opción para continuar, o selecciona Omitir."); document.getElementById(fields[setupStep - 1])?.focus(); return; }
    setupDraft[key] = value;
    if (setupStep < 3) { setupStep += 1; renderSetupDialog(); } else { state.prefs = { ...setupDraft }; state.setupDone = true; state.setupSkipped = false; persist(); closeDialog(); changePage("inicio", false); showToast("Preferencias guardadas. Actualizamos tu recomendación."); }
    return;
  }
  if (action === "detail") { showDetail(id); return; }
  if (action === "toggle-favorite") {
    const wasSaved = state.favorites.includes(id);
    state.favorites = wasSaved ? state.favorites.filter((item) => item !== id) : [...state.favorites, id];
    persist();
    if (dialog.open && dialogMealId === id) showDetail(id); else renderPage();
    showToast(wasSaved ? "Quitamos esta opción de tus favoritos." : "Guardamos esta opción en tus favoritos.");
    return;
  }
  if (action === "plan") { showPlanDialog(id); return; }
  if (action === "select-meal") {
    showConfirmDialog(id); return;
  }
  if (action === "confirm-selection") {
    const meal = mealById(id);
    if (!meal) return;
    state.lastSelected = { mealId: id, selectionId: `selection-${Date.now()}`, date: new Date().toISOString() };
    state.history.unshift({ mealId: id, date: new Date().toISOString() });
    state.history = state.history.slice(0, 50);
    persist(); closeDialog(); changePage("inicio", false); showToast("Elección guardada. Cuando termines, puedes contarnos cómo te sentiste."); return;
  }
  if (action === "save-plan") {
    const date = document.getElementById("plan-date")?.value;
    const time = document.getElementById("plan-time")?.value;
    const mealId = document.getElementById("plan-meal")?.value;
    const when = date && time ? new Date(`${date}T${time}`) : null;
    if (!date || !time || !when || Number.isNaN(when.getTime()) || when.getTime() <= Date.now()) { showToast("Elige una fecha y hora futuras para tu comida."); return; }
    state.planned = { mealId, date, time, consumed: false };
    persist(); closeDialog(); changePage("planificar", false); showToast("Comida planificada. También aparece en tu Inicio."); return;
  }
  if (action === "edit-plan") { showPlanDialog(state.planned?.mealId, true); return; }
  if (action === "cancel-plan") { state.planned = null; persist(); renderPage(); showToast("Quitamos la comida de tu planificación."); return; }
  if (action === "consumed") {
    if (state.planned) {
      const plan = state.planned;
      state.planned.consumed = true;
      state.lastSelected = { mealId: plan.mealId, selectionId: `selection-${Date.now()}`, date: new Date().toISOString() };
      state.history.unshift({ mealId: plan.mealId, date: new Date().toISOString() });
      persist(); changePage("planificar", false); showToast("Marcamos tu comida como consumida.");
    }
    return;
  }
  if (action === "feeling") { saveFeeling(button.dataset.feeling, id); return; }
  if (action === "dismiss-feeling") { if (state.lastSelected && !state.dismissedFeelings.includes(state.lastSelected.selectionId)) state.dismissedFeelings.push(state.lastSelected.selectionId); persist(); renderPage(); return; }
  if (action === "clear-filters") { clearFilters(); return; }
  if (action === "go-filter") { state.filters = { time: "", budget: "", place: "", iron: button.dataset.filter === "iron", light: button.dataset.filter === "light", moment: "" }; state.filters.time = button.dataset.filter === "quick" ? "5" : ""; changePage("explorar"); return; }
  if (action === "learn") { changePage("aprender"); return; }
  if (action === "edit-profile") { showProfileDialog(); return; }
  if (action === "login") { showLoginDialog(); return; }
  if (action === "login-submit") {
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");
    if (!email?.reportValidity() || !password?.reportValidity()) return;
    closeDialog();
    if (state.setupDone) { changePage("inicio", false); showToast("Acceso de demostración iniciado. No se enviaron ni guardaron tus datos."); }
    else { showSetup(); showToast("Acceso de demostración iniciado. No se enviaron ni guardaron tus datos."); }
    return;
  }
  if (action === "save-profile") {
    state.prefs = { time: document.getElementById("profile-time").value, budget: document.getElementById("profile-budget").value, place: document.getElementById("profile-place").value };
    state.exclusions = [...dialogContent.querySelectorAll('input[name="exclusion"]:checked')].map((input) => input.value);
    state.setupDone = true; state.setupSkipped = false; persist(); closeDialog(); renderPage(); showToast("Preferencias actualizadas. Ajustamos tus opciones."); return;
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches("[data-filter-key]")) {
    const key = target.dataset.filterKey;
    state.filters[key] = ["iron", "light"].includes(key) ? target.value === "true" : target.value;
    persist(); updateExploreResults();
  }
  if (target.id === "sort-results") { state.sort = target.value; persist(); updateExploreResults(); }
});
document.addEventListener("input", (event) => {
  if (event.target.id === "food-search") { state.search = event.target.value; updateExploreResults(); }
});
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});
renderPage();
