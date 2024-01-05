<template>
  <button
    type="button"
    :name="attributes?.name"
    @click="options?.onClick"
  >
    <span>
      {{ content?.value }}
    </span>
  </button>
</template>

<script setup>
  defineProps({
    content: {
      type: Object,
      default: undefined,
    },
    options: {
      type: Object,
      default: undefined,
    },
    attributes: {
      type: Object,
      default: undefined,
    },
  })
</script>

<style scoped>
button:has(span) {
  background-color: #f00;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>