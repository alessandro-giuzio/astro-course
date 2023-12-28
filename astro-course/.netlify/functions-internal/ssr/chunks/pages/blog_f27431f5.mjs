/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_4241d5aa.mjs';
import 'clsx';
import { a as $$Main, b as $$Layout } from './404_9e3a4bb2.mjs';
import { g as getCollection, $ as $$H1, a as $$CategoryList, b as $$Pagination, c as $$PostList } from './_slug__a47a1fe0.mjs';

const $$Astro = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const page = Number(Astro2.url.searchParams.get("page")) || 1;
  const postsPerPage = Number("6");
  const start = postsPerPage * (page - 1);
  const end = start + postsPerPage;
  const allPosts = await getCollection("posts");
  const posts = allPosts.slice(start, end);
  const allCategories = posts.flatMap((post) => post.data.categories);
  const categories = Array.from(new Set(allCategories));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Rhythm Nation", "description": "Read and learn from Music Producers" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Alessandro Giuzio Blog" })} ${maybeRenderHead()}<p class="text-zinc-900 text-2xl mb-24 max-sm:mb-14">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magnam!
</p> ${renderComponent($$result3, "CategoryList", $$CategoryList, { "categories": categories, "title": "Tags" })} <div class="mb-12"> ${renderComponent($$result3, "Pagination", $$Pagination, { "page": page, "numberOfPosts": allPosts.length })} </div> ${renderComponent($$result3, "PostList", $$PostList, { "posts": posts })} <div class="mb-36"> ${renderComponent($$result3, "Pagination", $$Pagination, { "page": page, "numberOfPosts": allPosts.length })} </div> ` })} ` })}`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/blog.astro", void 0);

const $$file = "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
