import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro_4241d5aa.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
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
    })
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
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.bd4e7e74.css"},{"type":"inline","content":"@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-vietnamese-wght-normal.9137c779.woff2) format(\"woff2-variations\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-latin-ext-wght-normal.9a3fb86a.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-latin-wght-normal.dcb085ad.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.bd4e7e74.css"},{"type":"inline","content":"@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-vietnamese-wght-normal.9137c779.woff2) format(\"woff2-variations\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-latin-ext-wght-normal.9a3fb86a.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-latin-wght-normal.dcb085ad.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n"}],"routeData":{"route":"/category/[slug]","type":"page","pattern":"^\\/category\\/([^/]+?)\\/?$","segments":[[{"content":"category","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/category/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.bd4e7e74.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.md","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.bd4e7e74.css"},{"type":"inline","content":"@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-vietnamese-wght-normal.9137c779.woff2) format(\"woff2-variations\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-latin-ext-wght-normal.9a3fb86a.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-latin-wght-normal.dcb085ad.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n"}],"routeData":{"route":"/blog/[page]","type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"page","dynamic":true,"spread":false}]],"params":["page"],"component":"src/pages/blog/[page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.bd4e7e74.css"},{"type":"inline","content":"@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-vietnamese-wght-normal.9137c779.woff2) format(\"woff2-variations\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-latin-ext-wght-normal.9a3fb86a.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-latin-wght-normal.dcb085ad.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n"}],"routeData":{"route":"/blog/[slug]","type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.bd4e7e74.css"},{"type":"inline","content":"@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-vietnamese-wght-normal.9137c779.woff2) format(\"woff2-variations\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-latin-ext-wght-normal.9a3fb86a.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-latin-wght-normal.dcb085ad.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.bd4e7e74.css"},{"type":"inline","content":"@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-vietnamese-wght-normal.9137c779.woff2) format(\"woff2-variations\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-latin-ext-wght-normal.9a3fb86a.woff2) format(\"woff2-variations\");unicode-range:U+0100-02AF,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Cabin Variable;font-style:normal;font-display:swap;font-weight:400 700;src:url(/_astro/cabin-latin-wght-normal.dcb085ad.woff2) format(\"woff2-variations\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}\n"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://zippy-semifreddo-79078c.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/blog/[page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/category/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/category/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/about.md":"chunks/pages/about_9fe0407f.mjs","/src/pages/blog.astro":"chunks/pages/blog_586bf23b.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_2b38eba3.mjs","/src/pages/index.astro":"chunks/pages/index_a9444fcd.mjs","/src/pages/rss.xml.ts":"chunks/pages/rss_712fb3f5.mjs","\u0000@astrojs-manifest":"manifest_cd6ad8c8.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_3acc18ee.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_92da63a9.mjs","\u0000@astro-page:src/pages/category/[slug]@_@astro":"chunks/_slug__6211dbae.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"chunks/rss_48791e93.mjs","\u0000@astro-page:src/pages/about@_@md":"chunks/about_e27ad536.mjs","\u0000@astro-page:src/pages/blog/[page]@_@astro":"chunks/_page__6e665792.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__01538564.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_d45b55b3.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_aa68bda3.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/dwight-schrute.md?astroContentCollectionEntry=true":"chunks/dwight-schrute_6f9325b5.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/jim-halpert.md?astroContentCollectionEntry=true":"chunks/jim-halpert_368f607c.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/michael-scott.md?astroContentCollectionEntry=true":"chunks/michael-scott_2123c588.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/pam-beesely.md?astroContentCollectionEntry=true":"chunks/pam-beesely_4e0ca542.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/behind-the-scenes-with-our-artists.md?astroContentCollectionEntry=true":"chunks/behind-the-scenes-with-our-artists_1ee44236.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/collaboration-in-music-production.md?astroContentCollectionEntry=true":"chunks/collaboration-in-music-production_2f1be2dd.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/creating-a-successful-music-brand.md?astroContentCollectionEntry=true":"chunks/creating-a-successful-music-brand_fad132a8.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/gear-is-insanely-expensive.md?astroContentCollectionEntry=true":"chunks/gear-is-insanely-expensive_a29a5123.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/guitar-solos-are-still-awesome.md?astroContentCollectionEntry=true":"chunks/guitar-solos-are-still-awesome_725a46b1.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/live-music-is-crucial.md?astroContentCollectionEntry=true":"chunks/live-music-is-crucial_06daa026.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/making-a-home-studio.md?astroContentCollectionEntry=true":"chunks/making-a-home-studio_be7cc833.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/the-art-of-music-production.md?astroContentCollectionEntry=true":"chunks/the-art-of-music-production_8b83249b.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/the-importance-of-audio-quality.md?astroContentCollectionEntry=true":"chunks/the-importance-of-audio-quality_f7a7b034.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/tune-your-snare-drum.md?astroContentCollectionEntry=true":"chunks/tune-your-snare-drum_853dc774.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/dwight-schrute.md?astroPropagatedAssets":"chunks/dwight-schrute_a9c4909b.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/jim-halpert.md?astroPropagatedAssets":"chunks/jim-halpert_23240f70.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/michael-scott.md?astroPropagatedAssets":"chunks/michael-scott_566af0fa.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/pam-beesely.md?astroPropagatedAssets":"chunks/pam-beesely_0183330d.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/behind-the-scenes-with-our-artists.md?astroPropagatedAssets":"chunks/behind-the-scenes-with-our-artists_bf2a0225.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/collaboration-in-music-production.md?astroPropagatedAssets":"chunks/collaboration-in-music-production_e045f96f.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/creating-a-successful-music-brand.md?astroPropagatedAssets":"chunks/creating-a-successful-music-brand_729ca18e.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/gear-is-insanely-expensive.md?astroPropagatedAssets":"chunks/gear-is-insanely-expensive_783a6941.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/guitar-solos-are-still-awesome.md?astroPropagatedAssets":"chunks/guitar-solos-are-still-awesome_d4808e6c.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/live-music-is-crucial.md?astroPropagatedAssets":"chunks/live-music-is-crucial_7731fe60.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/making-a-home-studio.md?astroPropagatedAssets":"chunks/making-a-home-studio_8faf72c3.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/the-art-of-music-production.md?astroPropagatedAssets":"chunks/the-art-of-music-production_fcf29060.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/the-importance-of-audio-quality.md?astroPropagatedAssets":"chunks/the-importance-of-audio-quality_40f90d70.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/tune-your-snare-drum.md?astroPropagatedAssets":"chunks/tune-your-snare-drum_08398622.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/dwight-schrute.md":"chunks/dwight-schrute_8d5ec1f2.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/jim-halpert.md":"chunks/jim-halpert_c0d88fb6.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/michael-scott.md":"chunks/michael-scott_6957fd2a.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/authors/pam-beesely.md":"chunks/pam-beesely_0d8033b3.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/behind-the-scenes-with-our-artists.md":"chunks/behind-the-scenes-with-our-artists_73bbaeec.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/collaboration-in-music-production.md":"chunks/collaboration-in-music-production_b48ed202.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/creating-a-successful-music-brand.md":"chunks/creating-a-successful-music-brand_51ea7f71.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/gear-is-insanely-expensive.md":"chunks/gear-is-insanely-expensive_d6691e37.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/guitar-solos-are-still-awesome.md":"chunks/guitar-solos-are-still-awesome_97468a4d.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/live-music-is-crucial.md":"chunks/live-music-is-crucial_015fd890.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/making-a-home-studio.md":"chunks/making-a-home-studio_f9685d04.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/the-art-of-music-production.md":"chunks/the-art-of-music-production_5738b31d.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/the-importance-of-audio-quality.md":"chunks/the-importance-of-audio-quality_223fe781.mjs","/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/content/posts/tune-your-snare-drum.md":"chunks/tune-your-snare-drum_5a3979c0.mjs","astro:scripts/before-hydration.js":""},"assets":["/_astro/record.fe8d1997.jpg","/_astro/gear.f926c23e.jpg","/_astro/producer.0b024e75.jpg","/_astro/band.a6da028e.jpg","/_astro/speaker.2015bbbe.jpg","/_astro/guitarist.96c67b56.jpg","/_astro/drums.cb3cfdaa.jpg","/_astro/concert.ed52ee62.jpg","/_astro/photoshoot.bb035679.jpg","/_astro/cabin-latin-ext-wght-normal.9a3fb86a.woff2","/_astro/cabin-vietnamese-wght-normal.9137c779.woff2","/_astro/cabin-latin-wght-normal.dcb085ad.woff2","/_astro/heartbeat.913af530.png","/_astro/studio.4b926210.jpg","/_astro/about.bd4e7e74.css","/favicon.svg","/heartbeat.png","/images/band.jpg","/images/coffee.jpg","/images/concert.jpg","/images/drums.jpg","/images/gear.jpg","/images/guitarist.jpg","/images/photoshoot.jpg","/images/producer.jpg","/images/record.jpg","/images/speaker.jpg","/images/studio.jpg"]});

export { manifest };
