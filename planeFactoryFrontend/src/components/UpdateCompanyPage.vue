<template>
  <HomePageHeader />
  <h1>Update company page</h1>
  <form @submit.prevent="" class="add-form">
    <input type="text" name="name" placeholder="Enter name" v-model="company.name" />
    <input type="text" name="address" placeholder="Enter address" v-model="company.address" />
    <input type="text" name="contact" placeholder="Enter contact" v-model="company.contact" />
    <button v-on:click="updateCompany">Update company</button>
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
    async updateCompany() {
      const result = await axios.put('http://localhost:3000/companies/' + this.$route.params.id, {
        name: this.company.name,
        address: this.company.address,
        contact: this.company.contact
      })
      if (result.status == 200) {
        this.$router.push({ name: 'HomePage' })
      }
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
    console.warn(this.$route.params.id)
    const result = await axios.get('http://localhost:3000/companies/' + this.$route.params.id)
    console.warn(result)
    if (result.status == 200) {
      this.company = result.data
    }
  }
}
</script>
<style></style>
