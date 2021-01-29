<template>
    <div>
        <router-link to="/Menu/" class="nav-child" exact><span>campaign</span><br>menu<br>キャンペーンメニュー</router-link>
        <router-link to="/Menu/Crape" class="nav-child" exact><span>crape</span><br>menu<br>クレープメニュー</router-link>
        <router-link to="/Menu/Drink" class="nav-child" exact><span>drink</span><br>menu<br>ドリンクメニュー</router-link>
    </div>
</template>

<style lang="scss" scoped>
div{
    width: 100vw;
    display: flex;
    justify-content: space-around;
    a{
        width: 100%;
        color: #fff;
        font-size: 10px;
        text-align: center;
        background-color: #F2A2A2;
        padding: 20px 0;
        span{
            font-size: 18px;
        }
    }
    .nav-child.router-link-exact-active{
    background-color: #D14220;
    }
}
</style>