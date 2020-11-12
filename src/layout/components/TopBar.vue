<template>
	<div class="header_bar colorful">
		<img src="@/assets/logo@2x.png" alt=""  style="margin-right:5px; margin-top:7px">
		<span class="title">云南省地方志OA系统</span>
		<span >云南省情网</span>
		<span style="margin-left:30px;"><i class="iconfont iconyonghu-icon
"></i><i style="margin-left:5px;">admin</i></span>
		<!-- <Menu mode="horizontal"  active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
    	</Menu> -->

	<!-- <button
			v-for="(item, index) in themes"
			:key="index"
			@click="setTheme(item)"
		>
			{{ item }}
		</button> -->
	</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { SucIcon, SucMenu, SucMenuItem, SucSubmenu } from "@suc/ui";
import { theme } from "@/stores/Theme";

@Component({
	components: {
		SucIcon,
		SucMenu,
		SucMenuItem,
		SucSubmenu,
	},
})
export default class topBar extends Vue {
	menuConfig = {
		mode: "horizontal",
		theme: "primary",
		activeName: "",
	};

	get themes() {
		return theme.themes;
	}

	setTheme(item: string) {
		theme.setTheme(item);
	}

	mounted() {
		this.menuConfig.activeName = this.$route.matched[1].meta.name;
	}

	logout() {
		this.$http
			.get("/logout")
			.then((res) => {
				this.$router.push("/login");
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
</script>
<style lang="scss" scoped>
::v-deep .ivu-menu-item-active {
	opacity: 0.7;
}
.colorful {
	@include base-background();
	@include base-border();
}
</style>
