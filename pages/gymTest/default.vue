<template>
	<view>
		<view class="titleBox">
			<view class="titleTitle isFlexSpace">
				<text>体能对比</text>
				<view class="isFlexalitem" @click="goData"><text>数据对比</text>
					<image src="../../static/gymIcon/rightW.png"></image>
				</view>
			</view>
			<view class="titleInfo">
				<image class="nameIcon" src="../../static/gymIcon/name.png"></image><text>{{athleteName}}</text>
				<image class="sexImg" src="../../static/gymIcon/boy.png" v-if="sex==1"></image>
				<image class="sexImg" src="../../static/gymIcon/girl.png" v-if="sex==2"></image>
				<image src="../../static/gymIcon/type.png"></image><text>{{athleteItem}}</text>
				<image src="../../static/gymIcon/nz.png" class="nzImg"></image><text>{{athTime}}</text>
				<view>
					<image src="../../static/gymIcon/city.png"></image><text>{{athleteUnit}}</text>
				</view>
			</view>
		</view>

		<scroll-view scroll-x="true" class="scrollX">
			<view>
				<table border="1" cellpadding="0" cellspacing="0">
					<tr class="titleTr isBg isColor" v-if="sex==1">
						<th class="isSmall">类型</th>
						<th class="isWid">项目</th>
						<th>成绩</th>
						<th>评分</th>
						<th>省平均成绩</th>
						<th>省平均分</th>


						<th>男最高成绩(省)</th>
						<th>男最高分(省)</th>
						<th>男平均成绩(省)</th>
						<th>男平均分(省)</th>

						<th>国家平均成绩</th>
						<th>国家平均分</th>

						<th>男最高成绩(国家)</th>
						<th>男最高分(国家)</th>
						<th>男平均成绩(国家)</th>
						<th>男平均分(国家)</th>
					</tr>


					<tr class="titleTr isBg isColor" v-if="sex==2">
						<th class="isSmall">类型</th>
						<th class="isWid">项目</th>
						<th>成绩</th>
						<th>评分</th>
						<th>省平均成绩</th>
						<th>省平均分</th>

						<th>女最高成绩(省)</th>
						<th>女最高分(省)</th>
						<th>女平均成绩(省)</th>
						<th>女平均分(省)</th>

						<th>国家平均成绩</th>
						<th>国家平均分</th>

						<th>女最高成绩(国家)</th>
						<th>女最高分(国家)</th>
						<th>女平均成绩(国家)</th>
						<th>女平均分(国家)</th>
					</tr>



					<tr class="teShu isBg isSmall" v-if="resultList!=''">
						<th :rowspan="resultList.length+1">基础体能</th>
					</tr>
					<!-- 男 -->
					<tr class="titleTr" v-for="(item,index) in resultList" :key="index" v-if="sex==1">
						<th class="isWid">{{item.itemName}}</th>
						<th>{{item.itemResult}}</th>
						<th>{{item.score}}</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveScore}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proMaxMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proMaxMaleScore}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveMaleScore}}</text>
						</th>

						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveScore}}</text>
						</th>

						<th>
							<text v-if="item.standard!=null">{{item.standard.countryMaxMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryMaxMaleScore}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveMaleScore}}</text>
						</th>
					</tr>
					<!-- 女 -->
					<tr class="titleTr" v-for="(item,index) in resultList" :key="item.id" v-if="sex==2">
						<th class="isWid">{{item.itemName}}</th>
						<th>{{item.itemResult}}</th>
						<th>{{item.score}}</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveScore}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proMaxFeMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proMaxFeMaleScore}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveFeMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveFeMaleScore}}</text>
						</th>

						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveScore}}</text>
						</th>

						<th>
							<text v-if="item.standard!=null">{{item.standard.countryMaxFeMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryMaxFeMaleScore}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveFeMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveFeMaleScore}}</text>
						</th>
					</tr>

					<tr class="teShu isBg isSmall" v-if="resultListJN!=''">
						<th :rowspan="resultListJN.length+1">专项体能</th>
					</tr>

					<tr class="titleTr" v-for="item in resultListJN" :key="item.id" v-if="sex==1">
						<th class="isWid">{{item.itemName}}</th>
						<th>{{item.itemResult}}</th>
						<th>{{item.score}}</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveScore}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proMaxFeMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proMaxFeMaleScore}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveFeMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveFeMaleScore}}</text>
						</th>
						
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveScore}}</text>
						</th>
						
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryMaxFeMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryMaxFeMaleScore}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveFeMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveFeMaleScore}}</text>
						</th>
					</tr>
					
					<tr class="titleTr" v-for="item in resultListJN" :key="item.id" v-if="sex==2">
						<th class="isWid">{{item.itemName}}</th>
						<th>{{item.itemResult}}</th>
						<th>{{item.score}}</th>
						
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveScore}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proMaxFeMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proMaxFeMaleScore}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveFeMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.proAveFeMaleScore}}</text>
						</th>
						
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveScore}}</text>
						</th>
						
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryMaxFeMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryMaxFeMaleScore}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveFeMaleResult}}</text>
						</th>
						<th>
							<text v-if="item.standard!=null">{{item.standard.countryAveFeMaleScore}}</text>
						</th>
					</tr>
				</table>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		onLoad(option) {
			console.log("option: " + JSON.stringify(option));
			this.init(option.id);
		},
		data() {
			return {
				tableList: [1, 2, 3, 4, 5, 6, 7],
				tableList2: [1, 2],
				tableList3: [1, 2, 3],

				sex  : 1,
				athleteName: "",
				athleteItem: "",
				athleteUnit: "",
				athTime: "",
				resultList: [] ,//基础体能
				resultListJN : [] //专项技能
			}
		},
		methods: {
			goData() {
				uni.navigateTo({
					url: "dataCompare?basicId="+this.basicId 
				})
			},
			init(id) {
				const param = {
					id: id
				}
				var _this = this;
				this.ajaxPost(param, 'testItem/getPhysicalTestData', (res) => {
					_this.athleteName = res.athleteName;
					_this.athleteItem = res.athleteItem;
					_this.athleteUnit = res.athleteUnit;
					_this.athTime = res.physicalTest.createTime;
					_this.resultList = res.resultList;
					_this.resultListJN = res.resultList1;
					_this.basicId    = res.physicalTest.basicId;
					if(res.athleteSex =="男"){
						_this.sex = 1;
					}else{
						_this.sex = 2;
					}
					console.log("res: " + JSON.stringify(res));
				})
			}
		}
	}
</script>
<style lang="less">
	page {
		padding-top: 12rpx;
		box-sizing: border-box;
	}

	.titleBox {
		width: 710rpx;
		height: 150rpx;
		background: rgba(140, 217, 199, 1);
		border-radius: 10rpx 10rpx 0px 0px;
		margin: 0rpx auto 0;
		padding: 16rpx 20rpx 0;
		box-sizing: border-box;
		color: white;

		.titleTitle {
			box-sizing: border-box;

			&>text {
				font-size: 28rpx;
				font-weight: bold;
			}

			view {
				font-size: 24rpx;
			}

			image {
				width: 10rpx;
				height: 20rpx;
				margin-left: 10rpx;
			}
		}

		.titleInfo {
			font-size: 26rpx;
			margin-top: 12rpx;

			.nameIcon {
				width: 18rpx;
			}

			image {
				width: 20rpx;
				height: 20rpx;
				margin-right: 10rpx;
			}

			.sexImg {
				width: 14rpx;
				height: 16rpx;
				margin-left: 4rpx;
				margin-right: 22rpx;
			}

			.nzImg {
				margin-left: 40rpx;
			}

			view {
				margin-top: 4rpx;
			}
		}
	}

	.scrollX {
		width: auto;
		white-space: nowrap;

		&>view {
			display: inline-block;
		}
	}

	table {
		border: 0.5rpx solid #8CD9C7;
		border-collapse: collapse;
	}

	.titleTr th {
		height: 64rpx;
		font-size: 24rpx;
		padding: 0 12rpx;
		box-sizing: border-box;
	}

	.isWid {
		min-width: 246rpx;
		text-align: center;
		white-space: pre-line;
		word-wrap: break-word;
		word-break: break-all;
		padding: 12rpx 24rpx !important;
	}

	.teShu {
		font-size: 24rpx;
		color: #8CD9C7;

		th {
			padding: 0 24rpx;
			box-sizing: border-box;
			text-align: center;
			white-space: pre-line;
			word-wrap: break-word;
			word-break: break-all;
		}
	}

	.isBg {
		background: #E0F1ED;
	}

	.isColor {
		color: #8CD9C7;
	}

	.isSmall {
		padding: 0rpx 12rpx !important;
		min-width: 50rpx !important;
	}
</style>
