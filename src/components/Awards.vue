<template>
  <div>
    <div class="awards-banner">
      <img src="../assets/images/awards-banner.jpg" />
      <h1>
        We are proud to be awarded<br>for our ability
      </h1>
    </div>
    <div class="awards-content p-tb-50">
      <div class="oTitle">
        <span style="color: #851719">AWARDS &</span>
        <span style="color: #b08008">CERTIFICATIONS</span>
      </div>
      <div class="awards-images">
        <img src="../assets/images/awards-bronze.png">
        <img src="../assets/images/awards-masterbuilders.png">
        <img src="../assets/images/awards-lbp.png">
        <img src="../assets/images/awards-impac.png">
        <img src="../assets/images/awards-sitesafe.png">
      </div>
    </div>
    <GetInTouch></GetInTouch>
  </div>
</template>

<script>
import GetInTouch from "./GetInTouch";

export default {
  name: "Awards",
  components: { GetInTouch }
};
</script>
<style scoped>
.awards-banner {
  width: 100%;
  height: auto;
  position: relative;
  text-align: center;
}
.awards-banner img {
  width: 100%;
}
.awards-banner h1 {
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
.awards-content {
  width: 70%;
  margin: 0 auto;
}
.awards-content p {
  text-align: center;
  font-size: 16px;
  margin-top: 25px;
}
.awards-images{
    width:70%;
    margin: 20px auto;
}
.awards-images img{
    max-width: 180px;
    margin: 50px 20px 10px;
}
</style>