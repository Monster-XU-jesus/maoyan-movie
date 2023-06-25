<template>
    <div class="main">
            <div class="classic">
                <div class="movie" v-for="item in classiclist" :key="item.movieId">
                    <div class="img">
                        <img :src="item.poster" alt="">
                        <div class="item">
                            <h2>{{item.movieInfo.title}}</h2>
                            <p>{{item.movieInfo.englishTitle}}</p>
                            <p>{{item.movieInfo.actors}}</p>
                            <p>{{item.movieInfo.showInfo}}</p>
                        </div>
                    </div>
                    <div class="point">
                        <span>{{item.score}}</span>
                        <div v-if="item.score">分</div>
                    </div>
                </div>
            </div>
        <btombar></btombar>
    </div>
</template>
<script>
import btombar from "../components/MybtmBar.vue"
import {getClassicList} from "../api/classic.js"
export default {
    data(){
        return {
            classiclist:null,
        }
    },
    methods:{
        getClassiclistFun(){
            getClassicList().then(
                data => {
                    this.classiclist = data
                    // console.log(this.classiclist);
                }
            )
        }
    },
    components:{
        btombar
    },
    created(){
        this.getClassiclistFun()
    }
}
</script>
<style lang="less">
    .main {
        .classic {
            padding-top: 16px;
            .movie {
                display: flex;
                justify-content: space-between;
                margin-left: 20px;
                margin-bottom: 20px;
                .img {
                    display: flex;
                    align-items: center;
                    img {
                        width: 66px;
                        height: 94px;
                    }
                    .item {
                        margin-left: 6px;
                        h2 {
                            font-weight: bold;
                            color:#333333;
                        }
                        p {
                            color: #666;
                            font-size: 14px;
                            margin-top: 4px;
                        }
                    }
                }
                .point {
                    display: flex;
                    margin-right: 6px;
                    span {
                        color: #fbb600;
                        font-size: 16px;
                    }
                    div {
                        font-size: 14px;
                        color: #999999;
                    }
                }
            }
        }
    }
</style>