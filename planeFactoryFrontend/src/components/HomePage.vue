<template>
  <HomePageHeader />
  <h1>hello {{ name }}</h1>
  <table border="1">
    <tr>
      <td>Name</td>
      <td>Id</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in companies" :key="item.id">
      <td>{{ item.name }}</td>
      <td>{{ item.id }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/update-company/' + item.id">Update</router-link>
        <button v-on:click="deleteCompany(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>
<script>
import HomePageHeader from './HomePageHeader.vue'
import axios from 'axios'
export default {
  name: 'HomePage',
  components: {
    HomePageHeader
  },
  methods: {
    async deleteCompany(id) {
      let result = await axios.delete('http://localhost:3000/companies/' + id)
      if (result.status == 200) {
        this.loadData()
      }
    },
    async loadData() {
      let user = localStorage.getItem('user-info')
      this.name = JSON.parse(user).name

      if (!user) {
        this.$router.push({ name: 'SignUp' })
      }

      let result = await axios.get('http://localhost:3000/companies')
      this.companies = result.data
    }
  },
  data() {
    return {
      name: '',
      companies: []
    }
  },
  async mounted() {
    this.loadData()
  }
}
</script>
<style>
td {
  width: 160px;
  height: 40px;
}
</style>
