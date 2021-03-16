<template>
  <div role="group">
    <label :for="id">{{ label }}</label>
    <b-form-input
      :id="id"
      :name="name"
      :type="type"
      :value="value"
      :placeholder="hint"
      :list="id+'-list'"
    />
    <datalist :id="id+'-list'">
      <slot />
    </datalist>
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
      return ''+this._uid;
    }
  }
}
</script>

<style scoped lang="scss">
</style>
