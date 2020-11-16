<template>
    <div class="routeBar">
        <div class="left">{{ title }}</div>
        <div class="right">
            <slot name="rightSide"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

@Component
export default class NavBread extends Vue {
    title:any = '';

    @Watch("$route")
    private handleRouteChange(): void {
        this.title = this.$route.name;
    }

    mounted(){
        this.title = this.$route.name;
    }
    
}
</script>
<style lang="scss" scoped>
    .routeBar{
        padding: 0 20px;
        background-color: #fafafa;
        height:61px;
        line-height:60px;
        border-bottom: 1px solid #EBEEF5;
        display: flex;
        justify-content: space-between;
        .left{
            font-size: 18px;
        }
    }
    .ivu-breadcrumb-item-link{
        font-size: 18px;
        background-color: #f7f7f7;
        height:60px;
        line-height:61px;
    }

</style>
