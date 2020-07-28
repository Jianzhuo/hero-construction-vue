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
        <div v-for="element,index in list" :class="[element.category]" :key="index">、
          <div class="book-image">
            <img src="imagesrc">
          </div>
          <img class="imagesrc">{{element.imagesrc}}">
          <h3 class="name">{{element.name}}</h3>
          <p class="date">{{element.date}}</p>
          <p class="number">{{element.number}}</p>
          <p class="weight">{{element.weight}}</p>
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
    isotope,
  },
  data() {
    return {
      layouts: ["masonry"],
      list: [
        {
          name: "1",
          date: "112",
          category: "Residential",
          imagesrc: "https://images-na.ssl-images-amazon.com/images/I/61StaeTZcsL._SX381_BO1,204,203,200_.jpg"
        },
        {
          name: "2",
          date: "123",
          category: "Residential",
          imagesrc: "https://images-na.ssl-images-amazon.com/images/I/61StaeTZcsL._SX381_BO1,204,203,200_.jpg"
        },
        {
          name: "3",
          date: "112",
          category: "Commercial",
          imagesrc: "https://images-na.ssl-images-amazon.com/images/I/61StaeTZcsL._SX381_BO1,204,203,200_.jpg"
        },
        {
          name: "4",
          date: "112",
          category: "Residential",
          imagesrc: "https://images-na.ssl-images-amazon.com/images/I/61StaeTZcsL._SX381_BO1,204,203,200_.jpg"
        },
        {
          name: "5",
          date: "112",
          category: "Commercial",
          imagesrc: "https://images-na.ssl-images-amazon.com/images/I/61StaeTZcsL._SX381_BO1,204,203,200_.jpg"
        },
      ],
      currentLayout: "masonry",
      selected: null,
      sortOption: "original-order",
      filterOption: "All",
      option: {
        itemSelector: ".element-item",
        getFilterData: {
          All: function () {
            return true;
          },
          Residential: function (el) {
            return el.category === "Residential";
          },
          Commercial: function (el) {
            return el.category === "Commercial";
          },
        },
      },
    };
  },
  methods: {
    sort: function (key) {
      this.$refs.cpt.sort(key);
    },
    filter: function (key) {
      this.$refs.cpt.filter(key);
    },
    changeLayout: function (key) {
      this.$refs.cpt.layout(key);
    },
  },
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

.button:active {
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
  width: 100px;
  height: 100px;
  margin: 5px;
  padding: 10px;
  background: #888;
  color: #262524;
}

.element-item > * {
  margin: 0;
  padding: 0;
}

.element-item .name {
  position: absolute;
  left: 10px;
  top: 60px;
  text-transform: none;
  letter-spacing: 0;
  font-size: 12px;
  font-weight: normal;
}

.element-item .symbol {
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 42px;
  font-weight: bold;
  color: white;
}

.element-item .number {
  position: absolute;
  right: 8px;
  top: 5px;
}

.element-item .weight {
  position: absolute;
  left: 10px;
  top: 76px;
  font-size: 12px;
}
</style>