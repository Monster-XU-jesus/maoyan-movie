<template>
  <div>
    <div class="showMovie">
      <div class="niceTalk">近期最受期待</div>
      <!-- 好评电影层 -->
      <div class="more">
        <div class="niceMovie" v-for="item in expectlist" :key="item.id">
          <div class="img">
            <img :src="item.img" alt />
            <span>{{item.wish}}人想看</span>
            <!-- 阴影层 -->
            <p class="like">
              <span></span>
            </p>
            <div></div>
          </div>
          <h4>{{item.nm}}</h4>
          <p>{{item.comingTitle}}</p>
        </div>
      </div>
    </div>
    <div class="mask"></div>
    <div class="showMovie2" v-for="item in readylist" :key="item.id">
        <p class="date">{{item.comingTitle}}</p>
      <div class="mob" >
        <div class="left">
          <img :src="item.img" alt />
        </div>
        <div class="right">
          <div class="text">
            <h3>{{item.nm}}</h3>
            <p class="point">
              <span>{{item.wish}}</span>人想看
            </p>
            <p>
              主演
              <span>{{item.star}}</span>
            </p>
            <p>{{item.showInfo}}</p>
          </div>
          <div class="but">预售</div>
        </div>
      </div>
    </div>
    <botmbar></botmbar>
  </div>
</template>

<script>
import botmbar from "../components/MybtmBar.vue";
import { getReadyMovie, getReadyMovieList } from "../api/ready.js";
export default {
  data() {
    return {
      expectlist: null,
      readylist: null
    };
  },
  methods: {
    getReadyMovieFun() {
      getReadyMovie().then(data => {
        this.expectlist = data.coming;
      });
    },
    getReadyMovieListFun() {
      getReadyMovieList().then(data => {
        this.readylist = data.coming;
        
      });
    }
  },
  created() {
    this.getReadyMovieFun();
    this.getReadyMovieListFun();
  },
  components: {
    botmbar
  }
};
</script>
<style lang="less">
.showMovie {
  padding: 0 14px;
  background: #fff;
  .niceTalk {
    height: 44px;
    line-height: 44px;
    font-size: 14px;
  }
  .more {
    display: flex;
    overflow: hidden;
    overflow: scroll;
  }
  .niceMovie {
    margin-right: 10px;
    padding-bottom: 20px;
    p {
      color: #999;
      font-size: 12px;
      margin-top: 6px;
    }
    .img {
      width: 84px;
      height: 114px;
      position: relative;
      // 阴影层
      div {
        display: inline-block;
        width: 100%;
        height: 35px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
      }
      img {
        width: 84px;
        height: 114px;
      }
      span {
        position: absolute;
        font-size: 12px;
        color: #dd9d08;
        font-weight: bold;
        z-index: 1;
        left: 3px;
        bottom: 2px;
      }
      .like {
        position: absolute;
        top: 0;
        left: 0;
        width: 28px;
        height: 28px;
        border-radius: 0 0 10px 0;
        background: rgba(0, 0, 0, 0.4);
        margin: 0;
        span {
          background: url(../assets/img/love.png) no-repeat;
          background-size: 100%;
          width: 10px;
          height: 10px;
          display: inline-block;
          position: absolute;
          top: 10px;
          left: 8px;
        }
      }
    }
    h4 {
      font-size: 13px;
      font-weight: bold;
      margin-top: 6px;
      height: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 84px;
    }
  }
}
.mask {
  width: 100%;
  height: 10px;
  background: #f5f5f5;
}
.showMovie2 {
    .date {
        color: #333;
        font-size: 14px;
        margin-top: 16px;
        padding-left: 14px;
    }
  .mob {
    padding-left: 14px;
    height: 114px;
    display: flex;
    align-items: center;
    .left {
      width: 64px;
      height: 90px;
      margin-right: 10px;
      img {
        width: 64px;
        height: 90px;
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      border-bottom: 1px solid #f5f5f5;
      height: 100%;
      .but {
        color: #fff;
        background: #3c9fe6;
        height: 28px;
        width: 54px;
        text-align: center;
        line-height: 28px;
        border-radius: 20px;
        font-size: 14px;
        margin-right: 14px;
      }
      .text {
        font-size: 14px;
        color: #777777;
        p {
          margin-top: 2px;
        }
        h3 {
          font-size: 17px;
          font-weight: bold;
          color: #000;
        }
        .point {
          span {
            font-weight: bold;
            font-size: 16px;
            color: #fab109;
          }
        }
      }
    }
  }
}
</style>