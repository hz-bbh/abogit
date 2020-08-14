<template>
	<view>
		<view class="tabTop isFlexalitem">
			<view @click="goBack" class="isLeft"><image :src="backImg"></image></view>
			<view class="isCenter" :style="{'color':color}">{{name}}</view>
			<view class="isRight">
				<slot></slot>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props : {
			name : String,
			backImg:{
				type : String,
				default:"/static/icon/back.png"
			},
			color:{
				type : String,
				default:"#333333"
			}
		},
		methods:{
			goBack(){
				uni.navigateBack();
			}
		}
	}
</script>
<style lang="less">
	.tabTop{
		width: 100%;
		height: 88rpx;
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		z-index:1000;
		color: #000000;
		view{
			box-sizing: border-box;
			height: 100%;
		}
		.isLeft{
			width: 20%;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			image{
				width: 16rpx;
				height: 28rpx;
				margin-left: 28rpx;
			}
		}
		.isCenter{
			width: 60%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 32rpx;
			font-weight: bold;
		}
		.isRight{
			width: 20%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			margin-right:40rpx;
		}
	}
	
	
	
</style>
