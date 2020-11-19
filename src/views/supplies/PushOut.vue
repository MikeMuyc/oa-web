<template>
	<div id="addNotice">
		<div class="content">
			<div class="backLine">
				<div class="left" @click="$router.go(-1)">
					<i class="iconfont iconxiangyou"></i>
					返回
				</div>
				<div class="right">
					<div class="pmbtn" @click="$router.go(-1)">取消</div>
					<div
						class="pmbtn primary"
						style="margin-left: 10px"
						v-if="isOk"
						@click="submit"
					>
						<i class="iconfont iconfabu"></i>提交
					</div>

					<div class="pmbtn disable" style="margin-left: 10px" v-else>
						<i class="iconfont iconfabu"></i>提交
					</div>
				</div>
			</div>
			<div class="whiteSpace">
				<div class="title">出库登记</div>
				<div class="d-flex">
					<div
						class="d-flex flex-column"
						style="margin-right: 48px; margin-bottom: 30px"
					>
						<div class="label">
							<span class="notnull">*</span>领用人
						</div>
						<mixSelect
							style="width: 270px"
							v-model="model.operatorName"
							:selectList="SceneList2"
							labelName="name"
							valueName="val"
							childrenName="children"
							placeholder="请选择部门、人员"
						>
						</mixSelect>
					</div>

					<div class="d-flex flex-column" style="margin-right: 48px">
						<div class="label">
							<span class="notnull">*</span>出库时间
						</div>
						<el-date-picker
							v-model="model.operateTime"
							type="date"
							placeholder="选择日期"
						>
						</el-date-picker>
					</div>

					<div class="d-flex flex-column">
						<div class="label">
							<span class="notnull">*</span>关联审批
						</div>
						<mixSelect
							style="width: 270px"
							v-model="model.relateUrl"
							:selectList="orderStateList"
							labelName="name"
							valueName="id"
							placeholder="请选择审批文件"
						>
						</mixSelect>
					</div>
				</div>

				<div class="d-flex">
					<div class="d-flex flex-column" style="margin-right: 48px">
						<div class="label">
							<span class="notnull">*</span>办公用品名称
						</div>
						<mixSelect
							style="width: 270px"
							v-model="model.supplies"
							:selectList="supplyList"
							labelName="name"
							valueName="id"
							placeholder="纸"
						>
						</mixSelect>
					</div>

					<div class="d-flex flex-column" style="margin-right: 48px">
						<div class="label">物品规格</div>
						<normalInput
							class="input"
							v-model="model.specification"
							placeholder="6号"
						></normalInput>
					</div>

					<div class="d-flex flex-column">
						<div class="label">物品单位</div>
						<normalInput
							class="input"
							v-model="model.unit"
							placeholder="个"
						></normalInput>
					</div>
				</div>

				<div class="d-flex flex-column" style="margin-right: 48px">
					<div class="label"><span class="notnull">*</span>数量</div>
					<normalInput
						class="input"
						v-model="model.amount"
						placeholder="请填入数字"
					></normalInput>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import * as _ from "lodash";
import { supplyApi } from "@oa/api";
@Component({})
export default class PushInPage extends Vue {
	orderState: string = "";
	supplyList: any = [];
	SceneList2: any = [
		{
			name: "工程管理类",
			children: [
				{
					name: "污水处理及配套设施",
					val: `11`,
					children: [
						{
							name: "1类项目",
							val: `962`,
						},
						{
							name: "2类项目",
							val: `4186`,
						},
					],
				},

				{
					name: "饮用水源地污染防治项目",
					val: `12`,
					children: [
						{
							name: "地表水治理",
							val: `830`,
						},
						{
							name: "山泉水饮用",
							val: `213`,
							children: [
								{
									name: "开发",
									val: `213-1`,
								},
								{
									name: "环境维护",
									val: `213-2`,
								},
							],
						},
					],
				},
				{
					name: "区域水环境综合整治",
					val: `13`,
				},
			],
		},
		{
			name: "管理类项目",
			children: [
				{
					name: "土地管理",
					val: `21`,
					children: [
						{
							name: "土地面测绘",
							val: `21-1`,
						},
						{
							name: "土地资源整合",
							val: `21-2`,
						},
					],
				},
				{
					name: "环境管理",
					val: `22`,
				},
				{
					name: "电力管理",
					val: `23`,
				},
			],
		},
	];
	//  isOk: boolean = true;
	model: any = {
		flag: 1,
		amount: "",
		unit: "",
		supplies: "",
		operatorName: "",
		operateTime: "",
		specification: "",
		relateUrl: "",
	};

	//  debounceInput = this.debounceHandler(this.watchNumber,1000)
	//  debounceHandler(func:any,duration:any){
	//      return _.debounce(func,duration,true);
	//  }
	get isOk() {
		if (
			this.model.supplies &&
			this.model.operatorName &&
			this.model.relateUrl &&
			this.model.operateTime &&
			this.model.amount
		) {
			if (this.watchNumber()) {
				return true;
			}
		} else {
			return false;
		}
	}

	// @Watch('model.amount')
	watchNumber() {
		const reg = /^\d{1,}$/;
		const result = reg.test(this.model.amount);
		if (!result) {
			return false;
		}
		return true;
	}

	async getSupplyName() {
		const params = {
			name: this.model.name,
		};
		try {
			const res = await supplyApi.getSupplyName(params);
			this.supplyList = res.data;
		} catch (error) {
			console.log(error);
		}
	}

	async submit() {
		this.model.operateTime = this.$utils.dateFormat(
			this.model.operateTime,
			"yyyy-MM-dd HH:mm:ss"
		);
		const params = this.model;
		try {
            const res = await supplyApi.suppliesOut(params);
			this.$message({
                // message: res.message=='success' && "出库成功!",
                message: res.message=='success'?'出库成功!':res.message,
                type:'success'
			});
		} catch (error) {
			this.$message({
				message: error.data.message,
			});
		}
	}

	setAmount() {
		this.$set(this.model, "amount", "");
	}

	orderStateList: any = [
		{
			id: "0",
			name: "待审核",
		},
		{
			id: "1",
			name: "待接单",
		},
	];

	mounted() {
		this.getSupplyName();
	}
}
</script>

<style lang="scss" scoped>
#addNotice {
	height: 100%;
	display: flex;
	justify-content: center;
	.notnull {
		color: #f00;
		margin-right: 5px;
	}
	.input {
		width: 270px !important;
		height: 40px !important;
	}
	.myInputbox {
		width: 270px !important;
		height: 40px !important;
	}
	.backLine {
		height: 60px;
		align-items: center;
		display: flex;
		justify-content: space-between;

		.left {
			.iconfont {
				margin-right: 15px;
			}
			display: inline-flex;
			font-size: 16px;
			cursor: pointer;
		}
		.right {
			display: inline-flex;
		}
	}
	.content {
		width: 960px;
		padding-bottom: 30px;
		.whiteSpace {
			background-color: #fff;
			height: calc(100% - 60px);
			padding: 32px;
			.title {
				font-size: 20px;
				height: 20px;
				line-height: 20px;
				margin-bottom: 32px;
			}
			.label {
				margin-bottom: 12px;
			}
			.input {
				width: 100%;
				margin-bottom: 32px;
			}
		}
	}

	.el-date-editor.el-input,
	.el-date-editor.el-input__inner {
		width: 270px;
	}
}
</style>

