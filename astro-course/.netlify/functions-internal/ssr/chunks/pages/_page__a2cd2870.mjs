/* empty css                           */import { A as AstroError, l as UnknownContentCollectionError, f as createComponent, n as renderUniqueStylesheet, o as renderScriptElement, p as createHeadAndContent, r as renderTemplate, i as renderComponent, u as unescapeHTML, e as createAstro, m as maybeRenderHead, h as addAttribute } from '../astro_4241d5aa.mjs';
import 'clsx';
import { $ as $$Image, a as $$Main, b as $$Layout } from './404_e82d43db.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!(Object.assign({"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":"https://zippy-semifreddo-79078c.netlify.app","ASSETS_PREFIX":undefined},{_:process.env._,}))?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntryBySlug({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntryBySlug(collection, slug) {
    const entryImport = await getEntryImport(collection, slug);
    if (typeof entryImport !== "function")
      return void 0;
    const entry = await entryImport();
    return {
      id: entry.id,
      slug: entry.slug,
      body: entry.body,
      collection: entry.collection,
      data: entry.data,
      async render() {
        return render({
          collection: entry.collection,
          id: entry.id,
          renderEntryImport: await getRenderEntryImport(collection, slug)
        });
      }
    };
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} \u2192 ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/authors/dwight-schrute.md": () => import('../dwight-schrute_6f9325b5.mjs'),"/src/content/authors/jim-halpert.md": () => import('../jim-halpert_368f607c.mjs'),"/src/content/authors/michael-scott.md": () => import('../michael-scott_2123c588.mjs'),"/src/content/authors/pam-beesely.md": () => import('../pam-beesely_4e0ca542.mjs'),"/src/content/posts/behind-the-scenes-with-our-artists.md": () => import('../behind-the-scenes-with-our-artists_1ee44236.mjs'),"/src/content/posts/collaboration-in-music-production.md": () => import('../collaboration-in-music-production_2f1be2dd.mjs'),"/src/content/posts/creating-a-successful-music-brand.md": () => import('../creating-a-successful-music-brand_fad132a8.mjs'),"/src/content/posts/gear-is-insanely-expensive.md": () => import('../gear-is-insanely-expensive_a29a5123.mjs'),"/src/content/posts/guitar-solos-are-still-awesome.md": () => import('../guitar-solos-are-still-awesome_725a46b1.mjs'),"/src/content/posts/live-music-is-crucial.md": () => import('../live-music-is-crucial_06daa026.mjs'),"/src/content/posts/making-a-home-studio.md": () => import('../making-a-home-studio_be7cc833.mjs'),"/src/content/posts/the-art-of-music-production.md": () => import('../the-art-of-music-production_8b83249b.mjs'),"/src/content/posts/the-importance-of-audio-quality.md": () => import('../the-importance-of-audio-quality_f7a7b034.mjs'),"/src/content/posts/tune-your-snare-drum.md": () => import('../tune-your-snare-drum_853dc774.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"authors":{"type":"content","entries":{"jim-halpert":"/src/content/authors/jim-halpert.md","pam-beesely":"/src/content/authors/pam-beesely.md","michael-scott":"/src/content/authors/michael-scott.md","dwight-schrute":"/src/content/authors/dwight-schrute.md"}},"posts":{"type":"content","entries":{"behind-the-scenes-with-our-artists":"/src/content/posts/behind-the-scenes-with-our-artists.md","collaboration-in-music-production":"/src/content/posts/collaboration-in-music-production.md","creating-a-successful-music-brand":"/src/content/posts/creating-a-successful-music-brand.md","gear-is-insanely-expensive":"/src/content/posts/gear-is-insanely-expensive.md","guitar-solos-are-still-awesome":"/src/content/posts/guitar-solos-are-still-awesome.md","live-music-is-crucial":"/src/content/posts/live-music-is-crucial.md","making-a-home-studio":"/src/content/posts/making-a-home-studio.md","the-art-of-music-production":"/src/content/posts/the-art-of-music-production.md","the-importance-of-audio-quality":"/src/content/posts/the-importance-of-audio-quality.md","tune-your-snare-drum":"/src/content/posts/tune-your-snare-drum.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/authors/dwight-schrute.md": () => import('../dwight-schrute_a9c4909b.mjs'),"/src/content/authors/jim-halpert.md": () => import('../jim-halpert_23240f70.mjs'),"/src/content/authors/michael-scott.md": () => import('../michael-scott_566af0fa.mjs'),"/src/content/authors/pam-beesely.md": () => import('../pam-beesely_0183330d.mjs'),"/src/content/posts/behind-the-scenes-with-our-artists.md": () => import('../behind-the-scenes-with-our-artists_bf2a0225.mjs'),"/src/content/posts/collaboration-in-music-production.md": () => import('../collaboration-in-music-production_e045f96f.mjs'),"/src/content/posts/creating-a-successful-music-brand.md": () => import('../creating-a-successful-music-brand_729ca18e.mjs'),"/src/content/posts/gear-is-insanely-expensive.md": () => import('../gear-is-insanely-expensive_783a6941.mjs'),"/src/content/posts/guitar-solos-are-still-awesome.md": () => import('../guitar-solos-are-still-awesome_d4808e6c.mjs'),"/src/content/posts/live-music-is-crucial.md": () => import('../live-music-is-crucial_7731fe60.mjs'),"/src/content/posts/making-a-home-studio.md": () => import('../making-a-home-studio_8faf72c3.mjs'),"/src/content/posts/the-art-of-music-production.md": () => import('../the-art-of-music-production_fcf29060.mjs'),"/src/content/posts/the-importance-of-audio-quality.md": () => import('../the-importance-of-audio-quality_40f90d70.mjs'),"/src/content/posts/tune-your-snare-drum.md": () => import('../tune-your-snare-drum_08398622.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntryBySlug = createGetEntryBySlug({
	getEntryImport: createGlobLookup(contentCollectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$6 = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$H1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$H1;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-6xl text-teal-900 font-bold mb-5"> ${text} </h1>`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/components/H1.astro", void 0);

const $$Astro$5 = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Category;
  const { category } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/category/${category}`, "href")} class="text-teal-900 rounded-3xl uppercase text-xl border-2 border-teal-900 whitespace-nowrap p-2"> ${category} </a>`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/components/Category.astro", void 0);

const $$Astro$4 = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$CategoryList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CategoryList;
  const { categories, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-[auto,1fr] gap-x-14 gap-y-3 mb-16 max-lg:grid-cols-1"> ${title && renderTemplate`<h2 class="font-bold text-5xl text-teal-900">${title}</h2>`} <div class="flex gap-4 flex-wrap items-center>"> ${categories.map((category) => renderTemplate`${renderComponent($$result, "Category", $$Category, { "category": category })}`)} </div> </div>`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/components/CategoryList.astro", void 0);

const $$Astro$3 = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Post;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <a${addAttribute(`/blog/${post.slug}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "src": post.data.image, "alt": post.data.title, "width": 600, "height": 600 / 2, "class": "rounded-2xl shadow-xl mb-6 aspect-thumbnail object-cover" })} </a> <a${addAttribute(`/blog/${post.slug}`, "href")} class="text-4xl text-zinc-900 mb-4 font-semibold inline-block"> <h2>${post.data.title}</h2> </a> <p class="text-zinc-500 text-2xl mb-9 line-clamp-2"> ${post.body} </p> </article>`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/components/Post.astro", void 0);

const $$Astro$2 = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$PostList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostList;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 gap-x-16 gap-y-32 max-sm:grid-cols-1 max-sm:gap-y-14"> ${posts.map((post) => renderTemplate`${renderComponent($$result, "Post", $$Post, { "post": post })}`)} </div>`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/components/PostList.astro", void 0);

const $$Astro$1 = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { page, numberOfPosts } = Astro2.props;
  const postsPerPage = 6;
  const hasPrev = page > 1;
  const hasNext = numberOfPosts > page * postsPerPage;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between"> ${hasPrev ? renderTemplate`<a${addAttribute(`/blog/${page - 1}`, "href")} class="bg-teal-900 text-white py-3 px-6 rounded-xl text-xl">
Previous
</a>` : renderTemplate`<div></div>`} ${hasNext ? renderTemplate`<a${addAttribute(`/blog/${page + 1}`, "href")} class="bg-teal-900 text-white py-3 px-6 rounded-xl text-xl">
Next
</a>` : renderTemplate`<div></div>`} </div>`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/components/Pagination.astro", void 0);

const $$Astro = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const page = Number(Astro2.params.page) || 1;
  const postsPerPage = 6;
  const start = postsPerPage * (page - 1);
  const end = start + postsPerPage;
  const allPosts = await getCollection("posts");
  const totalNumberOfPosts = allPosts.length;
  const posts = allPosts.slice(start, end);
  const allCategories = posts.flatMap((post) => post.data.categories);
  const categories = Array(new Set(allCategories));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Rhythm Nation", "description": "Read and learn from Music Producers" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Alessandro Giuzio Blog" })} ${maybeRenderHead()}<p class="text-zinc-900 text-2xl mb-24 max-sm:mb-14">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magnam!
</p> ${renderComponent($$result3, "CategoryList", $$CategoryList, { "categories": categories, "title": "Tags" })} <div class="mb-12"> ${renderComponent($$result3, "Pagination", $$Pagination, { "page": page, "numberOfPosts": totalNumberOfPosts })} </div> ${renderComponent($$result3, "PostList", $$PostList, { "posts": posts })} <div class="mb-36"> ${renderComponent($$result3, "Pagination", $$Pagination, { "page": page, "numberOfPosts": totalNumberOfPosts })} </div> ` })} ` })}`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/blog/[page].astro", void 0);

const $$file = "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/blog/[page].astro";
const $$url = "/blog/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$H1 as $, _page_ as _, $$CategoryList as a, $$Pagination as b, $$PostList as c, getEntryBySlug as d, getCollection as g };
