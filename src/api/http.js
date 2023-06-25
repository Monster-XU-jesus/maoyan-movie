// 安装axios
// $cnpm i axios -S
import axios from "axios";
// 创建初始化axios
// https://apis.netstart.cn/maoyan

const service = axios.create({
    baseURL:"https://apis.netstart.cn/maoyan",
    timeout:30000, //超时响应
    headers:{
        "Content-Type":"application/json;chatset=utf-8",//表单数据转化
    }
})

// request拦截器设置
service.interceptors.request.use(
    (config) => {
        return config
    },
    (error) =>{
        console.log("axios中的request报错",error);
        Promise.reject(error)
    }
)
// response拦截器
service.interceptors.response.use(
    (response) =>{
        return response.data;
    },
    (error) => {
        console.log("axios中response报错",error);
        Promise.reject(error)
    }
)

export default service