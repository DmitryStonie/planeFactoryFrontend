<template>
  <div class="registerForm">
    <img class="logo" src="../assets/mainLogo.png" />
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter name" />
      <input type="text" v-model="email" placeholder="Enter email" />
      <input type="text" v-model="password" placeholder="Enter password" />
      <button v-on:click="signUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods:{
    signUp(){
      console.warn("signUp",this.name, this.email,this.password)
    }
  }
}
</script>

<style>
.logo {
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.register {
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button {
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
.registerForm {
  display: block;
  margin-top: auto;
}
</style>
