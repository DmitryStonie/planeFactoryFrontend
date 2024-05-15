<template>
  <HomePageHeader />
  <div class ="flex">
    <div class="basis-1/4">
      <ProductsFilter />
    </div>
    <div class="basis-1/2">
      <ProductsTable />
    </div>
    <div class="basis-1/4">
      
    </div>
  </div>
</template>

<script>
import HomePageHeader from '../../components/HomePageHeader.vue'
import ProductsTable from '../tables/ProductsTable.vue'
import ProductsFilter from '../../components/filters/ProductsFilter.vue'

export default {
  components: {
    HomePageHeader,
    ProductsTable,
    ProductsFilter
  },
  async mounted() {
    this.$store.commit('setAddP', true)
    this.$store.commit('setAddLink', '/products/new')
    this.$store.commit('setAddText', 'Add new')
    this.$store.dispatch('getProducts', {params: {
        company: this.$store.getters.FilterProps.selected.Company.ID,
        workshop: this.$store.getters.FilterProps.selected.Workshop.ID,
        area: this.$store.getters.FilterProps.selected.Area.ID,
        category: this.$store.getters.FilterProps.selected.Category,
        datefrom: this.$store.getters.FilterProps.selected.dateFrom1,
        dateto: this.$store.getters.FilterProps.selected.dateTo1,
      }})
    
  },
  unmounted() {
    this.$store.commit('cleanAddProps')
  }
}
</script>
