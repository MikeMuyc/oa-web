<template>
    <Breadcrumb>
        <BreadcrumbItem>{{ title }}</BreadcrumbItem>
    </Breadcrumb>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

@Component
export default class NavBread extends Vue {
    title:any = '';

    @Watch("$route")
    private handleRouteChange(): void {
        this.title = this.$route.meta.name;
    }

    mounted(){
        this.title = this.$route.meta.name;
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
        background-color: #f7f7f7;
        height:60px;
        line-height:61px;
    }
</style>
