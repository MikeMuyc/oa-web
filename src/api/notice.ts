import {axios,uploadFile} from './app';

//获取公告列表
export function getNoticeList(obj:{
    pageSize:number,
    pageNum:number,
    keyword?:string,
    read?:any,
}) {
    return axios.get(`/api/oa/notice/page`,obj).then(resp => resp.data);
}
//公告附件上传  catalog:officialDocument
export function upload(obj:any) {
    uploadFile(`notice`,obj)
}
export function setRead(ids:Array<any>) {
    return axios.put(`/api/oa/notice/changeIntoReadStatus`,ids).then(resp => resp.data);
}
