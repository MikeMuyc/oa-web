<template>
    <div>
        <button v-for="(item,index) in themes" :key="index" @click="setTheme(item)">{{ item }}</button>
        <div class="block">
            block
        </div>
        <div class="block">
            block
        </div>
        <button>
            <i class="theme my-wancheng"></i>
        </button>
        <div class="logout"></div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { theme } from '@/stores/Theme';
@Component
export default class Home extends Vue {
    get themes() {
        return theme.themes;
    }

    setTheme(item: string) {
        theme.setTheme(item);
    }
}
</script>

<style lang="scss" scoped>
.block {
    width: 100px;
    border: 1px solid blue;
    @include base-background();  //把所有的样式都拿进来，只是在上面通过改变类名来实现换肤
    @include base-border();
}
</style>