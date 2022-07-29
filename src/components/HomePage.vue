<template>
  <div class="home">
    <div class="navbar-section">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo_zehniyat-03.svg" alt="" />
        </router-link>
      </div>
      <div class="nav">
        <ul>
          <li>
            <router-link to="/police">Privacy policy</router-link>
          </li>
          <li>
            <router-link to="/terms">Terms of use </router-link>
          </li>
          <li>
            <img src="../assets/Icon.svg" alt="" />
            <a href="mailto:Zehniyat@gmail.com">Zehniyat@gmail.com</a>
          </li>
          <li>
            <img src="../assets/Icon (1).svg" alt="" />
            <a href="tel:+99890 123 45 67">+99890 123 45 67</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="main-section">
      <div class="main-title">
        <h3>
          consectetur adipiscing elit. Est quam <br />
          semper quisque
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est quam
          semper quisque felis <br />
          proin urna, rhoncus nec pharetra. Amet egestas elit, fermentum
        </p>
      </div>
    </div>
    <Slider3D />
    <div class="social">
        <ul>
            <li>
            <router-link to="/">
            <img class="google-play" src="../assets/Google Play - eng (1).svg" alt="">
            </router-link>
            </li>
            <li>
            <router-link to="/">
            <img class="google-play" src="../assets/App Store - eng.svg" alt="">
            </router-link>
            </li>
            <li>
            <router-link to="/">
            <img class="network" src="../assets/YouTube.svg" alt="">
            </router-link>
            </li>
            <li>
            <router-link to="/">
            <img class="network" src="../assets/Instagram.svg" alt="">
            </router-link>
            </li>
            <li>
            <router-link to="/">
            <img class="network" src="../assets/Telegram.svg" alt="">
            </router-link>
            </li>
            
        </ul>
    </div>
  </div>
</template>

<script>

import Slider3D from "../components/Slider3D.vue";
import "@fontsource/poppins";
export default {
    components: { Slider3D },
  data() {
      return {};
  },
};
</script>

<style scoped>
.home {
  background-image: url("../assets/Vector\ 11\ \(1\).svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100% !important;
}
.navbar-section {
  display: flex;
  align-items: center;
}
.logo {
  margin-left: 120px;
  margin-top: 10px;
}
.logo img {
  width: 130px;
}
.nav {
  display: flex;
  justify-content: space-between;
  margin-left: 100px;
}
.nav ul li {
  display: inline-block;
  margin-left: 30px;
  color: #313333;
  font-size: 18px;
  font-family: "Poppins";
  cursor: pointer;
  text-decoration: none;
}
.nav ul li img {
  width: 18px;
  margin-right: 10px;
  align-items: center;
}
.main-section {
  text-align: center;
  margin-top: 50px;
}
.main-title h3 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 40px;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  color: #313333;
  width: 100%;
}
.main-title p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  text-transform: capitalize;
  color: rgba(49, 51, 51, 0.7) ;
}
.social{
    margin-top: 50px;
}
.social ul {
    display: flex;
    justify-content: center;
}
.social ul li{
    list-style: none;
    margin-left: 30px;
}
.network{
    width: 48px;
    height: 48px;
}
.google-play{
    width: 170px;
    height: 50px;
}
</style>
