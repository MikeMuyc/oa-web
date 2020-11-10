<template>
    <div class="login_body">
        <div class="login_main">
            <div class="login_main_title"></div>
            <div class="login_main_list">
                <suc-form :model="loginForm" :label-width="0" @validate="formRules=$event">
                    <suc-form-item :config="{prop:'userName'}" :validator="validateName">
                        <suc-input type="text" v-model="loginForm.userName" placeholder="用户名"
                                   :config="{size:'large'}" @keyup.enter.native="loginSubmit">
                            <suc-icon type="ios-person-outline" slot="prepend"></suc-icon>
                        </suc-input>
                    </suc-form-item>
                    <suc-form-item :config="{prop:'password'}" :validator="validatePass">
                        <suc-input type="password" v-model="loginForm.password" placeholder="密码"
                                   :config="{size:'large'}" @keyup.enter.native="loginSubmit">
                            <suc-icon type="ios-lock-outline" slot="prepend"></suc-icon>
                        </suc-input>
                    </suc-form-item>
                    <suc-form-item :config="{prop:'codeValue'}" :validator="validateCode">
                        <suc-row>
                            <suc-col span="14">
                                <suc-input class="code_input" type="text" v-model="loginForm.codeValue"
                                           placeholder="验证码" :config="{size:'large'}"
                                           @keyup.enter.native="loginSubmit"></suc-input>
                            </suc-col>
                            <suc-col span="8" offset="2" style="height:36px;">
                                <img class="code_img" type="image" id="checkImg" :src="codeImg"/>
                            </suc-col>
                        </suc-row>
                    </suc-form-item>
                    <suc-form-item>
                        <suc-button type="primary" :config="{size:'large', long:true}" @click.prevent="loginSubmit">
                            登 录
                        </suc-button>
                    </suc-form-item>
                </suc-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import qs from "qs";
    import {Vue, Component} from "vue-property-decorator";
    import {SucButton, SucForm, SucFormItem, SucIcon, SucInput, SucRow, SucCol} from "@suc/ui";

    @Component({
        components: {
            SucButton, SucForm, SucFormItem, SucIcon, SucInput, SucRow, SucCol
        }
    })
    export default class login extends Vue {
        codeImg = "";
        loginForm = {
            userName: "",
            codeValue: "",
            password: ""
        };
        formRules = {valid: true, invalid: false}

        validateName(rule: any, value: string, callback: Function) {
            if (value === "") {
                callback(new Error("用户名不能为空"));
            } else {
                callback();
            }
        }

        validatePass(rule: any, value: string, callback: Function) {
            if (value === "") {
                callback(new Error("密码不能为空"));
            } else {
                callback();
            }
        }

        validateCode(rule: any, value: string, callback: Function) {
            if (value === '') {
                callback(new Error('验证码不能为空'));
            }
            setTimeout(() => {
                if (value.length == 4) {
                    this.$http.get("/rest/authox/checkCodeValidate?value=" + this.loginForm.codeValue).then(res => {
                        if (res.data === 'false' || res.data === false) {
                            callback(new Error('验证码错误'));
                        } else {
                            callback();
                        }
                    }).catch(err => {
                        console.log(err);
                    });
                } else {
                    callback(new Error('验证码错误'));
                }
            }, 800);
        }

        getCodeImg() {
            this.$http
                .get("/rest/authox/checkCode?size=120*36")
                .then(res => {
                    this.codeImg = "data:image/gif;base64," + res.data;
                })
                .catch(err => {
                    console.log(err);
                });
        }

        loginSubmit() {
            if (this.formRules.valid) {
                this.$http({
                    url: "/login",
                    method: "post",
                    data: qs.stringify({
                        username: this.loginForm.userName,
                        password: this.loginForm.password,
                        checkCode: this.loginForm.codeValue
                    }),
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(res => {
                    if (this.$route.query.redirect) {
                        this.$router.push(<string>(
                            this.$route.query.redirect
                        ));
                    } else {
                        this.$router.push("/main");
                    }
                }).catch(err => {
                    console.log(err);
                    this.$SucMessage.error(err.data.msg || "登录失败!");
                });
            } else {
                this.$SucMessage.error("登录失败!");
            }
        }

        created() {
            this.getCodeImg();
        }
    }
</script>
<style lang="scss" scoped>
    .login_body {
        background: url("../assets/login/background.png") no-repeat fixed center;
        background-size: cover;
        width: 100%;
        height: 100%;

        .login_main {
            position: absolute;
            left: calc(50% - 200px);
            top: calc(50% - 200px);
            text-align: center;
            width: 400px;
            height: 340px;
            border-radius: 8px;
            padding: 0 40px;
            background-color: rgb(255, 255, 255);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.22);

            .login_main_title {
                width: 100%;
                height: 90px;
                background: url("../assets/login/title.png") no-repeat;
                background-position: center;
            }

            .code_img {
                width: 100%;
                height: 36px;
            }
        }
    }
</style>
