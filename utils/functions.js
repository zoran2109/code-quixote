import * as R from "ramda";

export const getDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export const sortPostsByDate = (posts) => {
  const descending = (a, b) =>
    new Date(b.frontMatter.publishedAt) - new Date(a.frontMatter.publishedAt);

  return R.sort(descending, posts);
};
