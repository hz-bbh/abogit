<template>
	<view>
		<view class="titleBox">
			<view class="titleTitle isFlexSpace">
				<text>体能对比</text>
				<view class="isFlexalitem" @click="goData"><text>数据对比</text><image src="../../static/gymIcon/rightW.png"></image></view>
			</view>
			<view class="titleInfo">
				<image class="nameIcon" src="../../static/gymIcon/name.png"></image><text>李霞</text><image class="sexImg" src="../../static/gymIcon/boy.png"></image>
				<image src="../../static/gymIcon/type.png"></image><text>篮球</text>
				<image src="../../static/gymIcon/nz.png" class="nzImg"></image><text>李霞</text>
				<view>
					<image src="../../static/gymIcon/city.png"></image><text>李霞</text>
				</view>
			</view>
		</view>
		
		<scroll-view scroll-x="true" class="scrollX" >
			<view>
				<table  border="1" cellpadding="0" cellspacing="0">
				  <tr class="titleTr isBg isColor">
				    <th class="isSmall">类型</th>
				    <th class="isWid">项目</th>
					<th>成绩</th>
					<th>评分</th>
					<th>省平均成绩</th>
					<th>省平均分</th>
					<th>国家成绩</th>
					<th>国家平均分</th>
					<th>男最高成绩(省)</th>
				  </tr>
				  
				  
				  <tr class="teShu isBg isSmall">
					  <th :rowspan="tableList.length+1" >基础体能</th>
				  </tr>
				  
				  <tr class="titleTr" v-for="(item,index) in tableList"  :key="item">
				    <th class="isWid">测试设{{index}}</th>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
				  </tr>
				  
				  <tr  class="isBg isSmall">
				  	 <th rowspan="3"></th>
				  </tr>
				  
				  <tr class="titleTr" v-for="(item,num) in tableList2" :key="num">
				    <th class="isWid">项目速度加快项目速度加快建度加快建设建建设{{num}}</th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
						<th></th>
				  </tr>
				  
				  
				 <tr class="teShu isBg isSmall">
				 	<th :rowspan="4">专心技能</th>
				 </tr>
				  
				  <tr class="titleTr"  v-for="obj in tableList3" :key="obj">
				    <th class="isWid">项目速度加快项目速度加快建度加快建设建建设</th>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
					<th></th>
				  </tr>
				</table>
			</view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				tableList : [1,2,3,4,5,6,7],
				tableList2: [1,2],
				tableList3: [1,2,3]
			}
		},
		methods:{
			goData(){
				uni.navigateTo({
					url : "dataCompare"
				})
			}
		}
	}
</script>
<style lang="less">
	page{
		padding-top: 12rpx;
		box-sizing: border-box;
	}
	.titleBox{
		width: 710rpx;
		height: 150rpx;
		background:rgba(140,217,199,1);
		border-radius:10rpx 10rpx 0px 0px;
		margin: 0rpx auto 0;
		padding:16rpx 20rpx 0;
		box-sizing: border-box;
		color: white;
		.titleTitle{
			box-sizing: border-box;
			&>text{
				font-size: 28rpx;
				font-weight: bold;
			}
			view{
				font-size: 24rpx;
			}
			image{
				width: 10rpx;
				height: 20rpx;
				margin-left: 10rpx;
			}
		}
		.titleInfo{
			font-size: 26rpx;
			margin-top: 12rpx;
			.nameIcon{
				width: 18rpx;
			}
			image{
				width: 20rpx;
				height: 20rpx;
				margin-right: 10rpx;
			}
			.sexImg{
				width: 14rpx;
				height: 16rpx;
				margin-left: 4rpx;
				margin-right: 22rpx;
			}
			.nzImg{
				margin-left: 40rpx;
			}
			view{
				margin-top: 4rpx;
			}
		}
	}
	.scrollX{
		width: auto;
		white-space: nowrap;
		&>view{
			display: inline-block;
		}
	}
	table{
		border:0.5rpx solid #8CD9C7;
		border-collapse:collapse;
	}
	.titleTr th{
		height: 64rpx;
		font-size: 24rpx;
		padding: 0 12rpx;
		box-sizing: border-box;
	}
	
	.isWid{
		min-width:246rpx;
		text-align:center;
		white-space:pre-line;
		word-wrap:break-word;
		word-break:break-all;
		padding: 12rpx 24rpx !important;
	}
	.teShu{
		font-size: 24rpx;
		color: #8CD9C7;
		th{
			padding: 0 24rpx;
			box-sizing: border-box;
			text-align:center;
			white-space:pre-line;
			word-wrap:break-word;
			word-break:break-all;
		}
	}
	.isBg{
		background: #E0F1ED;
	}
	.isColor{
		color: #8CD9C7;
	}
	.isSmall{
		padding: 0rpx 12rpx !important;
		min-width:50rpx !important;
	}
</style>
