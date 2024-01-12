/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_2f22c4c4.mjs';
import 'clsx';
import bcrypt from 'bcryptjs';
import { X as XataClient, $ as $$H1 } from './_slug__64b95884.mjs';
import { a as $$Main, b as $$Layout } from './404_8f375044.mjs';

const $$Astro = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  const xata = new XataClient({
    apiKey: "xau_2hW6MppMcJZhfsUE0L0CvVYihSryR41h0",
    branch: "main"
  });
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = await xata.db.users.create({
      name,
      email,
      password: hash
    });
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
    return Astro2.redirect("/", 302);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign up" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Sign Up" })} ${maybeRenderHead()}<form method="POST"> <label for="name" class="mb-2 block text-teal-900"> Full name</label> <input class="border-teal-900 border w-full mb-10 rounded-lg px-6 py-3" type="text" name="name" id="name"> <label for="email" class="mb-2 block text-teal-900"> Email address</label> <input class="border-teal-900 border w-full mb-10 rounded-lg px-6 py-3" type="email" name="email" id="email"> <label for="password" class="mb-2 block text-teal-900"> Password</label> <input class="border-teal-900 border w-full mb-16 rounded-lg px-6 py-3" type="password" name="password" id="password"> <button type="submit" class="text-white text-2xl bg-teal-900 w-full rounded-lg px-6 py-3 mb-11">
Sign up
</button> </form> <p class="text-zinc-500 text-lg text-center">
Already have an account? <a href="/login" class="text-teal-900 underline">Login</a> </p> ` })} ` })}`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/signup.astro", void 0);

const $$file = "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/signup.astro";
const $$url = "/signup";

export { $$Signup as default, $$file as file, $$url as url };
