import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_3ef4e3e9.mjs';

const _page0  = () => import('./chunks/generic_43104b87.mjs');
const _page1  = () => import('./chunks/index_50567c01.mjs');
const _page2  = () => import('./chunks/_slug__9209d3ce.mjs');
const _page3  = () => import('./chunks/rss_d87d74ab.mjs');
const _page4  = () => import('./chunks/_slug__cf8b3c78.mjs');
const _page5  = () => import('./chunks/logout_c0159a17.mjs');
const _page6  = () => import('./chunks/signup_f5d5d18d.mjs');
const _page7  = () => import('./chunks/about_5541b61f.mjs');
const _page8  = () => import('./chunks/login_3902a786.mjs');
const _page9  = () => import('./chunks/_slug__086d2888.mjs');
const _page10  = () => import('./chunks/blog_9db4015b.mjs');
const _page11  = () => import('./chunks/404_86bcb109.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/category/[slug].astro", _page2],["src/pages/rss.xml.ts", _page3],["src/pages/author/[slug].astro", _page4],["src/pages/logout.astro", _page5],["src/pages/signup.astro", _page6],["src/pages/about.md", _page7],["src/pages/login.astro", _page8],["src/pages/blog/[slug].astro", _page9],["src/pages/blog.astro", _page10],["src/pages/404.astro", _page11]]);
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
