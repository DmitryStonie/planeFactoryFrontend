<template>
    <HomePageHeader />
    <h1>Hello</h1>
</template>

<script>
import HomePageHeader from '../../components/HomePageHeader.vue'

export default {
  components: {
    HomePageHeader 
  },
  mounted() {
    this.$store.commit('setAddP', true)
    this.$store.commit('setAddLink', "/equipment/new")
    this.$store.commit('setAddText', "Add new")
  },
  unmounted(){
    this.$store.commit('cleanAddProps')
  }
}
</script>