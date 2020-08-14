<template>
	<view>
		<pageHead name="训练单位" color="#ffffff" backImg="/static/icon/backw.png"></pageHead>
		<view class="bgImg">
			<image src="../../static/homeIcon/jh.png" mode=""></image>
		</view>
		
		<view class="bgSecond"></view>
		<view class="headTitle">优秀运动队</view>
		
		
		<view class="enrollList" v-for="(obj,index) in list"   :key="index"   @click="goDefault">
			<view class="enrollimageBox" >
				<image class="enrollimage" src="../../static/homeIcon/bz.png" alt="">
			</view>
			
			<view class="enrollInfo">
				<view class="enrollName">浙江体育职业技术学院</view>
				<view class="enrollTime"><image src="../../static/homeIcon/bz.png" alt=""><text>所属地区:</text>浙江</view>
				<view class="enrollTime"><image src="../../static/homeIcon/bz.png" alt=""><text>创办时间:</text>2012.03.15</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				list : [1,2,3,4]
			}
		},
		methods:{
			goDefault(){
				uni.navigateTo({
					url : "default"
				})
			}
		}
	}
</script>
<style lang="less">
	page{
		background: #f6f8f7;
	}
	.bgImg{
		width: 100%;
		height: 306rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.bgSecond{
		width: 710rpx;
		height: 220rpx;
		border: 1rpx solid red;
		margin:  -176rpx auto 0;
		position: relative;
		z-index: 2;
	}
	.headTitle{
		font-size: 28rpx;
		font-weight: bold;
		padding-left: 20rpx;
		height: 84rpx;
		line-height: 100rpx;
	}
	
	
	.enrollList{
		width: 710rpx;
		height: 212rpx;
		border: 1rpx solid red;
		box-sizing: border-box;
		position: relative;
		margin: 0 auto 10rpx;
		display: flex;
		align-items: center;
		border-radius:20rpx;
	}
	.enrollimageBox{
		width: 102rpx;
		height: 102rpx;
		position: relative;
	}
	.enrollimage{
		width:100%;
		height:100%;
		border-radius:50%;
		margin-left: 50rpx;
	}
	.enrollInfo{
		flex: 1;
		box-sizing: border-box;
		padding-left:102rpx;
	}
	.enrollName{
		font-weight:bold;
		display: flex;
		font-size:32rpx;
		color: #333333;
		margin-bottom:24rpx;
	}
	.enrollTime{
		display: flex;
		align-items: center;
		font-size: 28rpx;
		margin-top: 12rpx;
		color: #333333;
		font-weight: bold;
	}
	.enrollTime text{
		color: #666666 !important;
		margin-right:24rpx;
	}
	.enrollTime image{
		width: 30rpx;
		height: 30rpx;
		margin-right: 12rpx;
	}
</style>
