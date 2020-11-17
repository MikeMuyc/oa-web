import {axios,uploadFile} from './app';

//获取公文列表
export function getDocumentList(obj:any) {
    return axios.get(`/api/oa/officialDocument/page`,obj).then(resp => resp.data);
}
//公文上传  catalog:officialDocument
export function upload(obj:any) {
    uploadFile(`officialDocument`,obj)
}
