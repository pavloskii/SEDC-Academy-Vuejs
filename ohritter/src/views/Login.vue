<template>
  <div class="container">
    <form class="card login-form shadow" @submit.prevent="register" novalidate>
      <h2>Login</h2>

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

      <router-link to="/register">Don't have an account? Register</router-link>

      <hr />
      <button type="submit" class="btn btn-dark" :disabled="isLoading">
        Login
      </button>

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
      errors: [],
      isLoading: false
    };
  },
  methods: {
    register() {
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

      var loginInfo = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };

      this.isLoading = true;

      axios(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5cVNE7BftpdOSeSD4KKNYbxha4EJmrQc",
        {
          method: "POST",
          data: loginInfo
        }
      )
        .then((response) => {
          //Da se zapisit tokenot i koga istekuva vo localStorage
          localStorage.setItem("token", response.data.idToken);
          const oneHourFromNow = new Date().getTime() + 60 * 60 * 1000;
          localStorage.setItem("expiresIn", oneHourFromNow);

          //Da se setira emailot vo globalniot state (vuex)
          this.$store.commit("setUserInfo", {
            email: response.data.email,
            isAuthenticated: true
          });

          //Da se odnese userot kon home page
          this.$router.replace("/");
        })
        .catch((err) => {
          const errorMessage = err.response.data.error.message;
          this.errors.push(errorMessage);
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>

1. Vpisuvate email i password 2. Pravite front end validacija pred da go
ispratite http requestot so axios 3. Ako ima erro go fakjate vo catch i go
crtate na ekranot 4. Posle uspesen login treba da go prenasocite userot kon
pocetnata strana
