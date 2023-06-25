<template>
  <div class="video">
    <div class="myvideo" v-if="videoid" @click.stop="bobo">
      <div class="videoTop" @click="backvideo">&lt;</div>
    </div>
    <div class="videoimg">
      <video :src="videoid.videourl" ref="vivi"></video>
    </div>
    <!-- <div > -->
      <div class="bofang"   v-show="palys"></div>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoid: null,
      palys: false
    };
  },
  methods: {
    backvideo() {
      this.$router.go(-1);
    },
    bobo() {
      this.palys = !this.palys;
      if (this.$refs.vivi.paused) {
        this.$refs.vivi.play();
      } else {
        this.$refs.vivi.pause();
      }
    }
  },
  components: {},
  created() {
    this.videoid = this.$route.query;
  },
  mounted() {
    this.$refs.vivi.play();
  }
};
</script>
<style lang="less" scoped>
.video {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #eee;
  overflow: hidden;
  .myvideo {
    width: 100%;
    height: 100%;
    position: absolute;
    background: transparent;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .videoTop {
    position: absolute;
    z-index: 3;
    font-size: 24px;
    font-weight: bold;
    font-family: "宋体";
    left: 0;
    top: 0;
    padding: 10px;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    color: #fafafa;
  }
  .videoimg {
    // background: black;
    background: #fff;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    video {
      width: 100%;
    }
  }
  .bofang {
    position: absolute;
    z-index: 99;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60px;
    height: 60px;
    // border-radius: 50%;
    // overflow: hidden;
    background-color: red;
  }
}
</style>