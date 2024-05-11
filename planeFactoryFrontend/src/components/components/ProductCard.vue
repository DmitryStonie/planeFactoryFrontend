<script>
export default{
  data(){
    return{
      img: String,
      name: String,
      id: Number
    }
  }
}

</script>
<template>
  <div
    class="relative flex flex-col w-full border border-slate-100 rounded-xl p-8 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2"
  >
    <img @click="onClickProd" :src="img" class="w-full" />
    <h1>{{ title }}</h1>
  </div>
</template>

<ProductCard v-for="item in $store.getters.companiesPageProps" :key="item.id" :="item.title" :img="item.img" />
