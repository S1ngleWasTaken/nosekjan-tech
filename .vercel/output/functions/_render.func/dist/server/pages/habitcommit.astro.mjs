import { c as createComponent, e as createAstro, m as maybeRenderHead, d as renderComponent, a as renderTemplate } from '../chunks/astro/server_CLUz1fFP.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BRnpGDRF.mjs';
import { t as translations } from '../chunks/habitcommit_DMY0bBjO.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CY2bFM5a.mjs';
import 'clsx';
import { $ as $$PrivacyPolicy } from '../chunks/PrivacyPolicy_D2fk8dS7.mjs';
export { renderers } from '../renderers.mjs';

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

const $$Astro$3 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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

const $$Astro$2 = createAstro();
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Features;
  const { lang: propLang } = Astro2.props;
  const lang = propLang === "cs" ? "cs" : "en";
  const t = translations[lang]?.features || translations.en.features;
  return renderTemplate`${maybeRenderHead()}<section id="features" class="py-20 bg-gray-900/50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-4"> ${t.title} </h2> <p class="text-gray-400 max-w-2xl mx-auto"> ${t.subtitle} </p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${t.list.map((feature) => renderTemplate`<div class="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all hover:transform hover:-translate-y-1"> <div class="text-4xl mb-4">${feature.icon}</div> <h3 class="text-xl font-bold text-white mb-3">${feature.title}</h3> <p class="text-gray-400 leading-relaxed">${feature.description}</p> </div>`)} </div> </div> </section>`;
}, "/Users/jannosek/development/websites/nosekjan-tech/src/components/habitcommit/Features.astro", void 0);

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
