<template>
    <div>
        <div class="nav">
            <button class="nav-child" id="campaign" @click="view1();"><span>campaign</span><br>menu<br>キャンペーンメニュー</button>
            <button class="nav-child" id="crape" @click="view2();"><span>crape</span><br>menu<br>クレープメニュー</button>
            <button class="nav-child" id="drink" @click="view3();"><span>drink</span><br>menu<br>ドリンクメニュー</button>
        </div>
        <!-- <menuHeader></menuHeader> -->
        <component :is="currentView" id="menu-comoponent"></component>
    </div>
</template>

<script>
import campaign from '../views/campaign.vue'
import crape from '../views/crape.vue'
import drink from '../views/drink.vue'
export default {
    components:{
        campaign,
        crape,
        drink
    },
    data(){
        return{
            currentView: 'campaign'
        }
    },
    methods: {
        view1() {
            this.currentView = "campaign";
            let campaign = document.getElementById('campaign');
            campaign.style.backgroundColor = '#D14220';
        },
        view2() {
            this.currentView = "crape";
            let crape = document.getElementById('crape');
            crape.style.backgroundColor = '#D14220';
        },
        view3() {
            this.currentView = "drink";
            let drink = document.getElementById('drink');
            drink.style.backgroundColor = '#D14220';
        },
    }
}
</script>

<style lang="scss" >
@import "../sass/common.scss";
body{
    height: 100px;
}
.nav{
    width: 100vw;
    display: flex;
    justify-content: space-around;
    button{
        width: 125px;
        color: #fff;
        font-size: 10px;
        text-align: center;
        background-color: #F2A2A2;
        padding: 20px 0;
        border: none;
        span{
            font-size: 18px;
        }
    }
}
.menu {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 30px 5% 120px;
    background-color: #f4f4f4;
    .title {
        margin-bottom: 10px;
        p {
            font-size: 16px;
            margin-bottom: -10px;
            letter-spacing: 3px;
        }
        span {
            font-size: 10px;
        }
    }
    .card {
        width: 100%;
        border: none;
        padding: 15px;
        padding-bottom: 5px;
        box-shadow: 4px 6px 9px rgba(0, 0, 0, 0.4);
        font-size: 16px;
        &-body {
            padding: 0;
            line-height: 0.5;
        }
        &-title {
            font-size: 10px;
        }
    }
}
</style>