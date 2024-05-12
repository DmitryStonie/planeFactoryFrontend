<template>
  <HomePageHeader />
  <EmployeesTable />
</template>

<script>
import HomePageHeader from '../../components/HomePageHeader.vue'
import EmployeesTable from '../tables/EmployeesTable.vue'

export default {
  components: {
    HomePageHeader,
    EmployeesTable
  },
  mounted() {
    this.$store.commit('setAddP', true)
    this.$store.commit('setAddLink', '/employees/new')
    this.$store.commit('setAddText', 'Add new')
    this.$store.dispatch('getEmployees')
  },
  unmounted() {
    this.$store.commit('cleanAddProps')
  }
}
</script>
