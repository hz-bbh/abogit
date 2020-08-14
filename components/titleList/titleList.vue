<template>
	<view>
		<view class="titleList isFlexalitem">{{name}}</view>
	</view>
</template>
<script>
	export default {
		props : {
			name : String
		}
	}
</script>
<style>
	.titleList{
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
		padding-left:20rpx;
		height: 74rpx;
		background: #f6f8f7;
	}
</style>
