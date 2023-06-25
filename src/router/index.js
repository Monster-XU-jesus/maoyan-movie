import Vue from "vue"
import VueRouter from "vue-router"
import MyIndex from "../view/MyIndex.vue"
import MyVideo from "../view/MyVideo.vue"
import MyHome from "../view/MyHome.vue"
import MyMine from "../view/MyMine.vue"
import MyPosition from "../view/MyPosition.vue"
Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/index/one"
    },

    {
        path: '/index',
        name: "index",
        redirect: '/index/one',
        component: MyIndex,
        children: [
            {
                path: "one",
                name: "one",
                component: () => import("../view/CinemaOne.vue")
            }, 
            {
                path: "two",
                name: "two",
                component: () => import("../view/CinemaTwo.vue")
            }, 
            // 视频详情
            {
                path:"three",
                name:"three",
                component: () => import("../view/CinemaThree.vue")
            },
            {
                path:"four",
                name:"four",
                component: () => import("../view/CinemaFour.vue")
            }
        ]
    },
    {
        path:"/video",
        name:"video",
        component:MyVideo,
    },
    // 城市选择
    {
        path:"/position",
        name:"position",
        component:MyPosition,
    },
    // 我的
    {
        path:"/myhome",
        name:"myhome",
        component:MyHome
    },
    {
        path:"/limovie",
        name:"limovie",
        component: () => import("../view/Limovie.vue")
    }
    , 
    // 我的详细页
    {
        path:"/mine",
        name:"mine",
        component:MyMine,
        beforeEnter: (to,from,next) => {
            let MyID = window.localStorage.getItem("userid");
            if(MyID) {
                next();
                return
            } else {
                next("/myhome")
            }
        }
    }

];

const router = new VueRouter({
    made: "hash",
    base: process.env.BASE_URL,
    routes,
})

export default router