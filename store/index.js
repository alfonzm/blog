export const state = () => ({
  blogPosts: [],
});

export const mutations = {
  SET_BLOG_POSTS(state, list) {
    state.blogPosts = list;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let filenames = await require.context('~/assets/content/md/', false, /\.md$/);

    const blogPosts = await Promise.all(filenames.keys().map(async filePath => {
      const fileName = filePath.slice(2)
      const blogPost = await require(`~/assets/content/md/${fileName}`)

      const slug = fileName.slice(0, -1 * '.md'.length)
      blogPost.slug = slug
      return blogPost
    }))

    commit('SET_BLOG_POSTS', blogPosts)

    // // for headless cms
    // let files = await require.context('~/assets/content/blog/', false, /\.json$/);
    // let blogPosts = files.keys().map(key => {
    //   let res = files(key);
    //   res.slug = key.slice(2, -5);
    //   return res;
    // });
    // await commit('setBlogPosts', blogPosts);
  },
};
