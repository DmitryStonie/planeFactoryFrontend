<script lang="ts">

export default{
  name: "App"
}

</script>

<template>
<router-view />
</template>

<style>
.logo {
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
body {
  padding: 0;
  margin: 0;
}
.registerForm h1, .loginForm h1{
    text-align: center;
    margin-bottom: 30px;

}
.register p, .login p{
    margin-top: 15px;
    text-align: center;
}
.register a, .login a{
    text-decoration: none;
}
.register a:visited, .login a:visited{
  color: gray;
}

a:hover {
  color: gray;
  text-decoration: underline;
}

.register input, .login input, .add-form input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button, .login button, .add-form button {
  width: 300px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
