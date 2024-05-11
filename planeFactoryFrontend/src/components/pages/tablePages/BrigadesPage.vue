<template>
    <HomePageHeader />
    <BrigadesTable />
</template>

<script>
import HomePageHeader from '../../components/HomePageHeader.vue'
import BrigadesTable from '../tables/BrigadesTable.vue'

export default {
  components: {
    HomePageHeader,
    BrigadesTable 
  },
  mounted() {
    this.$store.commit('setAddP', true)
    this.$store.commit('setAddLink', "/brigades/new")
    this.$store.commit('setAddText', "Add new")
  },
  unmounted(){
    this.$store.commit('cleanAddProps')
  }
}
</script>