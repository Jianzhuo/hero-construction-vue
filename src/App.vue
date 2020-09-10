<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    />
    <!-- <img src="./assets/logo.png">-->

    <el-container>
      <!-- 
      Header part of all webpages for this project
      with logo and menu 
      -->
      <el-header id="pageHeader" height="auto" style="padding:0;">
        <el-row
          style="z-index: 2"
          v-bind:class="{'head-bg-enter':menuList,'head-bg-leave':menuTimes}"
        >
          <el-col :span="4" :xs="2">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="16" :xs="20">
            <div class="grid-content">
              <!-- Logo -->
              <el-image
                class="header-logo"
                :src="require('./assets/images/hero_logo.png')"
                fit="conatin"
              ></el-image>
              <!-- Main menu -->
              <!-- menu button -->
              <i
                @click="menuIconclick = !menuIconclick; menuList = !menuList; menuTimes = !menuTimes"
                class="fa menuIcon"
                v-bind:class="{'fa-bars':menuList, 'fa-times':menuTimes}"
              ></i>
            </div>
          </el-col>
          <el-col :span="4" :xs="2">
            <div class="grid-content"></div>
          </el-col>
        </el-row>

        <!-- menu content -->
        <transition name="slide-fade">
          <div
            v-if="menuIconclick"
            style="position: absolute; top: 104px; width: 100%; background-color: #b08008; z-index: -1; height:90vh"
          >
            <el-menu
              @select="menuIconclick = false; menuList = true; menuTimes = false"
              :router="true"
              :default-active="$route.path"
              background-color="#b08008"
              text-color="#fff"
            >
              <el-menu-item index="/">
                <span slot="title">HOME</span>
              </el-menu-item>
              <el-menu-item index="/AboutUs">
                <span slot="title">ABOUT US</span>
              </el-menu-item>
              <el-menu-item index="/OurServices">
                <span slot="title">OUR SERVICES</span>
              </el-menu-item>
              <el-menu-item index="/Projects">
                <span slot="title">PROJECTS</span>
              </el-menu-item>
              <el-menu-item index="/Awards">
                <span slot="title">AWARDS</span>
              </el-menu-item>
              <el-menu-item index="/OurPartners">
                <span slot="title">OUR PARTNERS</span>
              </el-menu-item>
              <el-menu-item index="/ContactUs">
                <span slot="title">CONTACT US</span>
              </el-menu-item>
            </el-menu>
          </div>
        </transition>
      </el-header>

      <div style="min-height: 1000px;" >
        <router-view />
      </div>

      <el-footer>
        <!-- the top parrt of the footer  -->
        <div class="footerTop"></div>
        <!-- the main parrt of the footer -->
        <div style="background: #b08008; padding-top: 30px; font-size:16px">
          <el-row>
            <el-col :span="3">
              <div class="grid-content"></div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <i class="el-icon-location footerIcon" aria-hidden="true"></i>
                <span>PO BOX 84433, Westgate,Auckland,0657</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <i class="fa fa-phone footerIcon" aria-hidden="true"></i>
                <span>+64 0800 166 899</span>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <i class="fa fa-envelope footerIcon" aria-hidden="true"></i>
                <span>info@herointernational.co.nz</span>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content"></div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="3">
              <div class="grid-content"></div>
            </el-col>
            <el-col :span="18">
              <div class="grid-content">
                <el-divider></el-divider>
                <span style>Copyright © 2020 Hero International. All rights reserved</span>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content"></div>
            </el-col>
          </el-row>
          <br />
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    menuList: true,
    menuTimes: false,
    menuIconclick: false
  }),
  mounted() {
    this.$nextTick(() => {
      window.onscroll = function() {
        var headerMain = document.getElementById("pageHeader");
        if (window.pageYOffset >= 10) {
          headerMain.classList.add("headerMain-bg");
        } else {
          headerMain.classList.remove("headerMain-bg");
        }
      };
    });
  }
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.4s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.4s ease-in;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-100%);
  opacity: 0;
}

.head-bg-leave {
  transition: background-color 0.4s;
  background-color: white;
}

.head-bg-enter {
  transition: background-color 1s ease-in;
  background-color: transparent;
}

.headerMain-bg {
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.49);
}
.header-logo {
  width: 14em;
  padding: 20px;
  height: auto;
}

body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menuIcon {
  font-size: 2em;
  color: #851719;
  position: absolute;
  top: 50%;
  left: 80%;
}

.grid-content {
  min-height: 36px;
}

header {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 1;
}

.el-menu {
  top: 15vh;
}

.el-menu-item:focus,
.el-menu-item:hover {
  background-color: rgb(176, 128, 8) !important;
}
.el-menu-item * {
  transition: 0.4s;
}

.el-menu-item:focus span,
.el-menu-item:hover span {
  color: #851719;
}
.el-menu-item {
  font-size: 25px;
  font-weight: 800;
}

.el-menu-item.is-active {
  color: #851719;
}

.el-menu {
  top: 3em;
}

footer {
  color: white;
  font-size: 0.7em;
  position: relative;
  bottom: 17em;
}

.footerTop {
  -webkit-clip-path: polygon(0 0, 50% 50%, 100% 0, 100% 102%, 0 102%);
  clip-path: polygon(0 0, 50% 99%, 100% 0, 100% 102%, 0 102%);
  width: 100%;
  height: 100px;
  background: #b08008;
}

.footerIcon {
  color: white;
  border: white solid 1px;
  padding: 4px;
  border-radius: 50%;
}

.el-divider--horizontal {
  margin: 0;
  margin-bottom: 10px;
}
.m-b-150 {
  margin-bottom: 150px !important;
}
.p-tb-50 {
  padding-top: 50px;
  padding-bottom: 50px;
}
.page-button {
  padding: 0.6em 2em;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 10px;
  color: rgb(255, 255, 255);
  border: none;
}
.el-footer {
  padding: 0;
  margin-bottom: -5em;
}

.oTitle {
  padding-top: 2em;
  font-size: 28px;
  font-weight: 800;
}

.tTitle {
  padding-bottom: 2em;
  font-size: 28px;
  font-weight: 800;
}

.carousel-slide {
  border: none !important;
}

.project-carousel .carousel-slide {
  padding-top: 5px;
  padding-right: 5px;
}

.carousel-item {
  display: block;
}
</style>
