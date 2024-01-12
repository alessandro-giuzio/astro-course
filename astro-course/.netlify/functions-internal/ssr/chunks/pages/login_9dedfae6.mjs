/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../astro_2f22c4c4.mjs';
import 'clsx';
import { X as XataClient, $ as $$H1 } from './_slug__64b95884.mjs';
import { a as $$Main, b as $$Layout } from './404_8f375044.mjs';
import bcrypt from 'bcryptjs';

const $$Astro = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const errors = {};
  if (Astro2.request.method === "POST") {
    const xata = new XataClient({
      apiKey: "xau_2hW6MppMcJZhfsUE0L0CvVYihSryR41h0",
      branch: "main"
    });
    const data = await Astro2.request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const user = await xata.db.users.filter({ email }).getFirst();
    if (!user) {
      errors.email = "Incorrect username";
    } else {
      const authenticated = bcrypt.compareSync(password, user.password);
      if (!authenticated) {
        errors.password = "Incorrect password";
      } else {
        Astro2.cookies.set("userId", user.id, {
          httpOnly: true,
          secure: true
        });
        Astro2.cookies.set("userName", user.name, {
          httpOnly: true,
          secure: true
        });
        Astro2.cookies.set("userEmail", user.email, {
          httpOnly: true,
          secure: true
        });
        const redirect = Astro2.url.searchParams.get("redirect") ?? "/";
        return Astro2.redirect(redirect, 302);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Log In" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Log In" })} ${maybeRenderHead()}<form method="POST"> <label for="email" class="mb-2 block text-teal-900"> Email address</label> <input class="border-teal-900 border w-full mb-2 rounded-lg px-6 py-3" type="email" name="email" id="email"> <!-- <p class='text-red-800 mb-10 h-10'>{errors.email}</p> --> <p class="text-red-800 mb-10 select-none">${unescapeHTML(errors.email ?? "&nbsp;")}</p> <label for="password" class="mb-2 block text-teal-900"> Password</label> <input class="border-teal-900 border w-full mb-2 rounded-lg px-6 py-3" type="password" name="password" id="password"> <p class="text-red-800 mb-10 select-none">${unescapeHTML(errors.password ?? "&nbsp;")}</p> <!-- <p class='text-red-800 mb-10 h-10'>{errors.password}</p> --> <button type="submit" class="text-white text-2xl bg-teal-900 w-full rounded-lg px-6 py-3 mb-11">
Log In
</button> </form> <p class="text-zinc-500 text-lg text-center">
Don't have an account? <a href="/signup" class="text-teal-900 underline">Sign Up</a> </p> ` })} ` })}`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/login.astro", void 0);

const $$file = "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
