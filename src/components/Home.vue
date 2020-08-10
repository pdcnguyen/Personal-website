<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="hero section">
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
              Replied joy age visitor nothing cottage. Mrs door paid led loud
              sure easy read. Hastily at perhaps as neither or ye fertile
              tedious visitor. Use fine bed none call busy dull when. Quiet
              ought match my right by table means. Principles up do in me
              favourable affronting.
            </p>
          </transition>
        </div>
      </div>
      <div class="intro section">
        <div class="background">
          <div class="background_right">
            <div class="background_right_content">
              <p class="background_right_content_text">
                Two assure edward whence the was. Who worthy yet ten boy denote
                wonder. Weeks views her sight old tears sorry. Additions can
                suspected its concealed put furnished. Met the why particular
                devonshire decisively considered partiality. Certain it waiting
                no entered is. Passed her indeed uneasy shy polite appear
                denied. Oh less girl no walk. At he spot with five of view. Same
                an quit most an. Admitting an mr disposing sportsmen. Tried on
                cause no spoil arise plate. Longer ladies valley get esteem use
                led six. Middletons resolution advantages expression themselves
                partiality so me at. West none hope if sing oh sent tell is. On
                no twenty spring of in esteem spirit likely estate. Continue new
                you declared differed learning bringing honoured. At mean mind
                so upon they rent am walk. Shortly am waiting inhabit smiling he
                chiefly of in. Lain tore time gone him his dear sure. Fat
                decisively estimating affronting assistance not. Resolve pursuit
                regular so calling me.
              </p>
              <div class="background_right_content_player">
                <h2 class="background_right_content_player_text">
                  HAVE I TOLD YOU NEW PHOEBE BRIDGER'S ALBUM IS REALLY GOOD?
                </h2>
                <iframe
                  class="background_right_content_player_spotify"
                  src="https://open.spotify.com/embed/album/6NtEjhPWfZcvJQuvjGX4bk?si=ZnWvRQhWTLq7Q7LWfRpnrA"
                  width="100%"
                  height="100%"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="intro_link">
          <h2 class="intro_link_about">About</h2>

          <img class="intro_link_image" src="../assets/walk.png" alt="" />

          <a class="intro_link_link" href="">My resume &rarr;</a>

          <div class="intro_link_social">
            <a href="">
              <svg alt="Facebook" class="intro_link_social_logo">
                <use
                  xlink:href="../assets/symbol-defs.svg#icon-facebook2"
                ></use>
              </svg>
            </a>
            <a href="">
              <svg alt="Instagram" class="intro_link_social_logo">
                <use
                  xlink:href="../assets/symbol-defs.svg#icon-instagram"
                ></use>
              </svg>
            </a>
            <a href="">
              <svg alt="Github" class="intro_link_social_logo">
                <use xlink:href="../assets/symbol-defs.svg#icon-github"></use>
              </svg>
            </a>
            <a href="">
              <svg alt="Linkedin" class="intro_link_social_logo">
                <use
                  xlink:href="../assets/symbol-defs.svg#icon-linkedin2"
                ></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
      },
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
$primary-color: #ffdb45;
.home {
  max-width: 192rem;
}
.hero {
  height: 100vh;
  width: 100%;
}
.background {
  float: right;
  height: 100%;
  width: 55%;
  overflow: hidden;

  &_right {
    height: 100%;
    width: 100%;
    background-color: $primary-color;
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
    font-weight: 700;
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

.background_right_content {
  padding: 10rem;
  &_text {
    padding-top: 5rem;
    font-size: 2rem;
    font-family: "Bitter";
    margin-bottom: 5rem;
  }
  &_player {
        width: 100%;
        display: flex;
    &_spotify {
      height: 40rem;
      width: 45%;
    }


    &_text {
      margin-top: 5rem;
      padding-right: 5rem ;
      font-size: 4rem;
      width: 50%;
    }
  }
}

.intro {
  height: 100vh;
  width: 100%;
  &_link {
    padding-left: 10rem;
    height: 100%;
    width: 45%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    &_about {
      margin-top: 17rem;
      margin-bottom: 7%;
      font-size: 5rem;
      position: relative;
      z-index: 100;
      &::after {
        background-color: $primary-color;
        height: 30%;
        width: 120%;
        content: "";
        position: absolute;
        bottom: 15%;
        left: 0;
        z-index: -1;
      }
    }

    &_image {
      width: 80%;
      margin-bottom: 5%;
    }

    &_link {
      text-decoration: none;
      font-size: 3rem;
      font-weight: 700;
      color: black;
      position: relative;
      z-index: 100;
      transition: all 0.2s;
      margin-bottom: 3%;

      &::after {
        background-color: $primary-color;
        height: 30%;
        width: 100%;
        content: "";
        position: absolute;
        bottom: 15%;
        left: 0;
        z-index: -1;
      }
      &:hover {
        transform: translateX(2rem);
      }
    }
    &_social {
      display: flex;
      &_logo {
        height: 5rem;
        width: 5rem;
        margin-right: 3rem;
        transition: all 0.2s;
        &:hover {
          height: 6rem;
          width: 6rem;
        }
      }
    }
  }
}
</style>
