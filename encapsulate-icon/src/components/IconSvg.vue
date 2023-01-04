<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
})

const iconName = computed(() => `#icon-${props.iconClass}`)
</script>

<style scoped>
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
