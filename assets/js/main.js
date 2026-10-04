/* ERN Construction LLC — site logic (external file, CSP script-src 'self' friendly) */

// ── i18n data ──────────────────────────────────────────────
const translations = {
  ru: {
    "num.mln":"млн+",
    "num.1":"м³ радиоактивного материала перевезено и рекультивировано",
    "num.2":"хвостохранилищ построено и приведено в безопасное состояние",
    "num.3":"Собственная радиологическая лаборатория — независимый контроль на каждом объекте",
    "num.4":"Полный цикл: изыскания, проектирование, строительство, мониторинг",
    "nav.about":"О компании","nav.services":"Направления","nav.green":"Зелёная экономика","nav.process":"Процесс","nav.contact":"Контакты",
    "hero.desc":"Инженерно-строительная компания полного цикла. Работаем с объектами любой сложности — от рекультивации радиоактивных территорий и химически загрязнённых объектов до строительства дорог, мостов и зданий.",
    "hero.cta1":"Наши направления →","hero.cta2":"Связаться с нами",
    "dir.rad":"Радиоактивная рекультивация","dir.chem":"Химическое загрязнение","dir.tbo":"Полигоны ТБО","dir.hydro":"Гидротехнические сооружения","dir.roads":"Дороги и мосты","dir.build":"Здания и сооружения",
    "about.label":"О компании","about.title":"Больше чем рекультивация.<br>Полный инженерный цикл.",
    "about.p1":"ERN Construction — многопрофильная инженерно-строительная компания. Наш профиль — сложные объекты, которые требуют специализированных знаний, опыта и ответственности.",
    "about.p2":"Мы беремся за задачи, от которых другие отказываются: ликвидация радиоактивных загрязнений, объекты с СДЯВ и химическим заражением, закрытие и рекультивация полигонов ТБО, строительство гидротехнических сооружений — хвостохранилищ, ГЭС, дамб.",
    "about.p3":"Параллельно строим транспортную инфраструктуру, коммерческие и промышленные здания — с тем же стандартом качества и экологической ответственностью.",
    "stat.1":"Полный цикл: изыскания → проектирование → строительство → мониторинг",
    "stat.2":"Направлений: от радиоактивной рекультивации до гражданского строительства",
    "stat.3":"Зелёная экономика и устойчивое развитие — принцип работы компании",
    "stat.4":"Международные стандарты: МАГАТЭ, ISO 14001, ВБ, экологическое законодательство",
    "srv.label":"Направления работы","srv.title":"Что мы строим и восстанавливаем",
    "s1.num":"01 · ФЛАГМАНСКОЕ НАПРАВЛЕНИЕ","s1.title":"Радиоактивная рекультивация",
    "s1.desc":"Ликвидация радиоактивного загрязнения территорий, хвостохранилищ уранодобывающей промышленности и объектов ядерного наследия. Дезактивация, изоляция, долгосрочная стабилизация и мониторинг в соответствии с требованиями МАГАТЭ.",
    "s1.t1":"Хвостохранилища","s1.t2":"Урановое наследие","s1.t3":"Дезактивация",
    "s2.num":"02 · ФЛАГМАНСКОЕ НАПРАВЛЕНИЕ","s2.title":"Химическое загрязнение и СДЯВ",
    "s2.desc":"Рекультивация территорий, загрязнённых сильнодействующими ядовитыми веществами, нефтепродуктами, тяжёлыми металлами и промышленной химией. Комплексная очистка грунтов и подземных вод. Ликвидация последствий техногенных аварий.",
    "s2.t2":"Тяжёлые металлы","s2.t3":"Очистка грунтов","s2.t4":"Техногенные аварии",
    "s3.title":"Полигоны ТБО и свалки","s3.desc":"Проектирование, строительство и закрытие мусорных полигонов. Система дегазации и сбора свалочного биогаза, дренаж и изоляция фильтрата, биологическая рекультивация. Возврат территории в хозяйственный оборот.",
    "s3.t1":"Дегазация","s3.t2":"Биогаз","s3.t3":"Фильтрат","s3.t4":"Рекультивация",
    "s4.title":"Гидротехнические сооружения","s4.desc":"Проектирование и строительство ГЭС, дамб, водохранилищ, хвостохранилищ и дренажных систем. Гидрогеологические изыскания, барьерные конструкции, защита водных объектов. Работа в сложных горных и геологических условиях.",
    "s4.t1":"ГЭС","s4.t2":"Дамбы","s4.t3":"Хвостохранилища","s4.t4":"Дренаж",
    "s5.title":"Дороги и мосты","s5.desc":"Строительство и реконструкция автомобильных дорог, мостовых переходов и транспортных развязок. Проектирование с учётом нагрузки, климатических условий и требований к долговечности. Инфраструктурные решения для промышленных и труднодоступных районов.",
    "s5.t1":"Автодороги","s5.t2":"Мостовые переходы","s5.t3":"Промышленные районы",
    "s6.title":"Здания и сооружения","s6.desc":"Гражданское и промышленное строительство: производственные корпуса, складские комплексы, административные и коммерческие здания. Проектирование с соблюдением норм энергоэффективности и зелёного строительства.",
    "s6.t1":"Промышленные здания","s6.t2":"Коммерческая недвижимость",
    "sw1.title":"Инженерные изыскания и проектирование","sw1.desc":"Геотехнические и экологические изыскания, оценка рисков, разработка проектной и рабочей документации для объектов любой категории сложности — от рекультивации до гидротехнического строительства.",
    "sw2.title":"Экологический мониторинг и сопровождение","sw2.desc":"Долгосрочный контроль состояния грунтов, воды и воздуха после рекультивации. Лабораторные исследования, отчётность по стандартам МАГАТЭ, ВБ и национального законодательства.",
    "green.label":"Зелёная экономика","green.title":"Загрязнение —<br>это нераскрытый ресурс",
    "green.intro":"ERN рассматривает каждый проблемный объект как возможность. Рекультивированный полигон, закрытое хвостохранилище, очищенный промышленный участок — это земля, энергия и инфраструктура, возвращённые в оборот зелёной экономики.",
    "gc1.title":"Полигоны → Территории","gc1.desc":"Рекультивированные свалки становятся зелёными зонами, площадками для солнечной энергетики или строительства. Извлечённый биогаз — источник возобновляемой энергии.",
    "gc2.title":"Водотоки → Чистая энергия","gc2.desc":"Малые ГЭС на природных водотоках — стабильная генерация без выбросов CO₂. Гидротехническая экспертиза ERN позволяет реализовывать такие проекты в самых сложных условиях рельефа.",
    "gc3.title":"Загрязнение → Восстановление","gc3.desc":"Каждый гектар рекультивированной земли — это возвращённое биоразнообразие, чистая вода и безопасная среда. Долгосрочный мониторинг гарантирует устойчивый результат.",
    "esg.e":"Снижение экологического ущерба, восстановление биоразнообразия, минимизация углеродного следа на всех объектах",
    "esg.s":"Безопасность труда, работа с местными сообществами, защита здоровья населения вблизи объектов",
    "esg.g":"Прозрачность, соответствие МАГАТЭ и ВБ, международный аудит, долгосрочная ответственность за каждый объект",
    "proc.label":"Как мы работаем","proc.title":"Полный цикл реализации проекта",
    "p1.title":"Изыскания","p1.desc":"Геотехнические и экологические исследования площадки",
    "p2.title":"Оценка рисков","p2.desc":"Анализ загрязнения, концепция и стратегия проекта",
    "p3.title":"Проектирование","p3.desc":"Инженерная и проектная документация",
    "p4.title":"Строительство","p4.desc":"Реализация, контроль качества и безопасности",
    "p5.title":"Мониторинг","p5.desc":"Долгосрочный экологический контроль и сдача объекта",
    "con.label":"Контакты","con.title":"Обсудим ваш проект",
    "con.tagline":"Каждый объект уникален. Мы готовы к детальному обсуждению — от первичной оценки сложности до комплексной реализации под ключ.",
    "con.phone":"Телефон","con.office":"Офис","con.geo":"Работаем","con.geo.val":"Международные проекты & СНГ",
    "form.name":"Ваше имя","form.name.ph":"Иван Иванов","form.org":"Организация","form.org.ph":"Название компании",
    "form.msg":"Описание объекта или задачи","form.msg.ph":"Тип объекта, масштаб, регион, сроки...","form.submit":"Отправить запрос →",
    "form.thanks":"Спасибо! Мы свяжемся с вами в ближайшее время."
  },
  en: {
    "num.mln":"M+",
    "num.1":"m³ of radioactive material transported and remediated",
    "num.2":"tailings facilities built or brought to safe condition",
    "num.3":"In-house radiological laboratory — independent control on every site",
    "num.4":"Full cycle: surveys, design, construction, monitoring",
    "nav.about":"About","nav.services":"Services","nav.green":"Green Economy","nav.process":"Process","nav.contact":"Contact",
    "hero.desc":"A full-cycle engineering and construction company. We handle projects of any complexity — from radioactive site remediation and chemical contamination cleanup to road, bridge, and building construction.",
    "hero.cta1":"Our Services →","hero.cta2":"Get in Touch",
    "dir.rad":"Radioactive Remediation","dir.chem":"Chemical Contamination","dir.tbo":"Landfill & MSW","dir.hydro":"Hydraulic Structures","dir.roads":"Roads & Bridges","dir.build":"Buildings & Structures",
    "about.label":"About the Company","about.title":"More than remediation.<br>Full engineering lifecycle.",
    "about.p1":"ERN Construction is a multi-discipline engineering and construction company. We specialize in complex projects that demand deep expertise, experience, and accountability.",
    "about.p2":"We take on challenges others decline: radioactive contamination elimination, sites with hazardous chemicals (HSMP), municipal solid waste landfill closure and remediation, construction of hydraulic structures — tailings facilities, HPPs, dams.",
    "about.p3":"We also deliver transport infrastructure, commercial and industrial buildings — held to the same standards of quality and environmental responsibility.",
    "stat.1":"IAEA compliance on all radiological sites",
    "stat.2":"Service lines: from radioactive remediation to civil construction",
    "stat.3":"Green economy and sustainable development — our core operating principle",
    "stat.4":"ISO 14001, OHSAS 18001, international environmental standards",
    "srv.label":"Service Lines","srv.title":"What we build and restore",
    "s1.num":"01 · FLAGSHIP SERVICE","s1.title":"Radioactive Remediation",
    "s1.desc":"Elimination of radioactive contamination on land and at uranium mining tailings facilities and nuclear legacy sites. Decontamination, isolation, long-term stabilization and monitoring in compliance with IAEA requirements.",
    "s1.t1":"Tailings Facilities","s1.t2":"Uranium Legacy","s1.t3":"Decontamination",
    "s2.num":"02 · FLAGSHIP SERVICE","s2.title":"Chemical Contamination & HSMP",
    "s2.desc":"Remediation of land contaminated by highly toxic substances, petroleum products, heavy metals, and industrial chemicals. Comprehensive soil and groundwater cleanup. Emergency response and industrial accident aftermath elimination.",
    "s2.t2":"Heavy Metals","s2.t3":"Soil Remediation","s2.t4":"Industrial Accidents",
    "s3.title":"Landfills & MSW Sites","s3.desc":"Design, construction, and closure of municipal solid waste landfills. Landfill gas degassing and biogas capture systems, leachate drainage and containment, biological reclamation. Land returned to productive use.",
    "s3.t1":"Degassing","s3.t2":"Biogas","s3.t3":"Leachate","s3.t4":"Land Reclamation",
    "s4.title":"Hydraulic Structures","s4.desc":"Design and construction of HPPs, dams, reservoirs, tailings impoundments, and drainage systems. Hydrogeological surveys, containment systems, water body protection. Work in complex mountain and geological conditions.",
    "s4.t1":"HPP / Mini-HPP","s4.t2":"Dams","s4.t3":"Tailings Ponds","s4.t4":"Drainage",
    "s5.title":"Roads & Bridges","s5.desc":"Construction and reconstruction of highways, bridge crossings, and transport interchanges. Design accounting for load capacity, climatic conditions, and durability requirements. Infrastructure solutions for industrial and remote areas.",
    "s5.t1":"Highways","s5.t2":"Bridge Crossings","s5.t3":"Industrial Areas",
    "s6.title":"Buildings & Structures","s6.desc":"Civil and industrial construction: manufacturing facilities, warehouse complexes, office and commercial buildings. Energy-efficient design in compliance with green building standards.",
    "s6.t1":"Industrial Buildings","s6.t2":"Commercial Real Estate",
    "sw1.title":"Engineering Surveys & Design","sw1.desc":"Geotechnical and environmental surveys, risk assessment, development of design and working documentation for projects of any complexity — from remediation to hydraulic construction.",
    "sw2.title":"Environmental Monitoring & Support","sw2.desc":"Long-term monitoring of soil, water, and air conditions after remediation. Laboratory testing, reporting to IAEA, World Bank, and national regulatory standards.",
    "green.label":"Green Economy","green.title":"Contamination is<br>an untapped resource",
    "green.intro":"ERN views every problem site as an opportunity. A reclaimed landfill, a closed tailings facility, a remediated industrial plot — these are land, energy, and infrastructure returned to the green economy.",
    "gc1.title":"Landfills → Territory","gc1.desc":"Reclaimed dumps become green zones, solar energy sites, or construction land. Extracted biogas provides a source of renewable energy.",
    "gc2.title":"Waterways → Clean Energy","gc2.desc":"Small HPPs on natural waterways deliver stable, zero-emission power. ERN's hydraulic expertise enables delivery in the most challenging terrain.",
    "gc3.title":"Contamination → Recovery","gc3.desc":"Every reclaimed hectare means restored biodiversity, clean water, and a safe living environment. Long-term monitoring guarantees lasting results.",
    "esg.e":"Reducing environmental damage, restoring biodiversity, minimizing carbon footprint across all sites",
    "esg.s":"Worker safety, community engagement, and public health protection near project sites",
    "esg.g":"Transparency, IAEA and World Bank compliance, international audit, long-term accountability for every site",
    "proc.label":"How We Work","proc.title":"Full project lifecycle",
    "p1.title":"Surveys","p1.desc":"Geotechnical and environmental site investigations",
    "p2.title":"Risk Assessment","p2.desc":"Contamination analysis, concept and project strategy",
    "p3.title":"Design","p3.desc":"Engineering and project documentation",
    "p4.title":"Construction","p4.desc":"Delivery, quality and safety control",
    "p5.title":"Monitoring","p5.desc":"Long-term environmental monitoring and handover",
    "con.label":"Contact","con.title":"Let's discuss your project",
    "con.tagline":"Every site is unique. We are ready for an in-depth conversation — from initial complexity assessment to full turnkey delivery.",
    "con.phone":"Phone","con.office":"Office","con.geo":"Coverage","con.geo.val":"International Projects & CIS",
    "form.name":"Your Name","form.name.ph":"John Smith","form.org":"Organisation","form.org.ph":"Company name",
    "form.msg":"Project or site description","form.msg.ph":"Site type, scale, region, timeline...","form.submit":"Send Request →",
    "form.thanks":"Thank you! We will contact you shortly."
  }
};

window._lang = 'ru';

function setLang(lang) {
  window._lang = lang;
  document.documentElement.lang = lang;
  const t = translations[lang];

  // text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // title
  document.title = lang === 'en'
    ? 'ERN Construction LLC — Environmental Remediation Network'
    : 'ERN Construction LLC — ЭРН-Строй';

  // buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
});

const submitBtn = document.getElementById('form-submit');
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const t = translations[window._lang] || translations.ru;
    alert(t['form.thanks']);
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));
