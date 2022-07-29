<template>
  <div class="container">
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
      <p>Privacy Police</p>
      </div>
    

    <div class="title">
      Lorem ipsum dolor sit amet, consectetur adipiscing eli
    </div>
    <div class="title-more">
      Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Nisl, consequat ut cras
      consectetur. Vel aliquet at pellentesque nulla nibh interdum quis senectus
      consequat. Laoreet tellus, consectetur egestas purus diam lorem elit ut.
      Malesuada in volutpat lorem in condimentum et aenean. Quam eu convallis
      purus sapien, vivamus ultrices dolor donec lectus. Feugiat convallis in a,
      volutpat ac ac ut posuere. Ullamcorper placerat sem sagittis velit. Nam
      sed massa magna posuere massa pretium. Neque ornare egestas bibendum
      mauris, condimentum placerat lorem in pellentesque. Adipiscing quisque
      nunc, ac egestas magna ut feugiat. In id id ac consectetur pulvinar dolor
      nulla. Facilisis integer id donec ipsum augue sed dignissim ipsum nisi.
      Pharetra a, ut nullam purus id. Nunc semper eu egestas amet feugiat morbi
      bibendum commodo donec. <br />
      <br />

      Gravida convallis integer posuere tellus enim. Tincidunt lectus amet,
      tempor nunc nibh praesent. Facilisi mattis arcu ligula mi. Neque aliquam
      risus turpis enim ultricies sit eu. Consectetur dignissim facilisis
      euismod ac, vitae, turpis est bibendum. Eros velit, in mi velit a arcu
      tempor. Ornare nulla duis amet vel sagittis, quis phasellus. Tempor
      placerat fringilla tellus dignissim et, magna massa. Dignissim morbi ut
      nam velit netus auctor velit vel sit. Diam velit, aenean at morbi nec
      commodo non nisi. Ultricies varius dapibus purus eu iaculis aenean vitae
      sit. Vitae suspendisse viverra vulputate sit arcu nibh ullamcorper
      malesuada. Sed dolor tristique purus donec amet elementum sed. Dui,
      scelerisque proin viverra pharetra, nibh. Sed in eu nec, eget adipiscing.
      In sit euismod et nec auctor quis. Egestas dolor morbi id metus, posuere
      fusce. In posuere cras aliquam diam leo lectus nunc commodo. <br />
      <br />

      Odio tincidunt tincidunt tristique amet sit sagittis, tempor. Diam egestas
      nibh arcu pharetra egestas tortor nunc est ut. Tristique elementum mi eget
      nulla varius risus sed. Vitae nibh nibh sed risus adipiscing tellus est
      sagittis dolor. Consequat ac dictum sed eros, non mauris. Nisl nisi, in
      cras sed donec proin nullam ac dignissim. Egestas imperdiet tellus lorem
      nisi. Arcu sit tempor sed egestas viverra. Augue id faucibus dui
      consectetur viverra quam tempus, non faucibus. Quam commodo vitae duis
      etiam nisi, varius orci nunc. Quis cursus facilisis sapien netus. Ultrices
      nisi felis vitae amet.
    </div>
  </div>
</template>

<script>

export default {
  components: {
  
  },
};
</script>

<style scoped>
*{
    text-decoration: none;
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
}
.nav ul li img {
  width: 18px;
  margin-right: 10px;
  align-items: center;
}
.title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  color: #131313;
  margin-top: 50px;
  margin-bottom: 30px;
}
.title-more {
  width: 80%;
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-transform: capitalize;
  color: rgba(49, 51, 51, 0.7);
  margin: 0 auto;
  text-align: justify;
}
.route{
  width: 200px;
  display: flex;
  align-items: center;
  margin-left: 120px;
  font-size: 14px;
}

</style>
