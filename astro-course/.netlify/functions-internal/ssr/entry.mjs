import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_cd6ad8c8.mjs';

const _page0  = () => import('./chunks/generic_3acc18ee.mjs');
const _page1  = () => import('./chunks/index_92da63a9.mjs');
const _page2  = () => import('./chunks/_slug__6211dbae.mjs');
const _page3  = () => import('./chunks/rss_48791e93.mjs');
const _page4  = () => import('./chunks/about_e27ad536.mjs');
const _page5  = () => import('./chunks/_page__6e665792.mjs');
const _page6  = () => import('./chunks/_slug__01538564.mjs');
const _page7  = () => import('./chunks/blog_d45b55b3.mjs');
const _page8  = () => import('./chunks/404_aa68bda3.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/category/[slug].astro", _page2],["src/pages/rss.xml.ts", _page3],["src/pages/about.md", _page4],["src/pages/blog/[page].astro", _page5],["src/pages/blog/[slug].astro", _page6],["src/pages/blog.astro", _page7],["src/pages/404.astro", _page8]]);
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
