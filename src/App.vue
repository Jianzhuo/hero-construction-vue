<template>
  <div id="app">
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
      <el-header
        id="pageHeader"
        height="auto"
        style="padding:0;"
      >
        <el-row style="padding-top: 1em">
          <el-col :span="4" :xs="2">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="16" :xs="20">
            <div class="grid-content">
              <!-- Logo -->
              <el-image
                style="width: 10em; padding: 10px; height: auto;"
                :src="require('./assets/images/hero_logo.png')"
                fit="conatin"
              ></el-image>
              <!-- Main menu -->
              <!-- menu button -->
              <i @click="menuIconclick = !menuIconclick; menuList = !menuList; menuTimes = !menuTimes" class="fa menuIcon" v-bind:class="{'fa-list':menuList, 'fa-times':menuTimes}"></i>
            </div>
          </el-col>
          <el-col :span="4" :xs="2">
            <div class="grid-content"></div>
          </el-col>
        </el-row>

        <!-- menu content -->
        <transition name="el-zoom-in-top">
          <div
            v-show="menuIconclick"
            style="position: absolute; padding-top: 90.7px; top: 0; width: 100%; background-color: #b08008; z-index: -1; height:100vh"
          >
            <el-menu background-color="#b08008" text-color="#fff">
              <el-menu-item index="1">
                <span slot="title">HOME</span>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title">ABOUT US</span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title">OUR SERVICES</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">PROJECTS</span>
              </el-menu-item>
              <el-menu-item index="5">
                <span slot="title">AWARDS</span>
              </el-menu-item>
              <el-menu-item index="6">
                <span slot="title">OUR PARTNERS</span>
              </el-menu-item>
              <el-menu-item index="7">
                <span slot="title">CONTACT US</span>
              </el-menu-item>
            </el-menu>
          </div>
        </transition>
      </el-header>

      <router-view/>

      

      <el-footer style="padding: 0;">
        <!-- the top parrt of the footer  -->
        <div class="footerTop"></div>
        <!-- the main parrt of the footer -->
        <div style="background: #b08008; padding-top: 30px">
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
        if (window.pageYOffset >= 70) {
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
.headerMain-bg {
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.49);
}

body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menuIcon {
  font-size: 1.7em;
  color: #851719;
  padding-top: 1em;
  float: right;
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

footer {
  color: white;
  font-size: 0.7em; 
  position: relative; 
  bottom: 12em;
}

.footerTop {
  -webkit-clip-path: polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 0, 50% 99%, 100% 0, 100% 100%, 0 100%);
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
.m-b-150{
  margin-bottom:150px !important;
}
.p-tb-50{
  padding-top:50px;
  padding-bottom:50px;
}
.page-button{
  padding: 0.6em 2em;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 10px;
  color: rgb(255, 255, 255);
}
</style>
