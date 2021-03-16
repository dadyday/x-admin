<template>
  <div>
    <b-form>
    <b-overlay :show="enabled">
    <b-card :title="label" :aria-hidden="visible ? 'true' : null">
      <slot />
    </b-card>
    </b-overlay>
    </b-form>
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

<style scoped lang="scss">
</style>
