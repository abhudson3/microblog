import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),

      image: z.object({
        url: z.string(),
        alt: z.string()
      }),

      tags: z.array(z.string())
    })
 });

 const projectsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tools: z.array(z.string()),
    siteUrl : z.string().optional(),

    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string())
  })
});
 
const thoughtsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
  })
})

const uhCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),

  })
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
  uhCollection: uhCollection,
  thoughtsCollection: thoughtsCollection
};