const meals = [
  { id: "lentejas-huevo", name: "Lentejas con arroz y huevo", short: "Lentejas con arroz", description: "Un plato casero de lentejas, arroz, huevo y tomate para una pausa con más tiempo.", price: 9, time: 15, place: "Comedor", emoji: "🍛", image: "assets/plato-lentejas.jpg", bg: "#f4ead2", iron: true, light: false, foodType: "energetico", tags: ["Hierro", "Vegetariana", "Energético"], ingredients: ["Lentejas", "Arroz", "Huevo", "Tomate"], allergens: ["Huevo"], nutrition: "Las legumbres forman parte de una alimentación diversa. La vitamina C de frutas y verduras ayuda a absorber el hierro de origen vegetal.", substitute: "Si prefieres otra opción, busca un sánguche de huevo y una fruta cítrica." },
  { id: "lentejas", name: "Ensalada de legumbres y verduras", short: "Ensalada de legumbres", description: "Una mezcla fresca de legumbres y verduras para variar tu pausa.", price: 9, time: 15, place: "Comedor", emoji: "🥗", image: "assets/ensalada.jpg", bg: "#e9f0d9", iron: true, light: true, foodType: "ligero", tags: ["Vegetariana", "Hierro", "Ligero"], ingredients: ["Legumbres", "Hojas verdes", "Tomate", "Verduras"], allergens: [], nutrition: "Las legumbres forman parte de una alimentación diversa. La vitamina C de frutas y verduras ayuda a absorber el hierro de origen vegetal.", substitute: "Para algo más rápido, prueba un pan con huevo y una fruta cítrica." },
  { id: "huevo", name: "Sánguche de huevo y palta", short: "Huevo y palta", description: "Una alternativa sencilla, fácil de llevar a la siguiente clase.", price: 6, time: 5, place: "Cafetería", emoji: "🥑", image: "assets/sandwich-vegetales.jpg", bg: "#e7f0df", iron: false, light: true, foodType: "rapido", tags: ["Vegetariana", "Rápida"], ingredients: ["Huevo", "Palta", "Pan", "Tomate"], allergens: ["Gluten", "Huevo"], nutrition: "Una combinación simple para resolver una pausa corta. Revisa con el local cómo se prepara y qué ingredientes incluye.", substitute: "Si no hay huevo, una fruta con yogur puede ser una alternativa rápida." },
  { id: "pollo", name: "Pollo con arroz y tomate", short: "Pollo con arroz", description: "Pollo salteado con arroz y tomate, servido en un plato.", price: 12, time: 10, place: "Local cercano", emoji: "🍗", image: "assets/plato-pollo.jpg", bg: "#f3e9d8", iron: true, light: false, foodType: "energetico", tags: ["Para llevar", "Energético"], ingredients: ["Pollo", "Arroz", "Tomate"], allergens: [], nutrition: "El pollo y las verduras pueden formar parte de una alimentación variada. Los ingredientes y la disponibilidad dependen del local.", substitute: "Para una alternativa sin carne, consulta por un plato con legumbres." },
  { id: "avena", name: "Avena con plátano y yogur", short: "Avena y fruta", description: "Algo suave y fresco para cuando quieres una pausa ligera.", price: 5, time: 5, place: "Cafetería", emoji: "🥣", image: "assets/avena.jpg", bg: "#f3edd9", iron: false, light: true, foodType: "ligero", tags: ["Ligera", "Vegetariana", "Ligero"], ingredients: ["Avena", "Plátano", "Yogur"], allergens: ["Gluten", "Lácteos"], nutrition: "Una opción sencilla de cafetería. Confirma los ingredientes y posibles trazas directamente con quien la prepara.", substitute: "Si no consumes lácteos, pregunta si hay una versión con bebida vegetal." },
  { id: "atun", name: "Galletas con atún y tomate", short: "Atún y tomate", description: "Una opción salada, rápida y práctica para comer entre clases.", price: 8, time: 5, place: "Máquina", emoji: "🐟", bg: "#e4eff0", iron: false, light: true, foodType: "rapido", tags: ["Rápida", "Para llevar"], ingredients: ["Atún", "Galletas", "Tomate"], allergens: ["Pescado", "Gluten"], nutrition: "Consulta el empaque para revisar ingredientes, alérgenos y fecha de vencimiento.", substitute: "También puedes elegir una fruta y un puñado de frutos secos, si son adecuados para ti." },
  { id: "quinua", name: "Bowl de quinua y verduras", short: "Quinua y verduras", description: "Quinua, verduras de estación y huevo, servidos en un bowl.", price: 11, time: 15, place: "Comedor", emoji: "🍲", image: "assets/bowl-quinua.jpg", bg: "#e8eddf", iron: true, light: false, foodType: "energetico", tags: ["Vegetariana", "Hierro", "Energético"], ingredients: ["Quinua", "Verduras", "Huevo"], allergens: ["Huevo"], nutrition: "Una propuesta vegetal y referencial. La mezcla exacta cambia según los ingredientes disponibles.", substitute: "Si tienes poco tiempo, pregunta por una porción de quinua para llevar." },
  { id: "fruta", name: "Fruta de estación y queso", short: "Fruta y queso", description: "Una pausa breve con fruta fresca y queso en porción individual.", price: 5, time: 5, place: "Máquina", emoji: "🍊", bg: "#f8ead7", iron: false, light: true, foodType: "ligero", tags: ["Ligera", "Rápida", "Ligero"], ingredients: ["Mandarina", "Queso"], allergens: ["Lácteos"], nutrition: "La fruta aporta variedad y frescura. Revisa la conservación del producto antes de elegir.", substitute: "Si no consumes lácteos, elige una fruta sola o consulta por otra combinación." }
];

const sourceLinks = {
  minsaIron: "https://www.gob.pe/21579",
  minsaVitaminC: "https://www.gob.pe/institucion/minsa/noticias/49439-vitamina-c-aumenta-la-absorcion-del-hierro-en-los-alimentos",
  who: "https://www.who.int/news-room/fact-sheets/detail/anaemia",
  minsaCare: "https://www.gob.pe/23344-que-es-la-anemia-diagnostico-y-tratamiento"
};
const learningArticles = [
  { id: "lentejas-limon", category: "Hierro", title: "Lentejas + limón: mejor absorción", read: 20, icon: "♧", body: "Las lentejas aportan hierro de origen vegetal. Si las acompañas con limón o naranja, puedes ayudar a su absorción. Es una combinación sencilla y económica para tu menú del día.", source: "minsaVitaminC", mealId: "lentejas-huevo", sourceLabel: "Ministerio de Salud del Perú" },
  { id: "fuentes-hierro", category: "Hierro", title: "Alimentos fuente de hierro de uso diario", read: 25, icon: "♧", body: "El MINSA menciona alimentos como sangrecita, hígado, bazo, pescado de carne oscura y carnes rojas. También hay hierro en alimentos vegetales como las legumbres. La disponibilidad depende de cada punto de venta.", source: "minsaIron", mealId: "pollo", sourceLabel: "Ministerio de Salud del Perú" },
  { id: "hierro-vitamina-c", category: "Combinaciones", title: "Combina hierro vegetal con vitamina C", read: 20, icon: "🍊", body: "Acompañar legumbres u otros alimentos vegetales con frutas o verduras con vitamina C puede ayudar a absorber mejor el hierro de origen vegetal. Una idea sencilla: lentejas con tomate y limón.", source: "minsaVitaminC", mealId: "lentejas-huevo", sourceLabel: "Ministerio de Salud del Perú" },
  { id: "mito-carne", category: "Mitos y verdades", title: "Mito o verdad: ¿solo la carne tiene hierro?", read: 25, icon: "ⓘ", body: "Mito. El hierro también está presente en alimentos vegetales, como las legumbres y algunas verduras de hojas verdes. Una alimentación diversa puede incluir fuentes animales y vegetales.", source: "who", mealId: "quinua", sourceLabel: "Organización Mundial de la Salud" }
];
let learningCategory = "Hierro";
let learningArticleId = "lentejas-limon";
const pageContent = document.getElementById("page-content");
const dialog = document.getElementById("app-dialog");
const dialogContent = document.getElementById("dialog-content");
const toastRegion = document.getElementById("toast-region");
const STORAGE_KEY = "nutricampus-demo-v1";

function freshState() {
  return { page: "inicio", setupDone: false, setupSkipped: false, profileName: "Alex", prefs: { time: "", budget: "", place: "" }, exclusions: [], filters: { time: "", budget: "", place: "", iron: false, foodType: "" }, search: "", sort: "recommended", favorites: [], planned: null, plans: [], learnSaved: [], lastSelected: null, history: [], feelings: [], dismissedFeelings: [] };
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
let activeDetailId = null;
let planWeekOffset = 0;
let editingPlanId = null;
let planDraft = { mealId: state.planned?.mealId || meals[0].id, date: dateISO(new Date(Date.now() + 86400000)), time: "12:30", reminder: false };
const planReminderTimers = new Map();
let toastTimer;

function getPlans() {
  if (!Array.isArray(state.plans)) state.plans = [];
  if (!state.plans.length && state.planned) state.plans = [{ ...state.planned, id: state.planned.id || `legacy-${state.planned.date}-${state.planned.time}`, reminder: Boolean(state.planned.reminder) }];
  return state.plans;
}
function syncPrimaryPlan() {
  const plans = getPlans().sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`));
  state.planned = plans.find((plan) => !plan.consumed && new Date(`${plan.date}T${plan.time}`) > new Date()) || plans.find((plan) => !plan.consumed) || null;
}
function shiftedDate(value, amount) {
  const date = new Date(`${value}T12:00:00`);
  date.setDate(date.getDate() + amount);
  return dateISO(date);
}
function weekDates(offset = 0) {
  const today = new Date();
  const mondayOffset = (today.getDay() + 6) % 7;
  const monday = dateISO(new Date(today.getFullYear(), today.getMonth(), today.getDate() - mondayOffset + offset * 7, 12));
  return Array.from({ length: 7 }, (_, index) => shiftedDate(monday, index));
}
function weekOffsetForDate(value) {
  const today = new Date();
  const selected = new Date(`${value}T12:00:00`);
  const todayMonday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (today.getDay() + 6) % 7, 12);
  const selectedMonday = new Date(selected.getFullYear(), selected.getMonth(), selected.getDate() - (selected.getDay() + 6) % 7, 12);
  return Math.round((selectedMonday - todayMonday) / 604800000);
}
function sameLocalDate(date) { return dateISO(new Date()) === date; }
function displayTime(value) {
  if (!value) return "";
  const [hour, minute] = value.split(":").map(Number);
  return new Intl.DateTimeFormat("es-PE", { hour: "numeric", minute: "2-digit", hour12: true }).format(new Date(2020, 0, 1, hour, minute));
}
function schedulePlanReminder(plan) {
  if (!plan.reminder || plan.consumed) return;
  const id = plan.id;
  if (planReminderTimers.has(id)) clearTimeout(planReminderTimers.get(id));
  const remindAt = new Date(`${plan.date}T${plan.time}`).getTime() - 10 * 60 * 1000;
  const delay = remindAt - Date.now();
  if (delay <= 0) return;
  const maxDelay = 2147480000;
  const timer = setTimeout(() => {
    if (delay > maxDelay) { schedulePlanReminder(plan); return; }
    const meal = mealById(plan.mealId);
    showToast(`En 10 minutos: ${meal?.name || "tu comida planificada"}.`);
    planReminderTimers.delete(id);
  }, Math.min(delay, maxDelay));
  planReminderTimers.set(id, timer);
}

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
    const active = button.dataset.page === state.page || (state.page === "aprender" && button.dataset.page === "explorar");
    button.classList.toggle("is-active", active);
    if (button.classList.contains("nav-item") || button.classList.contains("mobile-nav-item")) {
      if (active) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
    }
  });
}
function changePage(page, scroll = true) {
  activeDetailId = null;
  state.page = page;
  persist();
  renderPage();
  updateNavigation();
  if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
}
function allergenMatch(meal) { return !state.exclusions.some((item) => meal.allergens.includes(item)); }
function currentRecommendation() {
  return meals.find((meal) => allergenMatch(meal) && (!state.prefs.time || meal.time <= Number(state.prefs.time)) && (!state.prefs.budget || meal.price <= Number(state.prefs.budget)) && (!state.prefs.place || meal.place === state.prefs.place)) || null;
}
function foodArtwork(meal, compact = false) {
  const artwork = meal.image ? `<img class="food-photo" src="${meal.image}" alt="Plato de ${esc(meal.short)}" loading="lazy" />` : `<span class="food-emoji" aria-hidden="true">${meal.emoji}</span>`;
  return `<div class="${compact ? "food-visual" : "detail-hero"}" style="--food-bg:${meal.bg}" role="img" aria-label="${meal.image ? `Plato de ${esc(meal.short)}` : `Ilustración de ${esc(meal.short)}`}">${artwork}</div>`;
}
function mealCard(meal) {
  const saved = state.favorites.includes(meal.id);
  const foodTypeLabel = { ligero: "Ligero", rapido: "Rápido", energetico: "Energético" }[meal.foodType];
  const pills = [`<span class="meta-pill">◷ ${meal.time} min</span>`, `<span class="meta-pill">${esc(meal.place)}</span>`, ...(foodTypeLabel ? [`<span class="meta-pill">${foodTypeLabel}</span>`] : []), ...(meal.iron ? [`<span class="meta-pill iron-label">✦ Fuente de hierro</span>`] : [])].join("");
  return `<article class="food-card">${foodArtwork(meal, true)}<button class="favorite-toggle ${saved ? "is-saved" : ""}" data-action="toggle-favorite" data-id="${meal.id}" aria-label="${saved ? "Quitar de favoritos" : "Guardar en favoritos"}: ${esc(meal.name)}" aria-pressed="${saved}">${saved ? "♥" : "♡"}</button><div class="food-card-body"><h3>${esc(meal.name)}</h3><p>${esc(meal.description)}</p><div class="meta-line">${pills}</div><div class="food-card-footer"><strong>${money(meal.price)}</strong><button class="button button-secondary button-small" data-action="detail" data-id="${meal.id}">Ver detalle <span aria-hidden="true">→</span></button></div></div></article>`;
}
function sectionTitle(eyebrow, title, description, action = "") {
  return `<div class="page-title"><div><span class="eyebrow"><span class="eyebrow-dot"></span>${eyebrow}</span><h1>${title}</h1><p>${description}</p></div>${action}</div>`;
}
function homeTemplate() {
  const meal = currentRecommendation();
  const recommendation = meal ? `<article class="recommendation-card" aria-labelledby="recommendation-title"><div class="recommendation-top"><span class="eyebrow"><span class="eyebrow-dot"></span>Una idea para hoy</span><span class="tag-soft">✦ Recomendación</span></div><div class="food-art">${meal.image ? `<img class="feature-photo" src="${meal.image}" alt="Plato de ${esc(meal.short)}" />` : `<span class="food-emoji" role="img" aria-label="${esc(meal.short)}">${meal.emoji}</span>`}</div><div class="recommendation-details"><div><h2 id="recommendation-title">${esc(meal.name)}</h2><p>◷ ${meal.time} min &nbsp; · &nbsp; ${esc(meal.place)}</p></div><span class="price-large">${money(meal.price)}</span></div><button class="button" data-action="detail" data-id="${meal.id}">Ver esta opción <span aria-hidden="true">→</span></button></article>` : `<article class="recommendation-card no-recommendation"><div class="recommendation-top"><span class="eyebrow"><span class="eyebrow-dot"></span>Una idea para hoy</span></div><div class="food-art"><span class="food-emoji" aria-hidden="true">🌿</span></div><div class="recommendation-details"><div><h2>No encontramos una opción con esas preferencias</h2><p>Amplía tus filtros o revisa tus alimentos excluidos.</p></div></div><button class="button" data-action="edit-profile">Revisar preferencias</button><button class="button button-quiet" data-page="explorar">Explorar todas las opciones</button></article>`;
  const planned = state.planned ? mealById(state.planned.mealId) : null;
  const recentMeal = state.lastSelected ? mealById(state.lastSelected.mealId) : null;
  const hasFeeling = recentMeal && (state.feelings.some((item) => item.selectionId === state.lastSelected.selectionId) || state.dismissedFeelings.includes(state.lastSelected.selectionId));
  return `<section class="home-hero" aria-labelledby="welcome-title">
    <div class="welcome-card"><span class="eyebrow"><span class="eyebrow-dot"></span>Tu pausa, mejor elegida</span><h1 id="welcome-title">Come mejor, <span>incluso entre clases.</span></h1><p class="body-copy">Encuentra algo rico para tu pausa, según el tiempo que tienes, tu presupuesto y lo que te provoca.</p><div class="welcome-actions"><button class="button button-primary" data-action="open-setup">Personalizar mis opciones <span aria-hidden="true">→</span></button><button class="button button-quiet" data-action="guest">Continuar como invitado</button></div><button class="button button-quiet button-small" data-action="login">Ingresar con correo</button></div>
    ${recommendation}
  </section>
  ${!state.setupDone ? `<aside class="setup-banner"><div class="setup-copy"><span class="setup-icon" aria-hidden="true">✧</span><div><strong>${state.setupSkipped ? "Explora a tu ritmo" : "Recomendaciones más a tu medida"}</strong><p>${state.setupSkipped ? "Puedes guardar tu tiempo, presupuesto y lugar habitual cuando quieras." : "Cuéntanos 3 cosas para encontrar opciones que te queden cerca."}</p></div></div><button class="button button-outline button-small" data-action="open-setup">${state.setupSkipped ? "Completar preferencias" : "Configurar ahora"}</button></aside>` : ""}
  <div class="section-heading"><div><span class="eyebrow"><span class="eyebrow-dot"></span>Resuelve tu pausa</span><h2>¿Qué necesitas ahora?</h2></div><button class="inline-link" data-page="explorar">Ver todas las opciones →</button></div>
  <div class="quick-grid"><button class="quick-card" data-action="go-filter" data-filter="iron"><span class="quick-icon" aria-hidden="true">🌿</span><span><h3>Algo con hierro</h3><p>Encuentra opciones y aprende un poco más.</p></span></button><button class="quick-card" data-action="go-filter" data-filter="quick"><span class="quick-icon" aria-hidden="true">⚡</span><span><h3>Tengo poco tiempo</h3><p>Ideas para una pausa de 5 minutos.</p></span></button><button class="quick-card" data-page="planificar"><span class="quick-icon" aria-hidden="true">🗓️</span><span><h3>Organizar mi comida</h3><p>Deja lista una opción para después.</p></span></button></div>
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
  if (f.foodType) list = list.filter((meal) => meal.foodType === f.foodType);
  const query = state.search.trim().toLocaleLowerCase("es");
  if (query) list = list.filter((meal) => `${meal.name} ${meal.description} ${meal.place} ${meal.tags.join(" ")} ${meal.ingredients.join(" ")}`.toLocaleLowerCase("es").includes(query));
  if (state.sort === "price") list.sort((a, b) => a.price - b.price);
  if (state.sort === "time") list.sort((a, b) => a.time - b.time);
  return list;
}
function activeChips() {
  const f = state.filters;
  return [f.time ? `${f.time} min máx.` : "", f.budget ? `${money(f.budget)} máx.` : "", f.place, f.iron ? "Fuente de hierro" : "", f.foodType ? `Tipo: ${{ ligero: "Ligero", rapido: "Rápido", energetico: "Energético" }[f.foodType] || f.foodType}` : ""].filter(Boolean).map((label) => `<span class="filter-chip">${esc(label)}</span>`).join("");
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
      <div class="filter-group"><label class="filter-label" for="filter-food-type">Tipo de comida</label><select id="filter-food-type" class="field-select" data-filter-key="foodType"><option value="" ${!state.filters.foodType ? "selected" : ""}>Todos los tipos</option><option value="ligero" ${state.filters.foodType === "ligero" ? "selected" : ""}>Ligero</option><option value="rapido" ${state.filters.foodType === "rapido" ? "selected" : ""}>Rápido</option><option value="energetico" ${state.filters.foodType === "energetico" ? "selected" : ""}>Energético</option></select></div>
      <div class="filter-group"><label class="filter-label" for="filter-iron">Orientación</label><select id="filter-iron" class="field-select" data-filter-key="iron"><option value="false" ${!state.filters.iron ? "selected" : ""}>Todas las opciones</option><option value="true" ${state.filters.iron ? "selected" : ""}>Fuente de hierro</option></select><p class="filter-note">Las etiquetas se basan en información nutricional referenciada.</p></div>
      </div></aside>
      <section aria-label="Resultados de búsqueda"><div class="results-toolbar"><div id="results-count-wrap"><div id="results-status" class="results-count" role="status" aria-live="polite">${currentMeals().length} ${currentMeals().length === 1 ? "opción encontrada" : "opciones encontradas"}</div></div><label class="results-count" for="sort-results">Ordenar <select id="sort-results" class="sort-select"><option value="recommended" ${state.sort === "recommended" ? "selected" : ""}>Recomendadas</option><option value="price" ${state.sort === "price" ? "selected" : ""}>Menor precio</option><option value="time" ${state.sort === "time" ? "selected" : ""}>Menor tiempo</option></select></label></div><div id="active-filters" class="active-filters">${activeChips()}</div><div id="food-results" class="food-grid" aria-live="polite">${currentMeals().length ? currentMeals().map(mealCard).join("") : `<div class="empty-state"><span class="empty-emoji" aria-hidden="true">🔎</span><h3>No encontramos opciones con esos filtros</h3><p>Prueba con más tiempo, un presupuesto mayor o elige otro lugar. También puedes limpiar los filtros.</p><button class="button button-primary button-small" data-action="clear-filters">Limpiar filtros</button></div>`}</div></section></div><section class="learn-promo"><div class="learn-promo-icon" aria-hidden="true">✦</div><div><span class="eyebrow">NutriCampus · Aprende</span><h2>Una pausa también puede enseñarte algo</h2><p>Lee microcontenidos sobre hierro, combinaciones sencillas y mitos, en menos de 30 segundos.</p></div><button class="button button-primary" data-action="learn">Aprende sobre el hierro <span aria-hidden="true">→</span></button></section>`;
}
function planTemplate() {
  const plans = getPlans().slice().sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`));
  const days = weekDates(planWeekOffset);
  const rangeLabel = `${new Intl.DateTimeFormat("es-PE", { day: "numeric", month: "long" }).format(new Date(`${days[0]}T12:00:00`))} al ${new Intl.DateTimeFormat("es-PE", { day: "numeric", month: "long" }).format(new Date(`${days[6]}T12:00:00`))}`;
  const calendar = days.map((date) => {
    const dayPlans = plans.filter((plan) => plan.date === date);
    const dateObj = new Date(`${date}T12:00:00`);
    const label = new Intl.DateTimeFormat("es-PE", { weekday: "short" }).format(dateObj).replace(".", "");
    const isToday = sameLocalDate(date);
    const selected = planDraft.date === date;
    return `<button class="calendar-day ${isToday ? "is-today" : ""} ${selected ? "is-selected" : ""}" data-action="choose-plan-date" data-date="${date}" aria-pressed="${selected}"><span>${isToday ? "Hoy" : label}</span><strong>${prettyDay(date)}</strong><span class="calendar-day-plans">${dayPlans.length ? dayPlans.slice(0, 2).map((plan) => { const meal = mealById(plan.mealId); return `<span class="calendar-plan-preview"><small>${esc(displayTime(plan.time))}</small><b>${esc(meal?.short || "Comida")}</b></span>`; }).join("") : `<span class="calendar-add" aria-hidden="true">＋</span>`}</span></button>`;
  }).join("");
  const upcoming = plans.filter((plan) => !plan.consumed && new Date(`${plan.date}T${plan.time}`) > new Date());
  const upcomingHtml = upcoming.length ? upcoming.map((plan) => {
    const meal = mealById(plan.mealId);
    if (!meal) return "";
    return `<article class="upcoming-plan-card"><div class="upcoming-thumb">${meal.image ? `<img src="${meal.image}" alt="" loading="lazy" />` : `<span aria-hidden="true">${meal.emoji}</span>`}</div><div class="upcoming-plan-copy"><span>${new Intl.DateTimeFormat("es-PE", { weekday: "short", day: "numeric", month: "short" }).format(new Date(`${plan.date}T12:00:00`))} · ${esc(displayTime(plan.time))}${plan.reminder ? " · Recordatorio" : ""}</span><strong>${esc(meal.name)}</strong><small>${esc(meal.place)} · ${money(meal.price)}</small></div><div class="upcoming-plan-actions"><button class="button button-quiet button-small" data-action="consumed" data-id="${esc(plan.id)}">Hecha</button><button class="button button-outline button-small" data-action="edit-plan" data-id="${esc(plan.id)}">Editar</button><button class="button button-quiet button-small" data-action="cancel-plan" data-id="${esc(plan.id)}">Quitar</button></div></article>`;
  }).join("") : `<div class="plan-empty"><p>Aún no tienes próximas comidas. Elige un día y guarda tu primera planificación.</p></div>`;
  const mealOptions = meals.filter((meal) => meal.id === planDraft.mealId || allergenMatch(meal)).map((meal) => `<option value="${meal.id}" ${planDraft.mealId === meal.id ? "selected" : ""}>${esc(meal.name)}</option>`).join("");
  const timeOptions = ["12:30", "13:15", "15:00", "17:30"].map((time) => `<button type="button" class="plan-time-option ${planDraft.time === time ? "is-selected" : ""}" data-action="select-plan-time" data-time="${time}" aria-pressed="${planDraft.time === time}">${esc(displayTime(time))}</button>`).join("");
  const calendarControls = `<div class="calendar-controls"><button aria-label="Semana anterior" data-action="shift-plan-week" data-shift="-1">‹</button><button aria-label="Semana siguiente" data-action="shift-plan-week" data-shift="1">›</button></div>`;
  return `<div class="planner-page"><nav class="planner-breadcrumb" aria-label="Ruta de navegación"><button data-page="inicio">Inicio</button><span aria-hidden="true">›</span><span aria-current="page">Planificar</span></nav>
    <div class="planner-heading"><div><h1>Planificar mi comida</h1><p>Elige con anticipación tu próxima comida y recibe un recordatorio opcional.</p></div><button class="button button-primary planner-add-top" data-action="new-plan">＋ Nueva planificación</button></div>
    <div class="planner-layout"><section class="planner-main-column"><div class="calendar-heading"><h2>Semana del ${esc(rangeLabel)}</h2>${calendarControls}</div><div class="week-calendar" role="group" aria-label="Calendario de la semana">${calendar}</div>
      <section class="upcoming-section"><div class="upcoming-heading"><div><h2>Próximas comidas</h2><p>${upcoming.length ? `${upcoming.length} ${upcoming.length === 1 ? "comida planificada" : "comidas planificadas"}` : "Tus comidas aparecerán aquí"}</p></div><button class="inline-link" data-action="new-plan">＋ Añadir</button></div><div class="upcoming-list">${upcomingHtml}</div></section></section>
      <aside class="planner-form panel" aria-labelledby="planner-form-title"><h2 id="planner-form-title">${editingPlanId ? "Editar planificación" : "Nueva planificación"}</h2><label class="planner-meal-select" for="plan-meal"><span class="planner-meal-thumb">${mealById(planDraft.mealId)?.image ? `<img src="${mealById(planDraft.mealId).image}" alt="" />` : mealById(planDraft.mealId)?.emoji || "🥗"}</span><select id="plan-meal">${mealOptions || meals.map((meal) => `<option value="${meal.id}">${esc(meal.name)}</option>`).join("")}</select><span class="planner-meal-meta">${mealById(planDraft.mealId)?.time || 0} min · ${money(mealById(planDraft.mealId)?.price || 0)}</span></label>
        <div class="mobile-calendar-wrap"><div class="calendar-heading"><h2>Elige el día</h2>${calendarControls}</div><div class="week-calendar" role="group" aria-label="Elige un día de la semana">${calendar}</div></div>
        <label class="planner-label" for="plan-date">Día</label><input class="field-select planner-date-input" id="plan-date" type="date" min="${dateISO(new Date())}" value="${planDraft.date}" />
        <span class="planner-label">Hora</span><div class="plan-time-grid">${timeOptions}</div>
        <label class="reminder-toggle"><span class="reminder-icon" aria-hidden="true">♧</span><span><strong>Recordatorio</strong><small>Avisarme 10 min antes</small></span><input type="checkbox" id="plan-reminder" ${planDraft.reminder ? "checked" : ""} /><span class="reminder-switch" aria-hidden="true"></span></label><p class="reminder-note">El aviso aparece mientras NutriCampus esté abierto.</p>
        <button class="button button-primary planner-save" data-action="save-plan"><span aria-hidden="true">▣</span> ${editingPlanId ? "Guardar cambios" : "Guardar planificación"}</button>${editingPlanId ? `<button class="button button-quiet planner-cancel-edit" data-action="cancel-edit-plan">Cancelar edición</button>` : ""}
      </aside>
    </div>
  </div>`;
}
function favoritesTemplate() {
  const list = state.favorites.map(mealById).filter(Boolean).filter(allergenMatch);
  const cards = list.length ? list.map(mealCard).join("") : `<div class="empty-state"><span class="empty-emoji" aria-hidden="true">♡</span><h3>Tus opciones favoritas aparecerán aquí</h3><p>Guarda una alternativa que te guste y vuelve a elegirla en otra pausa.</p><button class="button button-primary" data-page="explorar">Explorar alternativas</button></div>`;
  return `${sectionTitle("Tus opciones guardadas", "Favoritos", "Encuentra rápido esas alternativas que te gustaría repetir.")}<div class="food-grid">${cards}</div>`;
}
function feelingForHistory(record) {
  return state.feelings.find((entry) => record.selectionId && entry.selectionId === record.selectionId)
    || state.feelings.find((entry) => entry.mealId === record.mealId && new Date(entry.date).toDateString() === new Date(record.date).toDateString());
}
function relativeHistoryDate(value) {
  const target = new Date(value);
  const today = new Date();
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  if (target.toDateString() === today.toDateString()) return "Hoy";
  if (target.toDateString() === yesterday.toDateString()) return "Ayer";
  return new Intl.DateTimeFormat("es-PE", { weekday: "short", day: "numeric", month: "short" }).format(target).replace(".", "");
}
function moodSymbol(feeling) { return feeling === "Ligero" ? "☺" : feeling === "Normal" ? "☻" : feeling === "Pesado" ? "☹" : "·"; }
function profileSummary() {
  const latest = state.feelings.slice(-7);
  const totals = { Ligero: 0, Normal: 0, Pesado: 0 };
  latest.forEach((entry) => { if (totals[entry.feeling] !== undefined) totals[entry.feeling] += 1; });
  const dayDots = latest.length ? latest.map((entry) => `<div class="profile-mood-day"><span class="mood-face mood-${entry.feeling.toLowerCase()}" aria-label="${esc(entry.feeling)}">${moodSymbol(entry.feeling)}</span><small>${new Intl.DateTimeFormat("es-PE", { weekday: "short" }).format(new Date(entry.date)).replace(".", "")}</small></div>`).join("") : `<p class="profile-no-feedback">Aún no hay respuestas. Después de elegir una comida, puedes registrar cómo te sentiste desde Inicio.</p>`;
  const bars = Object.entries(totals).map(([feeling, count]) => `<div class="profile-bar-row"><strong>${feeling}</strong><span class="profile-bar-track"><span class="profile-bar-fill mood-fill-${feeling.toLowerCase()}" style="width:${latest.length ? Math.round(count / latest.length * 100) : 0}%"></span></span><b>${count} de ${latest.length}</b></div>`).join("");
  const lightIronMeals = latest.filter((entry) => entry.feeling === "Ligero" && mealById(entry.mealId)?.iron).length;
  const insight = latest.length ? (lightIronMeals ? `${lightIronMeals} ${lightIronMeals === 1 ? "vez te sentiste" : "veces te sentiste"} ligero con una comida marcada como fuente de hierro.` : `Tienes ${latest.length} ${latest.length === 1 ? "respuesta registrada" : "respuestas registradas"}. Tus datos se guardan en este dispositivo.`) : "Tus respuestas se guardan en este dispositivo.";
  return `<section class="panel profile-summary"><div class="profile-panel-heading"><h2>Mi resumen · últimas ${latest.length || 7} respuestas</h2><span>Resumen personal</span></div><div class="profile-mood-days">${dayDots}</div><div class="profile-bars">${bars}</div><p class="profile-insight">${esc(insight)}</p></section>`;
}
function profileHistory() {
  const history = state.history.slice(0, 4);
  if (!history.length) return `<div class="profile-history-empty"><span aria-hidden="true">🥗</span><p>Aquí aparecerán las opciones que selecciones o marques como realizadas.</p><button class="button button-outline button-small" data-page="explorar">Explorar opciones</button></div>`;
  return `<div class="profile-history-list">${history.map((record) => {
    const meal = mealById(record.mealId);
    if (!meal) return "";
    const feeling = feelingForHistory(record)?.feeling;
    return `<article class="profile-history-row"><span class="profile-history-thumb">${meal.image ? `<img src="${meal.image}" alt="" />` : meal.emoji}</span><span class="profile-history-copy"><strong>${esc(meal.name)}</strong><small>${esc(relativeHistoryDate(record.date))}</small></span><span class="mood-face mood-${feeling ? feeling.toLowerCase() : "sin-respuesta"}" aria-label="${feeling ? `Te sentiste ${esc(feeling)}` : "Aún sin respuesta"}">${moodSymbol(feeling)}</span></article>`;
  }).join("")}</div>`;
}
function profileTemplate() {
  const prefs = state.prefs;
  const timeText = prefs.time ? `${prefs.time} min` : "Sin preferencia";
  const budgetText = prefs.budget ? money(prefs.budget) : "Sin límite";
  const placeText = prefs.place || "Cualquier lugar";
  const name = state.profileName || "Alex";
  const initials = name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "A";
  const exclusionChips = state.exclusions.length ? state.exclusions.map((item) => `<span class="exclusion-chip">${esc(item)}<button data-action="remove-exclusion" data-item="${esc(item)}" aria-label="Quitar ${esc(item)}">×</button></span>`).join("") : `<span class="exclusion-empty">Aún no agregaste alimentos</span>`;
  return `<div class="profile-page"><nav class="profile-breadcrumb" aria-label="Ruta de navegación"><button data-page="inicio">Inicio</button><span aria-hidden="true">›</span><span aria-current="page">Perfil</span></nav><div class="profile-page-heading"><h1>Mi perfil</h1><p>Tus preferencias y cómo te sentiste con tus últimas elecciones</p></div>
    <div class="profile-columns"><div class="profile-side"><section class="panel profile-identity"><div class="profile-avatar" aria-hidden="true">${esc(initials)}</div><div class="profile-identity-copy"><h2>${esc(name)}</h2><p>Estudiante UPC · Lima</p><button class="button button-outline button-small" data-action="edit-profile">Editar perfil</button></div></section>
      <section class="panel profile-preferences"><div class="profile-panel-heading"><h2>Mis preferencias</h2><button class="inline-link" data-action="edit-profile">Editar</button></div><div class="profile-preference-row"><span><i aria-hidden="true">◷</i>Tiempo habitual</span><strong>${esc(timeText)}</strong></div><div class="profile-preference-row"><span><i aria-hidden="true">◉</i>Presupuesto máximo</span><strong>${esc(budgetText)}</strong></div><div class="profile-preference-row"><span><i aria-hidden="true">⌖</i>Lugar habitual</span><strong>${esc(placeText)}</strong></div></section>
      <section class="panel profile-exclusions"><div class="profile-panel-heading"><h2>Alimentos que no consumo</h2><button class="inline-link profile-add-exclusion" data-action="edit-profile">＋ Agregar</button></div><div class="exclusion-chips">${exclusionChips}</div><p>Se excluirán de tus recomendaciones.</p></section>
    </div><div class="profile-main">${profileSummary()}<section class="panel profile-history"><div class="profile-panel-heading"><h2>Historial de alternativas elegidas</h2><button class="inline-link" data-page="explorar">Ver opciones</button></div>${profileHistory()}</section></div></div>
  </div>`;
}
function learnTemplate() {
  const categories = ["Hierro", "Combinaciones", "Mitos y verdades"];
  const visibleArticles = learningCategory === "Hierro" ? learningArticles : learningArticles.filter((article) => article.category === learningCategory);
  const selected = learningArticles.find((article) => article.id === learningArticleId) || visibleArticles[0] || learningArticles[0];
  const meal = mealById(selected.mealId);
  const saved = Array.isArray(state.learnSaved) && state.learnSaved.includes(selected.id);
  const articleList = visibleArticles.map((article) => `<button class="learn-article-item ${article.id === selected.id ? "is-selected" : ""}" data-action="learn-article" data-id="${article.id}" aria-pressed="${article.id === selected.id}"><span class="learn-article-icon" aria-hidden="true">${article.icon}</span><span><strong>${esc(article.title)}</strong><small>Lectura de ${article.read} s</small></span></button>`).join("");
  const categoryTabs = categories.map((category) => `<button class="learn-category ${category === learningCategory ? "is-active" : ""}" data-action="learn-category" data-category="${category}" aria-pressed="${category === learningCategory}">${category}</button>`).join("");
  return `<div class="learn-page"><nav class="learn-breadcrumb" aria-label="Ruta de navegación"><button data-page="inicio">Inicio</button><span aria-hidden="true">›</span><button data-page="explorar">Explorar</button><span aria-hidden="true">›</span><span aria-current="page">Aprende</span></nav>
    <div class="learn-heading"><button class="learn-back-mobile" data-action="learn-back" aria-label="Volver a Explorar">←</button><div><h1>Aprende</h1><p>Microcontenidos de lectura rápida (menos de 30 segundos)</p></div><button class="learn-bookmark-mobile ${saved ? "is-saved" : ""}" data-action="learn-save" aria-label="${saved ? "Quitar guardado" : "Guardar lectura"}" aria-pressed="${saved}">${saved ? "♥" : "♧"}</button></div>
    <div class="learn-layout"><aside class="learn-sidebar"><div class="learn-category-tabs" aria-label="Temas de aprendizaje">${categoryTabs}</div><div class="learn-article-list">${articleList}</div></aside>
      <details class="learn-mobile-library"><summary>Ver otras lecturas</summary><div class="learn-mobile-categories">${categoryTabs}</div><div class="learn-article-list">${articleList}</div></details>
      <article class="learn-content-card"><div class="learn-hero"><span class="learn-hero-tag">♧ Fuente de hierro</span>${meal?.image ? `<img src="${meal.image}" alt="${esc(meal.short)}" />` : `<span class="learn-hero-emoji" aria-hidden="true">${meal?.emoji || "🌿"}</span>`}</div>
        <div class="learn-article-heading"><div><h2>${esc(selected.title)}</h2><span>Lectura de ${selected.read} segundos</span></div><button class="learn-bookmark ${saved ? "is-saved" : ""}" data-action="learn-save" aria-label="${saved ? "Quitar de guardados" : "Guardar esta lectura"}" aria-pressed="${saved}">${saved ? "♥" : "♧"}</button></div>
        <p class="learn-article-body">${esc(selected.body)}</p>
        <h3 class="learn-option-heading">Una opción accesible</h3>
        ${meal ? `<div class="learn-meal-card"><span class="learn-meal-image">${meal.image ? `<img src="${meal.image}" alt="" />` : meal.emoji}</span><div class="learn-meal-copy"><strong>${esc(meal.name)}</strong><span>◷ ${meal.time} min <b>◉ ${money(meal.price)}</b></span></div><button class="button button-outline button-small" data-action="detail" data-id="${meal.id}">Ver opción</button></div>` : ""}
        <div class="learn-source-row"><span aria-hidden="true">♧</span><div><strong>Fuente: ${esc(selected.sourceLabel)}</strong><a href="${sourceLinks[selected.source]}" target="_blank" rel="noopener noreferrer">Ver documento original ↗</a></div></div>
        <p class="learn-disclaimer">Orientación general. No reemplaza la consulta con un profesional de la salud.</p>
      </article>
    </div>
  </div>`;
}
function renderPage() {
  const templates = { inicio: homeTemplate, explorar: exploreTemplate, planificar: planTemplate, favoritos: favoritesTemplate, perfil: profileTemplate, aprender: learnTemplate };
  const detailMeal = activeDetailId ? mealById(activeDetailId) : null;
  pageContent.innerHTML = detailMeal ? detailTemplate(detailMeal) : (templates[state.page] || homeTemplate)();
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
  activeDetailId = id;
  closeDialog();
  renderPage();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function detailTemplate(meal) {
  const favorite = state.favorites.includes(meal.id);
  const allergens = meal.allergens.length ? meal.allergens.map(esc).join(", ") : "No se declaran alérgenos en esta ficha";
  const related = meals.filter((item) => item.id !== meal.id && allergenMatch(item))
    .sort((a, b) => Math.abs(a.time - meal.time) + Math.abs(a.price - meal.price) - (Math.abs(b.time - meal.time) + Math.abs(b.price - meal.price)))
    .slice(0, 3);
  return `<div class="detail-page">
    <nav class="detail-breadcrumbs" aria-label="Ruta de navegación"><button data-action="back-to-explore">Explorar</button><span aria-hidden="true">›</span><span aria-current="page">${esc(meal.name)}</span></nav>
    <div class="detail-layout">
      <div class="detail-visual-column">
        ${foodArtwork(meal)}
        <section class="detail-location panel"><h2>Dónde conseguirlo</h2><div class="location-content"><span class="location-icon" aria-hidden="true">⌖</span><div><strong>${esc(meal.place)}</strong><p>Consulta la disponibilidad y el precio directamente en el punto de venta.</p><span class="location-status">Información referencial</span></div></div></section>
      </div>
      <section class="detail-copy" aria-labelledby="detail-title">
        <h1 id="detail-title">${esc(meal.name)}</h1>
        <div class="detail-facts"><span class="detail-fact">◷ ${meal.time} min</span><span class="detail-fact detail-price">◉ ${money(meal.price)}</span>${meal.iron ? `<span class="detail-fact iron-label">♧ Fuente de hierro</span>` : ""}</div>
        <p class="detail-description">${esc(meal.description)}</p>
        <div class="detail-stat-grid"><div class="detail-stat"><span>◷ &nbsp;Tiempo</span><strong>${meal.time} min</strong></div><div class="detail-stat"><span>◉ &nbsp;Precio</span><strong>${money(meal.price)}</strong></div><div class="detail-stat"><span>⌖ &nbsp;Lugar</span><strong>${esc(meal.place)}</strong></div></div>
        <details class="detail-nutrition"><summary><span aria-hidden="true">ⓘ</span> Información nutricional <span class="detail-chevron" aria-hidden="true">⌄</span></summary><div class="nutrition-content"><p>${esc(meal.nutrition)}</p><h3>Ingredientes referenciales</h3><p>${meal.ingredients.map(esc).join(" · ")}</p><h3>Alérgenos declarados</h3><p>${allergens}. Confirma con quien prepara o vende el alimento; la información puede cambiar.</p>${meal.iron ? `<a class="source-link" href="${sourceLinks.who}" target="_blank" rel="noopener noreferrer">Consultar fuente oficial ↗</a>` : ""}</div></details>
        ${meal.iron ? `<aside class="iron-tip"><span aria-hidden="true">♧</span><div><strong>Fuente de hierro</strong><p>${meal.tags.includes("Vegetariana") ? "Acompáñala con limón o naranja para ayudar a absorber el hierro de origen vegetal." : "Una alternativa que aporta hierro dentro de una alimentación variada."}</p></div></aside>` : ""}
        <p class="detail-disclaimer">Orientación general. No reemplaza la consulta con un profesional de la salud.</p>
        <div class="detail-actions"><button class="button button-primary" data-action="select-meal" data-id="${meal.id}"><span aria-hidden="true">✓</span> Seleccionar</button><button class="button button-outline" data-action="plan" data-id="${meal.id}"><span aria-hidden="true">▣</span> Planificar</button><button class="button button-outline favorite-detail ${favorite ? "is-saved" : ""}" data-action="toggle-favorite" data-id="${meal.id}" aria-label="${favorite ? "Quitar de favoritos" : "Guardar en favoritos"}" aria-pressed="${favorite}">${favorite ? "♥" : "♡"}</button></div>
      </section>
    </div>
    <section class="related-section"><div class="section-heading"><div><h2>Alternativas similares</h2><p class="muted">Con tiempo y precio parecidos</p></div></div><div class="food-grid">${related.map(mealCard).join("")}</div></section>
  </div>`;
}
function showPlanDialog(id, editing = false) {
  const planned = editing ? getPlans().find((item) => item.id === id) || state.planned : null;
  editingPlanId = planned?.id || null;
  planDraft = planned ? { mealId: planned.mealId, date: planned.date, time: planned.time, reminder: Boolean(planned.reminder) } : { mealId: id || planDraft.mealId, date: planDraft.date >= dateISO(new Date()) ? planDraft.date : dateISO(new Date(Date.now() + 86400000)), time: "12:30", reminder: false };
  planWeekOffset = weekOffsetForDate(planDraft.date);
  closeDialog();
  activeDetailId = null;
  state.page = "planificar";
  persist();
  renderPage();
  updateNavigation();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function showProfileDialog() {
  const exclusions = ["Lácteos", "Frutos secos", "Mariscos", "Pescado", "Huevo", "Gluten"];
  const checkboxes = exclusions.map((item) => `<label class="check-option"><input type="checkbox" name="exclusion" value="${item}" ${state.exclusions.includes(item) ? "checked" : ""} />${item}</label>`).join("");
  const body = `<div class="form-field"><label for="profile-name">Nombre</label><input class="text-input" id="profile-name" type="text" autocomplete="name" maxlength="60" value="${esc(state.profileName || "Alex")}" /></div><div class="form-field"><label for="profile-time">Mi tiempo de pausa</label><select class="field-select" id="profile-time"><option value="">Sin preferencia</option>${[["5", "5 min"], ["10", "10 min"], ["15", "15 min"]].map(([v, label]) => `<option value="${v}" ${state.prefs.time === v ? "selected" : ""}>${label}</option>`).join("")}</select></div><div class="form-field"><label for="profile-budget">Mi presupuesto máximo</label><select class="field-select" id="profile-budget"><option value="">Sin límite</option>${[["5", "S/ 5"], ["10", "S/ 10"], ["15", "S/ 15"]].map(([v, label]) => `<option value="${v}" ${state.prefs.budget === v ? "selected" : ""}>${label}</option>`).join("")}</select></div><div class="form-field"><label for="profile-place">Mi lugar habitual</label><select class="field-select" id="profile-place"><option value="">Cualquier lugar</option>${["Cafetería", "Comedor", "Máquina", "Local cercano"].map((place) => `<option ${state.prefs.place === place ? "selected" : ""}>${place}</option>`).join("")}</select></div><fieldset class="form-field" style="border:0;padding:0;margin:0"><legend>Alimentos que prefiero evitar</legend><div class="checkbox-list">${checkboxes}</div><p class="filter-note">Las opciones que incluyan estos ingredientes dejarán de aparecer.</p></fieldset>`;
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

function saveFeeling(feeling, mealId, selectionIdOverride = null) {
  const selectionId = selectionIdOverride || (state.lastSelected?.mealId === mealId ? state.lastSelected.selectionId : `selection-${Date.now()}`);
  if (!state.feelings.some((item) => item.selectionId === selectionId)) state.feelings.push({ mealId, feeling, selectionId, date: new Date().toISOString() });
  state.feelings = state.feelings.slice(-30);
  persist();
  renderPage();
  showToast("Gracias por contarnos. Tu respuesta quedó guardada en este dispositivo.");
}
function clearFilters() {
  state.filters = { time: "", budget: "", place: "", iron: false, foodType: "" };
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
  if (action === "back-to-explore") { activeDetailId = null; state.page = "explorar"; renderPage(); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  if (action === "new-plan") {
    editingPlanId = null;
    planDraft = { mealId: state.planned?.mealId || meals[0].id, date: planDraft.date >= dateISO(new Date()) ? planDraft.date : dateISO(new Date()), time: "12:30", reminder: false };
    planWeekOffset = weekOffsetForDate(planDraft.date);
    renderPage();
    if (window.matchMedia("(max-width: 720px)").matches) document.querySelector(".planner-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (action === "choose-plan-date") { planDraft.date = button.dataset.date; renderPage(); return; }
  if (action === "shift-plan-week") { planWeekOffset += Number(button.dataset.shift || 0); renderPage(); return; }
  if (action === "select-plan-time") { planDraft.time = button.dataset.time; renderPage(); return; }
  if (action === "cancel-edit-plan") { editingPlanId = null; renderPage(); return; }
  if (action === "open-setup") { showSetup(); return; }
  if (action === "guest" || action === "skip-setup") { state.setupDone = false; state.setupSkipped = true; state.prefs = { time: "", budget: "", place: "" }; state.filters = { time: "", budget: "", place: "", iron: false, foodType: "" }; persist(); closeDialog(); changePage("inicio", false); showToast("Estás explorando como invitado. Puedes personalizar más tarde."); return; }
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
  if (action === "learn-back") { changePage("explorar"); return; }
  if (action === "learn-category") {
    learningCategory = button.dataset.category;
    learningArticleId = learningArticles.find((article) => article.category === learningCategory)?.id || learningArticleId;
    renderPage(); return;
  }
  if (action === "learn-article") {
    const article = learningArticles.find((item) => item.id === id);
    if (!article) return;
    learningArticleId = article.id; learningCategory = article.category; renderPage(); return;
  }
  if (action === "learn-save") {
    if (!Array.isArray(state.learnSaved)) state.learnSaved = [];
    state.learnSaved = state.learnSaved.includes(learningArticleId) ? state.learnSaved.filter((item) => item !== learningArticleId) : [...state.learnSaved, learningArticleId];
    persist(); renderPage(); showToast(state.learnSaved.includes(learningArticleId) ? "Lectura guardada." : "Quitamos esta lectura de guardados."); return;
  }
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
    const selectionId = `selection-${Date.now()}`;
    const selectedAt = new Date().toISOString();
    state.lastSelected = { mealId: id, selectionId, date: selectedAt };
    state.history.unshift({ mealId: id, selectionId, date: selectedAt });
    state.history = state.history.slice(0, 50);
    persist(); closeDialog(); changePage("inicio", false); showToast("Elección guardada. Cuando termines, puedes contarnos cómo te sentiste."); return;
  }
  if (action === "save-plan") {
    const date = planDraft.date;
    const time = planDraft.time;
    const mealId = document.getElementById("plan-meal")?.value;
    const when = date && time ? new Date(`${date}T${time}`) : null;
    if (!mealId || !date || !time || !when || Number.isNaN(when.getTime()) || when.getTime() <= Date.now()) { showToast("Elige una fecha y hora futuras para tu comida."); return; }
    const plans = getPlans();
    const duplicate = plans.some((plan) => plan.id !== editingPlanId && plan.date === date && plan.time === time && !plan.consumed);
    if (duplicate) { showToast("Ya tienes una comida planificada para esa hora. Elige otro horario."); return; }
    const reminder = Boolean(planDraft.reminder);
    const plan = { id: editingPlanId || `plan-${Date.now()}`, mealId, date, time, reminder, consumed: false };
    state.plans = editingPlanId ? plans.map((item) => item.id === editingPlanId ? plan : item) : [...plans, plan];
    syncPrimaryPlan();
    if (!reminder && planReminderTimers.has(plan.id)) { clearTimeout(planReminderTimers.get(plan.id)); planReminderTimers.delete(plan.id); }
    if (reminder) schedulePlanReminder(plan);
    editingPlanId = null;
    persist(); renderPage(); showToast("Planificación guardada. Ya aparece en tu semana."); return;
  }
  if (action === "edit-plan") { showPlanDialog(id, true); return; }
  if (action === "cancel-plan") {
    const plans = getPlans();
    const target = id || state.planned?.id;
    if (planReminderTimers.has(target)) { clearTimeout(planReminderTimers.get(target)); planReminderTimers.delete(target); }
    state.plans = plans.filter((plan) => plan.id !== target);
    syncPrimaryPlan(); persist(); renderPage(); showToast("Quitamos esa comida de tu planificación."); return;
  }
  if (action === "consumed") {
    const plan = getPlans().find((item) => item.id === id) || state.planned;
    if (plan) {
      plan.consumed = true;
      if (planReminderTimers.has(plan.id)) { clearTimeout(planReminderTimers.get(plan.id)); planReminderTimers.delete(plan.id); }
      const selectionId = `selection-${Date.now()}`;
      const selectedAt = new Date().toISOString();
      state.lastSelected = { mealId: plan.mealId, selectionId, date: selectedAt };
      state.history.unshift({ mealId: plan.mealId, selectionId, date: selectedAt });
      syncPrimaryPlan(); persist(); changePage("planificar", false); showToast("Marcamos tu comida como realizada.");
    }
    return;
  }
  if (action === "feeling") { saveFeeling(button.dataset.feeling, id); return; }
  if (action === "dismiss-feeling") { if (state.lastSelected && !state.dismissedFeelings.includes(state.lastSelected.selectionId)) state.dismissedFeelings.push(state.lastSelected.selectionId); persist(); renderPage(); return; }
  if (action === "clear-filters") { clearFilters(); return; }
  if (action === "go-filter") { state.filters.iron = button.dataset.filter === "iron"; state.filters.time = button.dataset.filter === "quick" ? "5" : ""; changePage("explorar"); return; }
  if (action === "learn") { changePage("aprender"); return; }
  if (action === "edit-profile") { showProfileDialog(); return; }
  if (action === "remove-exclusion") {
    state.exclusions = state.exclusions.filter((item) => item !== button.dataset.item);
    persist(); renderPage(); showToast("Actualizamos tus alimentos excluidos."); return;
  }
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
    state.profileName = document.getElementById("profile-name")?.value.trim() || state.profileName || "Alex";
    state.prefs = { time: document.getElementById("profile-time").value, budget: document.getElementById("profile-budget").value, place: document.getElementById("profile-place").value };
    state.exclusions = [...dialogContent.querySelectorAll('input[name="exclusion"]:checked')].map((input) => input.value);
    state.setupDone = true; state.setupSkipped = false; persist(); closeDialog(); renderPage(); showToast("Preferencias actualizadas. Ajustamos tus opciones."); return;
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.id === "plan-reminder") { planDraft.reminder = target.checked; return; }
  if (target.id === "plan-meal") { planDraft.mealId = target.value; renderPage(); return; }
  if (target.id === "plan-date") {
    if (!target.value) return;
    planDraft.date = target.value;
    planWeekOffset = weekOffsetForDate(target.value);
    renderPage(); return;
  }
  if (target.matches("[data-filter-key]")) {
    const key = target.dataset.filterKey;
    state.filters[key] = key === "iron" ? target.value === "true" : target.value;
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
syncPrimaryPlan();
getPlans().forEach(schedulePlanReminder);
renderPage();
