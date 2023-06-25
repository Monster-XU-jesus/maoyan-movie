<template>
    <div>
        <div class="viTop">猫眼电影</div>
        <div>
            <router-link tag="div" :to="'/limovie?videoid='+item.video.id+'&videourl='+item.video.url" class="smvideo" v-for="item in videolist" :key="item.id" :style="{'background-image':'url('+item.images[0].url+')'}">
                <p>{{item.title}}</p>
                <div class="user">
                    <img :src="item.user.avatarurl" alt="">
                    <div class="username">{{item.user.nickName}}</div>
                </div>
            </router-link>
        </div>
        <botmbar></botmbar>
    </div>
</template>
<script>
import botmbar from "../components/MybtmBar.vue"
import {getVideo} from "../api/video.js"
export default {
    data(){
        return {
            videolist:null,
        }
    },
    methods:{
        getVideoFun(){
            getVideo().then(
                data => {
                    this.videolist = data.data.feeds
                    console.log(this.videolist);
                }
            )
        }
    },
    components:{
        botmbar
    },
    created(){
        this.getVideoFun()
    }
}
</script>
<style lang="less" scoped>
    .viTop {
        background: #e54847;
        color: #fff;
        height: 44px;
        line-height: 44px;
        text-align: center;
        font-size: 17px;
    }
    .smvideo {
        background-image: url("http://p0.meituan.net/movie/f6e87027ea207c89aa53769b2d56d63226608.jpg");
        display: inline-block;
        width: 49.5%;
        height: 300px;
        margin: 0.5% 0.015px 0;
        background-position: 50%;
        background-size: cover;
        position: relative;
        p{
            width: 170px;
            margin: 0 8px;
            position: absolute;
            color:#fff;
            bottom: 40px;
            font-size: 16px;
        }
        .user {
            margin: 0 8px;
            display: flex;
            align-items: center;
            font-size: 12px;
            position: absolute;
            bottom: 10px;
            img {
                opacity: 0.9;
                border: 1px solid rgba(28, 28, 20,0.5);
                width: 22px;
                height: 22px;
                border-radius: 50%;
                display: block;
            }
            .username {
                margin: 0 6px;
                flex: 1;
                display: inline-block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #fff;
            }
        }
    }
</style>