<template>
  <HomePageHeader />
  <h1>Update company page</h1>
</template>
<script>
import HomePageHeader from './HomePageHeader.vue'
export default {
  name: 'UpdateCompanyPage',
  components:{
    HomePageHeader
  },
  mounted()
  {
    let user = localStorage.getItem('user-info')
    if(!user){
      this.$router.push({name:'SignUp'});
    }
  }
}
</script>
<style></style>
