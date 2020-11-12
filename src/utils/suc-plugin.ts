
import ECharts from '@oa/components/ECharts.vue';
import VuePerfectScrollbar from '@oa/plugins/perfect-scrollbar/scroll.vue';
//通用方法集合
const utils = {
    //时间戳转换成自定义字符串
    dateFormat: (date: any, fmt: string) => {
        let dateList: any = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "H+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S+": date.getMilliseconds()
        };
        if (/(y+)/i.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in dateList) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? dateList[k] : ("00" + dateList[k]).substr(("" + dateList[k]).length));
            }
        }
        return fmt;
    },

    deepCopy: (obj: any) => {
        return JSON.parse(JSON.stringify(obj));
    }
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
        //时间转换过滤器
        Vue.filter('dateFormat', utils.dateFormat);

        //echarts的vue组件
        Vue.component('v-chart', ECharts);
        Vue.component('vue-perfect-scrollbar', VuePerfectScrollbar);
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
