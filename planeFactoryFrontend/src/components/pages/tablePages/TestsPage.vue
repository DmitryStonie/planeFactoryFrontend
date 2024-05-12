<template>
  <HomePageHeader />
  <TestsTable />
</template>

<script>
import HomePageHeader from '../../components/HomePageHeader.vue'
import TestsTable from '../tables/TestsTable.vue'

export default {
  components: {
    HomePageHeader,
    TestsTable
  },
  mounted() {
    this.$store.commit('setAddP', true)
    this.$store.commit('setAddLink', '/tests/new')
    this.$store.commit('setAddText', 'Add new')
    this.$store.dispatch('getTests')
  },
  unmounted() {
    this.$store.commit('cleanAddProps')
  }
}
</script>
