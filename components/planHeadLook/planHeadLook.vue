<template>
	<view>
		<view class="headList" :style="{'background':obj.background}">
			<view class="pickerName" >{{obj.name}}</view>
			<view class="pickerTime  isFlexalitem" v-if="obj.startTime"><image src="../../static/gymIcon/nz.png"></image><text>时间:</text><text>{{obj.startTime}}</text>~<text>{{obj.endTime}}</text></view>
			<view class="picerPreson isFlexalitem" v-if="obj.add"><image class="nav" src="../../static/icon/nav.png"></image><text>地点:</text><text>{{obj.add}}</text></view>
		</view>
	</view>
</template>
<script>
	export default {
		props : {
			obj : {}
		}
	}
</script>
<style lang="less">
	.headList{
		width: 710rpx;
		background: #F3CC92;
		margin: 0 auto;
		padding:14rpx 20rpx;
		box-sizing: border-box;
		border-radius:10rpx 10rpx 0px 0px;
		.pickerName{
			font-size: 28rpx;
			color: #FFFFFF;
			font-weight: bold;
			margin-bottom:16rpx;
		}
		.pickerTime,.picerPreson{
			font-size: 26rpx;
			color:#FFFFFF;
			margin-top: 10rpx;
			image{
				width: 20rpx;
				height: 22rpx;
				margin-right:16rpx;
			}
			.nav{
				width: 20rpx;
				height: 26rpx;
			}
			text:nth-of-type(1){
				margin-right: 16rpx;
			}
		}
		.moUnder{
			width: 670rpx;
			height: 90rpx;
			font-size: 26rpx;
			margin-top: 12rpx;
			textarea{
				font-size: 26rpx;
				background: #F6F8F7;
				height: 100%;
				width: 100%;
				padding: 12rpx;
				box-sizing: border-box;
			}
		}
	}
</style>
