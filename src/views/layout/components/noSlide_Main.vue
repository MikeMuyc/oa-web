<template>
    <div class="noSlide_Main">

        <router-view class=""></router-view>


    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";

</script>
<style lang="scss" scoped>
    .noSlide_Main {
        padding-top: 30px;
        width: 100%;
        height: calc(100% - 56px);
        background-color: #fafafa;
        background-image: url('../../../assets/content/contentbg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
</style>
