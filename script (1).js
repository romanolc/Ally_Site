/* ─── TRANSLATIONS ─── */
const translations = {
  pt: {
    nav_sobre: "Sobre",
    nav_funciona: "Como Funciona",
    nav_simulador: "Simulador",
    nav_impacto: "Impacto",
    nav_parcerias: "Parcerias",
    nav_contato: "Fale Conosco",
    hero_badge: "Tecnologia Assistiva · MVP em Desenvolvimento",
    hero_title: "Tornando a<br>tecnologia um<br>instrumento de<br><em>empatia</em>",
    hero_sub: "ALLY é uma solução integrada de geolocalização e monitoramento em tempo real para pessoas com deficiência, idosos com demência e pessoas vulneráveis — promovendo autonomia, segurança e tranquilidade familiar.",
    btn_conheca: "● Conheça o Projeto",
    btn_simulacao: "▶ Ver Simulação",
    hero_stat_1: "pessoas desaparecidas por ano no Brasil (2023)",
    hero_stat_2: "pessoas com deficiência no Brasil (IBGE 2022)",
    hero_stat_3: "pessoas precisarão de tecnologia assistiva até 2030 (OMS)",
    sobre_tag: "📊 O Problema",
    sobre_title: "Uma realidade que<br>exige uma solução",
    sobre_sub: "O desaparecimento de pessoas vulneráveis é uma crise silenciosa no Brasil. Pessoas com Alzheimer, autismo e outras condições enfrentam riscos elevados de desorientação — e a tecnologia pode mudar isso.",
    stat_alzheimer: "pessoas com Alzheimer no Brasil",
    stat_tea: "pessoas no espectro autista (TEA)",
    stat_desaparecidos: "desaparecimentos registrados por dia no Brasil",
    stat_renda: "da renda familiar comprometida com cuidados de demência",
    chart_title: "📈 Registros de desaparecidos no Brasil por ano",
    pie_title: "Proporção de pessoas com deficiência por gênero",
    pie_masc: "Masculino — 63%",
    pie_fem: "Feminino — 37%",
    dado_critico: "<strong style='color: var(--navy);'>Dado crítico:</strong> Apenas <strong>6,9%</strong> dos municípios brasileiros possuem acessibilidade universal plena, e menos de <strong>3%</strong> dos sites são acessíveis para pessoas com deficiência. (FGV / BigData Corp)",
    funciona_tag: "⚙️ A Solução",
    funciona_title: "Como o ALLY<br>funciona",
    funciona_sub: "Uma solução integrada de hardware e software: um dispositivo discreto conectado a um aplicativo inteligente, operando em tempo real via chip de operadora.",
    step_1_title: "Dispositivo ALLY",
    step_1_desc: "Pulseira ou botão discreto com GPS integrado, microcontrolador de baixo consumo e chip GSM/4G. Design inclusivo e não estigmatizante.",
    step_2_title: "Aplicativo Móvel",
    step_2_desc: "Interface visual com Google Maps integrado. Circuitos personalizados para famílias, cuidadores e profissionais de saúde.",
    step_3_title: "Servidor em Nuvem",
    step_3_desc: "Infraestrutura escalável (AWS/Google Cloud) com processamento de dados GPS em tempo real e sistema de alertas inteligentes.",
    step_4_title: "Alertas & Geofencing",
    step_4_desc: "Notificações automáticas quando o usuário sai de zonas seguras. SOS físico integrado ao app com feedback sonoro e visual.",
    int_sos: "Botão SOS Físico",
    int_sos_desc: "Pulseira / Chaveiro<br>Pressione para alertar",
    int_sinal: "Envio do Sinal",
    int_sinal_desc: "Bluetooth (10m)<br>ou Chip GSM/4G",
    int_app: "App ALLY",
    int_app_desc: "Criação do alerta<br>GPS automático",
    int_feedback: "Feedback Completo",
    int_feedback_desc: "Som + vibração<br>Interface vermelha",
    status_tag: "🎨 Interface",
    status_title: "Sistema de cores<br>& status em tempo real",
    status_sub: "Uma linguagem visual universal que permite cuidadores e familiares entenderem o status instantaneamente.",
    status_safe: "Área Segura",
    status_safe_desc: "O usuário está dentro de uma zona configurada como segura. Tudo em ordem, monitoramento ativo.",
    status_moving: "Em Deslocamento",
    status_moving_desc: "Usuário em movimento entre pontos. Rastreamento contínuo ativado, notificação ao chegar ao destino.",
    status_risk: "Área de Risco",
    status_risk_desc: "Usuário em zona marcada como perigosa. Alerta sonoro e visual acionado automaticamente no app.",
    status_alert: "Fora da Rota Segura",
    status_alert_desc: "Usuário saiu da rota ou perímetro configurado. Todos os mentores do circuito são alertados imediatamente.",
    sim_tag: "🗺️ Simulação",
    sim_title: "Simulador de<br>monitoramento em Lauro de Freitas",
    sim_sub: "Veja como o sistema ALLY funciona na prática. O mapa abaixo simula monitoramento em tempo real com zonas seguras, rotas e alertas dinâmicos.",
    sim_btn_start: "▶ Iniciar Simulação",
    sim_btn_stop: "⏹ Parar Simulação",
    sim_btn_restart: "▶ Reiniciar Simulação",
    access_tag: "♿ Acessibilidade",
    access_title: "Inclusão<br>em cada detalhe",
    access_sub: "Projetado desde o início para pessoas com deficiência, seguindo as diretrizes WCAG e princípios de design inclusivo.",
    access_1_title: "Alto Contraste",
    access_1_desc: "Interface com paleta acessível e relações de contraste acima do mínimo recomendado pelas diretrizes WCAG 2.1.",
    access_2_title: "Navegação por Teclado",
    access_2_desc: "Todos os elementos interativos são acessíveis via teclado, com indicadores de foco visíveis e lógicos.",
    access_3_title: "Leitores de Tela",
    access_3_desc: "Uso completo de aria-labels, roles semânticos e texto alternativo para compatibilidade com tecnologias assistivas.",
    access_4_title: "Design Responsivo",
    access_4_desc: "Interface fluida e adaptável a qualquer dispositivo — smartphones, tablets e desktops — sem perda de funcionalidade.",
    access_5_title: "Tipografia Legível",
    access_5_desc: "Fontes de alta legibilidade, tamanhos adequados e espaçamento otimizado para diferentes condições visuais.",
    access_6_title: "Conectividade Independente",
    access_6_desc: "Funciona via chip de operadora, sem necessidade de Wi-Fi — garantindo acesso em qualquer localidade do Brasil.",
    impact_tag: "💚 Impacto",
    impact_title: "Transformando vidas<br>com tecnologia",
    impact_sub: "O ALLY gera um ciclo de valor real: mais segurança, menos custos, maior autonomia e inclusão social efetiva.",
    impact_1: "pessoas desaparecidas/ano que poderiam ser rapidamente localizadas com rastreamento em tempo real",
    impact_2: "da renda familiar comprometida com cuidados. ALLY alivia essa carga com autonomia e segurança",
    impact_3: "projeção do mercado global de tecnologia assistiva até 2033 (CAGR 4,8%)",
    impact_4: "pessoas com deficiência no Brasil — um mercado e uma responsabilidade social gigantescos",
    impact_5: "custo estimado por unidade, tornando a tecnologia acessível para famílias de todas as classes",
    impact_6: "mais autonomia e mobilidade relatada por famílias que utilizam tecnologia de rastreamento",
    partners_tag: "🤝 Ecossistema",
    partners_title: "Parcerias<br>estratégicas",
    partners_sub: "O ALLY cresce com um ecossistema de parceiros comprometidos com inclusão, saúde e inovação social.",
    contato_tag: "✉️ Contato",
    contato_title: "Vamos construir<br>juntos",
    contato_info_title: "Seja parte do ALLY",
    contato_info_desc: "Seja você um investidor, parceiro institucional, profissional de saúde ou simplesmente alguém que acredita na tecnologia a serviço da inclusão — queremos conversar com você.",
    form_name: "Nome completo",
    form_email: "E-mail",
    form_msg: "Mensagem",
    form_submit: "✈️ Enviar Mensagem",
    form_success: "✅ Mensagem enviada! Entraremos em contato em breve.",
    footer_desc: "Tornando a tecnologia um instrumento de empatia, segurança e inclusão. Para cada pessoa, para cada família.",
    footer_rights: "© 2025 ALLY. Todos os direitos reservados.",
    footer_tagline: "\"Tecnologia com empatia, segurança com inclusão.\""
  },
  en: {
    nav_sobre: "About",
    nav_funciona: "How it Works",
    nav_simulador: "Simulator",
    nav_impacto: "Impact",
    nav_parcerias: "Partnerships",
    nav_contato: "Contact Us",
    hero_badge: "Assistive Technology · MVP in Development",
    hero_title: "Turning<br>technology into an<br>instrument of<br><em>empathy</em>",
    hero_sub: "ALLY is an integrated real-time geolocation and monitoring solution for people with disabilities, seniors with dementia, and vulnerable individuals — promoting autonomy, safety, and family peace of mind.",
    btn_conheca: "● Discover the Project",
    btn_simulacao: "▶ View Simulation",
    hero_stat_1: "missing persons per year in Brazil (2023)",
    hero_stat_2: "people with disabilities in Brazil (IBGE 2022)",
    hero_stat_3: "people will need assistive technology by 2030 (WHO)",
    sobre_tag: "📊 The Problem",
    sobre_title: "A reality that<br>demands a solution",
    sobre_sub: "The disappearance of vulnerable people is a silent crisis in Brazil. People with Alzheimer's, autism, and other conditions face high risks of disorientation — and technology can change that.",
    stat_alzheimer: "people with Alzheimer's in Brazil",
    stat_tea: "people on the autism spectrum (ASD)",
    stat_desaparecidos: "registered disappearances per day in Brazil",
    stat_renda: "of family income committed to dementia care",
    chart_title: "📈 Missing person records in Brazil per year",
    pie_title: "Proportion of people with disabilities by gender",
    pie_masc: "Male — 63%",
    pie_fem: "Female — 37%",
    dado_critico: "<strong style='color: var(--navy);'>Critical fact:</strong> Only <strong>6.9%</strong> of Brazilian municipalities have full universal accessibility, and less than <strong>3%</strong> of websites are accessible to people with disabilities. (FGV / BigData Corp)",
    funciona_tag: "⚙️ The Solution",
    funciona_title: "How ALLY<br>works",
    funciona_sub: "An integrated hardware and software solution: a discrete device connected to a smart app, operating in real-time via carrier chip.",
    step_1_title: "ALLY Device",
    step_1_desc: "Discrete bracelet or button with integrated GPS, low-power microcontroller, and GSM/4G chip. Inclusive and non-stigmatizing design.",
    step_2_title: "Mobile App",
    step_2_desc: "Visual interface with integrated Google Maps. Custom circuits for families, caregivers, and health professionals.",
    step_3_title: "Cloud Server",
    step_3_desc: "Scalable infrastructure (AWS/Google Cloud) with real-time GPS data processing and smart alert system.",
    step_4_title: "Alerts & Geofencing",
    step_4_desc: "Automatic notifications when the user leaves safe zones. Physical SOS integrated into the app with sound and visual feedback.",
    int_sos: "Physical SOS Button",
    int_sos_desc: "Bracelet / Keychain<br>Press to alert",
    int_sinal: "Signal Transmission",
    int_sinal_desc: "Bluetooth (10m)<br>or GSM/4G Chip",
    int_app: "ALLY App",
    int_app_desc: "Alert creation<br>Automatic GPS",
    int_feedback: "Full Feedback",
    int_feedback_desc: "Sound + vibration<br>Red interface",
    status_tag: "🎨 Interface",
    status_title: "Color system<br>& real-time status",
    status_sub: "A universal visual language that allows caregivers and family members to understand status instantly.",
    status_safe: "Safe Area",
    status_safe_desc: "The user is within a zone configured as safe. Everything in order, active monitoring.",
    status_moving: "In Transit",
    status_moving_desc: "User moving between points. Continuous tracking activated, notification upon arrival at destination.",
    status_risk: "Risk Area",
    status_risk_desc: "User in a zone marked as dangerous. Sound and visual alert automatically triggered in the app.",
    status_alert: "Out of Safe Route",
    status_alert_desc: "User left the configured route or perimeter. All circuit mentors are alerted immediately.",
    sim_tag: "🗺️ Simulation",
    sim_title: "Monitoring simulator<br>in Lauro de Freitas",
    sim_sub: "See how the ALLY system works in practice. The map below simulates real-time monitoring with safe zones, routes, and dynamic alerts.",
    sim_btn_start: "▶ Start Simulation",
    sim_btn_stop: "⏹ Stop Simulation",
    sim_btn_restart: "▶ Restart Simulation",
    access_tag: "♿ Accessibility",
    access_title: "Inclusion<br>in every detail",
    access_sub: "Designed from the start for people with disabilities, following WCAG guidelines and inclusive design principles.",
    access_1_title: "High Contrast",
    access_1_desc: "Interface with accessible palette and contrast ratios above the minimum recommended by WCAG 2.1 guidelines.",
    access_2_title: "Keyboard Navigation",
    access_2_desc: "All interactive elements are accessible via keyboard, with visible and logical focus indicators.",
    access_3_title: "Screen Readers",
    access_3_desc: "Full use of aria-labels, semantic roles, and alt text for compatibility with assistive technologies.",
    access_4_title: "Responsive Design",
    access_4_desc: "Fluid and adaptable interface to any device — smartphones, tablets, and desktops — without loss of functionality.",
    access_5_title: "Legible Typography",
    access_5_desc: "High legibility fonts, appropriate sizes, and optimized spacing for different visual conditions.",
    access_6_title: "Independent Connectivity",
    access_6_desc: "Works via carrier chip, no Wi-Fi needed — ensuring access in any location in Brazil.",
    impact_tag: "💚 Impact",
    impact_title: "Transforming lives<br>with technology",
    impact_sub: "ALLY generates a cycle of real value: more safety, lower costs, greater autonomy, and effective social inclusion.",
    impact_1: "missing persons/year who could be quickly located with real-time tracking",
    impact_2: "of family income committed to care. ALLY eases this burden with autonomy and safety",
    impact_3: "global assistive technology market projection by 2033 (CAGR 4.8%)",
    impact_4: "people with disabilities in Brazil — a massive market and social responsibility",
    impact_5: "estimated cost per unit, making technology accessible to families of all classes",
    impact_6: "more autonomy and mobility reported by families using tracking technology",
    partners_tag: "🤝 Ecosystem",
    partners_title: "Strategic<br>Partnerships",
    partners_sub: "ALLY grows with an ecosystem of partners committed to inclusion, health, and social innovation.",
    contato_tag: "✉️ Contact",
    contato_title: "Let's build<br>together",
    contato_info_title: "Be part of ALLY",
    contato_info_desc: "Whether you are an investor, institutional partner, health professional, or simply someone who believes in technology at the service of inclusion — we want to talk to you.",
    form_name: "Full name",
    form_email: "Email",
    form_msg: "Message",
    form_submit: "✈️ Send Message",
    form_success: "✅ Message sent! We will be in touch soon.",
    footer_desc: "Turning technology into an instrument of empathy, safety, and inclusion. For every person, for every family.",
    footer_rights: "© 2025 ALLY. All rights reserved.",
    footer_tagline: "\"Technology with empathy, safety with inclusion.\""
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(lang));
  });

  // Update simulator button text if not running
  if (!simRunning) {
    simBtn.textContent = translations[lang].sim_btn_start;
  }

  localStorage.setItem('preferredLang', lang);
}

/* ─── NAV ─── */
const nav = document.getElementById('main-nav');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});

/* ─── MINI MAP (hero) ─── */
const miniMap = L.map('hero-mini-map', {
  center: [-12.8947, -38.3249],
  zoom: 14, zoomControl: false, attributionControl: false,
  dragging: false, scrollWheelZoom: false, doubleClickZoom: false, touchZoom: false
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(miniMap);

L.circle([-12.8947, -38.3249], { color: '#22c55e', fillColor: '#22c55e', fillOpacity: 0.15, weight: 2, radius: 600 }).addTo(miniMap);

const miniIcon = L.divIcon({
  html: '<div style="width:16px;height:16px;background:#3a7bd5;border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(58,123,213,0.5);animation:pulse-hero 1.5s infinite"></div>',
  iconSize: [16, 16], iconAnchor: [8, 8], className: ''
});
L.marker([-12.8947, -38.3249], { icon: miniIcon }).addTo(miniMap);

/* ─── SCROLL REVEAL ─── */
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => io.observe(el));

/* ─── BAR CHART ANIMATION ─── */
const barIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      barIO.disconnect();
    }
  });
}, { threshold: 0.3 });
const chartEl = document.getElementById('bar-chart');
if (chartEl) barIO.observe(chartEl);

/* ─── MAIN MAP SIMULATOR ─── */
const map = L.map('ally-map', {
  center: [-12.8947, -38.3249],
  zoom: 15, zoomControl: true, attributionControl: true
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

const safeZone1 = L.circle([-12.892, -38.323], {
  color: '#22c55e', fillColor: '#22c55e', fillOpacity: 0.12, weight: 2, radius: 350, dashArray: '6 4'
}).addTo(map).bindPopup('<b>🟢 Zona Segura</b><br>Centro de Lauro de Freitas');

const safeZone2 = L.circle([-12.898, -38.327], {
  color: '#22c55e', fillColor: '#22c55e', fillOpacity: 0.1, weight: 2, radius: 250, dashArray: '6 4'
}).addTo(map).bindPopup('<b>🟢 Zona Segura</b><br>Área Residencial');

const riskZone = L.circle([-12.8975, -38.320], {
  color: '#ef4444', fillColor: '#ef4444', fillOpacity: 0.1, weight: 2, radius: 200, dashArray: '4 4'
}).addTo(map).bindPopup('<b>🔴 Zona de Risco</b><br>Área de atenção');

const pinIcon = (color, emoji) => L.divIcon({
  html: `<div style="background:${color};color:white;border-radius:50% 50% 50% 0;transform:rotate(-45deg);width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 4px 12px rgba(0,0,0,0.2);border:2px solid white"><span style="transform:rotate(45deg)">${emoji}</span></div>`,
  iconSize: [32, 32], iconAnchor: [16, 32], className: ''
});

L.marker([-12.891, -38.322], { icon: pinIcon('#3a7bd5', '🏠') }).addTo(map).bindPopup('<b>🏠 Casa — Família Silva</b><br>Ponto de origem seguro');
L.marker([-12.897, -38.325], { icon: pinIcon('#8b5cf6', '🏫') }).addTo(map).bindPopup('<b>🏫 Escola Estadual</b><br>Destino configurado');
L.marker([-12.893, -38.328], { icon: pinIcon('#f0b429', '🏥') }).addTo(map).bindPopup('<b>🏥 UBS Lauro de Freitas</b><br>Ponto de referência médico');

const userIcon = L.divIcon({
  html: `<div style="position:relative">
    <div style="width:20px;height:20px;background:#3a7bd5;border:3px solid white;border-radius:50%;box-shadow:0 4px 16px rgba(58,123,213,0.5);"></div>
    <div style="position:absolute;top:-6px;left:-6px;width:32px;height:32px;border:2px solid rgba(58,123,213,0.3);border-radius:50%;animation:expand 2s ease-in-out infinite;"></div>
  </div>`,
  iconSize: [20, 20], iconAnchor: [10, 10], className: ''
});

let userPos = [-12.892, -38.323];
let userMarker = L.marker(userPos, { icon: userIcon }).addTo(map)
  .bindPopup('<b>📍 João Silva</b><br>🟢 Área Segura<br>🔋 96% · ⚡ Agora');

userMarker.openPopup();

const routePoints = [
  [-12.892, -38.323],
  [-12.893, -38.324],
  [-12.894, -38.325],
  [-12.8955, -38.326],
  [-12.896, -38.325],
  [-12.8965, -38.323],
  [-12.8975, -38.320],
  [-12.897, -38.321],
  [-12.896, -38.322],
  [-12.894, -38.323],
  [-12.892, -38.323],
];

let routePolyline = null;
let simInterval = null;
let simIdx = 0;
let simRunning = false;
const simBtn = document.getElementById('sim-btn');

function getStatus(lat, lng) {
  const distSafe1 = getDistKm(lat, lng, -12.892, -38.323);
  const distSafe2 = getDistKm(lat, lng, -12.898, -38.327);
  const distRisk = getDistKm(lat, lng, -12.8975, -38.320);
  if (distRisk < 0.22) return 'red';
  if (distSafe1 < 0.38 || distSafe2 < 0.28) return 'green';
  return 'yellow';
}

function getDistKm(lat1, lng1, lat2, lng2) {
  return Math.sqrt(Math.pow(lat1-lat2, 2) + Math.pow(lng1-lng2, 2)) * 111;
}

function getStatusIcon(status) {
  if (status === 'green') return { color: '#22c55e', emoji: '🟢', label: 'Área Segura' };
  if (status === 'yellow') return { color: '#eab308', emoji: '🟡', label: 'Em Deslocamento' };
  return { color: '#ef4444', emoji: '🔴', label: 'ÁREA DE RISCO!' };
}

function startSim() {
  const currentLang = localStorage.getItem('preferredLang') || 'pt';
  if (simRunning) {
    clearInterval(simInterval);
    simRunning = false;
    simBtn.textContent = translations[currentLang].sim_btn_start;
    simIdx = 0;
    userMarker.setLatLng(routePoints[0]);
    map.setView(routePoints[0], 15);
    if (routePolyline) { map.removeLayer(routePolyline); routePolyline = null; }
    userMarker.setPopupContent('<b>📍 João Silva</b><br>🟢 Área Segura<br>🔋 96% · ⚡ Agora').openPopup();
    return;
  }
  simRunning = true;
  simBtn.textContent = translations[currentLang].sim_btn_stop;
  const trail = [];
  simInterval = setInterval(() => {
    if (simIdx >= routePoints.length) {
      clearInterval(simInterval);
      simRunning = false;
      simBtn.textContent = translations[currentLang].sim_btn_restart;
      simIdx = 0;
      return;
    }
    const [lat, lng] = routePoints[simIdx];
    userMarker.setLatLng([lat, lng]);
    map.panTo([lat, lng], { animate: true, duration: 0.8 });
    trail.push([lat, lng]);
    if (routePolyline) map.removeLayer(routePolyline);
    routePolyline = L.polyline(trail, { color: '#3a7bd5', weight: 3, opacity: 0.7, dashArray: '6 4' }).addTo(map);
    const st = getStatus(lat, lng);
    const stInfo = getStatusIcon(st);
    const battery = Math.max(96 - simIdx * 2, 80);
    userMarker.setPopupContent(
      `<b>📍 João Silva</b><br>${stInfo.emoji} ${stInfo.label}<br>🔋 ${battery}% · ⚡ Agora`
    ).openPopup();
    simIdx++;
  }, 1200);
}

simBtn.addEventListener('click', startSim);

/* ─── CONTACT FORM ─── */
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const msg = document.getElementById('contact-msg').value.trim();
  if (!name || !email || !msg) { alert('Por favor, preencha todos os campos.'); return; }
  const msgEl = document.getElementById('form-msg');
  msgEl.style.display = 'block';
  this.reset();
  setTimeout(() => { msgEl.style.display = 'none'; }, 5000);
});

/* ─── INITIALIZATION ─── */
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'pt';
  setLanguage(savedLang);
});
