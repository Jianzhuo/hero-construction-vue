<template>
  <div>
    <div class="partners-banner">
      <img src="../assets/images/partner-banner.jpg" />
      <h1>
        with our trustworthy partners<br>we serves everyone the best
      </h1>
    </div>
    <div class="partners-content p-tb-50">
      <div class="oTitle">
        <span style="color: #851719">OUR</span>
        <span style="color: #b08008">PARTNERS</span>
      </div>
      <p>
        <img src="../assets/images/home-partner-logo.png">
      </p>
    </div>
    <GetInTouch></GetInTouch>
  </div>
</template>

<script>
import GetInTouch from "./GetInTouch";

export default {
  name: "OurPartners",
  components: { GetInTouch },
  data() {
    return{}
  },
};
</script>
<style scoped>
.partners-banner {
  width: 100%;
  height: auto;
  position: relative;
  text-align: center;
}
.partners-banner img {
  width: 100%;
}
.partners-banner h1 {
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
.partners-content {
  width: 70%;
  margin: 0 auto;
}
.partners-content p {
  text-align: center;
  font-size: 16px;
  margin-top: 25px;
}
</style>