<template>
  <div>
    <div class="loginTop">
      <span @click="fanFun">&lt;</span>
      <p>猫眼电影</p>
      <div></div>
    </div>
    <div class="loginBot">
        <div class="log1">
            <input type="number" placeholder="请输入账号" v-model="account">
        </div>
        <div class="log2">
            <input type="password" placeholder="请输入密码"
            v-model="password">
        </div>
        <div class="logbtn" @click="loginFun" v-if="pwdlogin == false">
            登录
        </div>
        <div class="logbtn1" @click="loginFun" v-if="pwdlogin == true">
            登录
        </div>
        <div class="argeement">
            <input type="checkbox" v-model="bbcc">
            我已阅读并同意
            <span>《猫眼用户服务协议》</span>
            <span>《隐私政策》</span>
            客服电话
            <span>1010-5335</span>
        </div>
    </div>
  </div>
</template>
<script>
import {Toast} from "vant"
export default {
    data(){
        return{
            account:"",//账号
            password:"",//密码
            pwdlogin:false,
            bbcc:false
        }
    },
    methods:{
        fanFun(){
            this.$router.go(-1)
        },

        // 侦听密码框是否有值，并且是大于6位数，高亮按钮表示可以登录状态
        pwdBtnloginFun(){
            if(this.account.length != 0 && this.password.length >= 6){
                this.pwdlogin = true
            }else {
                this.pwdlogin = false
            }
        },
        // 登录功能
        loginFun(){
            // 判断登录
            if(this.account.length != 0 && this.password.length >= 6){
                // 判断是否勾选了服务协议
                if(this.bbcc == true){
                    Toast({message:"登录成功",position:"bottom"});
                    localStorage.setItem("userid",88888888) //登录成功就存的用户ID
                    setTimeout(() => {
                        this.$router.push("/mine")
                    },1500)
                }else {
                    //否则不能登录
                    Toast({message:"请阅读并同意隐私服务协议",position:"bottom"})
                }
                // 判断密码是否为空
            }else if(this.account.length !=0 && this.password.length == ""){
                Toast({message:"请输入密码",position:"bottom"})
                // 判断账号密码是否为空
            }else if(this.account.length == "" && this.password.length ==""){
                Toast({message:"请输入账号密码才能登录",position:"bottom"})
                // 密码小于6位
            }else {
                Toast({message:"请输入6位数的密码",position:"bottom"})
            }

        }
    },
    watch:{
       account:function(){
        this.pwdBtnloginFun();
       },
       password:function(){
        this.pwdBtnloginFun();
       }
    }

};
</script>
<style lang="less" scoped>
.loginTop {
  background: #df2d2d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #fff;
  padding: 12px;
  span {
    font-family: "宋体";
    font-size: 20px;
  }
}
.loginBot {
    padding: 16px;
    .log1 {
        margin-top: 32px;
        padding: 12px 0;
        border-bottom: 1px solid #f7f7f7;
        input {
            width: 100%;
            border: 0;
            outline:none;
        }
            input::-webkit-input-placeholder {
            color: #ccc;
        }
    }
    .log2 {
        margin-top: 16px;
        padding: 12px 0;
        border-bottom: 1px solid #f7f7f7;
        input {
            width: 100%;
            border: 0;
            outline:none;
        }
        input::-webkit-input-placeholder {
            color: #ccc;
        }
    }
    .logbtn {
        background: #e5e5e5;
        text-align: center;
        font-size: 14px;
        width: 100%;
        margin-top: 14px;
        padding: 12px 0;
        border-radius: 24px;
        color: #999;
    }
    .logbtn1 {
        background: #df2d2d;
        text-align: center;
        font-size: 14px;
        width: 100%;
        margin-top: 14px;
        padding: 12px 0;
        border-radius: 24px;
        color: #fff;
    }
    .argeement {
        font-size: 12px;
        color: #7f7f7f;
        margin-top: 30px;
        input {
            display: inline-block;
            border-radius: 50%;
        }
        span {
            color: #df2d2d;
            display: inline-block;
        }
    }
}
</style>
