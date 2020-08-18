<template>
  <div class="nav">
    <div class="nav-bar">
      <img class="nav-logo" src="../assets/logo.svg" alt="" />
      <a href="/" class="site-link">Home</a>
      <a href="/projects" class="site-link">Projects</a>
      <a href="/experiences" class="site-link">Experiences</a>
      <a href="/contact" class="site-link">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss">
@import '../assets/sass/Navbar.scss';
</style>
