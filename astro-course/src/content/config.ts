// 1. Import utilities from `astro:content`
import {z, defineCollection } from 'astro:content';
import { format } from 'date-fns';
// 2. Define your collection(s)
const postsCollection = defineCollection({
    schema:({ image }) => z.object({
        author: z.string(),
        categories: z.array(z.string()),
        date: z.string().transform(str => format(new Date(str), 'MMMM dd, yyyy')),
        featured: z.boolean().default(false),
        image: image(),
        title: z.string(),
        description: z.string(),

    })
});

const authorsCollection = defineCollection({
    schema: z.object({
        name: z.string(),
        image: z.string(),
    })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'posts': postsCollection,
    'authors': authorsCollection,
};