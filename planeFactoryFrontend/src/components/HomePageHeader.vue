<template>
  <div class="nav">
    <router-link  to="/">Home</router-link>
    <router-link  to="/add-company">add company</router-link>
    <router-link  to="/update-company">update company</router-link>
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>
<script>
export default {
  name: 'HomePageHeader',
  methods: {
    logout() {
        localStorage.clear();
        this.$router.push({name:'LogIn'})
    }
  }
}
</script>
<style>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2f2;
  padding: 14px 14px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}
.nav a:hover {
  background: #ddd;
  color: #333;
}
</style>
