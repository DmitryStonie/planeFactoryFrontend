<template>
  <HomePageHeader />
  <ProductsTable />
</template>

<script>
import HomePageHeader from '../../components/HomePageHeader.vue'
import ProductsTable from '../tables/ProductsTable.vue'

export default {
  components: {
    HomePageHeader,
    ProductsTable
  },
  async mounted() {
    this.$store.commit('setAddP', true)
    this.$store.commit('setAddLink', '/products/new')
    this.$store.commit('setAddText', 'Add new')
    
  },
  unmounted() {
    this.$store.commit('cleanAddProps')
  }
}
</script>
