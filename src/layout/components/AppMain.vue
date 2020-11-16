<template>
    <div class="app_main" >
        <Layout :style="{ minHeight: '100vh', flexDirection: 'row' }">
            <NavSider />
            <Layout :style="{overflow: 'hidden','margin-left':'56px'}" >
                <Content>
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NavSider from './NavSider.vue'
import Content from './Content.vue'

@Component({components:{NavSider,Content}})
export default class appMain extends Vue {}
</script>