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
        <div style="padding-top: 3em; font-size: 1.5em; font-weight: 600">
          <span style="color: #851719">WHY</span>
          <span style="color: #b08008">CHOOSE US</span>
        </div>
        <!-- content -->
        <el-row>
          <el-col :span="8">
            <div class="grid-content wContent">
              <i class="fa fa-star" aria-hidden="true"></i>
              <span>YEARS EXPERIENCE</span>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content wContent">
              <i class="fa fa-list-alt" aria-hidden="true"></i>
              <span>BEST QUALITY</span>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content wContent">
              <i class="fa fa-wrench" aria-hidden="true"></i>
              <span>THE SOLUTION</span>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.</p>
            </div>
          </el-col>
        </el-row>
        <!-- button -->
        <span class="page-button" style="background-color: #851719">More Details</span>
      </div>

      <!-- Our services part -->
      <div id="ourServices">
        <!-- title -->
        <div style="padding-top: 2em; font-size: 1.5em; font-weight: 600">
          <span style="color: white">OUR</span>
          <span style="color: #b08008">SERVICES</span>
        </div>
        <!-- description -->
        <p
          style="margin-top: 2em; margin-bottom: 2em;"
        >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
        <!-- content -->
        <el-row>
          <el-col :span="8">
            <div class="grid-content oContent">
              <el-avatar
                class="oImage"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <span>House Design</span>
              <p>Make your dream house to real</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content oContent">
              <el-avatar
                class="oImage"
                size="large"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <span>Build / Rebuild</span>
              <p>Professional team, Professional service</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content oContent">
              <el-avatar
                class="oImage"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
              <span>Interior Renovation</span>
              <p>Provide you with the most suitable decoration plan</p>
            </div>
          </el-col>
        </el-row>
      </div>

      <!-- Our partners part -->
      <div id="ourPartners">
        <!-- title -->
        <div style="padding-top: 3em; font-size: 1.5em; font-weight: 600">
          <span style="color: white">OUR</span>
          <span style="color: #b08008">PARTNERS</span>
        </div>
        <!-- partners logo board -->
        <el-image style="width: 80%; height: auto; padding-top: 3em;" :src="require('../assets/images/home-partner-logo.png')" :fit="fit"></el-image>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#homeBanner {
  background-image: url("../assets/images/home-banner.jpg");
  background-size: cover;
  background-position: center;
  padding-top: 16em;
  padding-bottom: 8em;
}

#homeBannercontent {
  width: 35%;
  margin: 0 auto;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 25px;
  padding-bottom: 2em;
}

.angleDownicon {
  color: white;
  font-size: 1.5em;
  border-radius: 50%;
  padding: 3px;
  border: white solid 1px;
  margin-top: 4.5em;
}

#whyChooseus {
  background-image: url("../assets/images/home-about-bg.jpg");
  background-size: cover;
  background-position: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 2.3em;
}

.wContent {
  border: #851719 solid 1px;
  text-align: start;
  padding: 2em;
  margin: 2em;
}

.wContent i {
  font-size: 1.5em;
  color: #b08008;
}

.wContent span {
  color: #851719;
  font-weight: 700;
  font-size: 0.9em;
}

.wContent p {
  margin-left: 2.5em;
  font-size: 0.8em;
}

#ourServices {
  background-color: #851719;
  color: white;
  padding-bottom: 3em;
}

#ourServices p {
  width: 45%;
  margin: 0 auto;
}

.oImage {
  display: block;
  margin: 0 auto;
  width: 5em;
  height: 5em;
  margin-bottom: 1.3em;
}

.oContent span {
  font-size: 0.9em;
  font-weight: 700;
}

.oContent p {
  font-size: 0.8em;
  padding-top: 1em;
}

#ourPartners {
  background-image: url("../assets/images/home-partner-bg.jpg");
  padding-bottom: 10em;
}
</style>
