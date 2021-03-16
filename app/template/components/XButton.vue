<template>
  <b-button
    :id="id"
    :name="name"
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
    visible: Boolean,
  },
  computed: {
    id() {
      return this.$id;
    }
  }
}
</script>

<style scoped lang="scss">
</style>
