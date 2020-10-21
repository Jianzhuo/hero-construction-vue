<template>
  <div>
    <div class="service-banner">
      <img src="../assets/images/service-banner.jpg" />
      <h1>We work with customers to help build better</h1>
    </div>
    <div class="service-content p-tb-50">
      <div class="oTitle">
        <span style="color: #851719">OUR</span>
        <span style="color: #b08008">SERVICES</span>
      </div>
      <p>
        Hero International Ltd. provides effective leadership, sharp attention to detail and a valued partnership you can count on throughout the life of your project.
        <br />
        <br />Hero International provides comprehensive construction management consulting services. Possess the engineering and construction experience to provide real-world, cost-effective solutions to the everyday challenges that owners, contractors, engineers, and architects face throughout the construction process. From the initial concept to project closeout, we assist our clients in facilitating and coordinating the construction process to mitigate complex problems.
      </p>
      <div class="service-features">
        <el-row class="ourServices-row">
          <el-col :span="8">
            <div class="grid-content oContent">
              <img src="../assets/images/service-icon-1.jpg" class="oImage">
              <span>Building Design and Consent</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content oContent">
              <img src="../assets/images/service-icon-2.jpg" class="oImage">
              <span>Remove and replace </span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content oContent">
              <img src="../assets/images/service-icon-3.jpg" class="oImage">
              <span>Backyard build knock down& rebuild</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content oContent">
              <img src="../assets/images/service-icon-4.jpg" class="oImage">
              <span>Subdivision</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content oContent">
              <img src="../assets/images/service-icon-5.jpg" class="oImage">
              <span>Interior Renovation</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content oContent">
              <img src="../assets/images/service-icon-6.jpg" class="oImage">
              <span>Build from plan</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    
    <GetInTouch></GetInTouch>
  </div>
</template>

<script>
import GetInTouch from "./GetInTouch";

export default {
  name: "OurServices",
  components: { GetInTouch },
  data: () => ({}),
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
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: white;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 32px;
  line-height: 46px;
}
.service-content {
  width: 70%;
  margin: 0 auto;
}
.service-content p {
  text-align: center;
  font-size: 16px;
  margin-top: 25px;
}
.service-features {
  margin: 20px auto;
}
.services-features-box {
  width: 31%;
  margin: 20px 1%;
  display: inline-block;
  vertical-align: middle;
}
.services-features-box-img {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  background-color: #af7b0a;
  border-radius: 50%;
}
.services-features-box h4 {
  margin: 15px auto 0;
  font-weight: 600;
}
.services-features-box p {
  text-align: center;
  margin: 5px auto;
  font-size: 16px;
}
.ourServices-row {
  width: 70%;
  margin: 60px auto 40px;
}
.ourServices-row .el-col{
  margin-bottom:20px;
}

#ourServices p {
  width: 45%;
  margin: 0 auto;
}

.oImage {
  display: block;
  margin: 0 auto;
  width: 150px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 50%;
  padding: 10px;
  border:rgb(133, 23, 25) 1px solid;
}

.oContent span {
  font-size: 18px;
  font-weight: 700;
}

.oContent p {
  font-size: 16px;
  padding-top: 1em;
}
</style>