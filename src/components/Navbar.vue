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
.nav {
  z-index: 100;
  font-size: 2rem;
  height: 5rem;
  //max-width: 192rem;
  max-width: 100%;
  position: fixed;
  font-family: "Open Sans";
  margin-top: 5rem;
  margin-left: 10rem;

  &-bar {
    height: 100%;
    width: 50%;
    position: relative;
    display: flex;
    align-items: center;
  }
}

.nav-logo {
  height: 100%;
  margin-right: 3rem;
}

.site-link {
  margin: 3rem;
  text-decoration: none;
  color: black;
}
</style>
