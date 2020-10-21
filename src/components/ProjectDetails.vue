<template>
  <div>
    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="true"></b-loading>
    <div v-if="!isLoading">
      <div class="project-details-banner">
        <!-- <img src="../assets/images/projectdetails-banner.jpg" /> -->
        <img :src="projectData.projectBanner" />
        <h1>{{projectData.projectName}}</h1>
      </div>
      <div class="project-details-content p-tb-50">
        <div class="oTitle">
          <span style="color: #851719">PROJECT</span>
          <span style="color: #b08008">DETAILS</span>
        </div>
        <p>{{projectData.projectShortdes}}</p>

        <div class="projects-details-info-group">
          <div class="projects-details-info">
            <img src="../assets/images/project-icon-1.png" />
            <h4>LOCATION</h4>
            <p>{{projectData.projectLocation}}</p>
          </div>
          <div class="projects-details-info">
            <img src="../assets/images/project-icon-2.png" />
            <h4>BUDGET</h4>
            <p>{{projectData.projectBudget}}</p>
          </div>
          <div class="projects-details-info">
            <img src="../assets/images/project-icon-3.png" />
            <h4>SURFACE AREA</h4>
            <p>{{projectData.projectArea}}</p>
          </div>
          <div class="projects-details-info">
            <img src="../assets/images/project-icon-4.png" />
            <h4>TYPE</h4>
            <p>{{projectData.projectType}}</p>
          </div>
          <div class="projects-details-info">
            <img src="../assets/images/project-icon-5.png" />
            <h4>COMPLETED</h4>
            <p>{{projectData.projectCompleted}}</p>
          </div>
        </div>
      </div>

      <el-row class="project-des">
        <el-col :span="12">
          <div class="des-content">
            <p style="text-align: start; padding-right: 2em">{{projectData.projectDes}}</p>
          </div>
        </el-col>

        <el-col :span="12">
          <div class="des-content project-carousel">
            <b-carousel
              icon-pack="fas"
              :autoplay="false"
              with-carousel-list
              :indicator="false"
              :overlay="gallery"
              @click="switchGallery(true)"
            >
              <b-carousel-item v-for="(item, i) in pmediaItems" :key="i">
                <div v-if="item.mediaType!=''">
                  <iframe
                    :src="item.mediaUrl"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <figure v-if="item.mediaType==''" class="image">
                  <img :src="item.mediaUrl" />
                </figure>
              </b-carousel-item>
              <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large" />
              <template slot="list" slot-scope="props">
                <b-carousel-list
                  icon-pack="fas"
                  v-model="props.active"
                  :data="pmediaItems"
                  v-bind="al"
                  @switch="props.switch($event, false)"
                  as-indicator
                >
                  <template slot="item" slot-scope="list">
                    <figure v-if="list.mediaType!=''">
                      <img :src="list.mediaType" />
                    </figure>
                    <figure v-if="list.mediaType==''">
                      <img :src="list.mediaUrl" />
                    </figure>
                  </template>
                </b-carousel-list>
              </template>
            </b-carousel>
          </div>
        </el-col>
      </el-row>

      <div class="project-des" style="padding:2em 0 2em 0;">
        <a
          v-if="projectData.projectBrochure != ''"
          :href="projectData.projectBrochure"
          download
          target="_blank"
        >
          <span class="page-button" style="background-color: #851719">Download Brochure</span>
        </a>
        <span class="page-button" style="background-color: #851719">Enquiry</span>
      </div>

      <div style="background-color: #e2e2e2">
        <div class="project-details-content p-tb-50">
          <div class="tTitle">
            <span style="color: #851719">LAYOUT</span>
            <span style="color: #b08008">TYPE</span>
          </div>

          <b-carousel-list :data="typeItems" :items-to-show="4" icon-pack="fas">
            <template slot="item" slot-scope="list">
              <div
                :style="'background: linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) ), url('+list.typeMedias[0].mediaUrl+'); margin-left: 10px'"
              >
                <div style="padding: 10px;">
                  <p>{{list.typeName}}</p>
                  <p>
                    <span>
                      <b-icon pack="fas" icon="bed" size="is-small"></b-icon>
                      {{" "+list.bedroomNum}}
                    </span>
                    <span>
                      <b-icon pack="fas" icon="bath" size="is-small"></b-icon>
                      {{" "+list.bathroomNum}}
                    </span>
                  </p>
                  <span>{{list.area}}</span>
                  <p
                    @click="isComponentModalActive = true; tmediaItems = list.typeMedias; typeData = list"
                  >Gallery</p>
                </div>
              </div>
            </template>
          </b-carousel-list>
        </div>
      </div>

      <div class="get-in-touch">
        <div style="font-size: 1.5em; font-weight: 600">
          <span style="color: #FFFFFF">GET IN</span>
          <span style="color: #b08008">TOUCH</span>
        </div>
        <p>Like what you see? We'd love to meet you.</p>
        <span class="page-button" style="background-color: #b08008">Contact Us</span>
      </div>

      <div id="related_project">
        <div class="project-details-content p-tb-50">
          <div class="tTitle">
            <span style="color: #851719">RELATED</span>
            <span style="color: #b08008">PROJECT</span>
          </div>

          <b-carousel-list :data="projectData.relateProjects" :items-to-show="4" icon-pack="fas">
            <template slot="item" slot-scope="list">
              <div
                :style="'background: linear-gradient( rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) ), url('+list.mediaUrl+'); margin-left: 10px'"
              >
                <div style="padding: 10px;">
                  <p>{{list.projectName}}</p>
                  <p>{{list.projectCompleted}}</p>
                  <router-link :to="{name:'ProjectDetails', query: {id:list.id}}" :key="list.id" @click.native="$router.go(0)"><p>View Story</p></router-link>
                </div>
              </div>
            </template>
          </b-carousel-list>
        </div>
      </div>

      <b-modal
        v-model="isComponentModalActive"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        aria-role="dialog"
        aria-modal
        width="75%"
      >
        <div class="modal-card" style="width: auto">
          <section class="modal-card-body">
            <button type="button" class="delete t-close" @click="isComponentModalActive = false"></button>
            <el-row style="padding: 1em;">
              <el-col :span="12">
                <div class="des-content project-carousel">
                  <b-carousel
                    icon-pack="fas"
                    :autoplay="false"
                    with-carousel-list
                    :indicator="false"
                    :overlay="gallery"
                    @click="switchGallery(true)"
                  >
                    <b-carousel-item v-for="(item, i) in tmediaItems" :key="i">
                      <div v-if="item.mediaType!=''">
                        <iframe
                          :src="item.mediaUrl"
                          frameborder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <figure v-if="item.mediaType==''" class="image">
                        <img :src="item.mediaUrl" />
                      </figure>
                    </b-carousel-item>
                    <span
                      v-if="gallery"
                      @click="switchGallery(false)"
                      class="modal-close is-large"
                    />
                    <template slot="list" slot-scope="props">
                      <b-carousel-list
                        icon-pack="fas"
                        v-model="props.active"
                        :data="tmediaItems"
                        v-bind="al"
                        @switch="props.switch($event, false)"
                        as-indicator
                      >
                        <template slot="item" slot-scope="list">
                          <figure v-if="list.mediaType!=''">
                            <img :src="list.mediaType" />
                          </figure>
                          <figure v-if="list.mediaType==''">
                            <img :src="list.mediaUrl" />
                          </figure>
                        </template>
                      </b-carousel-list>
                    </template>
                  </b-carousel>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="des-content" style="text-align: start; padding-left: 2em">
                  <p>{{typeData.typeName}}</p>
                  <p>
                    <span>
                      <b-icon pack="fas" icon="bed" size="is-small"></b-icon>
                      {{" "+typeData.bedroomNum}}
                    </span>
                    <span>
                      <b-icon pack="fas" icon="bath" size="is-small"></b-icon>
                      {{" "+typeData.bathroomNum}}
                    </span>
                    <span>
                      <b-icon pack="fas" icon="square" size="is-small"></b-icon>
                      {{typeData.area}}
                    </span>
                  </p>

                  <p>{{typeData.typeDes}}</p>
                </div>
              </el-col>
            </el-row>
          </section>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "ProjectDetails",

  data() {
    return {
      isLoading: true,
      gallery: false,
      al: {
        hasGrayscale: true,
        itemsToShow: 4
      },
      projectData: null,
      pmediaItems: [],
      typeItems: [],
      tmediaItems: [],
      typeData: null,
      dialogTableVisible: false,
      isComponentModalActive: false
    };
  },
  methods: {
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        document.documentElement.classList.add("is-clipped");
      } else {
        document.documentElement.classList.remove("is-clipped");
      }
    },
    getContent() {
      this.$http({
        url: this.$http.adornUrl(
          "/constructionProject/get/" + this.$route.query.id
        ),
        method: "get",
        params: this.$http.adornParams({
          limit: 500
        })
      }).then(({ data }) => {
        this.projectData = data;
        this.pmediaItems = data.projectMedias;
        this.typeItems = data.typeVos;
        this.typeData = data.typeVos[0];
        this.isLoading = false;
      });
    }
  },
  mounted() {
    //alert(this.$route.query.id);
  },
  created() {
    this.getContent();
  }
};
</script>
<style lang="scss" scoped>
.project-details-banner {
  width: 100%;
  height: auto;
  position: relative;
  text-align: center;
}
.project-details-banner img {
  width: 100%;
}
.project-details-banner h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: white;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 32px;
  line-height: 46px;
}
.project-details-content {
  width: 70%;
  margin: 0 auto;
}
.project-details-content p {
  text-align: center;
  font-size: 16px;
}
.projects-details-info {
  width: 18%;
  margin: 1% 0.5%;
  display: inline-block;
  border: 1px solid #851719;
  padding: 10px 15px;
  text-align: left;
}
.projects-details-info img {
  width: 20%;
}
.projects-details-info h4 {
  color: #851719;
  margin: 10px 0;
  font-weight: 800;
}
.projects-details-info p {
  color: #444444;
  text-align: left;
  margin: 0 0 10px;
}
.project-des {
  width: 70%;
  margin: 0 auto;
  text-align: start;
}
.project-des .des-content {
  padding: 0.5em;
}
.project-carousel {
  background-color: #e2e2e2;
}
.t-close {
  max-width: 30px;
  max-height: 30px;
  height: 30px;
  width: 30px;
  position: absolute;
  right: 12px;
  top: 12px;
  z-index: 10;
}
.get-in-touch {
  background-color: #851719;
  text-align: center;
  background-image: url(../assets/images/get-in-touch-bg.png);
  background-size: 20%;
  background-position: 80% 20%;
  background-repeat: no-repeat;
  padding: 50px 0 50px;
}
.get-in-touch p {
  color: #fff;
  padding-bottom: 20px;
}

#related_project {
  padding-bottom: 150px !important;
}
</style>