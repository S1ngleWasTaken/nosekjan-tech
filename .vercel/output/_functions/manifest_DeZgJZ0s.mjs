import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_CLUz1fFP.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BDi46VNX.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jannosek/development/websites/nosekjan-tech/","cacheDir":"file:///Users/jannosek/development/websites/nosekjan-tech/node_modules/.astro/","outDir":"file:///Users/jannosek/development/websites/nosekjan-tech/dist/","srcDir":"file:///Users/jannosek/development/websites/nosekjan-tech/src/","publicDir":"file:///Users/jannosek/development/websites/nosekjan-tech/public/","buildClientDir":"file:///Users/jannosek/development/websites/nosekjan-tech/dist/client/","buildServerDir":"file:///Users/jannosek/development/websites/nosekjan-tech/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/GymLayout.BMBlvCLX.css"},{"type":"external","src":"/_astro/Gallery.cPPnkASS.css"},{"type":"inline","content":"@keyframes fadeUp{to{opacity:1;transform:translateY(0)}}\n"}],"routeData":{"route":"/gym","isIndex":false,"type":"page","pattern":"^\\/gym\\/?$","segments":[[{"content":"gym","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gym.astro","pathname":"/gym","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/habitcommit.w2GLihuV.css"}],"routeData":{"route":"/habitcommit","isIndex":false,"type":"page","pattern":"^\\/habitcommit\\/?$","segments":[[{"content":"habitcommit","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/habitcommit.astro","pathname":"/habitcommit","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/habitcommit.w2GLihuV.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jannosek/development/websites/nosekjan-tech/src/pages/gym.astro",{"propagation":"none","containsHead":true}],["/Users/jannosek/development/websites/nosekjan-tech/src/pages/habitcommit.astro",{"propagation":"none","containsHead":true}],["/Users/jannosek/development/websites/nosekjan-tech/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/gym@_@astro":"pages/gym.astro.mjs","\u0000@astro-page:src/pages/habitcommit@_@astro":"pages/habitcommit.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DeZgJZ0s.mjs","/Users/jannosek/development/websites/nosekjan-tech/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_CwbLikEJ.mjs","/Users/jannosek/development/websites/nosekjan-tech/src/components/gym_example/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.DqQHL0Hc.js","/Users/jannosek/development/websites/nosekjan-tech/src/components/gym_example/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang._zVRVkbY.js","/Users/jannosek/development/websites/nosekjan-tech/src/components/gym_example/Gallery.astro?astro&type=script&index=0&lang.ts":"_astro/Gallery.astro_astro_type_script_index_0_lang.DoipVIWz.js","/Users/jannosek/development/websites/nosekjan-tech/src/layouts/GymLayout.astro?astro&type=script&index=0&lang.ts":"_astro/GymLayout.astro_astro_type_script_index_0_lang.BqBKEXv8.js","/Users/jannosek/development/websites/nosekjan-tech/node_modules/photoswipe/dist/photoswipe.esm.js":"_astro/photoswipe.esm.CKV1Bsxh.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/jannosek/development/websites/nosekjan-tech/src/components/gym_example/Navbar.astro?astro&type=script&index=0&lang.ts","const r=document.getElementById(\"menu-toggle\"),e=document.getElementById(\"nav-menu\"),a=document.getElementById(\"navbar\");r?.addEventListener(\"click\",()=>{e?.classList.toggle(\"right-0\"),e?.classList.toggle(\"right-[-100%]\");const t=r.querySelectorAll(\".bar\");e?.classList.contains(\"right-0\")?(t[0].classList.add(\"translate-y-[8px]\",\"rotate-45\"),t[1].classList.add(\"opacity-0\"),t[2].classList.add(\"-translate-y-[8px]\",\"-rotate-45\")):(t[0].classList.remove(\"translate-y-[8px]\",\"rotate-45\"),t[1].classList.remove(\"opacity-0\"),t[2].classList.remove(\"-translate-y-[8px]\",\"-rotate-45\"))});e?.querySelectorAll(\"a\").forEach(t=>{t.addEventListener(\"click\",()=>{e?.classList.add(\"right-[-100%]\"),e?.classList.remove(\"right-0\");const s=r?.querySelectorAll(\".bar\");s&&(s[0].classList.remove(\"translate-y-[8px]\",\"rotate-45\"),s[1].classList.remove(\"opacity-0\"),s[2].classList.remove(\"-translate-y-[8px]\",\"-rotate-45\"))})});window.addEventListener(\"scroll\",()=>{window.scrollY>50?(a?.classList.add(\"bg-bg/80\",\"backdrop-blur-md\",\"border-b\",\"border-white/10\",\"!py-4\"),a?.classList.remove(\"bg-transparent\",\"py-6\")):(a?.classList.remove(\"bg-bg/80\",\"backdrop-blur-md\",\"border-b\",\"border-white/10\",\"!py-4\"),a?.classList.add(\"bg-transparent\",\"py-6\"))});"],["/Users/jannosek/development/websites/nosekjan-tech/src/components/gym_example/Hero.astro?astro&type=script&index=0&lang.ts","const e=document.querySelectorAll(\".slide\");let s=0;const t=5e3;function c(){e[s].classList.remove(\"opacity-100\",\"scale-105\",\"z-20\"),e[s].classList.add(\"opacity-0\",\"scale-100\",\"z-10\"),s=(s+1)%e.length,e[s].classList.remove(\"opacity-0\",\"scale-100\",\"z-10\"),e[s].classList.add(\"opacity-100\",\"scale-105\",\"z-20\")}e.length>0&&(e[0].classList.add(\"opacity-100\",\"scale-105\",\"z-20\"),e[0].classList.remove(\"opacity-0\",\"scale-100\",\"z-10\"));setInterval(c,t);"],["/Users/jannosek/development/websites/nosekjan-tech/src/layouts/GymLayout.astro?astro&type=script&index=0&lang.ts",""]],"assets":["/_astro/hero-1.7_6ksH4Q.png","/_astro/hero-3.DGrICmcU.png","/_astro/hero-2.C38zOrr5.png","/_astro/me.IasI3peW.webp","/_astro/about.CAkJZsdh.png","/_astro/trainer-1.CQIFkdM7.png","/_astro/settings.B-ROao4l.png","/_astro/stats_page.BpxXj6OW.png","/_astro/habits_page.TuDHKsTn.png","/_astro/settings.BSGzeWXc.png","/_astro/habits_page.BL2y40gq.png","/_astro/stats_page.iIwyShaK.png","/_astro/trainer-2.BBf_X5Qs.png","/_astro/HabitCommit_icon.BeQ55k8b.webp","/_astro/Bicar logo.ClhyLuoO.webp","/_astro/homescreen_widgets.tJNl6BPh.png","/_astro/homescreen_widgets.CS42AfrG.png","/_astro/habitcommit.w2GLihuV.css","/favicon.ico","/favicon.svg","/gym_favicon.ico","/_astro/Gallery.astro_astro_type_script_index_0_lang.DoipVIWz.js","/_astro/Gallery.cPPnkASS.css","/_astro/GymLayout.BMBlvCLX.css","/_astro/photoswipe.esm.CKV1Bsxh.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"fTCcAgAO7zLgog9Cl84YsVEeH49RtjViKrFXo8Xswc0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
