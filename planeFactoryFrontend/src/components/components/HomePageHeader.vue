<template>
  <div class="nav">
    <router-link  to="/products">Products</router-link>
    <router-link  to="/companies">Companies</router-link>
    <router-link  to="/workshops">Workshops</router-link>
    <router-link  to="/areas">Areas</router-link>
    <router-link  to="/labs">Labs</router-link>
    <router-link  to="/employees">Employees</router-link>
    <router-link  to="/brigades">Brigades</router-link>
    <router-link  to="/tests">Tests</router-link>
  </div>
</template>
<script>
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
