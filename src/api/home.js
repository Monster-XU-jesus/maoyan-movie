import request from "./http.js"

// https://apis.netstart.cn/maoyan
export function getNiceMovie() {
    return request({
        url: "index/topRatedMovies",
        method: "get",
    });
}
export function getNiceMovieList() {
    return request({
        url: "index/moreComingList",
        method: "get",
    });
}