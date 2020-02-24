<template lang="pug">
  header
    nav
      .tw-mr-6.tw-flex-grow
        nuxt-link.tw-text-3xl(to="/") alphonsus
      .tw-flex
        .tw-mr-6
          nuxt-link(to="/") about
        .tw-mr-6
          nuxt-link(to="/") blog
        .tw-mr-6
          nuxt-link(to="/") projects
</template>

<style lang="sass">
nav
  @apply tw-py-3 tw-flex tw-items-center tw-justify-between
</style>
