<template>
  <HomePageHeader />
  <WorkshopsTable />
</template>

<script>
import HomePageHeader from '../../components/HomePageHeader.vue'
import WorkshopsTable from '../tables/WorkshopsTable.vue'

export default {
  components: {
    HomePageHeader,
    WorkshopsTable
  },
  mounted() {
    this.$store.commit('setAddP', true)
    this.$store.commit('setAddLink', '/workshops/new')
    this.$store.commit('setAddText', 'Add new')
    this.$store.dispatch('getWorkshops')
  },
  unmounted() {
    this.$store.commit('cleanAddProps')
  },
  methods: {
    getBoss(id) {
      const found = this.$store.getters.bosses.find((element) => element.ID == id)
      if (found) {
        return found.Name
      }
      return ''
    }
  }
}
</script>
