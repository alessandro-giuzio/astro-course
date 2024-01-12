import '@astrojs/internal-helpers/path';
/* empty css                           */import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_2f22c4c4.mjs';
import 'clsx';
/* empty css                            */import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_5547b408.mjs';
import { source } from '@cloudinary/url-gen/actions/overlay';
import { Cloudinary } from '@cloudinary/url-gen/index';
import { text } from '@cloudinary/url-gen/qualifiers/source';
import { TextStyle } from '@cloudinary/url-gen/qualifiers/textStyle';

const $$Astro$6 = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/node_modules/astro/components/Image.astro", void 0);

const $$Astro$5 = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const heartbeat = new Proxy({"src":"/_astro/heartbeat.913af530.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const userEmail = Astro2.cookies.get("userEmail");
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between items-center w-full mx-auto px-24 py-12 max-sm:px-5 max-sm:py-10 max-w-7xl"> <a href="/" class="flex items-center gap-x-4"> ${renderComponent($$result, "Image", $$Image, { "src": heartbeat, "class": "w-16", "alt": "Logo", "width": 64, "height": 64 })} <p class="uppercase text-3xl text-zinc-900">Blog</p> </a> ${userEmail?.value ? renderTemplate`<a href="/logout" class="bg-teal-900 text-white py-3 px-6 rounded-xl text-xl">
Log Out
</a>` : renderTemplate`<a href="/login" class="bg-teal-900 text-white py-3 px-6 rounded-xl text-xl">
Log In
</a>`} </header>`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-green-950 text-center py-20 pb-6 px-5 max-sm:pb-3 max-sm:pt-8"> <p class="text-zinc-300">Copyright 2023 Alessandro Giuzio</p> </footer>`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/components/Footer.astro", void 0);

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "alessandro-giuzio"
  },
  url: {
    secure: true
  }
});
const getThumbnail = (title) => {
  const thumbnail = cloudinary.image("astro-course-template").overlay(
    source(text(title, new TextStyle("Cabin", 64).fontWeight("bold")))
  );
  return thumbnail.toURL();
};

const $$Astro$2 = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Alessandro Blog",
    description = "Blog di Alessandro",
    image = getThumbnail("Alessandro Blog")
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:image:alt"${addAttribute(description, "content")}><!-- Open Graph Twitter --><meta property="twitter:card" content="summary_large_image"><meta propertry="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><meta property="twitter:image:alt"${addAttribute(title, "content")}>${renderHead()}</head> <body class="grid grid-rows-[auto,1fr,auto]"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${maybeRenderHead()}<main class="px-24 max-sm:px-5 max-w-7xl mx-auto w-full"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/components/Main.astro", void 0);

const $$Astro = createAstro("https://zippy-semifreddo-79078c.netlify.app");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Not found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="text-center pt-12 text-2xl">
Not sure what you're looking, but it's not here
</p> ` })} ` })}`;
}, "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/404.astro", void 0);

const $$file = "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, _404 as _, $$Main as a, $$Layout as b, getThumbnail as c, getImage as g, imageConfig as i };
