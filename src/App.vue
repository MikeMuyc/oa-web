<template>
    <div id="app" :data-theme='nowThemeInfo'>
        <router-view/>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {theme} from '@oa/stores/Theme';

    @Component
    export default class App extends Vue {
        get nowThemeInfo() {
            return theme.nowThemeInfo
        }
    }
</script>
<style>
    #app{
        width: 100%;
        height: 100%;
    }
</style>
