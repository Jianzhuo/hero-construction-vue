<template>
  <div>
    <div class="project-details-banner">
      <img src="../assets/images/projectdetails-banner.jpg" />
      <h1>WESTGATE PROJECT</h1>
    </div>
    <div class="project-details-content p-tb-50">
      <div class="oTitle">
        <span style="color: #851719">PROJECT</span>
        <span style="color: #b08008">DETAILS</span>
      </div>
      <p>Collaborating with leading industry Urban Architects Isthmus, Hero International limited proudly introduce you to our newest development - ‘Westgate Drive Estate’.</p>

      <div class="projects-details-info-group">
        <div class="projects-details-info">
          <img src="../assets/images/project-icon-1.png" />
          <h4>LOCATION</h4>
          <p>Massey, Auckland</p>
        </div>
        <div class="projects-details-info">
          <img src="../assets/images/project-icon-2.png" />
          <h4>BUDGET</h4>
          <p>$250,000 - $450,000</p>
        </div>
        <div class="projects-details-info">
          <img src="../assets/images/project-icon-3.png" />
          <h4>SURFACE AREA</h4>
          <p>4,200 sq2</p>
        </div>
        <div class="projects-details-info">
          <img src="../assets/images/project-icon-4.png" />
          <h4>TYPE</h4>
          <p>Design & Construct</p>
        </div>
        <div class="projects-details-info">
          <img src="../assets/images/project-icon-5.png" />
          <h4>COMPLETED</h4>
          <p>June 2020</p>
        </div>
      </div>

      
      
<div id="app">
  <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
    <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`"><img :src="slide"/></div>
  </agile>
  <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
    <div class="slide slide--thumbniail" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)"><img :src="slide"/></div>
    <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
    <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
  </agile>
</div>


    </div>
    <GetInTouch></GetInTouch>
  </div>
</template>

<script>
import GetInTouch from "./GetInTouch";
import { VueAgile } from 'vue-agile'

export default { 
    name: "OurPartners",
    

    components: {
		agile: VueAgile,
	},
	data () {
		return {
			asNavFor1: [],
			asNavFor2: [],
			options1: {
				dots: false,
				fade: true,
				navButtons: false
			},
			
			options2: {
				autoplay: true,
				centerMode: true,
				dots: false,
				navButtons: false,
				slidesToShow: 3,
				responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 5
                    }
                },
                
                {
                    breakpoint: 1000,
                    settings: {
                        navButtons: true
                    }
                }
            ]
				
			},
			
			slides: [
					'https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
					'https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
					'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
					'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
					'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
					'https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
					'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
				]
		}
	},
	mounted () {
		this.asNavFor1.push(this.$refs.thumbnails)
		this.asNavFor2.push(this.$refs.main)
	}


};
</script>
<style scoped>
.project-details-banner {
  width: 100%;
  height: auto;
  position: relative;
  text-align: center;
}
.project-details-banner img {
  width: 100%;
}
.project-details-banner h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-transform: uppercase;
  font-weight: 800;
}
.project-details-content {
  width: 70%;
  margin: 0 auto;
}
.project-details-content p {
  text-align: center;
  font-size: 16px;
  margin-top: 25px;
}
.projects-details-info {
  width: 18.8%;
  margin: 1% 0.5%;
  display: inline-block;
  border: 1px solid #851719;
  padding: 10px 15px;
  text-align: left;
}
.projects-details-info img {
  width: 20%;
}
.projects-details-info h4 {
  color: #851719;
  margin: 10px 0;
  font-weight: 800;
}
.projects-details-info p {
  color: #444444;
  text-align: left;
  margin: 0 0 10px;
}
</style>