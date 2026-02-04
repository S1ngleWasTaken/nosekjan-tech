import { c as createComponent, e as createAstro, m as maybeRenderHead, b as addAttribute, d as renderComponent, F as Fragment, a as renderTemplate, u as unescapeHTML } from './astro/server_CLUz1fFP.mjs';
import 'piccolore';
import { t as translations } from './habitcommit_DMY0bBjO.mjs';

const $$Astro = createAstro();
const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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

export { $$PrivacyPolicy as $ };
