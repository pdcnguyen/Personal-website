<template>
<div class="page">
<div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage" class="">
      <div class="hero section ">
        <div class="background">
          <div class="background_right">
            <transition name="image-start">
              <img
                v-if="start"
                class="background_right_image"
                src="../assets/me1.svg"
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
              I'm Nguyên, a web-developer and a graphic designer, keen on making
              things feel effortless and accessible.
              <br />
              I'm currently studying Computer Science in Berlin, Germany at the
              Humboldt University of Berlin, with the focus on Databank,
              Algorithms and Machine learning.
            </p>
          </transition>
        </div>
      </div>
      <div class="intro section">
        
        <div class="intro_link">
          <h2 class="intro_link_about">About</h2>

          <img class="intro_link_image" src="../assets/me2.jpg" alt="" />

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
                  xlink:href="../assets/symbol-defs.svg#icon-linkedin-square"
                ></use>
              </svg>
            </a>
          </div>
        </div>
        <div class="intro_background">
          <div class="intro_background_right">
            <div class="intro_background_right_content">
              <p class="intro_background_right_content_text">
                I was born and raised in Phu Yen, Vietnam and have had the
                priviledge of seeing many stories and meeting many people from
                all walks of life. This had me interested in breaking down
                everything to their core value and remove all of the excesses.
                Thus optimize, optimize and optimize.
                <br />
                Maybe that is why i got myself into Computer Science, it's all
                just strings of 1s and 0s which fascinates me so much. And now
                with the focus on Machine learning and AI I get the chance to
                truly sit down and dive into every humans aspect that i took for
                granted before.
                <br />
                <strong
                  >- Categrorize the world with an open mind for exception.
                  -</strong
                >

                <br />
                <br />
                In my free time, I like to slow down time by listening to music
                and talk a stroll in the green outdoors.
              </p>
              <div class="intro_background_right_content_player">
                <h2 class="intro_background_right_content_player_text">
                  HAVE I TOLD YOU NEW PHOEBE BRIDGER'S ALBUM IS REALLY GOOD?
                </h2>
                <iframe
                  class="intro_background_right_content_player_spotify"
                  src="https://open.spotify.com/embed/album/2xECuqnvvmVktV7UO8Dd3s?si=Z3GIPjitROmiJTJJaI8Bhw"
                  
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="skill section">
        <h2 class="skill_header">Skills</h2>
        <div class="skill_strong">
          <div class="part_header">Experienced:</div>
          <div class="part_logo">
            <div class="logo_1">
              <svg alt="Javascript" class="skill_strong_logo">
                <use
                  xlink:href="../assets/symbol-defs.svg#icon-javascript"
                ></use>
              </svg>
            </div>
            <div class="logo_2">
              <svg alt="Illustrator" class="skill_strong_logo logo_2">
                <use
                  xlink:href="../assets/symbol-defs.svg#icon-adobeillustrator"
                ></use>
              </svg>
            </div>
            <div class="logo_3">
              <svg alt="HTML" class="skill_strong_logo logo_3">
                <use xlink:href="../assets/symbol-defs.svg#icon-html5"></use>
              </svg>
            </div>
            <div class="logo_4">
              <svg alt="CSS" class="skill_strong_logo logo_4">
                <use xlink:href="../assets/symbol-defs.svg#icon-css3"></use>
              </svg>
            </div>
            <div class="logo_5">
              <svg alt="SCSS" class="skill_strong_logo logo_5">
                <use xlink:href="../assets/symbol-defs.svg#icon-sass"></use>
              </svg>
            </div>
            <div class="logo_6">
              <svg alt="VueJS" class="skill_strong_logo logo_6">
                <use
                  xlink:href="../assets/symbol-defs.svg#icon-vue-dot-js"
                ></use>
              </svg>
            </div>
          </div>
        </div>
        <div class="skill_familiar">
          <div class="part_header">Familiar with:</div>
          <div class="part_logo">
            <div class="logo_7">
              <svg alt="Photoshop" class="skill_familiar_logo">
                <use
                  xlink:href="../assets/symbol-defs.svg#icon-adobephotoshop"
                ></use>
              </svg>
            </div>
            <div class="logo_8">
              <svg alt="Java" class="skill_familiar_logo">
                <use xlink:href="../assets/symbol-defs.svg#icon-java"></use>
              </svg>
            </div>
            <div class="logo_9">
              <svg alt="C" class="skill_familiar_logo">
                <use xlink:href="../assets/symbol-defs.svg#icon-c"></use>
              </svg>
            </div>
            <div class="logo_10">
              <svg alt="NodeJS" class="skill_familiar_logo">
                <use
                  xlink:href="../assets/symbol-defs.svg#icon-node-dot-js"
                ></use>
              </svg>
            </div>
            <div class="logo_11">
              <svg alt="Python" class="skill_familiar_logo">
                <use xlink:href="../assets/symbol-defs.svg#icon-python"></use>
              </svg>
            </div>
            <div class="logo_12">
              <svg alt="Postgresql" class="skill_familiar_logo">
                <use
                  xlink:href="../assets/symbol-defs.svg#icon-postgresql"
                ></use>
              </svg>
            </div>
            <div class="logo_13">
              <svg alt="React" class="skill_familiar_logo">
                <use xlink:href="../assets/symbol-defs.svg#icon-react"></use>
              </svg>
            </div>
            <div class="logo_14">
              <svg alt="MongoDB" class="skill_familiar_logo">
                <use xlink:href="../assets/symbol-defs.svg#icon-mongodb"></use>
              </svg>
            </div>
            <div class="logo_15">
              <svg alt="Linux" class="skill_familiar_logo">
                <use xlink:href="../assets/symbol-defs.svg#icon-tux"></use>
              </svg>
            </div>
          </div>
        </div>
        
      </div>
    </full-page>
  </div>
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
      content: "Xin chào",
      show: false,
      greet: ["Xin Chào,", "Hello,", "Moin,", "你好,"],
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
@import '../assets/sass/Home.scss';
</style>
