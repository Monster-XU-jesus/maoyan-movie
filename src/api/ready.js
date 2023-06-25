import request from "./http.js";

export function getReadyMovie(){
    return request({
        url:"/index/mostExpected",
        method:"get"
    })
}
export function getReadyMovieList(){
    return request({
        url:"index/comingList",
        method:"get"
    })
}
