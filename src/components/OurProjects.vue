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
    <isotope :options='getOptions()' :list="list" @filter="filterOption=arguments[0]" @sort="sortOption=arguments[0]">
  <div v-for="element in list" :key="element.id">
    {{element.name}}
  </div>
</isotope>

    <GetInTouch></GetInTouch>
  </div>
</template>

<script>
  import GetInTouch from "./GetInTouch";

  export default {
    name: "OurProjects",
    components: { GetInTouch },
    data: () => ({})
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

.is-checked {
  background-color: #28f;
}

.isoDefault {
  min-height: 210px;
}
</style>