<template>
    <section class="map">
        <div class="banner">
            <div class="card text-white">
                <img src="@/assets/img-stroke-small.png" class="card-img" alt="...">
                <div class="card-img-overlay text-center">
                    <div class="card-title" style="font-size: 16px;">business hours<p style="font-size: 12px;">営業時間</p>11:00 - 18:00</div>
                </div>
            </div>
        </div>
        <div class="banner">
            <div class="card text-white">
                <img src="@/assets/img-stroke.png" class="card-img" alt="...">
                <div class="card-img-overlay text-center">
                    <div class="card-title" style="font-size: 16px;">Shop MAP<p style="font-size: 12px;">お店の場所</p></div>
                    <div class="today" style="font-size: 12px;">
                        <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17">
                            <g id="旗のフリーアイコンその3" transform="translate(-0.001 -25.726)">
                            <path id="パス_41" data-name="パス 41" d="M144.673,83.775c2.383.378,7.865,3.216,7.132,5.289l-.21.9a4.583,4.583,0,0,0,4.659,2.606c-.733,2.168-2.745,2.823-5.209,2.954-3.721-.2-3.217-1.17-3.217-1.17s3.07-1.492-6.455-2.473Z" transform="translate(-138.253 -55.719)" fill="#fff"/>
                            <path id="パス_42" data-name="パス 42" d="M.966,42.726a1.036,1.036,0,0,1-.337-.056.868.868,0,0,1-.567-1.14L6.23,26.3a.992.992,0,0,1,1.24-.521.867.867,0,0,1,.567,1.14L1.869,42.148A.965.965,0,0,1,.966,42.726Z" transform="translate(0 0)" fill="#fff"/>
                            </g>
                        </svg><br>
                        TODAY
                        </p>
                        <p>LOFT梅田店前</p>
                        <img src="@/assets/img-map-today.png" class="img-fluid" alt="map today">
                    </div>
                    <div class="tomorrow" style="font-size: 12px;">
                        <p>TOMORROW</p>
                        <p>LOFT梅田店前</p>
                        <img src="@/assets/img-map-today.png" class="img-fluid" alt="map today">
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    data(){
        return{
            aaa:[
                {
                    img:require('@/assets/img-banner-corona.png')
                }
            ]
        }
    }
}
</script>>

<style lang="scss" scoped>
@import "../sass/common.scss";

.map{
    width: 100%;
    height: 100%;
    text-align: center;
    padding-bottom: 100px;
    .banner{
        margin: 24px 0;
        .card{
            background: #6C4E44; padding: 5px;
            .today{
                margin-bottom: 30px;
            }
            .today, .tomorrow{
                img{
                    margin-top: -10px;
                    width: 100%;
                }
            }
        }
    }
}
</style>