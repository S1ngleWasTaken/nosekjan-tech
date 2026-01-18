import { c as createComponent, e as createAstro, m as maybeRenderHead, d as renderComponent, a as renderTemplate, b as addAttribute, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_CLUz1fFP.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Bo1Wx8OI.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CY2bFM5a.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const translations = {
  cs: {
    hero: {
      subtitle: "Budujte návyky, které vydrží. Sledujte svůj pokrok, analyzujte data a dosahujte svých cílů s elegancí.",
      explore: "Prozkoumat funkce",
      contact: "Kontaktovat podporu",
      alt: {
        add: "Přidat nový návyk",
        dashboard: "Hlavní dashboard",
        stats: "Detailní statistiky"
      }
    },
    features: {
      title: "Klíčové vlastnosti",
      subtitle: "Vše co potřebujete pro budování lepších zítřků, zabalené v elegantním designu.",
      list: [
        {
          title: "Sledování návyků",
          description: "Jednoduché a intuitivní rozhraní pro každodenní záznam vašich úspěchů. Definujte si cíle, frekvenci a barvu pro každý návyk.",
          icon: "📝"
        },
        {
          title: "Detailní statistiky",
          description: "Získejte přehled o svém pokroku díky interaktivním grafům a statistikám. Sledujte své série a celkovou úspěšnost.",
          icon: "📊"
        },
        {
          title: "GitHub-style Heatmapy",
          description: "Vizualizujte svou konzistenci pomocí přehledných heatmap, které vás motivují zaplnit každý den.",
          icon: "🔥"
        },
        {
          title: "Skrytí návyků",
          description: "Skryjte citlivé návyky z hlavní stránky a ochraňte je heslem.",
          icon: "🙈"
        },
        {
          title: "Soukromí na prvním místě",
          description: "Vaše data jsou bezpečně uložena ve vašem zařízení. Kdykoli máte možnost si svá data stáhnout a nebo naopak importovat do jiného zařízení.",
          icon: "🔒"
        },
        {
          title: "Flexibilní nastavení",
          description: "Nastavte si návyky podle svých potřeb - denní cíle, týdenní frekvence a mnohem více.",
          icon: "⚙️"
        },
        {
          title: "Archivace návyků",
          description: "Archivujte návyky, které už nepotřebujete, aby jste udělali místo pro aktuální návyky ale nepřišli o historii.",
          icon: "📦"
        },
        {
          title: "Widgety na ploše",
          description: "Přidávejte si widgety na plochu pro rychlejší přehled o svých návycích.",
          icon: "🤩"
        },
        {
          title: "Aktivní vývoj",
          description: "Aplikace je aktivně vývíjená a vždycky se snažím poskytnout vám ten nejlepší zážitek a přinášet nové funkce.",
          icon: "🚀"
        }
      ]
    },
    privacy: {
      title: "Ochrana soukromí",
      sections: [
        {
          title: "Úvod",
          content: "Aplikace HabitCommit respektuje vaše soukromí. Tento dokument popisuje, jak nakládáme s vašimi daty."
        },
        {
          title: "Sběr a použití dat",
          content: `Aplikace <strong>nesbírá</strong> žádná osobní data, která by vás mohla identifikovat. Veškerá data o vašich návycích jsou uložena <strong>lokálně</strong> ve vašem zařízení.<br><br>
          Upozorňujeme, že pokud máte zapnuté zálohování zařízení na iCloud, data aplikace mohou být součástí této zálohy spravované společností Apple.<br><br>
          Svá data můžete kdykoliv smazat odinstalováním aplikace ze svého zařízení.<br><br>
          Aplikace nepoužívá žádné analytické nástroje třetích stran, které by sledovaly vaši aktivitu napříč aplikacemi a webovými stránkami.`
        },
        {
          title: "Oprávnění",
          content: `Aplikace může vyžadovat následující oprávnění pro správné fungování:<br>
          <ul class="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Notifikace:</strong> Pro zasílání upozornění na vaše návyky (pokud je povolíte).</li>
          </ul>`
        },
        {
          title: "Kontakt",
          content: `Máte-li jakékoli dotazy ohledně ochrany soukromí, kontaktujte nás na emailu <a href="mailto:honzik.nosek22@gmail.com" class="text-blue-400 hover:text-blue-300 underline">honzik.nosek22@gmail.com</a>.`
        }
      ],
      lastUpdated: "Poslední aktualizace: 20. prosince 2025"
    },
    support: {
      title: "Podpora",
      subtitle: "Narazili jste na problém nebo máte nápad na vylepšení? Dejte mi vědět!",
      boxTitle: "Napište mi",
      boxText: "Jsem tu pro vás a rád vám pomůžu s jakýmkoli dotazem.",
      copyright: "Jan Nosek. Všechna práva vyhrazena."
    }
  },
  en: {
    hero: {
      subtitle: "Build habits that last. Track your progress, analyze data, and achieve your goals with elegance.",
      explore: "Explore Features",
      contact: "Contact Support",
      alt: {
        add: "Add new habit",
        dashboard: "Main dashboard",
        stats: "Detailed statistics"
      }
    },
    features: {
      title: "Key Features",
      subtitle: "Everything you need to build better tomorrows, wrapped in an elegant design.",
      list: [
        {
          title: "Habit Tracking",
          description: "Simple and intuitive interface for daily tracking of your success. Define goals, frequency, and color for each habit.",
          icon: "📝"
        },
        {
          title: "Detailed Statistics",
          description: "Get an overview of your progress with interactive charts and statistics. Track your streaks and overall success rate.",
          icon: "📊"
        },
        {
          title: "GitHub-style Heatmaps",
          description: "Visualize your consistency with clear heatmaps that motivate you to fill every day.",
          icon: "🔥"
        },
        {
          title: "Hide sensitive habits",
          description: "Hide sensitive habits from the main page and protect them with a password.",
          icon: "🙈"
        },
        {
          title: "Privacy First",
          description: "Your data is safely stored on your device. No cloud accounts, no tracking. You can always export your data and import it to another device.",
          icon: "🔒"
        },
        {
          title: "Flexible Settings",
          description: "Customize habits to your needs - daily goals, weekly frequency, and much more.",
          icon: "⚙️"
        },
        {
          title: "Archive habits",
          description: "Archive habits that you no longer need to make space for relevant habits but keep your data.",
          icon: "📦"
        },
        {
          title: "Homescreen widgets",
          description: "Add widgets to your homescreen for quick access to your habits.",
          icon: "🤩"
        },
        {
          title: "Active Development",
          description: "The app is actively developed and I always try to provide the best experience for you alongside new features.",
          icon: "🚀"
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          title: "Introduction",
          content: "HabitCommit respects your privacy. This document describes how we handle your data."
        },
        {
          title: "Data Collection and Usage",
          content: `The application <strong>does not collect</strong> any personal data that could identify you. All habit data is stored <strong>locally</strong> on your device.<br><br>
          Please note that if you have iCloud backup enabled, application data may be included in this backup managed by Apple.<br><br>
          You can delete your data at any time by uninstalling the application from your device.<br><br>
          The application does not use any third-party analytics tools that would track your activity across applications and websites.`
        },
        {
          title: "Permissions",
          content: `The application may require the following permissions to function correctly:<br>
          <ul class="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Notifications:</strong> To send you reminders about your habits (if you enable them).</li>
          </ul>`
        },
        {
          title: "Contact",
          content: `If you have any questions regarding privacy, please contact us at <a href="mailto:honzik.nosek22@gmail.com" class="text-blue-400 hover:text-blue-300 underline">honzik.nosek22@gmail.com</a>.`
        }
      ],
      lastUpdated: "Last updated: December 20, 2025"
    },
    support: {
      title: "Support",
      subtitle: "Encountered a problem or have an idea for improvement? Let me know!",
      boxTitle: "Write to me",
      boxText: "I'm here for you and happy to help with any request.",
      copyright: "Jan Nosek. All rights reserved."
    }
  }
};

const csHabits = new Proxy({"src":"/_astro/habits_page.TuDHKsTn.png","width":1206,"height":2622,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jannosek/development/websites/nosekjan-tech/src/assets/habitcommit/csScreenshots/habits_page.png";
							}
							
							return target[name];
						}
					});

const csSettings = new Proxy({"src":"/_astro/settings.B-ROao4l.png","width":1206,"height":2622,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jannosek/development/websites/nosekjan-tech/src/assets/habitcommit/csScreenshots/settings.png";
							}
							
							return target[name];
						}
					});

const csStats = new Proxy({"src":"/_astro/stats_page.BpxXj6OW.png","width":1206,"height":2622,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jannosek/development/websites/nosekjan-tech/src/assets/habitcommit/csScreenshots/stats_page.png";
							}
							
							return target[name];
						}
					});

const csHomeWidgets = new Proxy({"src":"/_astro/homescreen_widgets.tJNl6BPh.png","width":1125,"height":2436,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jannosek/development/websites/nosekjan-tech/src/assets/habitcommit/csScreenshots/homescreen_widgets.png";
							}
							
							return target[name];
						}
					});

const enHabits = new Proxy({"src":"/_astro/habits_page.BL2y40gq.png","width":1206,"height":2622,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jannosek/development/websites/nosekjan-tech/src/assets/habitcommit/engScreenshots/habits_page.png";
							}
							
							return target[name];
						}
					});

const enSettings = new Proxy({"src":"/_astro/settings.BSGzeWXc.png","width":1206,"height":2622,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jannosek/development/websites/nosekjan-tech/src/assets/habitcommit/engScreenshots/settings.png";
							}
							
							return target[name];
						}
					});

const enStats = new Proxy({"src":"/_astro/stats_page.iIwyShaK.png","width":1206,"height":2622,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jannosek/development/websites/nosekjan-tech/src/assets/habitcommit/engScreenshots/stats_page.png";
							}
							
							return target[name];
						}
					});

const enHomeWidgets = new Proxy({"src":"/_astro/homescreen_widgets.CS42AfrG.png","width":1120,"height":2436,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jannosek/development/websites/nosekjan-tech/src/assets/habitcommit/engScreenshots/homescreen_widgets.png";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  const { lang: propLang } = Astro2.props;
  const lang = propLang === "cs" ? "cs" : "en";
  const t = translations[lang]?.hero || translations.en.hero;
  const images = {
    cs: {
      left: csSettings,
      center: csHabits,
      right: csStats,
      homescreen: csHomeWidgets
    },
    en: {
      left: enSettings,
      center: enHabits,
      right: enStats,
      homescreen: enHomeWidgets
    }
  };
  const currentImages = images[lang] || images.en;
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative py-20 lg:py-32 overflow-hidden"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <div class="text-center max-w-3xl mx-auto mb-16"> <h1 class="text-4xl md:text-6xl font-bold drop-shadow-sm">
Habit<span class="text-blue-400">Commit</span>.
</h1> <p class="text-xl md:text-2xl text-gray-300 font-light mb-10 leading-relaxed"> ${t.subtitle} </p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="#features" class="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg hover:shadow-blue-500/30"> ${t.explore} </a> <a href="#support" class="px-8 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-medium border border-gray-700 transition-all"> ${t.contact} </a> </div> </div> <div class="relative mx-auto mt-16 max-w-5xl"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"> <!-- <div
          class="transform md:translate-y-12 transition-transform duration-500 hover:-translate-y-2"
        >
          <Image
            src={currentImages.left}
            alt={t.alt.add}
            class="rounded-[2.5rem] shadow-2xl border-4 border-gray-800 mx-auto w-64 md:w-full max-w-[280px]"
          />
        </div> --> <div class="transform md:translate-y-12 transition-transform duration-500 hover:-translate-y-2"> ${renderComponent($$result, "Image", $$Image, { "src": currentImages.homescreen, "alt": t.alt.stats, "class": "rounded-[2.5rem] shadow-2xl border-4 border-gray-800 mx-auto w-64 md:w-full max-w-[280px]" })} </div> <div class="z-10 transform scale-110 transition-transform duration-500 hover:scale-115"> ${renderComponent($$result, "Image", $$Image, { "src": currentImages.center, "alt": t.alt.dashboard, "class": "rounded-[2.5rem] shadow-2xl shadow-blue-500/20 border-4 border-gray-800 mx-auto w-64 md:w-full max-w-[280px]" })} </div> <div class="transform md:translate-y-12 transition-transform duration-500 hover:-translate-y-2"> ${renderComponent($$result, "Image", $$Image, { "src": currentImages.right, "alt": t.alt.stats, "class": "rounded-[2.5rem] shadow-2xl border-4 border-gray-800 mx-auto w-64 md:w-full max-w-[280px]" })} </div> </div> </div> </div> <!-- Background Elements --> <div class="absolute top-1/4 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div> <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse" style="animation-delay: 1s;"></div> </section>`;
}, "/Users/jannosek/development/websites/nosekjan-tech/src/components/habitcommit/Hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Features;
  const { lang: propLang } = Astro2.props;
  const lang = propLang === "cs" ? "cs" : "en";
  const t = translations[lang]?.features || translations.en.features;
  return renderTemplate`${maybeRenderHead()}<section id="features" class="py-20 bg-gray-900/50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4"> ${t.title} </h2> <p class="text-gray-400 max-w-2xl mx-auto"> ${t.subtitle} </p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${t.list.map((feature) => renderTemplate`<div class="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all hover:transform hover:-translate-y-1"> <div class="text-4xl mb-4">${feature.icon}</div> <h3 class="text-xl font-bold text-white mb-3">${feature.title}</h3> <p class="text-gray-400 leading-relaxed">${feature.description}</p> </div>`)} </div> </div> </section>`;
}, "/Users/jannosek/development/websites/nosekjan-tech/src/components/habitcommit/Features.astro", void 0);

const $$Astro$2 = createAstro();
const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PrivacyPolicy;
  const { lang: propLang } = Astro2.props;
  const lang = propLang === "cs" ? "cs" : "en";
  const t = translations[lang]?.privacy || translations.en.privacy;
  return renderTemplate`${maybeRenderHead()}<section id="privacy" class="py-20"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300"> <!-- Header --> <div class="mb-12 text-center"> <h2 class="text-3xl font-bold text-white mb-4">${t.title}</h2> <div class="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div> </div> <div class="prose prose-invert prose-lg mx-auto bg-gray-900/40 p-8 rounded-2xl border border-gray-800"> <div> ${t.sections.map((section, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <h3${addAttribute(`text-white ${index > 0 ? "mt-8" : ""}`, "class")}> ${section.title} </h3> <div>${unescapeHTML(section.content)}</div> ` })}`)} <div class="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-500"> ${t.lastUpdated} </div> </div> </div> <!-- Jazykový přepínač / Language Switcher --> <div class="flex justify-center gap-6 mt-8"> <a href="?lang=cs"${addAttribute(`text-4xl hover:scale-110 transition-transform cursor-pointer ${lang === "cs" ? "opacity-100" : "opacity-50"}`, "class")} aria-label="Česky">
🇨🇿
</a> <a href="?lang=en"${addAttribute(`text-4xl hover:scale-110 transition-transform cursor-pointer ${lang === "en" ? "opacity-100" : "opacity-50"}`, "class")} aria-label="English">
🇬🇧
</a> </div> </div> </section>`;
}, "/Users/jannosek/development/websites/nosekjan-tech/src/components/habitcommit/PrivacyPolicy.astro", void 0);

const $$Astro$1 = createAstro();
const $$Support = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Support;
  const { lang: propLang } = Astro2.props;
  const lang = propLang === "cs" ? "cs" : "en";
  const t = translations[lang]?.support || translations.en.support;
  return renderTemplate`${maybeRenderHead()}<section id="support" class="py-20 bg-gray-900/20"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold text-white mb-6">${t.title}</h2> <p class="text-xl text-gray-300 mb-10"> ${t.subtitle} </p> <div class="bg-gray-800 p-8 rounded-2xl border border-gray-700 max-w-xl mx-auto hover:border-blue-500/50 transition-colors shadow-lg"> <div class="text-5xl mb-6">📬</div> <h3 class="text-xl font-semibold text-white mb-2">${t.boxTitle}</h3> <p class="text-gray-400 mb-6"> ${t.boxText} </p> <a href="mailto:honzik.nosek22@gmail.com?subject=HabitCommit%20Support" class="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
honzik.nosek22@gmail.com
</a> </div> <div class="mt-16 text-gray-500 text-sm"> <p>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${t.copyright} </p> </div> </div> </section>`;
}, "/Users/jannosek/development/websites/nosekjan-tech/src/components/habitcommit/Support.astro", void 0);

const $$Astro = createAstro();
const $$Habitcommit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Habitcommit;
  const lang = Astro2.url.searchParams.get("lang") === "cs" ? "cs" : "en";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "HabitCommit" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-slate-950 min-h-screen text-white"> ${renderComponent($$result2, "Hero", $$Hero, { "lang": lang })} ${renderComponent($$result2, "Features", $$Features, { "lang": lang })} ${renderComponent($$result2, "PrivacyPolicy", $$PrivacyPolicy, { "lang": lang })} ${renderComponent($$result2, "Support", $$Support, { "lang": lang })} </main> ` })}`;
}, "/Users/jannosek/development/websites/nosekjan-tech/src/pages/habitcommit.astro", void 0);

const $$file = "/Users/jannosek/development/websites/nosekjan-tech/src/pages/habitcommit.astro";
const $$url = "/habitcommit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Habitcommit,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
