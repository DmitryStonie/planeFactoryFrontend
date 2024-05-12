<template>
  <HomePageHeader />
  <h2 class=" text-3xl font-bold mb-8 mt-4 text-center">Все компании</h2>
  <CardList />
</template>
<script>
import HomePageHeader from '../../components/HomePageHeader.vue'
import CardList from '../../components/CardList.vue'

export default {
  components: {
    HomePageHeader,
    CardList
  },
  mounted() {
    this.$store.commit('setAddP', true)
    this.$store.commit('setAddLink', '/companies/new')
    this.$store.commit('setAddText', 'Add new')
    this.$store.dispatch('getCompanies')
  },
  unmounted() {
    this.$store.commit('cleanAddProps')
  },
}
</script>
<style>
</style>
