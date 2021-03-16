<template>
  <option :value="value">{{ label }}</option>
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
</style>
