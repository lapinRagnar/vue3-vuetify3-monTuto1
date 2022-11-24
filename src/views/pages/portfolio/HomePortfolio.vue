<template>

  <!-- -------------------------------- head --------------------------------------- -->

  <v-app id="home">

    <NavBarPortfolio />

    <v-container fluid>

      <div class="head w-100">

        <v-row no-gutters class=" head-premiere-ligne d-block d-sm-flex w-100 ma-0 pa-0">

          <v-col cols="7"  class=" ">

            <div style="position: relative;" class="mt-10 bg-blue-darken-4 pa-0">
              <h1 class="text-grey">Hello</h1>
              <h1 class="text-white">I'm lapinRagnar</h1>
              <span class="text-grey">web designer & developer vue js</span>
              <br>
              <v-btn tile dark class="text-yellow mt-8 " variant="outlined">Contact me</v-btn>
            </div>

          </v-col>

         <v-col
            cols="2"
            sm="12"
            xs="12"
            style="position: absolute; z-index: 999; bottom: 0; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;"
          >
            <v-icon icon="fas fa-angle-double-down" />
          </v-col>

          <v-col
            cols="5"
            style="position: relative; z-index: 999; "
            class="bg-amber-accent-2 mt-10"
          >
            <v-img
              src="https://static.raymondcamden.com/images/banners/code.jpg"
              cover
              max-height="200"
            >
            </v-img>
          </v-col>

        </v-row>

      </div>

      <v-col
        cols="12"
        class="mt-16"
        id="about"
      >

        <div>

          <v-row>

            <v-col cols="12" sm="6">
              <div class="egg">
                <div class="mb-10" style="height: 5px; " ></div>
                <v-img
                  src="https://www.pngitem.com/pimgs/m/507-5077806_transparent-women-professional-business-woman-transparent-background-hd.png"
                  max-height="230"
                >
                </v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h5 class="mt-16">About me</h5>
              <div style="width: 120px">
                <v-slider
                  v-model="slider2"
                  color="orange"
                  label="color"
                ></v-slider>
              </div>
              <h4 class="mt-4">Creative designer</h4>
              <h4 class="mt-4">developer vue js</h4>
              <p class="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio quisquam itaque laboriosam aspernatur nemo, illum molestiae unde facere eaque minus debitis nesciunt, inventore harum provident? Eos necessitatibus voluptatem inventore.</p>

              <br>
              <p class="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit adipisci fugit suscipit, iure mollitia est, libero tempore sequi asperiores, a fuga veniam eveniet voluptate porro voluptas hic natus eaque?</p>

              <v-btn tile dark color="orange" class="mt-4">Download</v-btn>
            </v-col>

          </v-row>

        </div>
      </v-col>

      <div class="text-center mt-4">
        <h2>what's up!</h2>
        <div style="width: 120px; margin: 0 auto;">
          <v-slider
            v-model="slider2"
            color="orange"
            label="color"
          ></v-slider>
        </div>
      </div>

      <v-col cols="12" class="padd" id="portfolio">
        <div class="first" id="project">
          <v-row>
            <v-col cols="12" class="d-flex">

              <div class="child">
                <v-btn icon="fas fa-laptop" color="#FBDF7E" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4">Web design</h3>
                <p class="text-grey ml-3 mt-4 text-caption">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptas. Earum quas nobis iure sit ab. Vel delectus fuga omnis, eum labore velit dolor vero. Esse asperiores laudantium at soluta!</p>
                <br>
              </div>

              <div class="child">
                <v-btn icon="fas fa-mobile-alt" color="#FBDF7E" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4">App design</h3>
                <p class="text-grey ml-3 mt-4 text-caption">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptas. Earum quas nobis iure sit ab. Vel delectus fuga omnis, eum labore velit dolor vero. Esse asperiores laudantium at soluta!</p>
                <br>
              </div>

              <div class="child">
                <v-btn icon="fas fa-camera" color="#FBDF7E" class="text-white"></v-btn>
                <h3 class="ml-3 mt-4">Photography</h3>
                <p class="text-grey ml-3 mt-4 text-caption">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptas. Earum quas nobis iure sit ab. Vel delectus fuga omnis, eum labore velit dolor vero. Esse asperiores laudantium at soluta!</p>
                <br>
              </div>

            </v-col>

          </v-row>

          <v-divider></v-divider>

        </div>
      </v-col>

      <v-col col="12" sm="12" id="service">
        <div class="d-flex justify-center mb-6">
          <v-btn color="#FBDF7E" class="mr-2">All</v-btn>
          <v-btn class="mr-2" variant="tonal">Web design</v-btn>
          <v-btn class="mr-2" variant="tonal">Front-end</v-btn>
          <v-btn class="mr-2" variant="tonal">Back-end</v-btn>
        </div>
      </v-col>

      <v-col cols="12" class="imgHover">
        <v-row class="fill-height" align="center" justify="center">
          <template v-for="(item, i) in items" :key="i">
            <v-col cols="12" md="4">
              <v-hover v-slot="{ isHovering, props } ">
                <v-card :elevation="isHovering ? 12 : 2 " :class=" { 'on-hover' : isHovering } " v-bind="props">
                  <v-img :src="item.img" height="145px" cover />
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-col>

      <v-col cols="12" sm="12">
        <div class="d-flex justify-center mb-6">
          <v-btn color="#FBDF7E" class="mt-4"> Load More </v-btn>
        </div>
      </v-col>

      <v-col cols="12" id="page">
        <div class="pre">
          <v-row>

            <v-col col="12" sm="4">
              <v-card class="ma-auto" max-width="344" height="">
                <v-img
                  src="https://images.ladepeche.fr/api/v1/images/view/6052d2c8d286c24fc539df25/large/image.jpg?v=1"
                  height="200px"
                  cover
                ></v-img>
                <v-card-title>We provide you the best</v-card-title>
                <v-card-subtitle>
                  By lapinRagnar | 22 dec 2022
                </v-card-subtitle>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatum maiores quasi unde numquam eos laudantium reprehenderit aspernatur laboriosam sed. Itaque voluptatem placeat expedita, ipsa obcaecati totam labore velit quo?
                </v-card-text>
              </v-card>
            </v-col>

            <v-col col="12" sm="4">
              <v-card class="ma-auto" max-width="344" height="">
                <v-img
                  src="https://designs.rocket-league.com/23f261c8f8e26905aa1a78810d411bab79bf7b528931a171459a0dd86b5cbe48.jpg"
                  height="200px"
                  cover
                ></v-img>
                <v-card-title>We provide you the best</v-card-title>
                <v-card-subtitle>
                  By lapinRagnar | 22 dec 2022
                </v-card-subtitle>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatum maiores quasi unde numquam eos laudantium reprehenderit aspernatur laboriosam sed. Itaque voluptatem placeat expedita, ipsa obcaecati totam labore velit quo?
                </v-card-text>
              </v-card>
            </v-col>

            <v-col col="12" sm="4">
              <v-card class="ma-auto" max-width="344" height="">
                <v-img
                  src="https://lemagsportauto.ouest-france.fr/wp-content/uploads/2020/06/Assetto-Corsa-Competizione_20200622162931-1024x576.jpg"
                  height="200px"
                  cover
                ></v-img>
                <v-card-title>We provide you the best</v-card-title>
                <v-card-subtitle>
                  By lapinRagnar | 22 dec 2022
                </v-card-subtitle>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatum maiores quasi unde numquam eos laudantium reprehenderit aspernatur laboriosam sed. Itaque voluptatem placeat expedita, ipsa obcaecati totam labore velit quo?
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" id="blog">

              <div class="hire">

                <v-row>
                  <v-col cols="12" sm="8">
                    <h1 class="mt-9"> Hire me for your awsome project</h1>
                    <p class="text-grey">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nostrum asperiores aperiam laudantium voluptatum dolor dicta minus cumque, saepe, ullam, corrupti a. Inventore debitis magni repellendus aut, quisquam aperiam nobis!
                    </p>
                  </v-col>

                  <v-col cols="12" sm="4">
                    <v-btn color="#FBDF7E">Hire me</v-btn>
                  </v-col>
                </v-row>

              </div>

            </v-col>

            <!-- -------------------------------- contact --------------------------------------- -->

            <v-col cols="12" sm="12" class="px-16" id="contact">
              <v-row>
                <v-col cols="12" sm="4">
                  <div class="child">
                    <h1>Contact info.</h1>
                    <v-btn icon="fas fa-map-marker-alt" class="mt-10" variant="outlined"></v-btn> <br>
                    <span class="text-caption">Your street SYO, Your area dream</span> <br>

                    <v-btn icon="fas fa-phone-alt" class="mt-10"  variant="outlined"></v-btn> <br>
                    <span class="text-caption">04 04 04 04 44</span> <br>
                    <span class="text-caption">04 04 04 04 90</span> <br>

                    <v-btn icon="fas fa-envelope" class="mt-10"  variant="outlined"></v-btn> <br>
                    <span class="text-caption">lapinragnar@example.com</span> <br>
                    <span class="text-caption">lapinragnar@example.com</span> <br>
                  </div>
                </v-col>

                <v-col cols="12" sm="8">
                  <h1 class="mt-8">Send your message</h1>
                  <v-divider></v-divider>
                  <span class="text-caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, vero amet ut quam aperiam nesciunt, tenetur ab sit sed dolore fuga facilis quo et ratione autem tempora perspiciatis saepe eveniet.
                  </span>

                  <v-row class="mt-10">
                    <v-col cols="12" sm="6">

                      <v-row>

                        <v-text-field
                          name="name"
                          label="Name"
                          persistent-hint
                          variant="outlined"
                          class="mr-15 w-100"
                        ></v-text-field>

                        <v-text-field
                          name="name"
                          label="Phone"
                          persistent-hint
                          variant="outlined"
                          class="mr-15 w-100"
                        ></v-text-field>

                        <v-textarea
                          name="message"
                          label="Message"
                          persistent-hint
                          variant="outlined"
                        ></v-textarea>

                      </v-row>
                      <v-btn color="#FBDF7E" class="mt-2">Submit</v-btn>

                    </v-col>

                  </v-row>
                </v-col>

              </v-row>
            </v-col>

          </v-row>
        </div>
      </v-col>

    </v-container>

    <FooterPortofolio class="ma-0 pa-0 monFooter" />

  </v-app>


</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useDisplay } from 'vuetify'

  import NavBarPortfolio from '@/components/NavBarPortfolio.vue'
  import FooterPortofolio from '@/components/FooterPortofolio.vue'

  const slider2 = ref(50)
  const items = ref([
    {
      img: 'https://www.pcspecialist.fr/images/landing/pcs/gaming-pc/bundle.jpg'
    },
    {
      img: 'https://s3.isnportal.com.br/wp-content/uploads/2022/07/12104207/pc-gamer-thumb.jpg'
    },
    {
      img: 'https://i.ytimg.com/vi/jRwcj9umh-o/maxresdefault.jpg'
    },
    {
      img: 'https://www.worten.pt/i/10fbc8a6656ff054fbeb094841fd49ceedbc659d'
    },
    {
      img: 'https://p-interactif.com/wp-content/uploads/2021/05/pc-gamer.jpeg'
    },
    {
      img: 'https://image.jeuxvideo.com/medias-md/147336/1473355917-9903-card.jpg'
    },
    {
      img: 'https://journalduluxe.fr/files/mclaren-simulateur_cdeca8e39357eb9fe9973fe111c02ad6.jpg'
    },
  ])

  const { width, mobile } = useDisplay()

  onMounted(() => {
    console.log(' mobile ', mobile.value)
    console.log(' width ', width.value)
  })



</script>


<style scoped lang="scss">

  .v-container {
    padding: 16px 0;
    background-color: red;

    .head {
      position: relative;
      text-align: center;
      padding: 12px;
      margin-bottom: 6px;
      height: 400px;
      width: 100%;
      color: white;

      /* background-color: cadetblue; */

      &:before {
        content: '';
        position: absolute;
        top: -28px;
        left: 0;
        height: 100%;
        width: 50%;
        background: black;
        transform: skew(0deg, 6deg);
        display: none;
      }

      .head-premiere-ligne {
        background-color: darkgreen;
      }

      &:after {
        content: '';
        position: absolute;
        top: -28px;
        right: 0;
        height: 100%;
        width: 50%;
        background: black;
        transform: skew(0deg, -6deg);
        display: none;
      }
    }

    .egg {

      display: block;
      margin-left: 100px;
      margin-top: 50px;
      width: 356px;
      height: 300px;
      background-color: #f7f7f7;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    }

    .first {
      width: 100%;
      height: 380px;
      text-align: center;
      padding: 2rem 2rem;


      .child {
        display: inline-block;
        padding: 2rem 1rem;
        vertical-align: middle;
        text-align: center;
        margin-right: 8px;
      }

      .imgHover {
        padding: 0 200px;
      }

      .pre {
        width: 100%;
        height: 380px;
        text-align: center;
        padding: 0px 200px;
        background-color: #f7f7f7;
      }

      .hire {
        width: 100%;
        height: 200px;
        padding: 0 200px;
        background-color: #e8e8e8;
        margin-top: -24px;
      }
    }

    .monFooter {
      width: 100%;
    }
  }

</style>
