<template>
  <div>
    <div class="service-banner">
      <img src="../assets/images/ourproject-banner.jpg" />
      <h1>Together We Build</h1>
    </div>
    <div class="service-content p-tb-50">
      <div style="font-size: 1.5em; font-weight: 600">
        <span style="color: #851719">OUR</span>
        <span style="color: #b08008">PROJECTS</span>
      </div>
    </div>

    <div id="project-filter">
      <div class="button-group">
        <button
          v-for="(val, key) in option.getFilterData"
          class="button"
          :class="[key===filterOption? 'is-checked' : '']"
          @click="filter(key)"
          :key="key"
        >{{key}}</button>
      </div>

      <isotope
        ref="cpt"
        id="root_isotope1"
        :item-selector="'element-item'"
        :list="list"
        :options="option"
        @filter="filterOption=arguments[0]"
        @sort="sortOption=arguments[0]"
        @layout="currentLayout=arguments[0]"
      >
        <div v-for="(element, index) in list" :class="[element.projectCate]" :key="index">
          <router-link :to="{name:'ProjectDetails', query: {id:element.id}}">
            <b-card overlay :img-src="element.imgUrl" img-alt="Card Image" style="color: #851719;">
              <b-card-text>
                <p>{{element.projectName}}</p>
                <p>{{element.projectCompleted}}</p>
                <p>View Story</p>
              </b-card-text>
            </b-card>
          </router-link>
        </div>
      </isotope>
    </div>
    <GetInTouch></GetInTouch>
  </div>
</template>

<script>
import GetInTouch from "./GetInTouch";
import isotope from "vueisotope";

export default {
  name: "Projects",
  components: {
    GetInTouch,
    isotope
  },
  data() {
    return {
      layouts: ["masonry"],
      list: [],
      currentLayout: "masonry",
      selected: null,
      sortOption: "original-order",
      filterOption: "All",
      option: {
        itemSelector: ".element-item",
        getFilterData: {
          All: function() {
            return true;
          },
          Residential: function(el) {
            return el.projectCate === "Residential";
          },
          Commercial: function(el) {
            return el.projectCate === "Commercial";
          }
        }
      }
    };
  },
  methods: {
    sort: function(key) {
      this.$refs.cpt.sort(key);
    },
    filter: function(key) {
      this.$refs.cpt.filter(key);
    },
    changeLayout: function(key) {
      this.$refs.cpt.layout(key);
    },

    getContent() {
      this.$http({
        url: this.$http.adornUrl("/constructionProject/get"),
        method: "get",
        params: this.$http.adornParams({
          limit: 500
        })
      }).then(({ data }) => {
        this.list = data;
      });
    }
  },
  created() {
    this.getContent();
  }
};
</script>

<style scoped>
.service-banner {
  width: 100%;
  height: auto;
  position: relative;
  text-align: center;
}
.service-banner img {
  width: 100%;
}
.service-banner h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-transform: uppercase;
  font-weight: 800;
}

#project-filter {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  width: 70%;
  margin: 0 auto;
}

.item {
  background-color: #eee;
  padding: 10px;
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-family: monospace;
  color: #333;
}

/* ---- button ---- */

.button {
  display: inline-block;
  padding: 0.5em 1em;
  background: #eee;
  border: none;
  border-radius: 10px;
  color: #222;
  font-family: sans-serif;
  font-size: 16px;
  text-shadow: 0 1px white;
  cursor: pointer;
}

.button:hover {
  background-color: #851719;
  color: #fff;
}

.button:active,
.button.is-checked {
  background-color: #851719;
}

.is-checked {
  background-color: #851719;
}

.button.is-checked {
  color: white;
}

/* ---- button-group ---- */

.button-group {
  margin-bottom: 20px;
}

.button-group:after {
  content: "";
  display: block;
  clear: both;
}

.button-group .button {
  margin: 0 5px;
  border-radius: 10px;
  text-shadow: none;
}

/* ---- isotope ---- */

.grid {
  border: 1px solid #333;
}

/* clear fix */

.grid:after {
  content: "";
  display: block;
  clear: both;
}

.isoDefault {
  min-height: 210px;
}

/* ---- .element-item ---- */

.element-item {
  position: relative;
  float: left;
  width: 250px;
  margin: 5px;
  padding: 10px;
}

.element-item > * {
  margin: 0;
  padding: 0;
}
</style>