<script>
</script>

<template>
  <div class="grid grid-cols-3 gap-5 ml-8 mr-8">
    <div
      @click="this.$router.push('/companies/' + item.id)"
      v-for="item in $store.getters.companiesPageProps"
      :key="item.id"
      class="relative flex flex-col w-full border border-slate-100 rounded-xl p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2"
    >
      <img :src="item.img" class="w-full" />
      <h1 class="font-semibold">{{ item.title }}</h1>
    </div>
  </div>
</template>
