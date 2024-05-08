<script setup>

defineProps({
  title: String,
  img: String,
  onClickProd: Function, 
});

</script>
<template>
  <div
    class="relative flex flex-col w-full border border-slate-100 rounded-xl p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2"
  >
    <img @click="onClickProd" :src="img" class="w-full" />
    <p>{{ title }}</p>
  </div>
</template>