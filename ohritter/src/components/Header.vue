<template>
  <header>
    <nav class="navbar navbar-dark bg-dark shadow">
      <router-link class="navbar-brand" to="/">
        <img
          src="../assets/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        {{ brandName }}
      </router-link>

      <div style="flex: 1"></div>
      <router-link to="/profile" class="btn btn-dark border-left">{{
        $store.state.email
      }}</router-link>
      <router-link to="/create-new-post" class="btn btn-dark border-left">
        Create New Post
      </router-link>
      <button class="btb btn-dark border-left" @click="logout">Logout</button>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    brandName: {
      type: String,
      required: true
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.commit("setUserInfo", {email:"", isAuthenticated: false})
      this.$router.replace("/login");
      //console.log(this.$store.state.email);
    }
  }
};
</script>
