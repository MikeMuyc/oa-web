<template>
    <div class="main_view" >
        <top-bar ></top-bar>
        <app-main></app-main>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import { TopBar, AppMain } from "./components";
    import { Route } from "vue-router";
    import axios from "axios";
    import store from "@/stores";
    import { theme } from '@/stores/Theme';
    @Component({
        components: {TopBar, AppMain}
    })
    export default class mainView extends Vue {

         get themes() {
        return theme.themes;
    }

    setTheme(item: string) {
        theme.setTheme(item);
    }
    }
</script>

<style lang="scss" scoped>
</style>
