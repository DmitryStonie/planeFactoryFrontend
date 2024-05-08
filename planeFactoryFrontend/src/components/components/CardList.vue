<script>
import ProductCard from './ProductCard.vue'

defineProps({
  items: Array
})
</script>

<template>
  <div class="grid grid-cols-3 gap-5 ml-8 mr-8">
    <ProductCard v-for="item in items" :key="item.id" :title="item.title" :img="item.img" :click="item.click" />
  </div>
</template>
