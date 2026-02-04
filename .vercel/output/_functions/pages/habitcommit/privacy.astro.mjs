import { c as createComponent, e as createAstro, d as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CLUz1fFP.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BRnpGDRF.mjs';
import { $ as $$PrivacyPolicy } from '../../chunks/PrivacyPolicy_D2fk8dS7.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Privacy;
  const lang = Astro2.url.searchParams.get("lang") === "cs" ? "cs" : "en";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy Policy - HabitCommit" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-slate-950 min-h-screen text-white"> ${renderComponent($$result2, "PrivacyPolicyComponent", $$PrivacyPolicy, { "lang": lang })} </main> ` })}`;
}, "/Users/jannosek/development/websites/nosekjan-tech/src/pages/habitcommit/privacy.astro", void 0);

const $$file = "/Users/jannosek/development/websites/nosekjan-tech/src/pages/habitcommit/privacy.astro";
const $$url = "/habitcommit/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
