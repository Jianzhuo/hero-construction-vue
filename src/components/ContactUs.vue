<template>
  <div>
    <div class="contact-banner">
      <img src="../assets/images/contact-banner.jpg" />
      <h1>
        Like what you see?
        <br />We’d love to meet you.
      </h1>
    </div>
    <div class="contact-content p-tb-50">
      <div class="oTitle">
        <span style="color: #851719">CONTACT</span>
        <span style="color: #b08008">US</span>
      </div>
      <p>
        Just a simple step to get in touch with us.
        <br />Fill in the contact form below and we will get back to you very shortly.
      </p>
      <div class="contact-info">
        <div class="contact-info-left">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </div>
        <div class="contact-info-right">
          <p>
            PO BOX 84433, Westgate,
            <br />Auckland,0657
          </p>
        </div>
        <div class="contact-info-left">
          <i class="fa fa-phone" aria-hidden="true"></i>
        </div>
        <div class="contact-info-right">
          <p>+64 0800 166 899</p>
        </div>
        <div class="contact-info-left">
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </div>
        <div class="contact-info-right">
          <p>info@herointernational.co.nz</p>
        </div>
      </div>
      <div class="contact-form">
        <div>
          <b-form @submit="onSubmit" v-if="show">
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input id="input-1" v-model="form.name" required placeholder="Name"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                required
                placeholder="Email Address"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="form.contact"
                required
                placeholder="Contact Number"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-4" label-for="input-4">
              <b-form-input id="input-4" v-model="form.subject" required placeholder="Subject"></b-form-input>
            </b-form-group>
            <b-form-textarea
              id="input-5"
              placeholder="Message"
              rows="8"
              v-model="form.message"
              max-rows="15"
              required
            ></b-form-textarea>
            <b-button type="submit" class="page-button" style="background-color: #851719">Submit</b-button>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      form: {
        name: "",
        email: "",
        contact: "",
        subject: "",
        nessage: []
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>
<style scoped>
.contact-banner {
  width: 100%;
  height: auto;
  position: relative;
  text-align: center;
}
.contact-banner img {
  width: 100%;
}
.contact-banner h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-transform: uppercase;
  font-weight: 800;
}
.contact-content {
  width: 70%;
  margin: 0 auto;
}
.contact-content p {
  text-align: center;
  font-size: 16px;
  margin-top: 25px;
}
.contact-info {
  width: 40%;
  float: left;
  text-align: left;
  vertical-align: top;
  margin-top: 20px;
}
.contact-info-left {
  width: 2%;
  display: inline-block;
  text-align: left;
  vertical-align: top;
}
.contact-info-right {
  width: 97%;
  display: inline-block;
  text-align: left;
  vertical-align: top;
  padding: 0 0 10px 10px;
}
.contact-info-right p {
  text-align: left;
  padding: 0;
  margin: 0;
}
.contact-form {
  width: 60%;
  float: left;
  text-align: left;
  vertical-align: top;
  margin-top: 20px;
  margin-bottom: 9em;
}
.page-button {
  margin-top: 15px;
}
</style>