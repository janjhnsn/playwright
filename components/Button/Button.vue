<template>
  <button
    type="button"
    :name="attributes?.name"
    @click="options?.onClick"
  >
    {{ content?.value }}
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