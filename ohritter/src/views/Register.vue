<template>
  <div class="container">
    <form class="card login-form shadow" @submit.prevent="register">
      <h2>Register</h2>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" v-model="email" />
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" v-model="password" />
        </div>
      </div>

      <router-link to="/login">Already have an account? Login</router-link>

      <hr />
      <button type="submit" class="btn btn-dark">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register(e) {
      // e.preventDefault();
      console.log("Se klikna na registracija")
    }
  }
};
</script>

<style>
.login-form {
  padding: 2rem;
  margin-top: 10rem;
}
</style>

1. Pisite email i password
2. klikate na kopceto za registracija i da se povika fukncija register
3. Validacija na formata
4. Http povik do nekoe API/Server
5. Dokolku se vrati error, treba da se prikazi
6. Dokolku se e vo red treba da go nasocime userot kon stranta za login
