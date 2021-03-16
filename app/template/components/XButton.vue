<template>
  <b-button
    :id="id"
    :name="name"
    variant="primary"
  >
    {{ label }}
  </b-button>
</template>

<script>
export default {
  props: {
    name: String,
    label: String,
    hint: String,
    value: String,
    enabled: Boolean,
    disabled: Boolean,
    visible: Boolean,
    hidden: Boolean,
    default: Boolean,
  },
  computed: {
    id() {
      return this.$id;
    },
    variant() {
      return this.default ? 'primary' : 'secondary';
    }
  }
}
</script>

<style scoped lang="scss">
</style>
