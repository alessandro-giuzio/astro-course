import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_47723389.mjs';

const _page0  = () => import('./chunks/generic_e96d2d3f.mjs');
const _page1  = () => import('./chunks/index_8efaf954.mjs');
const _page2  = () => import('./chunks/_slug__78f7de3a.mjs');
const _page3  = () => import('./chunks/rss_b4e79969.mjs');
const _page4  = () => import('./chunks/about_7fae44c8.mjs');
const _page5  = () => import('./chunks/_slug__66fde17c.mjs');
const _page6  = () => import('./chunks/blog_d0fc6fb9.mjs');
const _page7  = () => import('./chunks/404_bf935ef8.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/category/[slug].astro", _page2],["src/pages/rss.xml.ts", _page3],["src/pages/about.md", _page4],["src/pages/blog/[slug].astro", _page5],["src/pages/blog.astro", _page6],["src/pages/404.astro", _page7]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
