<template>
  <HomePageHeader />
  <AreasTable />
</template>

<script>
import HomePageHeader from '../../components/HomePageHeader.vue'
import AreasTable from '../tables/AreasTable.vue'

export default {
  components: {
    HomePageHeader,
    AreasTable
  },
  mounted() {
    this.$store.commit('setAddP', true)
    this.$store.commit('setAddLink', '/areas/new')
    this.$store.commit('setAddText', 'Add new')
  },
  unmounted() {
    this.$store.commit('cleanAddProps')
  },
}
</script>
