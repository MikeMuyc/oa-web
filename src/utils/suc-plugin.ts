import {Message} from "element-ui";
import ECharts from '@oa/components/ECharts.vue';
import VuePerfectScrollbar from '@oa/components/perfect-scrollbar/scroll.vue';
import mixSelect from '@oa/components/mixSelect/mixSelect.vue';
import NavBread from '@oa/components/NavBread.vue';
import normalInput from '@oa/components/normalInput.vue';

//通用方法集合
const utils = {
    //时间戳转换成自定义字符串
    dateFormat: (timeStamp: number, type: string): any => {
        //type: date 输出日期，否则输出日期+时间
        if (timeStamp) {
            let date = new Date();
            date.setTime(timeStamp);
            let y = date.getFullYear();
            let m: any = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            let d: any = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            if (type === `date`) {
                return y + '-' + m + '-' + d;
            }
            else {
                let h: any = date.getHours();
                h = h < 10 ? ('0' + h) : h;
                let minute: any = date.getMinutes();
                let second: any = date.getSeconds();
                minute = minute < 10 ? ('0' + minute) : minute;
                second = second < 10 ? ('0' + second) : second;
                return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
            }
        } else {
            return '-'
        }
    },

    dateToTimestamp: (date: string): any => {
        if (date) {
            if (date.length > 0) {
                let str: string = date.substring(0, 19);
                str.replace(/-/g, '/');
                str.replace(/./g, '/');
                return new Date(str).getTime();
            }
        } else {
            return null
        }
    },

    deepCopy: (obj: any) => {
        return JSON.parse(JSON.stringify(obj));
    },

    //必填项不为空的验证
    isntNull: (data: any, name: any) => {
        /*
        * data 为数据源
        * name 为数据源对应每一项的名称，例如：
        * {
        *       "presonBasicInfo.name": `姓名`,
        *       "address": `地址`,
        * }
        * */
        if (Array.isArray(data)) {
            let flag = false;
            for (let i = 0; i < data.length; i++) {
                if (!content(data[i], name[i])) {
                    break;
                }
            }
            return flag
        } else if (typeof data === 'object') {
            let flag = true;
            for (let key in name) {

                if (eval(`data.${key}`) !== undefined) {
                    if (!content(eval(`data.${key}`), name[key])) {
                        flag = false;
                        break;
                    }
                }
            }
            /* for (let key in data) {
                 if (name[key]) {
                     if (!content(data[key], name[key])) {
                         flag = false;
                         break;
                     }
                 }
             }*/
            return flag
        } else if (typeof data === 'string') {
            return content(data, name);
        }

        function content(obj:any, objName:string) {
            if (obj === '' || obj === null || obj === undefined) {
                Message({
                    showClose: true,
                    message: `${objName}不能为空！`,
                    type: 'warning'
                })
                return false
            } else {
                return true
            }
        }
    },
}

//地图类
class Map {
    view: any;

    constructor(common?: any) { //constructor是一个构造方法，用来接收参数
        if (common) {
            Object.assign(this, common);
        } else {
            Object.assign(this, utils.deepCopy((<any>window).mapConfig));
        }
    }

    setCenter(coords: any, projection: any) {
        if (coords instanceof Array) {
            this.view.center.coord = [parseFloat(coords[0]), parseFloat(coords[1])];
        }
        if (projection) {
            this.view.center.projection = projection;
        }
    }

    setZoom(zoom: any) {
        if (zoom) {
            this.view.zoom = zoom;
        }
    }

    setCenterZoom(coords: any, zoom: any, projection: any) {
        this.setCenter(coords, projection);
        this.setZoom(zoom);
    }
}

export default {
    install: (Vue: any, options: any) => {

        //定义全局vue组件
        Vue.component('v-chart', ECharts);
        Vue.component('vue-perfect-scrollbar', VuePerfectScrollbar);
        Vue.component('mixSelect', mixSelect);
        Vue.component('NavBread', NavBread);
        Vue.component('normalInput', normalInput);
        //将方法集添加到Vue实例上面去
        Vue.prototype.$utils = utils;

        //返回地图对象
        Vue.prototype.$getMapConfig = function (common?: any) {
            return new Map(common);
        }

        //点击该元素以外的部分触发的事件
        Vue.directive('clickoutside', {
            bind: function (
                el: {
                    contains: (arg0: any) => void;
                    _vueClickOutside_: (e: any) => false | undefined;
                },
                binding: {
                    expression: any;
                    value: (arg0: any) => void;
                }) {
                function documentHandler(e: { target: any; }) {
                    // @ts-ignore
                    if (el.contains(e.target)) {
                        return false;
                    }
                    if (binding.expression) {
                        binding.value(e)
                    }
                }

                // @ts-ignore
                el._vueClickOutside_ = documentHandler;
                document.addEventListener('click', documentHandler);
            },
            unbind: function (el: { _vueClickOutside_: (this: Document, ev: MouseEvent) => any; }) {
                document.removeEventListener('click', el._vueClickOutside_);
                delete el._vueClickOutside_;
            }
        });
    }
}
