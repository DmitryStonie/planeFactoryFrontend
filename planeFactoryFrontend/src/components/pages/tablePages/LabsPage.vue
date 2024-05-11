<template>
  <HomePageHeader />
  <LabsTable />
</template>

<script>
import HomePageHeader from '../../components/HomePageHeader.vue'
import LabsTable from '../tables/LabsTable.vue'

export default {
  components: {
    HomePageHeader,
    LabsTable
  },
  mounted() {
    this.$store.commit('setAddP', true)
    this.$store.commit('setAddLink', '/labs/new')
    this.$store.commit('setAddText', 'Add new')
  },
  unmounted() {
    this.$store.commit('cleanAddProps')
  }
}
</script>
