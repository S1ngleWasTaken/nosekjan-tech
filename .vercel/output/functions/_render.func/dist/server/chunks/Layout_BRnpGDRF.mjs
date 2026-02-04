import { c as createComponent, e as createAstro, b as addAttribute, f as renderHead, g as renderSlot, a as renderTemplate } from './astro/server_CLUz1fFP.mjs';
import 'piccolore';
import 'clsx';
/* empty css                               */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${Astro2.props.title || "Jan Nosek - Web & Mobile Developer"}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-slate-950 text-white font-outfit antialiased selection:bg-indigo-500 selection:text-white"> <div class="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/jannosek/development/websites/nosekjan-tech/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
