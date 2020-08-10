<template>
  <div class="home">
    <div class="hero">
      <div class="background">
        <div class="background_right">
          <transition name="image-start">
            <img
              v-if="start"
              class="background_right_image"
              src="../assets/logo.png"
              alt=""
            />
          </transition>
        </div>
      </div>
      <div class="home_content">
        <transition name="loader-transition">
          <h1 v-if="show" class="home_content_heading">{{ content }}</h1>
        </transition>

        <transition name="message-start">
          <p v-if="start" class="home_content_message">
            Boy desirous families prepared gay reserved add ecstatic say.
            Replied joy age visitor nothing cottage. Mrs door paid led loud sure
            easy read. Hastily at perhaps as neither or ye fertile tedious
            visitor. Use fine bed none call busy dull when. Quiet ought match my
            right by table means. Principles up do in me favourable affronting.
          </p>
        </transition>
      </div>
    </div>
    <div class="intro"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: false,
      content: "Xin Chao,",
      show: false,
      greet: ["Xin Chao,", "Hello,", "Moin,", "你好,"],
      count: -1,
    };
  },
  methods: {},
  created() {
    setInterval(() => {
      if (!this.show) {
        this.count = (this.count + 1) % 4;
        this.content = this.greet[this.count];
      }
      this.show = !this.show;
    }, 1500);
  },
  mounted() {
    this.start = true;
  },
};
</script>

<style lang="scss">
.home {
  max-width: 192rem;
}
.background {
  float: right;
  height: 100vh;
  width: 55vw;
  overflow: hidden;

  &_right {
    height: 100%;
    width: 100%;
    //margin-left: 45%;
    //padding-left: 5%;
    background-color: #ffdb45;
    overflow: hidden;

    &_image {
      margin-top: 15%;
      margin-left: -1%;
      height: auto;
      width: 110%;
    }
  }
}

.home_content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  padding-left: 10rem;

  .home_content_heading {
    font-size: 14rem;
    font-family: "Open Sans";
    animation: text-appear 2 infinite;
  }

  &_message {
    width: 50vw;
    font-family: "Bitter";
    font-size: 2.8rem;
    margin-bottom: 35%;
    z-index: 5;
  }
}

.loader-transition-enter-active {
  transition: all 0.5s ease;
}
.loader-transition-leave-active {
  transition: all 0.5s ease;
}
.loader-transition-enter, .loader-transition-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.image-start-enter-active {
  transition: all 1.5s ease;
}
.image-start-leave-active {
  transition: all 1.5s ease;
}
.image-start-enter, .image-start-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(5rem);
}

.message-start-enter-active {
  transition: all 1.5s ease;
}
.message-start-leave-active {
  transition: all 1.5s ease;
}
.message-start-enter, .message-start-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-5rem);
}


.intro{
  height: 100vh;
  width: 100%;
  background-color: yellow;
}
</style>
