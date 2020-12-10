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
      <router-view></router-view>
    </main>
    <nav>
      <router-link to="/" class="nav-child" @click.native="title('HOME')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23">
          <path id="star" d="M13,2l3.4,6.912L24,10.027,18.5,15.4,19.8,23,13,19.412,6.2,23l1.3-7.6L2,10.027,9.6,8.912Z" transform="translate(-1 -1)" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
        HOME
      </router-link>
      <router-link to="/OpenStore" class="nav-child" @click.native="title('SHOP')">
        <svg xmlns="http://www.w3.org/2000/svg" width="26.521" height="21.767" viewBox="0 0 26.521 21.767">
          <g id="グループ_59" data-name="グループ 59" transform="translate(-122.339 -732.575)">
            <path id="パス_52" data-name="パス 52" d="M293.254,147.16H276.623c-.745,0-1.348.826-1.348,1.846V154l-3.483,1.433a1.994,1.994,0,0,0-1.022,1.914l.106,8.735h2.665c0-.04,0-.079-.006-.119,0-.025,0-.051,0-.077a2.316,2.316,0,0,1,.023-.345,3.051,3.051,0,0,1,6.063,0,2.324,2.324,0,0,1,.023.345c0,.026,0,.053,0,.077q0,.059-.006.119h10.591c0-.025,0-.051,0-.077a2.324,2.324,0,0,1,.023-.345,3.051,3.051,0,0,1,6.063,0,2.328,2.328,0,0,1,.023.345c0,.026,0,.053,0,.077h.962V152.686C297.289,149.632,295.483,147.16,293.254,147.16Zm1.37,13.782H279.155v-9.976h15.469Z" transform="translate(-148.43 585.415)" fill="#fff"/>
            <path id="長方形_86" data-name="長方形 86" d="M0,0H2.946a0,0,0,0,1,0,0V2.315A1.473,1.473,0,0,1,1.473,3.788h0A1.473,1.473,0,0,1,0,2.315V0A0,0,0,0,1,0,0Z" transform="translate(129.57 736.387)" fill="#f2a2a2" stroke="#fff" stroke-miterlimit="10" stroke-width="0.5"/>
            <path id="長方形_87" data-name="長方形 87" d="M0,0H2.946a0,0,0,0,1,0,0V2.315A1.473,1.473,0,0,1,1.473,3.788h0A1.473,1.473,0,0,1,0,2.315V0A0,0,0,0,1,0,0Z" transform="translate(132.506 736.387)" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="0.25"/>
            <path id="長方形_88" data-name="長方形 88" d="M.054,0H2.892a.054.054,0,0,1,.054.054V2.315A1.473,1.473,0,0,1,1.473,3.788h0A1.473,1.473,0,0,1,0,2.315V.054A.054.054,0,0,1,.054,0Z" transform="translate(135.471 736.387)" fill="#f2a2a2" stroke="#fff" stroke-miterlimit="10" stroke-width="0.5"/>
            <path id="長方形_89" data-name="長方形 89" d="M0,0H2.946a0,0,0,0,1,0,0V2.315A1.473,1.473,0,0,1,1.473,3.788h0A1.473,1.473,0,0,1,0,2.315V0A0,0,0,0,1,0,0Z" transform="translate(138.423 736.387)" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="0.25"/>
            <path id="長方形_90" data-name="長方形 90" d="M0,0H2.946a0,0,0,0,1,0,0V2.315A1.473,1.473,0,0,1,1.473,3.788h0A1.473,1.473,0,0,1,0,2.315V0A0,0,0,0,1,0,0Z" transform="translate(141.369 736.387)" fill="#f2a2a2" stroke="#fff" stroke-miterlimit="10" stroke-width="0.5"/>
            <path id="長方形_91" data-name="長方形 91" d="M0,0H2.946a0,0,0,0,1,0,0V2.315A1.473,1.473,0,0,1,1.473,3.788h0A1.473,1.473,0,0,1,0,2.315V0A0,0,0,0,1,0,0Z" transform="translate(144.289 736.387)" fill="#fff" stroke="#fff" stroke-miterlimit="10" stroke-width="0.25"/>
            <path id="パス_53" data-name="パス 53" d="M294.845,239.452a2.112,2.112,0,0,1-4.224,0,2.014,2.014,0,0,1,.011-.215,2.112,2.112,0,0,1,4.2,0A2.014,2.014,0,0,1,294.845,239.452Z" transform="translate(-164.538 512.239)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
            <path id="パス_54" data-name="パス 54" d="M383.294,239.653a2.112,2.112,0,0,1-4.224,0,2.009,2.009,0,0,1,.011-.215,2.112,2.112,0,0,1,4.2,0A2,2,0,0,1,383.294,239.653Z" transform="translate(-236.307 512.076)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
          </g>
        </svg>
        SHOP
      </router-link>
      <router-link to="/Menu" class="nav-child" @click.native="title('MENU')">
        <svg xmlns="http://www.w3.org/2000/svg" width="21.755" height="29.697" viewBox="0 0 21.755 29.697">
          <g id="グループ_60" data-name="グループ 60" transform="translate(0.311 0.688)">
            <path id="パス_55" data-name="パス 55" d="M114.264,313.139,107.3,309.7a6.461,6.461,0,0,0-7.995,1.862l-4.39,5.736a1.821,1.821,0,0,0-.021,2.188l12.73,17.3a1.824,1.824,0,0,0,3.255-.707l2.477-11.893,1.88-9.031A1.821,1.821,0,0,0,114.264,313.139ZM101.9,316.387c-.3,0-.6.009-.9.026a4.4,4.4,0,0,1,8.7.9,4.242,4.242,0,0,1-.161,1.171A14.218,14.218,0,0,0,101.9,316.387Z" transform="translate(-94.352 -309.025)" fill="#fff" stroke="#f2a2a2" stroke-miterlimit="10" stroke-width="1"/>
            <path id="パス_56" data-name="パス 56" d="M161.755,355.017c0-.154-.007-.308-.019-.462a7.445,7.445,0,0,0-3.757-5.525" transform="translate(-142.785 -339.567)" fill="none" stroke="#f2a2a2" stroke-miterlimit="10" stroke-width="1"/>
            <path id="パス_57" data-name="パス 57" d="M100.391,340.26a14.068,14.068,0,0,0-6.46,1.9c-.064.038-.128.076-.192.116" transform="translate(-93.74 -332.872)" fill="none" stroke="#f2a2a2" stroke-miterlimit="10" stroke-width="1"/>
            <path id="パス_58" data-name="パス 58" d="M149.957,415.556a6.99,6.99,0,0,1-2.859.848,7.921,7.921,0,0,1-1.9-.045" transform="translate(-133.029 -390.357)" fill="none" stroke="#f2a2a2" stroke-miterlimit="10" stroke-width="1"/>
            <path id="パス_59" data-name="パス 59" d="M150.909,420.842a6.283,6.283,0,0,1-2.445.7,7.138,7.138,0,0,1-1.619-.028" transform="translate(-134.284 -394.393)" fill="none" stroke="#f2a2a2" stroke-miterlimit="10" stroke-width="1"/>
            <path id="パス_60" data-name="パス 60" d="M121.192,320.654c-3.219.568-6.112,2.26-8.926,3.922-.13.076-.277.184-.266.334a.346.346,0,0,0,.19.247,2.051,2.051,0,0,0,1.594.006c3.289-.91,6.608-2.044,10.017-1.866a1.351,1.351,0,0,1,.473.085.973.973,0,0,1,.329,1.335,2.491,2.491,0,0,1-1.188.949,3.852,3.852,0,0,0-1.3.819" transform="translate(-107.68 -317.903)" fill="none" stroke="#f2a2a2" stroke-miterlimit="10" stroke-width="1"/>
          </g>
        </svg>
        MENU
      </router-link>
      <router-link to="/AR" class="nav-child" @click.native="title('AR')">
        <svg id="カメラアイコン9_1_" data-name="カメラアイコン9(1)" xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 26 22">
          <path id="パス_22" data-name="パス 22" d="M193.7,220.786a2.709,2.709,0,1,0,2.685,2.709A2.7,2.7,0,0,0,193.7,220.786Z" transform="translate(-180.701 -210.773)" fill="#fff"/>
          <path id="パス_23" data-name="パス 23" d="M25.227,49.069a2.607,2.607,0,0,0-1.873-.8H20.489a.6.6,0,0,1-.545-.369l-.858-1.966a2.644,2.644,0,0,0-2.415-1.607H9.329a2.647,2.647,0,0,0-2.416,1.607L6.056,47.9a.6.6,0,0,1-.545.369H2.646a2.613,2.613,0,0,0-1.875.8A2.763,2.763,0,0,0,0,50.99V63.6a2.762,2.762,0,0,0,.771,1.922,2.608,2.608,0,0,0,1.875.8H23.354a2.6,2.6,0,0,0,1.873-.8A2.753,2.753,0,0,0,26,63.6V50.99A2.753,2.753,0,0,0,25.227,49.069Zm-7.988,12.2a5.86,5.86,0,0,1-8.477,0,6.312,6.312,0,0,1,0-8.73,5.864,5.864,0,0,1,8.477,0,6.314,6.314,0,0,1,0,8.73Zm6.221-8.1H21.642V51.311h1.818Z" transform="translate(0 -44.326)" fill="#fff"/>
        </svg>
        AR
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

<style lang="scss">
@import "./sass/ress.scss";
@import "./sass/nav.scss";
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