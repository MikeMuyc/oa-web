import {axios,uploadFile} from './app';

//获取公文列表
export function getNoticeList(obj:{
    pageSize:number,
    pageNum:number,
    keyword?:string
}) {
    return axios.get(`/api/oa/notice/page`,obj).then(resp => resp.data);
}
//公文上传  catalog:officialDocument
export function upload(obj:any) {
    uploadFile(`officialDocument`,obj)
}
