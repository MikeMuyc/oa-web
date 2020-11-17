import http from 'axios'

//
export const getSupplies = (params: any): Promise<any> => {
    return http.get(`/api/​oa​/upplies​/page`,{
        params
    }).then((res: any) => res.data)
}
