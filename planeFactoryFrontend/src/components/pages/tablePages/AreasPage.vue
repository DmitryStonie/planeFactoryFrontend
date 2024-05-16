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
  methods: {
    getBoss(id) {
      const found = this.$store.getters.foremen.find((element) => element.ID == id)
      if (found) {
        return found.Name
      }
      return ''
    }
  },
  mounted() {
    this.$store.commit('setAddP', true)
    this.$store.commit('setAddLink', '/areas/new')
    this.$store.commit('setAddText', 'Add new')
    this.$store.commit('cleanBrigades')
    this.$store.dispatch('getAreas')
  },
  unmounted() {
    this.$store.commit('cleanAddProps')
  },
}
</script>
