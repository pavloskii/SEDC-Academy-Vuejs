<template>
  <div class="container">
    <form class="card login-form shadow" @submit.prevent="register" novalidate>
      <h2>Register</h2>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" v-model="email" />
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

      <div
        v-if="errors.length > 0"
        class="alert alert-danger mt-3"
        role="alert"
      >
        <p v-for="(err, i) in errors" :key="i">{{ err }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    register() {
      // e.preventDefault();
      this.errors = [];
      const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

      if (this.email === "") {
        this.errors.push("Email is required");
      } else if (!emailRegex.test(this.email)) {
        this.errors.push("Email is not valid");
      }

      if (this.password === "") {
        this.errors.push("Password is required");
      } else if (this.password.length < 6) {
        this.errors.push("Password's length needs to be at least 6 characters");
      }

      if (this.errors.length > 0) {
        return;
      }

      var newUser = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };

      axios(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5cVNE7BftpdOSeSD4KKNYbxha4EJmrQc",
        {
          method: "POST",
          data: newUser
        }
      )
        .then((response) => {
          this.$router.push("/login");
        })
        .catch((err) => {
          const errorMessage = err.response.data.error.message;
          this.errors.push(errorMessage);
        });

      // axios("https://swapi.dev/api/people/1000")
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error.message);
      //   });

      // fetch("https://swapi.dev/api/people/1")
      //   .then((response) => {
      //     console.log(response)
      //     return response.json();
      //   })
      //   .then((data) => {
      //     console.log(data);
      //   })
      // .catch((error)=> {
      //   console.log(error.message)
      // })
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

// 1. Pisite email i password // 2. klikate na kopceto za registracija i da se
povika // fukncija register // 2.1 da ne moze da klikne po sto pati 3.
Validacija na formata // 4. Http povik do nekoe API/Server 5. Dokolku se vrati
error, treba da se prikazi // 6. Dokolku se e vo red treba da go nasocime userot
kon stranta za login
