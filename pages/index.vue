<template>
  <section>
    <h1>
      Blog
    </h1>
    <pre>
      {{ posts }}
    </pre>
    <div v-for="post in posts">
      <nuxt-link :to="`/blog/${post.slug}`">{{ post.attributes.title }}</nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {
    computed: {
      posts () {
        return this.$store.state.blogPosts
      }
    }
  }
</script>
