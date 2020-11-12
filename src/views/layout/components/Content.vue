<template>
    <div class="main-content " >
        <NavBread/>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NavBread from './NavBread.vue';
@Component({components:{ NavBread }})
export default class appMain extends Vue {}
</script>

<style lang="scss" scoped>
    
</style>