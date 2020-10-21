<!-- the content of the home page -->
<template>
  <div>
    <!-- For home page move the main content up 90.7px to the header -->
    <el-main style="padding: 0; position: relative; top: -90.7px">
      <!-- banner -->
      <div id="homeBanner">
        <!-- content box in banner -->
        <div id="homeBannercontent">
          <!-- text -->
          <p
            style="padding: 1em;"
          >Delivering Modern Comfort And Enjoyment To Residential And Commercial Spaces</p>
          <!-- button -->
          <span class="page-button" style="background-color: #851719">Get A Quote</span>
        </div>
        <!-- button to scroll page to setted anchor -->
        <i class="el-icon-arrow-down angleDownicon" aria-hidden="true"></i>
      </div>

      <!-- why choose us section -->
      <div id="whyChooseus">
        <!-- title -->
        <div class="whyChooseus-box oTitle">
          <span style="color: #851719">WHY</span>
          <span style="color: #b08008">CHOOSE US</span>
        </div>
        <!-- content -->
        <div class="whyUs-flexbox">
          <div class="col">
            <div class="grid-content wContent">
              <i class="fa fa-star" aria-hidden="true"></i>
              <span>YEARS OF EXPERIENCE</span>
              <p>Founded in 2005, Hero international is an award-winning New Zealand owned and operated building company which has grown over the last decade to become one of New Zealand’s leading residential construction companies.</p>
            </div>
          </div>
          <div class="col">
            <div class="grid-content wContent">
              <i class="fa fa-list-alt" aria-hidden="true"></i>
              <span>DIRECT LABOUR TEAM</span>
              <p>Own professional construction team over the years. Which allows us to better control the cost, quality and timing of the projects. We even have our own dedicated maintenance team, so there's no waiting for a busy subcontractor.</p>
            </div>
          </div>
          <div class="col">
            <div class="grid-content wContent">
              <i class="fa fa-wrench" aria-hidden="true"></i>
              <span>RESOURCES TO BUILD AT SCALE</span>
              <p>Own large warehouse facility in Auckland to store materials which allows us to purchase enough materials to support the ongoing project and ensure that the project is carried out and delivered as planned.</p>
            </div>
          </div>
        </div>
        <div class="whyUs-flexbox">
          <div class="col">
            <div class="grid-content wContent">
              <i class="fa fa-wrench" aria-hidden="true"></i>
              <span>ONE-STOP SOLUTION PROVIDEO</span>
              <p>Provides quality service solutions for all your design and any construction demands.</p>
            </div>
          </div>
          <div class="col">
            <div class="grid-content wContent">
              <i class="fa fa-wrench" aria-hidden="true"></i>
              <span>ENVIROMENT FRIENDLY</span>
              <p>We always believe the balance between budgets and green choices should be built into the very fabric of the home from the outset, and that saving the earth shouldn’t have to cost. </p>
            </div>
          </div>
        </div>
        <!-- button -->
        <br><br>
        <span class="page-button" style="background-color: #851719">More Details</span>
      </div>

      <!-- Our services part -->
      <div id="ourServices">
        <!-- title -->
        <div class="oTitle">
          <span style="color: white">OUR</span>
          <span style="color: #b08008">SERVICES</span>
        </div>
        <!-- description -->
        <p
          style="margin-top: 2em; margin-bottom: 2em;"
        >Hero International Ltd provides effective leadership, sharp attention to detail and a valued partnership you can count on throughout the life of your project.</p>
        <!-- content -->
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

      <!-- current project section -->
      <div id="currentProject">
        <!-- title -->
        <div class="whyChooseus-box oTitle">
          <span style="color: #851719">CURRENT</span>
          <span style="color: #b08008">PROJECT</span>
        </div>
        <!-- content -->
        <el-row class="currentProject-row">
        <center>
          <el-col :span="6">
            <div class="grid-content">
              <div class="currentProject-image">
                <img src="../assets/images/current-project-1.jpg">
                <p>Greenlane, Central Auckland</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="currentProject-image">
                <img src="../assets/images/current-project-2.jpg">
                <p>Epsom, Central Auckland</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="currentProject-image">
                <img src="../assets/images/current-project-3.jpg">
                <p>Onehunga, Central Auckland</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="currentProject-image">
                <img src="../assets/images/current-project-4.jpg">
                <p>Henderson, West Auckland</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="currentProject-image">
                <img src="../assets/images/current-project-5.jpg">
                <p>Silverdale, West Auckland</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content">
              <div class="currentProject-image">
                <img src="../assets/images/current-project-6.jpg">
                <p>Westgate, West Auckland</p>
              </div>
            </div>
          </el-col>
        </center>
        </el-row>
      </div>

      <!--Latest News-->
      <div id="latestNews">
        <!-- title -->
        <div class="oTitle">
          <span style="color: white">LATEST</span>
          <span style="color: #b08008">NEWS</span>
        </div>

        <video width="50%" height="auto" controls class="latestNews-video">
          <source src="../assets/videos/latest-news-video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>

      <!-- Our partners part -->
      <div id="ourPartners">
        <!-- title -->
        <div class="oTitle">
          <span style="color: white">OUR</span>
          <span style="color: #b08008">PARTNERS</span>
        </div>
        <!-- partners logo board -->
        <el-image
          class="ourPartners-img"
          :src="require('../assets/images/home-partner-logo.png')"
        ></el-image>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homeBanner {
  background-image: url(../assets/images/home-banner.jpg);
  background-size: cover;
  background-position: top;
  height: 100vh;
  position: relative;
}

#homeBannercontent {
  width: 35%;
  margin: 0 auto;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

#homeBannercontent p {
  font-size: 25px;
}

.angleDownicon {
  color: white;
  font-size: 1.5em;
  border-radius: 50%;
  padding: 3px;
  border: white solid 1px;
  margin-top: 4.5em;
  position: absolute;
  bottom: 50px;
}

#whyChooseus {
  background-image: url(../assets/images/home-about-bg.jpg);
  background-size: cover;
  background-position: top;
  padding: 2em 2em 6em;
}

.whyChooseus-box {
  padding-top: 3em;
  font-size: 1.5em;
  font-weight: 600;
  position: relative;
}

.whyChooseus-box:before,
.whyChooseus-box:after{
  content: "";
  display: block;
  height: 100%;
  width: 40%;
  position: absolute;
  top: 0;
}

.whyChooseus-row {
  width: 70%;
  margin: 40px auto;
  display: inline-block;
  position: relative;
  z-index: 1;
}

.wContent {
  text-align: start;
}

.wContent i {
  font-size: 35px;
  color: #b08008;
  vertical-align: middle;
}

.wContent span {
  color: #851719;
  font-weight: 700;
  vertical-align: middle;
  font-size: 20px;
  margin-left: 5px;
}

.wContent p {
  margin-left: 50px;
  margin-top: 5px;
  font-size: 16px;
}

#ourServices {
  background-color: #851719;
  color: white;
  padding: 5em 3em;
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
  border: #fff 1px solid;
}

.oContent span {
  font-size: 18px;
  font-weight: 700;
}

.oContent p {
  font-size: 16px;
  padding-top: 1em;
}

#ourPartners {
  background-image: url(/static/img/home-partner-bg.b44bf25.jpg);
  padding: 5em 3em 15em;
  background-size: cover;
  background-repeat: no-repeat;
}
.ourPartners-img {
  width: 60%;
  height: auto;
  padding-top: 3em;
}
#currentProject {
  background-color:#fff;
  padding: 2em 2em 6em;
}
.currentProject-row .el-col{
  padding:15px;
}
.currentProject-row .el-col .grid-content{
  position: relative;
}
.currentProject-box {
  padding-top: 3em;
  font-size: 1.5em;
  font-weight: 600;
}

.currentProject-image{
  overflow: hidden;
}
.currentProject-image img{
  position: relative;
  transform: scale(1);
  transition: transform .5s; /* Animation */
}

.currentProject-image img:hover{
  transform: scale(1.1);
}
.currentProject-image p{
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  padding: 20px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 18px;
  text-shadow: 0 0 15px #000;
}


.currentProject-row {
  width: 70%;
  margin: 40px auto;
}

.whyUs-flexbox {      
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  overflow: hidden;
  width: 70%;
  margin: 0 auto;
}
.whyUs-flexbox .col {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 20px;
  border: #851719 solid 1px;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 20px;
}

#latestNews {
  background-color: #851719;
  color: white;
  padding: 5em 3em;
}
.latestNews-video{
  margin-top:40px;
}
        
</style>
