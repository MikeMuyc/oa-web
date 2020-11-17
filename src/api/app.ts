import myaxios from "@oa/axios";

import {AxiosBasicCredentials} from "axios";
export const axios = new myaxios('./apw');

//登录
/*export function login(data:AxiosBasicCredentials) {
    return axios.post('/api/waterloo/login',{withToken: false},data);
}*/

/**上传文件**/
export function uploadFile(catalog:string,data:any) {
    return axios.post(`/api/oa/file/batch?catalog=${catalog}`,data);
}

