<template lang="pug">
  section.posts
    //- h1.tw-text-2xl Blog
    ul
      li.posts__item(v-for="post in posts")
        span.posts__date {{ prettifyDate(post.attributes.date) }}
        nuxt-link.posts__title(:to="`/blog/${post.slug}`") {{ post.attributes.title }}
</template>

<script>
import moment from 'moment'
export default {
  computed: {
    posts () {
      return this.$store.getters.blogPosts
    }
  },
  methods: {
    prettifyDate(date) {
      return moment(date).format('MMM DD, YYYY')
    },
  }
}
</script>

<style lang="sass">
.posts
  @apply tw-mt-24

  &__item
    @apply tw-flex tw-text-lg tw-leading-8

  &__date
    min-width: 130px
    @apply tw-text-gray-400 tw-mr-5

  &__title
    @apply tw-leading-snug tw-mb-2

</style>
