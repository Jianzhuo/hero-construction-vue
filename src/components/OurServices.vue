<template>
  <div>
    <div class="service-banner">
      <img src="../assets/images/service-banner.jpg">
      <h1>We work with customers to help build better</h1>
    </div>
    <div class="service-content p-tb-50">
        <div style="font-size: 1.5em; font-weight: 600">
          <span style="color: #851719">OUR</span>
          <span style="color: #b08008">SERVICES</span>
        </div>
        <p>
          Hero International Ltd. provides effective leadership, sharp attention to detail and a valued partnership you can count on throughout the life of your project.
          <br><br>
          Hero International provides comprehensive construction management consulting services. Possess the engineering and construction experience to provide real-world, cost-effective solutions to the everyday challenges that owners, contractors, engineers, and architects face throughout the construction process. From the initial concept to project closeout, we assist our clients in facilitating and coordinating the construction process to mitigate complex problems.
        </p>
        <div class="service-features">
            <div class="services-features-box">
                <div class="services-features-box-img"></div>
                <h4>House Design</h4>
                <p>Make your deam house to real</p>
            </div>
            <div class="services-features-box">
                <div class="services-features-box-img"></div>
                <h4>Build / Rebuild</h4>
                <p>Professional team, Professional service</p>
            </div>
            <div class="services-features-box">
                <div class="services-features-box-img"></div>
                <h4>Interior Renovation</h4>
                <p>Provide you with the most suitable decoration plan</p>
            </div>
            <div class="services-features-box">
                <div class="services-features-box-img"></div>
                <h4>House Design</h4>
                <p>Make your deam house to real</p>
            </div>
            <div class="services-features-box">
                <div class="services-features-box-img"></div>
                <h4>Build / Rebuild</h4>
                <p>Professional team, Professional service</p>
            </div>
            <div class="services-features-box">
                <div class="services-features-box-img"></div>
                <h4>Interior Renovation</h4>
                <p>Provide you with the most suitable decoration plan</p>
            </div>
        </div>
    </div>
    <GetInTouch></GetInTouch>
  </div>
</template>

<script>

import GetInTouch from './GetInTouch'

export default {
  name: "OurServices",
  components:{GetInTouch},
  data: () => ({

  })
};
</script>
<style scoped>
.service-banner{
  width:100%;
  height:auto;
  position: relative;
  text-align: center;
}
.service-banner img{
  width:100%;
}
.service-banner h1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:white;
  text-transform: uppercase;
}
.service-content{
  width:70%;
  margin:0 auto;
}
.service-content p{
  text-align: justify;
}
.service-features{
    margin:20px auto;
}
.services-features-box{
    width: 31%;
    margin: 20px 1%;
    display:inline-block;
    vertical-align:middle;
}
.services-features-box-img{
    width: 150px;
    height: 150px;
    margin: 0 auto;
    background-color: #AF7B0A;
    border-radius: 50%;
}
.services-features-box h4{
    margin:15px auto 0;
}
.services-features-box p{
    text-align:center;
    margin:5px auto;
}
</style>