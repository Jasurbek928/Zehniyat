<template>
  <div>
    <div class="navbar-section">
      <div class="logo">
         <router-link to="/">
            <img src="../assets/logo_zehniyat-03.svg" alt="">
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
    <div class="route">
      <router-link to="/">Home</router-link>
      <img src="../assets/angle-right.svg" alt="">
      <p>Terms of use</p>
      </div>
    <div class="terms-title">
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing eli</h4>
    </div>
    <div class="terms-content">
      <div>
        <div class="subtitle">1. Lorem Ipsum Dolor Sit Amet</div>
        <p>
          Consectetur adipiscing elit. Nisl, consequat ut cras consectetur. Vel
          aliquet at pellentesque nulla nibh interdum quis senectus consequat.
          Laoreet tellus, consectetur egestas purus diam lorem elit ut.
          Malesuada in volutpat lorem in condimentum et aenean. Quam eu
          convallis purus sapien, vivamus ultrices dolor donec lectus. Neque
          ornare egestas bibendum mauris, condimentum placerat lorem in
          pellentesque. Adipiscing quisque nunc, ac egestas magna ut feugiat. In
          id id ac consectetur pulvinar dolor nulla. Facilisis integer id donec
          ipsum augue sed dignissim ipsum nisi. Pharetra a, ut nullam purus id.
          Nunc semper eu egestas amet feugiat morbi bibendum commodo donec.
        </p>
      </div>
      <div>
        <div class="subtitle">2. Lorem Ipsum Dolor Sit Amet</div>
        <p>
          Consectetur adipiscing elit. Nisl, consequat ut cras consectetur. Vel
          aliquet at pellentesque nulla nibh interdum quis senectus consequat.
          Laoreet tellus, consectetur egestas purus diam lorem elit ut.
          Malesuada in volutpat lorem in condimentum et aenean. Quam eu
          convallis purus sapien, vivamus ultrices dolor donec lectus. Neque
          ornare egestas bibendum mauris, condimentum placerat lorem in
          pellentesque. Adipiscing quisque nunc, ac egestas magna ut feugiat. In
          id id ac consectetur pulvinar dolor nulla. Facilisis integer id donec
          ipsum augue sed dignissim ipsum nisi. Pharetra a, ut nullam purus id.
          Nunc semper eu egestas amet feugiat morbi bibendum commodo donec.
        </p>
      </div>
      <div>
        <div class="subtitle">3. Lorem Ipsum Dolor Sit Amet</div>
        <p>
          Consectetur adipiscing elit. Nisl, consequat ut cras consectetur. Vel
          aliquet at pellentesque nulla nibh interdum quis senectus consequat.
          Laoreet tellus, consectetur egestas purus diam lorem elit ut.
          Malesuada in volutpat lorem in condimentum et aenean. Quam eu
          convallis purus sapien, vivamus ultrices dolor donec lectus. Neque
          ornare egestas bibendum mauris, condimentum placerat lorem in
          pellentesque. Adipiscing quisque nunc, ac egestas magna ut feugiat. In
          id id ac consectetur pulvinar dolor nulla. Facilisis integer id donec
          ipsum augue sed dignissim ipsum nisi. Pharetra a, ut nullam purus id.
          Nunc semper eu egestas amet feugiat morbi bibendum commodo donec.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  text-decoration: none;
}
.navbar-section {
  width: 100%;
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
}
.nav ul li img {
  width: 18px;
  margin-right: 10px;
  align-items: center;
}
.terms-content{
    width: 80%;
    margin: 0 auto;
    text-align:justify;
    color: rgba(49, 51, 51, 0.7);
}
.terms-title{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    color: #131313;
    
}
.subtitle{
    font-weight: bold;
    color: #131313;
}
.route{
  width: 200px;
  display: flex;
  align-items: center;
  margin-left: 120px;
  font-size: 14px;
}
</style>
