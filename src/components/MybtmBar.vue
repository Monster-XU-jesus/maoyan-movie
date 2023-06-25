<template>
    <div>
        <div class="botmbar">
            <router-link tag="div" class="botm" to="/index">
                <span class="iconfont icon-dianying"></span>
                <p>电影/影院</p>
            </router-link>
            <router-link tag="div" class="botm" to="/video">
                <span class="iconfont icon-dianshiju"></span>
                <p>小视频</p>
            </router-link>
            <router-link tag="div" class="botm" to="/mine">
                <span class="iconfont icon-shouye"></span>
                <p>我的</p>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
    .botmbar {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #fff;
        display: flex;
        border-top: 1px solid #e9e9e9;
        padding-top: 4px;
        .botm {
            flex-shrink: 0;
            flex-grow: 1;
            color: #717171;
            text-align: center;
            .iconfont {
                font-size: 24px;
            }
            p {
                font-size: 12px;
                text-align: center;
            }
        }
    }
</style>