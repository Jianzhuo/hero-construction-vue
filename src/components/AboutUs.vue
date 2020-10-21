<template>
  <div>
    <div class="about-banner">
      <img src="../assets/images/about-banner.jpg">
      <h1>Delivering modern comfort and enjoyment to residential and commercial spaces</h1>
    </div>
    <div class="about-content p-tb-50">
        <div class="oTitle">
          <span style="color: #851719">ABOUT</span>
          <span style="color: #b08008">HERO INTERNATIONAL</span>
        </div>
        <p>
          Hero International Co., Ltd. (hereafter referred to as Hero International) is a premium New Zealand owned and operated company, established in 2010. We began as a construction company focused on building high-quality properties with great high-value，has gained extensive experience in property construction.
          <br><br>
          Hero International delivers a range of enjoyable design and stylish properties throughout New Zealand. We have worked with a variety of subdivisions and aim to become a team revered for our commitment to bring high-quality homes and delightful building experiences to New Zealand. Since 2017, Hero International has stepped into the commercial real estate sector and have undertaken large-scale commercial projects. Nowadays Hero has become a member of Site Safe and Master Builder and hold the certifications of LBP Carpentry Site 2, NZGBC Assessor, established a corporate image of high-quality builders in the construction industry.
          <br><br>
          Hero International has been trying to expand into new business areas.to combine construction projects with other business ventures. Today Hero International provides a wide range of experience and service offering for our customers including international trading, tourism and property management, strives to build a diversified industrial chain based on integration of the comparative advantages between China and New Zealand.
        </p>
    </div>
    <div class="the-director p-tb-50">
      <div class="the-director-content">
        <div class="oTitle">
          <span style="color: #851719">THE</span>
          <span style="color: #b08008">DIRECTOR</span>
        </div>
        <div class="director-left">
          <p>
            Gavin Liu - graduated from Massey University in New Zealand. Founded Hero Construction Co., Ltd. in 2005, led the team to the forefront of New Zealand’s construction industry.
            <br><br>
            In 2010, he began to lead the company to real estate development management, and gradually developed towards tourism, and international trade.
            <br><br>
            Has long been engaged in research and practice in the field of real estate development, construction, and management, Gavin has built up his excellent large-scale project management skills and keen real estate investment development vision.
          </p>
        </div>
        <div class="director-right">
          <img src="../assets/images/about-director.png">
        </div>
      </div>
    </div>
    <div class="team-builder m-b-150">
        <div class="oTitle">
          <span style="color: #851719">OUR</span>
          <span style="color: #b08008">TEAM BUILDER</span>
        </div>
        <p>
          We have a high-quality, strong experience and professional real estate investment development and management construction team. Well-trained professional construction team, experienced on-site supervision manager, famous local design team, and long-term cooperation with local suppliers.
          <br><br>
          It is our pursuit and our responsibility to pay attention to the customer’s investment return and create value-for-money brand value for our customers.
        </p>
        <img src="../assets/images/about-team.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data: () => ({

  })
};
</script>
<style scoped>
.about-banner{
  width:100%;
  height:auto;
  position: relative;
  text-align: center;
}
.about-banner img{
  width:100%;
}
.about-banner h1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:white;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 32px;
  line-height: 46px;
}
.about-content, .the-director-content, .team-builder{
  width:70%;
  margin:0 auto;
}
.about-content p{
  text-align: justify;
  font-size:16px;
  margin-top:25px;
}
.the-director{
  background-color: #E2E2E2;
  text-align:left;
}
.director-left{
  width:63%;
  display: inline-block;
  vertical-align: top;
  text-align:justify;
  padding-right: 1%;
}
.director-left p{
  padding-right: 20px;
  font-size:16px;
  margin-top:25px;
}
.director-right{
  width:35%;
  display: inline-block;
  vertical-align: top;
}
.director-right img{
  width:100%;
}
.team-builder p{
  font-size:16px;
  margin:25px auto;
}
.team-builder img{
  width:80%;
}
</style>