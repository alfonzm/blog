<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-html="body" />
    <nuxt-link to='/blog/halo'>halo</nuxt-link>
    <nuxt-link to='/blog/testo'>testo</nuxt-link>
  </div>
</template>

<script>

export default {
  async asyncData({ params, payload }) {
    const { attributes, html, vue } = await require(`~/assets/content/md/${params.slug}.md`)

    return {
      title: attributes.title,
      body: html,
    }

    // // for Netlify CMS
    // const blogPost = require(`~/assets/content/blog/${params.slug}.json`)
    // title = blogPost.title
    // body = blogPost.body
  },
}
</script>
