<template>
  <div role="group">
    <label :for="id">{{ label }}</label>
    <b-form-select
      :id="id"
      :name="name"
      :type="type"
      :value="value"
      :placeholder="hint"
    >
      <slot />
    </b-form-select>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    label: String,
    hint: String,
    value: String,
    type: String,
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
