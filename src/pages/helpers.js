const alwaysCapitalize = "ai md id tv".split(" ");
const neverCapitalize = "and or of in the".split(" ");

export function normalizePost(post) {
  const filename = post.id;

  const fallbackTitle = filename
    .split("-")
    .map(word => {
      if (alwaysCapitalize.includes(word)) {
        return word.toUpperCase();
      }
      if (neverCapitalize.includes(word)) {
        return word;
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  return {
    ...post,
    data: {
      ...post.data,
      title: post.data.title || fallbackTitle,
    },
  };
}
