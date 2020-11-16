<template>
    <Breadcrumb>
        <BreadcrumbItem>{{ title }}</BreadcrumbItem>
    </Breadcrumb>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

@Component
export default class NavBread extends Vue {
    title:string = '';

    @Watch("$route")
    private handleRouteChange(): void {
        this.title = this.$route.name;
    }

    mounted(): void {
        this.title = this.$route.name;
    }
}
</script>
<style lang="scss">
    .ivu-breadcrumb{
        padding-left:20px;
        background-color: #fafafa;
        height:61px;
        line-height:60px;
        border-bottom: 1px solid #EBEEF5;
    }
    .ivu-breadcrumb-item-link{
        font-size: 18px;
    }
</style>
