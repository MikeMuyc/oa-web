

import { getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { store } from '@suc/ts-sub';

@Module({
    store,
    namespaced: true,
    dynamic: true,
    name: 'app-theme',
})
export class ThemeStore extends VuexModule {
    nowThemeInfo = 'default-theme'; //当前主题
    themes = ['default','eyes','dark','blue']; //所有主题

    @Mutation
    setTheme(theme: string) {
        this.nowThemeInfo = theme + '-theme';
    }
}

export const theme = getModule(ThemeStore);
