<template>
    <div class="header_bar ">
        <img
                src="@oa/assets/logo.png"
                style="margin-right: 5px; margin-top: 7px"
        />
        <span class="title">云南省地方志OA系统</span>
        <span>云南省情网</span>
        <span style="margin-left: 30px">
            <i class="iconfont iconyonghu-icon"></i>
            <i style="margin-left: 5px">admin</i>
        </span>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Watch} from "vue-property-decorator";
    import {theme} from "../../../stores/Theme";

    @Component({
        components: {

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


</style>
