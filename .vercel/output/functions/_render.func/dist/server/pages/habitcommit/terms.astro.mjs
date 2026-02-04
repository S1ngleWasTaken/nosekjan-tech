import { c as createComponent, e as createAstro, m as maybeRenderHead, b as addAttribute, d as renderComponent, F as Fragment, a as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_CLUz1fFP.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BRnpGDRF.mjs';
import { t as translations } from '../../chunks/habitcommit_DMY0bBjO.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$TermsOfUse = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TermsOfUse;
  const { lang: propLang } = Astro2.props;
  const lang = propLang === "cs" ? "cs" : "en";
  const t = translations[lang]?.terms || translations.en.terms;
  return renderTemplate`${maybeRenderHead()}<section id="terms" class="py-20"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300"> <!-- Header --> <div class="mb-12 text-center"> <h2 class="text-3xl font-bold text-white mb-4">${t.title}</h2> <div class="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div> </div> <div class="prose prose-invert prose-lg mx-auto bg-gray-900/40 p-8 rounded-2xl border border-gray-800"> <div> ${t.sections.map((section, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <h3${addAttribute(`text-white ${index > 0 ? "mt-8" : ""}`, "class")}> ${section.title} </h3> <div>${unescapeHTML(section.content)}</div> ` })}`)} <div class="mt-8 pt-6 border-t border-gray-700 text-sm text-gray-500"> ${t.lastUpdated} </div> </div> </div> <!-- Language Switcher --> <div class="flex justify-center gap-6 mt-8"> <a href="?lang=cs"${addAttribute(`text-4xl hover:scale-110 transition-transform cursor-pointer ${lang === "cs" ? "opacity-100" : "opacity-50"}`, "class")} aria-label="Česky">
🇨🇿
</a> <a href="?lang=en"${addAttribute(`text-4xl hover:scale-110 transition-transform cursor-pointer ${lang === "en" ? "opacity-100" : "opacity-50"}`, "class")} aria-label="English">
🇬🇧
</a> </div> </div> </section>`;
}, "/Users/jannosek/development/websites/nosekjan-tech/src/components/habitcommit/TermsOfUse.astro", void 0);

const $$Astro = createAstro();
const $$Terms = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Terms;
  const lang = Astro2.url.searchParams.get("lang") === "cs" ? "cs" : "en";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Terms of Use - HabitCommit" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-slate-950 min-h-screen text-white"> ${renderComponent($$result2, "TermsOfUseComponent", $$TermsOfUse, { "lang": lang })} </main> ` })}`;
}, "/Users/jannosek/development/websites/nosekjan-tech/src/pages/habitcommit/terms.astro", void 0);

const $$file = "/Users/jannosek/development/websites/nosekjan-tech/src/pages/habitcommit/terms.astro";
const $$url = "/habitcommit/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
