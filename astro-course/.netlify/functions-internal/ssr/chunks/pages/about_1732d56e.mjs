/* empty css                           */import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_2f22c4c4.mjs';
import 'clsx';

const html = "";

				const frontmatter = {};
				const file = "/Users/alessandro-giuzio/Documents/Ale/GitHub-Repo/astro-course/astro-course/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
