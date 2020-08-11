<template>
  <div class="footer">
    <p>Created by Nguyen in 2020. All rights reserved</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  z-index: 200;
  font-size: 2rem;
  height: 10rem;
  width: 100%;
  max-width: 192rem;
  font-family: "Open Sans";
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & p {
    margin-right: 5rem;
  }
}
</style>
