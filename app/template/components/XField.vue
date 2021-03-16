<template>
  <div class="col">
    <slot />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.col {
  padding: 0.5em;
  justify-content: flex-end;
  label {
    margin-bottom: 0;
  }
}
</style>
