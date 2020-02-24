<template lang="pug">
  .wrapper
    the-header
    nuxt
    the-footer
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="sass">

@import 'highlight.js/styles/agate.css'

body
  @apply text-black

.wrapper
  @apply tw-mx-auto tw-pb-3
  width: 700px

a
  &:hover
    @apply tw-underline
</style>
