<template>
  <div>
    <div class="get-in-touch">
      <div style="font-size: 1.5em; font-weight: 600">
        <span style="color: #FFFFFF">GET IN</span>
        <span style="color: #b08008">TOUCH</span>
      </div>
      <p>Like what you see? We'd love to meet you.</p>
      <span
        v-on:click="clickContact"
        class="page-button"
        style="background-color: #b08008"
      >Contact Us</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetInTouch",
  data: () => ({}),
  methods: {
    clickContact() {
      this.$router.push({ path: "/ContactUs" });
    },
  },
};
</script>

<style>
.get-in-touch {
  background-color: #851719;
  text-align: center;
  background-image: url(../assets/images/get-in-touch-bg.png);
  background-size: 20%;
  background-position: 80% 20%;
  background-repeat: no-repeat;
  padding: 50px 0 230px;
}
.get-in-touch p {
  color: #fff;
  padding-bottom: 20px;
}
</style>