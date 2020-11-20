<template>
    <div class="main_view" >
        <top-bar ></top-bar>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import AppMain from './components/AppMain.vue'

    import NavSider from './components/NavSider.vue'
    import topBar from './components/TopBar.vue'

    @Component({
        components: { topBar, AppMain,NavSider}
    })
    export default class mainView extends Vue {


    }
</script>

<style lang="scss" scoped>
</style>
