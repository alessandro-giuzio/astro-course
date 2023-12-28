/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent } from '../astro_4241d5aa.mjs';
import 'clsx';
import { a as $$CategoryList, g as getCollection, $ as $$H1, c as $$PostList } from './_page__a2cd2870.mjs';
import { $ as $$Image, a as $$Main, b as $$Layout } from './404_e82d43db.mjs';

const $$Astro$1 = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$FeaturedPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturedPost;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="grid grid-cols-2 gap-x-12 gap-y-5 mb-28 max-lg:grid-cols-1 max-sm:mb-12"> <a${addAttribute(`/blog/${post.slug}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-2xl aspect-thumbnail object-cover", "src": post.data.image, "alt": post.data.title, "width": 1024, "height": 1024 / 2 })} </a> <div> <div class="mb-4"> ${renderComponent($$result, "CategoryList", $$CategoryList, { "categories": post.data.categories })} </div> <a${addAttribute(`/blog/${post.slug}`, "href")} class="text-5xl text-zinc-900 mb-4 font-bold inline-block"> <h2>${post.data.title}</h2> </a> <p class="text-zinc-500 text-2xl mb-9 line-clamp-3 max-xl:line-clamp-2"> ${post.body} </p> <span class="text-zinc-700 text-xl">${post.data.date}</span> </div> </article>`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/components/FeaturedPost.astro", void 0);

const $$Astro = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getCollection("posts");
  const featuredPosts = allPosts.filter((post) => post.data.featured);
  const posts = allPosts.filter((post) => !post.data.featured).slice(0, 4);
  const allCategories = posts.flatMap((post) => post.data.categories);
  const categories = Array.from(new Set(allCategories));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Alessandro Blog" })} ${maybeRenderHead()}<p class="text-zinc-900 font-2xl mb-24 max-sm:mb-14">
Lorem ipsum dolor sit amet, consectetur adipisicing.
</p> ${featuredPosts.map((post) => renderTemplate`${renderComponent($$result3, "FeaturedPost", $$FeaturedPost, { "post": post })}`)}<hr class="w-full border border-teal-900 mb-16 max-sm:mb-10"> ${renderComponent($$result3, "CategoryList", $$CategoryList, { "categories": categories, "title": "Recent Posts" })} <div class="mb-32"> ${renderComponent($$result3, "PostList", $$PostList, { "posts": posts })} </div> <div class="flex justify-end mb-60 max-sm:mb-36"> <a href="/blog" class="bg-teal-900 text-white py-3 px-6 rounded-xl text-xl">Read more</a> </div> ` })} ` })}`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/index.astro", void 0);

const $$file = "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
