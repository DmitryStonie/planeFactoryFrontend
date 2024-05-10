<template>
  <HomePageHeader />
  <!-- <CardList />
  <div>
    <h2 class="text-3xl font-bold mb-8">Все компании</h2>
    <CardList :items="items" />
  </div> -->
  <!-- <TableComp /> -->
</template>
<script setup>
import HomePageHeader from '../../components/HomePageHeader.vue'
// import CardList from '../components/CardList.vue'
import TableComp from '../../components/TableComp.vue'

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
