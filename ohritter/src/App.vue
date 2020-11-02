<template>
  <header v-if="false">
    <nav class="navbar navbar-dark bg-dark shadow">
      <router-link class="navbar-brand" to="/">
        <img
          src="./assets/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
          loading="lazy"
        />
        Ohritter
      </router-link>

      <router-link to="/create-new-post" class="btn btn-light">
        Create New Post
      </router-link>
    </nav>
  </header>

  <router-view></router-view>
  <footer v-if="false">@Copyright SEDC 2020</footer>
</template>

<script>
export default {};
</script>

<style>
body {
  background-color: gainsboro;
}
</style>
