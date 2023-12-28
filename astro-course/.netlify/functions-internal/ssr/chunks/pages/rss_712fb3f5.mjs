import rss from '@astrojs/rss';
import { g as getCollection } from './_page__a2cd2870.mjs';
import MarkdownIt from 'markdown-it';
import sanitizaHtml from 'sanitize-html';

const parser = new MarkdownIt();
async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "Rhytm Nation",
    description: "A community of music producers.",
    site: context.site?.toString() ?? "",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      content: sanitizaHtml(parser.render(post.body)),
      image: post.data.image
    }))
  });
}

export { GET };
