<template>
	<view>
		<view class="goodList" v-for="(obj,index) in list" :key="index">
			<image class="goodListImg" src="../../static/homeIcon/jh.png" ></image>
			<!--lineOne父容器跟子容器都要加上  -->
			<view class="goodContent lineThree"  >
				<view class="goodListName lineThree" >{{obj}}</view>
				<view class="goodListTime">2012.03.12</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list : [
					"Flex省略三行省略三行省略三行省略三行省略三行省略三",
					"Flex省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行",
					"Flex省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行省行",
					"Flex省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行省略三行"
				]
			}
		},
	}
</script>

<style>
	page{
		background: #F6F7F8;
		padding-top: 20rpx;
	}
	.goodList{
		width: 710rpx;
		height : 244rpx;
		box-sizing: border-box;
		padding:10rpx;
		display: flex;
		align-items: center;
		margin: 0 auto;
		background: white;
		margin-bottom: 10rpx;
		border-radius:16rpx;
	}
	.goodListImg{
		width: 310rpx;
		height: 224rpx;
	}
	.goodListName{
		font-size: 28rpx;
		font-weight: bold;
	}
	.goodListTime{
		font-size: 26rpx;
		color: #666666;
		margin-top: 12rpx;
	}
	.goodContent{
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		padding-left:54rpx;
		box-sizing: border-box;
		font-size: 24rpx;
	}
</style>
