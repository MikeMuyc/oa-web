import {axios} from '../app';
// export const axios1 = new myaxios('./apz');
//
export const getSupplies = (params: any): Promise<any> => {
    return axios.get('/api/oa/upplies/page',params).then((res: any) => res.data)
}

//入库
export const suppliesIn = (params: any): Promise<any> => {
    return axios.post(`/api/oa/upplies/save`,params).then((res: any) => res.data)
}


// 出库
export const suppliesOut = (params: any): Promise<any> => {
    return axios.post('/api/oa/upplies/update',params).then((res: any) => res.data)
}

//办公用品下拉框
export const getSupplyName = (params: any): Promise<any> => {
    return axios.get('/api/oa/upplies/find',params).then((res: any) => res.data)
}

