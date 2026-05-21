
/**
 * Kura River Project site — bilingual, single-page.
 * - Language toggle (EN/AZ) with localStorage persistence
 * - Smooth scrolling + active nav highlight (IntersectionObserver)
 * - Basic front-end validation for Contact + Volunteer forms
 * - Mobile nav toggle
 */

const i18n = {
  en: {
    skip: "Skip to content",
    nav_home: "Home",
    nav_progress: "Progress",
    nav_research: "Research",
    nav_map: "Map",
    nav_team: "School / Team",
    nav_contact: "Contact",
    nav_volunteer: "Volunteer Signup",

    home_kicker: "Student environmental initiative",
    home_title: "Protecting the Kura River through research, mapping, and action.",
    home_subtitle: "The Kura River basin faces drought pressure, water stress, and ecosystem risks. We document what’s happening, publish an interactive map, and recruit volunteers globally to help.",

    cta_view_map: "View Map",
    cta_become_volunteer: "Become a Volunteer",

    wtd_research_title: "Research",
    wtd_research_desc: "Collect and summarize credible sources, field notes, and data indicators.",
    wtd_mapping_title: "Mapping",
    wtd_mapping_desc: "Publish risk zones and key locations in a clear, interactive map.",
    wtd_awareness_title: "Awareness",
    wtd_awareness_desc: "Share findings in a way schools and communities can use quickly.",
    wtd_network_title: "Volunteer Network",
    wtd_network_desc: "Coordinate students and professionals across countries and time zones.",

    facts_1_num: "—",
    facts_1_label: "River length (placeholder)",
    facts_2_num: "—",
    facts_2_label: "People relying on basin (placeholder)",
    facts_3_num: "—",
    facts_3_label: "Monitoring points (placeholder)",

    photo_1: "Kura River near Mingachevir (photo source: Wikimedia Commons)",
    photo_2: "Kura River near Salyan (photo source: Wikimedia Commons)",

    progress_title: "Progress",
    progress_subtitle: "A clear timeline of what we shipped, what’s underway, and what’s next.",
    timeline_title: "Timeline",
    tag_done: "Done",
    tag_in_progress: "In progress",
    tag_next: "Next",
    tl_1: "First interactive map prototype published.",
    tl_2: "Refine danger zones and add school participation layer.",
    tl_3: "Collect structured volunteer submissions and publish monthly updates.",

    next30_title: "Next 30 days",
    n30_1: "Validate locations and labels with references.",
    n30_2: "Add 1–2 new map layers (placeholder).",
    n30_3: "Recruit volunteers for GIS + translation.",
    n30_4: "Publish a short public research brief (placeholder PDF).",
    n30_5: "Contact additional schools to join the project.",

    m_volunteers: "Volunteers",
    m_datasets: "Datasets collected",
    m_layers: "Map layers",

    research_title: "Research",
    research_subtitle: "Structured notes you can scan quickly. Replace placeholders as you publish.",
    rs_bg_title: "Background",
    rs_bg: "The Kura River basin supports communities, agriculture, and ecosystems across the region. In recent years, drought pressure and reduced flows have increased concern.",
    rs_problem_title: "Problem",
    rs_problem: "We focus on water stress indicators, low-flow sections, and risk zones that are visible, measurable, or reported by credible sources.",
    rs_method_title: "Methodology",
    rs_m1: "Collect sources (reports, news, official data).",
    rs_m2: "Convert observations into map points/layers.",
    rs_m3: "Keep labels conservative and transparent (what we know vs. what’s pending).",
    rs_findings_title: "Findings so far",
    rs_f1: "Lower Kura sections can show stronger low-flow/salinity risk during drought periods (placeholder wording).",
    rs_f2: "Some zones require additional validation before we label severity (placeholder).",
    sources_title: "Sources (placeholders)",
    dl_brief: "Download PDF brief (placeholder)",
    dl_dataset: "Download dataset (placeholder)",

    map_title: "Map",
    map_subtitle: "Embed the interactive map here. Replace the iframe URL with your hosted map link.",
    legend_title: "Legend",
    lg_drought: "Drought Severity",
    lg_water: "Water Levels",
    lg_veg: "Vegetation Index",
    lg_pop: "Population / Settlements",
    lg_risk: "Risk Zones",
    howread_title: "How to read this map",
    howread: "Use the layer toggles to focus on one signal at a time. Click a marker to see why it was added and what evidence supports it. If something is unverified, we label it clearly as “pending validation”.",
    cta_join_map: "Help improve the map",

    team_title: "School / Team",
    team_subtitle: "Who runs the project (placeholders you can replace).",
    school_label: "School",
    city_label: "City",
    country_label: "Country",
    advisor_label: "Advisor / Mentor",
    advisor_placeholder: "Name (placeholder)",
    role_leader: "Leader",
    role_research: "Research",
    role_gis: "GIS",
    role_outreach: "Outreach",
    role_web: "Web",
    member_placeholder: "Name (placeholder)",
    why_students_title: "Why students can see what others miss",
    why_students: "Students can move fast: gather observations, translate information, and build clear public tools. Our role is not to replace experts—it's to make signals visible, organized, and easier to act on.",

    contact_title: "Contact",
    contact_subtitle: "Send a message. We’ll reply as soon as possible.",
    f_name: "Name",
    f_email: "Email",
    f_message: "Message",
    send_message: "Send message",
    contact_success: "Thanks — your message is captured locally for now. (Hook this to a real form endpoint later.)",
    contact_info_title: "Project contacts",
    email_label: "Email:",
    contact_note: "Tip: for real form delivery, connect to Formspree / Getform / Google Forms and replace the form action.",

    vol_title: "Volunteer Signup",
    vol_subtitle: "Join the global volunteer network. We’ll coordinate work in small, clear tasks.",
    v_fullname: "Full Name",
    v_email: "Email",
    v_city: "Country / City",
    v_tz: "Time zone",
    v_skills: "Skills",
    sk_gis: "GIS/Mapping",
    sk_data: "Data Analysis",
    sk_research: "Research",
    sk_social: "Social Media",
    sk_outreach: "Outreach",
    sk_design: "Design",
    sk_dev: "Development",
    sk_trans: "Translation",
    v_avail: "Availability (hours/week)",
    v_motivation: "Motivation",
    v_submit: "Submit",
    v_success_title: "Submitted — thank you.",
    v_success_body: "Next steps: we’ll email you within <strong>3–7 days</strong> with a short onboarding task list.",

    footer_left: "© ",
    back_top: "Back to top",
    validation_required: "This field is required.",
    validation_email: "Enter a valid email.",
    validation_hours: "Enter a number between 1 and 40."
  },

  az: {
    skip: "Məzmunu keç",
    nav_home: "Ana səhifə",
    nav_progress: "İrəliləyiş",
    nav_research: "Tədqiqat",
    nav_map: "Xəritə",
    nav_team: "Məktəb / Komanda",
    nav_contact: "Əlaqə",
    nav_volunteer: "Könüllü qeydiyyatı",

    home_kicker: "Şagird təşəbbüslü ekoloji layihə",
    home_title: "Kür çayını tədqiqat, xəritələmə və fəaliyyətlə qoruyuruq.",
    home_subtitle: "Kür hövzəsində quraqlıq təzyiqi, su çatışmazlığı və ekosistem riskləri artır. Biz vəziyyəti sənədləşdirir, interaktiv xəritə yayımlayır və qlobal könüllülər cəlb edirik.",

    cta_view_map: "Xəritəyə bax",
    cta_become_volunteer: "Könüllü ol",

    wtd_research_title: "Tədqiqat",
    wtd_research_desc: "Etibarlı mənbələri, sahə qeydlərini və göstəriciləri toplayıb qısa şəkildə təqdim edirik.",
    wtd_mapping_title: "Xəritələmə",
    wtd_mapping_desc: "Risk zonalarını və əsas nöqtələri aydın interaktiv xəritədə göstəririk.",
    wtd_awareness_title: "Maarifləndirmə",
    wtd_awareness_desc: "Nəticələri məktəblərin və icmaların tez istifadə edə biləcəyi formada paylaşırıq.",
    wtd_network_title: "Könüllü şəbəkəsi",
    wtd_network_desc: "Fərqli ölkə və zaman qurşaqlarından könüllüləri koordinasiya edirik.",

    facts_1_num: "—",
    facts_1_label: "Çayın uzunluğu (placeholder)",
    facts_2_num: "—",
    facts_2_label: "Hövzədən asılı əhali (placeholder)",
    facts_3_num: "—",
    facts_3_label: "Monitorinq nöqtələri (placeholder)",

    photo_1: "Mingəçevir yaxınlığında Kür çayı (mənbə: Wikimedia Commons)",
    photo_2: "Salyan yaxınlığında Kür çayı (mənbə: Wikimedia Commons)",

    progress_title: "İrəliləyiş",
    progress_subtitle: "Nə etdik, nə üzərində işləyirik və növbəti addımlar — hamısı aydın.",
    timeline_title: "Zaman xətti",
    tag_done: "Tamamlandı",
    tag_in_progress: "Davam edir",
    tag_next: "Növbəti",
    tl_1: "İlk interaktiv xəritə prototipi yayımlandı.",
    tl_2: "Təhlükə zonalarını dəqiqləşdirmək və məktəb qatını əlavə etmək.",
    tl_3: "Könüllü müraciətlərini toplamaq və aylıq yeniliklər yayımlamaq.",

    next30_title: "Növbəti 30 gün",
    n30_1: "Nöqtələri və etiketləri mənbələrlə təsdiqləmək.",
    n30_2: "Xəritəyə 1–2 yeni qat əlavə etmək (placeholder).",
    n30_3: "GIS və tərcümə üçün könüllülər cəlb etmək.",
    n30_4: "Qısa ictimai hesabat hazırlamaq (placeholder PDF).",
    n30_5: "Layihəyə qoşulmaq üçün digər məktəblərlə əlaqə yaratmaq.",

    m_volunteers: "Könüllülər",
    m_datasets: "Toplanan datasetlər",
    m_layers: "Xəritə qatları",

    research_title: "Tədqiqat",
    research_subtitle: "Tez oxunan struktur. Məlumatları yayımladıqca placeholder-ları dəyişin.",
    rs_bg_title: "Arxa plan",
    rs_bg: "Kür çayı hövzəsi icmalar, kənd təsərrüfatı və ekosistemlər üçün vacibdir. Son illərdə quraqlıq və axının azalması narahatlığı artırıb.",
    rs_problem_title: "Problem",
    rs_problem: "Su stresini göstərən indikatorlara, azsulu sahələrə və etibarlı mənbələrdə qeyd olunan risk zonalarına fokuslanırıq.",
    rs_method_title: "Metodologiya",
    rs_m1: "Mənbələri toplamaq (hesabatlar, xəbərlər, rəsmi data).",
    rs_m2: "Müşahidələri xəritə nöqtələrinə/qatlara çevirmək.",
    rs_m3: "Etiketləri ehtiyatla vermək və şəffaf olmaq (bildiyimiz vs. təsdiq gözləyən).",
    rs_findings_title: "İndiyə qədər nəticələr",
    rs_f1: "Aşağı Kür hissələrində quraqlıq dövrlərində azsulu/salinlik riski daha güclü ola bilər (placeholder).",
    rs_f2: "Bəzi zonalar üçün dərəcəni yazmazdan əvvəl əlavə yoxlama lazımdır (placeholder).",
    sources_title: "Mənbələr (placeholder)",
    dl_brief: "PDF xülasəni yüklə (placeholder)",
    dl_dataset: "Dataseti yüklə (placeholder)",

    map_title: "Xəritə",
    map_subtitle: "İnteraktiv xəritəni burada yerləşdirin. iframe linkini öz host etdiyiniz linklə dəyişin.",
    legend_title: "Əfsanə (Legend)",
    lg_drought: "Quraqlıq dərəcəsi",
    lg_water: "Su səviyyələri",
    lg_veg: "Vegetasiya indeksi",
    lg_pop: "Əhali / Məskunlaşma",
    lg_risk: "Risk zonaları",
    howread_title: "Xəritəni necə oxumaq olar",
    howread: "Qatları bir-bir açıb baxın ki, siqnallar qarışmasın. Markerə klikləyin: niyə əlavə edildiyi və hansı əsasla yazıldığı göstəriləcək. Təsdiqlənməmiş məlumatlar “yoxlama gözləyir” kimi qeyd olunur.",
    cta_join_map: "Xəritəni yaxşılaşdırmağa kömək et",

    team_title: "Məktəb / Komanda",
    team_subtitle: "Layihəni kimlər idarə edir (placeholder-ları dəyişə bilərsiniz).",
    school_label: "Məktəb",
    city_label: "Şəhər",
    country_label: "Ölkə",
    advisor_label: "Məsləhətçi / Mentor",
    advisor_placeholder: "Ad (placeholder)",
    role_leader: "Lider",
    role_research: "Tədqiqat",
    role_gis: "GIS",
    role_outreach: "Kommunikasiya",
    role_web: "Veb",
    member_placeholder: "Ad (placeholder)",
    why_students_title: "Niyə şagirdlər faydalı ola bilər",
    why_students: "Şagirdlər çevikdir: müşahidə toplaya, məlumatı tərcümə edə və ictimaiyyət üçün aydın alətlər qura bilər. Biz mütəxəssisləri əvəz etmirik — siqnalları görünən, səliqəli və istifadə üçün asan edirik.",

    contact_title: "Əlaqə",
    contact_subtitle: "Mesaj yazın. Mümkün qədər tez cavab verəcəyik.",
    f_name: "Ad",
    f_email: "Email",
    f_message: "Mesaj",
    send_message: "Göndər",
    contact_success: "Təşəkkürlər — mesaj hələlik lokal olaraq saxlanıldı. (Sonradan real form endpoint-ə bağlayın.)",
    contact_info_title: "Layihə əlaqələri",
    email_label: "Email:",
    contact_note: "Məsləhət: real göndəriş üçün Formspree / Getform / Google Forms qoşun və form action-u dəyişin.",

    vol_title: "Könüllü qeydiyyatı",
    vol_subtitle: "Qlobal könüllü şəbəkəsinə qoşulun. Tapşırıqları kiçik və aydın hissələrə bölürük.",
    v_fullname: "Tam ad",
    v_email: "Email",
    v_city: "Ölkə / Şəhər",
    v_tz: "Zaman qurşağı",
    v_skills: "Bacarıqlar",
    sk_gis: "GIS/Xəritələmə",
    sk_data: "Məlumat analizi",
    sk_research: "Tədqiqat",
    sk_social: "Sosial media",
    sk_outreach: "Kommunikasiya",
    sk_design: "Dizayn",
    sk_dev: "Proqramlaşdırma",
    sk_trans: "Tərcümə",
    v_avail: "Vaxt (saat/həftə)",
    v_motivation: "Motivasiya",
    v_submit: "Təsdiqlə",
    v_success_title: "Göndərildi — təşəkkürlər.",
    v_success_body: "Növbəti addımlar: <strong>3–7 gün</strong> ərzində sizə email ilə qısa onboarding tapşırıqları göndərəcəyik.",

    footer_left: "© ",
    back_top: "Yuxarı qayıt",
    validation_required: "Bu xana mütləqdir.",
    validation_email: "Düzgün email daxil edin.",
    validation_hours: "1 ilə 40 arasında rəqəm daxil edin."
  }
};

const state = {
  lang: localStorage.getItem("krp_lang") || "en"
};

function setActiveLangButtons() {
  const enBtn = document.getElementById("langEN");
  const azBtn = document.getElementById("langAZ");
  enBtn?.classList.toggle("active", state.lang === "en");
  azBtn?.classList.toggle("active", state.lang === "az");
}

function applyTranslations() {
  const dict = i18n[state.lang] || i18n.en;
  document.documentElement.lang = state.lang === "az" ? "az" : "en";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!dict[key]) return;

    const allowHtml = ["v_success_body"].includes(key);
    if (allowHtml) el.innerHTML = dict[key];
    else el.textContent = dict[key];
  });

  setActiveLangButtons();
  localStorage.setItem("krp_lang", state.lang);
}

function setLang(lang) {
  state.lang = lang;
  applyTranslations();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).toLowerCase());
}

function showError(inputId, message) {
  const small = document.querySelector(`[data-error-for="${inputId}"]`);
  if (small) small.textContent = message || "";
}

function validateForm(form) {
  let ok = true;
  const dict = i18n[state.lang] || i18n.en;

  form.querySelectorAll("input, textarea").forEach(el => {
    const id = el.id;
    const val = el.value.trim();

    showError(id, "");

    if (el.hasAttribute("required") && !val) {
      ok = false;
      showError(id, dict.validation_required);
      return;
    }

    if (el.type === "email" && val && !isValidEmail(val)) {
      ok = false;
      showError(id, dict.validation_email);
      return;
    }

    if (id === "v_hours" && val) {
      const n = Number(val);
      if (!Number.isFinite(n) || n < 1 || n > 40) {
        ok = false;
        showError(id, dict.validation_hours);
      }
    }
  });

  return ok;
}

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Active nav highlight
const sections = document.querySelectorAll("section[id]");
const navMap = new Map();
document.querySelectorAll(".nav-link").forEach(a => navMap.set(a.getAttribute("data-section"), a));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.getAttribute("id");
    document.querySelectorAll(".nav-link").forEach(a => a.classList.remove("active"));
    const active = navMap.get(id);
    if (active) active.classList.add("active");
  });
}, { threshold: 0.45 });

sections.forEach(s => observer.observe(s));

// Contact form
const contactForm = document.getElementById("contactForm");
const contactSuccess = document.getElementById("contactSuccess");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm(contactForm)) return;

    const data = Object.fromEntries(new FormData(contactForm).entries());
    localStorage.setItem("krp_contact_last", JSON.stringify({ ...data, ts: Date.now() }));
    contactForm.reset();
    if (contactSuccess) contactSuccess.hidden = false;
    setTimeout(() => { if (contactSuccess) contactSuccess.hidden = true; }, 5000);
  });
}

// Volunteer form
const volunteerForm = document.getElementById("volunteerForm");
const volunteerSuccess = document.getElementById("volunteerSuccess");
if (volunteerForm) {
  volunteerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm(volunteerForm)) return;

    const fd = new FormData(volunteerForm);
    const data = Object.fromEntries(fd.entries());

    const skills = [];
    volunteerForm.querySelectorAll('input[name="skills"]:checked').forEach(cb => skills.push(cb.value));
    data.skills = skills;

    localStorage.setItem("krp_volunteer_last", JSON.stringify({ ...data, ts: Date.now() }));
    volunteerForm.reset();
    if (volunteerSuccess) volunteerSuccess.hidden = false;

    const btn = volunteerForm.querySelector("button[type='submit']");
    if (btn) {
      btn.disabled = true;
      btn.textContent = state.lang === "az" ? "Göndərildi" : "Submitted";
    }
  });
}

// Language events
document.getElementById("langEN")?.addEventListener("click", () => setLang("en"));
document.getElementById("langAZ")?.addEventListener("click", () => setLang("az"));

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());

applyTranslations();
