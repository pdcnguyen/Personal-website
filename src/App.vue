<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}



body {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-grey-dark-2);
  background-image: linear-gradient(
    to right bottom,
    var(--color-primary-light),
    var(--color-primary-dark)
  );
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  
}
</style>
