declare module 'vue-echarts' {
    export interface echartsOptions {
        options: object;
        autoresize: boolean;
    }
}
declare module '@oa/monch' {
    import { PluginObject } from 'vue';
    const VueOl: PluginObject<any>;
    export default VueOl;
}
