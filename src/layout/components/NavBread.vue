<template>
    <Breadcrumb>
        <BreadcrumbItem>{{ title }}</BreadcrumbItem>
    </Breadcrumb>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

@Component
export default class NavBread extends Vue {
    title = "首页";

    @Watch("$route")
    private handleRouteChange(): void {
        this.title = this.$route.meta.name;
    }

    mounted(){
        this.title = this.$route.meta.name;
    }
    
}
</script>
<style lang="scss" scoped>
    .ivu-breadcrumb{
        padding-left:20px;
        background-color: #f7f7f7;
        height:60px;
        line-height:61px;
    }
</style>