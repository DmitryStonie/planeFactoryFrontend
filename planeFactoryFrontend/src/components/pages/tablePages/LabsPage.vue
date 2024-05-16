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
    this.$store.commit('cleanProducts')
    this.$store.commit('cleanEmployees')
    this.$store.commit('cleanLabEquipment')
    this.$store.dispatch('getLabs')
  },
  unmounted() {
    this.$store.commit('cleanAddProps')
  }
}
</script>
