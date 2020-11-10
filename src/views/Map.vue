<template>
    <suc-map ref="mapObject" :options="olMap.map" v-bind.sync="olMap.view">
        <!--控件-->
        <template v-for="item in olMap.controls">
            <ol-control :name="item.name" :config="item.config"></ol-control>
        </template>
        <!--基础底图-->
        <template v-for="layer in olMap.baseLayer">
            <ol-layer :options="layer"></ol-layer>
        </template>
    </suc-map>
</template>
<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class MapView extends Vue {
        olMap: any = this.$getMapConfig();
    }
</script>
