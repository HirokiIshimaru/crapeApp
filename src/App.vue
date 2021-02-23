  <template>
  <div class="wrapper">
    <header>
      <div class="header-box">
        <h1>{{headerTitle}}</h1>
      </div>
      <router-link to="/Setting" class="setting">
        <img src="@/assets/setting.png" alt="">
      </router-link>
    </header>
    <main>
      <router-view/>
    </main>
    <nav>
      <router-link to="/" class="nav-child" exact @click.native="title('HOME')">
        <img src="./assets/home.svg" alt="home-icon">
        <span class="nav-name">HOME</span>
      </router-link>
      <router-link to="/OpenStore" class="nav-child" exact @click.native="title('SHOP')">
        <img src="./assets/shop.svg" alt="shop-icon">
        <span class="nav-name">SHOP</span>
      </router-link>
      <router-link to="/Menu" class="nav-child" exact @click.native="title('MENU')">
        <img src="./assets/menu.svg" alt="menu-icon">
        <span class="nav-menu">MENU</span>
      </router-link>
      <router-link to="/AR" class="nav-child" exact @click.native="title('AR')">
        <img src="./assets/ar.svg" alt="ar-icon">
        <span class="nav-name">AR </span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return{
      headerTitle: "HOME"
    }
  },
  methods: {
    title:function(headerTitle){
      this.headerTitle = headerTitle
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./sass/ress.scss";
@import "./sass/nav.scss";
@import "./sass/common.scss";
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

html,body{
  width: 100%;
  height: 100%;
  position: relative;
}
header{
  width: 100%;
  height: 88px;
  background-color: #D14220;
  position: relative;
}
.header-box{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.setting{
  position: absolute;
  bottom: 15px;
  right: 25px;
}

</style>