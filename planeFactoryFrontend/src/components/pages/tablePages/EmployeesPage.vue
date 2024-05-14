<template>
  <HomePageHeader />
  <div class ="flex">
    <div class="basis-1/4">
      <EmployeesFilter />
    </div>
    <div class="basis-1/2">
      <EmployeesTable />
    </div>
    <div class="basis-1/4">

    </div>
  </div>
</template>

<script>
import HomePageHeader from '../../components/HomePageHeader.vue'
import EmployeesTable from '../tables/EmployeesTable.vue'
import EmployeesFilter from '../../components/filters/EmployeesFilter.vue'


export default {
  components: {
    HomePageHeader,
    EmployeesTable,
    EmployeesFilter
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
