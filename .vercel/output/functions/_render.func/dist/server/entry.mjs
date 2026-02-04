import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter__8cWMCC2.mjs';
import { manifest } from './manifest_DF3OOEy7.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/gym.astro.mjs');
const _page2 = () => import('./pages/habitcommit/privacy.astro.mjs');
const _page3 = () => import('./pages/habitcommit/terms.astro.mjs');
const _page4 = () => import('./pages/habitcommit.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/gym.astro", _page1],
    ["src/pages/habitcommit/privacy.astro", _page2],
    ["src/pages/habitcommit/terms.astro", _page3],
    ["src/pages/habitcommit.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cf9b77d8-4e1f-4866-8bc6-3cf5df9d2690",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
