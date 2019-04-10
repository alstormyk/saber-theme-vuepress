exports.onCreatePages = function () {
  // Sort posts by createdAt (date) from new to old
  const posts = [...this.pages.values()]
    .filter(page => page.attributes.type === 'post' && !page.attributes.draft)
    .sort((a, b) => {
      return a.attributes.createdAt > b.attributes.createdAt ? 1 : -1
    })
  for (const [index, post] of posts.entries()) {
    // It's NOT recommended to mutate `page` directly to add addtional props
    // Use `extendPageProp` instead to add more properties to the `page` prop on your layout page
    this.pages.extendPageProp(post.internal.id, {
      // Some properties on `page` are not supposed to be accessible at runtime
      // Use `getPagePublicFields` to return public fields of the page only
      prevPost: this.pages.getPagePublicFields(posts[index - 1]),
      nextPost: this.pages.getPagePublicFields(posts[index + 1])
    })
  }
}