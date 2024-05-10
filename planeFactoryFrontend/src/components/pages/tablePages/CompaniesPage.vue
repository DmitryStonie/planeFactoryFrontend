<template>
  <HomePageHeader />
  <h1>HELLO!</h1>
  <!-- <CardList />
  <div>
    <h2 class="text-3xl font-bold mb-8">Все компании</h2>
    <CardList :items="items" />
  </div> -->
  <!-- <TableComp /> -->
</template>
<script>
import HomePageHeader from '../../components/HomePageHeader.vue'
// import CardList from '../components/CardList.vue'
import TableComp from '../../components/TableComp.vue'

export default {
  components: {
    HomePageHeader 
  },
  mounted() {
    this.$store.commit('setAddP', true)
    this.$store.commit('setAddLink', '/companies/new')
    this.$store.commit('setAddText', 'Add new')
  },
  unmounted() {
    this.$store.commit('cleanAddProps')
  }
}

const items = [
  {
    id: 1,
    title: 'Новосибирское авиационное производственное объединение им. В. П. Чкалова',
    img: '/src/assets/chkalov.png'
  }
]

</script>
<style>
td {
  width: 160px;
  height: 40px;
}
</style>
