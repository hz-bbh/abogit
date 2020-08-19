<template>
	<view class="presonList">
		<view class="presonListTitle isFlexalitem">人员</view>
		<view class="presonListData isFlexalitem">
			<view>
				<image src="../../static/gymIcon/masou.png"></image>
				<view>王五</view>
			</view>
			<view>
				<image src="../../static/gymIcon/masou.png"></image>
				<view>王五1</view>
			</view>
			<view>
				<image src="../../static/gymIcon/masou.png"></image>
				<view>王五2</view>
			</view>
		</view>
	</view>
</template>
<script>
</script>
<style lang="less">
	.presonList{
		width: 710rpx;
		margin: 0 auto;
		background:rgba(246,248,247,1);
		.presonListTitle{
			height: 68rpx;
			color: #333333;
			font-size: 28rpx;
			font-weight: bold;
		}
		.presonListData{
			flex-wrap: wrap;
			&>view{
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				margin-right: 28rpx;
				image{
					width: 56rpx;
					height: 56rpx;
					border-radius: 50%;
					margin-bottom: 6rpx;
				}
				font-size: 26rpx;
				color: #999999;
			}
		}
	}
</style>
