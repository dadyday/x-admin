<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-nav>
      <b-navbar-brand href="#">{{ label }}</b-navbar-brand>
      <wrap each="b-nav-item">
        <slot />
      </wrap>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'XNav',
  props: {
    label: String
  },
}
</script>

<style lang="scss">
@import '@/app.scss';

.nav-item {
  a {
    color: inherit;
    &.router-link-exact-active {
    }
  }
}
</style>


