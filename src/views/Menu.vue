<template>
    <div>
        <h1>Menu</h1>
        <router-view/>
        <menuHeader></menuHeader>
    </div>
</template>

<script>
import menuHeader from '../components/header.vue'
export default {
    components:{
        menuHeader: menuHeader
    }
}
</script>

<style>
@import "../sass/common.scss";
</style>