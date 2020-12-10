<template>
    <div>
        <h1>通知設定</h1>
        <label>
            <input type="checkbox" @click="notice()">
            通知
        </label>
    </div>
</template>

<script>
import Vue from 'vue'
import Notifications from 'vue-notification'
Vue.use(Notifications);
export default {
    data(){
        return{
            flag: false,
        }
    },
    methods:{
        notice: function(){
            let previousMinutes;
            const checkTime = function(){
                const currentTime = new Date();
                const minutes = currentTime.getMinutes();
                if(previousMinutes !== minutes && minutes % 1 === 0){
                    previousMinutes = minutes;
                    new Notification("新商品が完成しました!!");
                }
            }

            this.flag = !this.flag;

            if(this.flag){
                Notification.requestPermission();
                setInterval(checkTime, 1000);
                console.log("通知ON");
            }else if(!this.flag){
                console.log("通知OFF");
            }
        }
    }
}
</script>