<template>
  <div class="myb">
    <div class="mineTop">我的</div>
    <div class="minehead">
      <div class="shot">
        <img
          src="https://img2.baidu.com/it/u=3450582472,3268356818&fm=253&fmt=auto&app=138&f=JPEG?w=502&h=500"
          alt
        />
      </div>
    </div>
    <div class="mylist">
      <p>我的订单</p>
      <div class="line"></div>
      <div class="list">
        <img src="https://obj.pipi.cn/festatic/asgard/resources/images/dpmmweb/mycenter/movie.png" alt />
        <span>电影</span>
      </div>
    </div>
    <botmbar></botmbar>
  </div>
</template>
<script>
import botmbar from "../components/MybtmBar.vue";
export default {
  components: {
    botmbar
  }
};
</script>
<style lang="less" scoped>
.myb {
  position: absolute;
  background: #f4f4f4;
  width: 100%;
  height: 100%;
  .mineTop {
    background: #df2d2d;
    padding: 14px 0;
    text-align: center;
    color: #fff;
  }
  .minehead {
    height: 150px;
    width: 100%;
    background-size:100% ;
    background-repeat: no-repeat;
    background-image: url(https://obj.pipi.cn/festatic/asgard/resources/images/dpmmweb/mycenter/bg.png) ;
    display: flex;
    justify-content: center;
    align-items: center;
    .shot {
        width: 66px;
        height: 66px;
        border-radius: 50%;
        border: 4px solid #fff;
        img {
            width: 66px;
            height: 66px;
            border-radius: 50%;
            display: inline-block;
        }
    }
  }
  .mylist {
    margin-top: 10px;
    padding: 0 15px;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    height: 150px;
    position: relative;
    p {
        position: relative;
        top: 13px;
        font-size: 15px;
        height: 21px;
        display: block;
        z-index: 1;
    }
    .line {
        height: 1px;
        width: 160px;
        position: absolute;
        left: 50%;
        margin-left: -80px;
        top: 23px;
        background: #f0f0f0;
    }
    .list {
        margin-top: 33px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 42px;
            height: 42px;
        }
        span {
            margin-top: 10px;
            font-size: 15px;
        }
    }
  }
}
</style>