/* empty css                           */import { e as createAstro, f as createComponent } from '../astro_2f22c4c4.mjs';
import 'clsx';

const $$Astro = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Logout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Logout;
  Astro2.cookies.delete("userId");
  Astro2.cookies.delete("userEmail");
  Astro2.cookies.delete("userName");
  return Astro2.redirect("/");
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/logout.astro", void 0);

const $$file = "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/logout.astro";
const $$url = "/logout";

export { $$Logout as default, $$file as file, $$url as url };
