<template>
  <HomePageHeader />
  <h1>Add company page</h1>
  <form @submit.prevent="" class="add-form">
    <input type="text" name="name" placeholder="Enter name" v-model="company.name" />
    <input type="text" name="address" placeholder="Enter address" v-model="company.address" />
    <input type="text" name="contact" placeholder="Enter contact" v-model="company.contact" />
    <button v-on:click="addCompany">Add new company</button>
  </form>
</template>
<script>
import axios from 'axios'
import HomePageHeader from './components/HomePageHeader.vue'
export default {
  name: 'AddCompanyPage',
  components: {
    HomePageHeader
  },
  data() {
    return {
      company: {
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  methods: {
    async addCompany() {
      const result = await axios.post('http://localhost:3000/companies', {
        name: this.company.name,
        address: this.company.address,
        contact: this.company.contact
      })
      if (result.status == 201) {
        this.$router.push({ name: 'HomePage' })
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
  }
}
</script>
<style></style>
