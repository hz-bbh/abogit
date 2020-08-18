<template>
	<view>
		<view v-if="!isShow" class="isFlexCenter isShowLoad">
			<image src="/static/icon/load.png" ></image>
		</view>
	</view>
</template>
<script>
	export default {
		props:{
			isShow : Boolean
		}
	}
</script>
<style>
	.isShowLoad{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: white;
	}
	.isShowLoad image{
		width: 80rpx;
		height: 80rpx;
		animation: bbh 2s infinite;
	}
	
	
	@keyframes bbh{
		from{
			transform: rotate(0deg);
		}
		to{
			transform: rotate(1360deg);
		}
	}
</style>
