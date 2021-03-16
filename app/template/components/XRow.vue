<template>
  <div class="row">
    <wrap each="xField">
      <slot />
    </wrap>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    enabled: Boolean,
    visible: Boolean,
  }
}
</script>

<style lang="scss">
.row {
  padding: 0.1rem;
  align-items: flex-end;
}
</style>
